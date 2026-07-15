// stories/[slug]/page.tsx
import Link from "next/link";
import { groq } from "next-sanity";  
import type { Metadata } from "next";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Context from "@/components/stories/Context";
import { ArrowRight, ArrowLeft, ExternalLink, Github } from "lucide-react";
import NotFound from "@/components/shared/NotFound";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons.styled";
import { PageWrapper, ContentWrapper } from "@/components/shared/Wrappers.styled";
import styled from "styled-components";
import HeroSection from "@/components/home/HeroSection";
import Goals from "@/components/stories/Goals";
import Challenges from "@/components/stories/Challenges";
import Process from "@/components/stories/Process";
import Learnings from "@/components/stories/Learnings";
import Growth from "@/components/stories/Growth";
import Reflections from "@/components/stories/Reflections";
import CTASection from "@/components/home/CTASection";
import { client } from "@/sanity/lib/client";
import {
  singleProjectQuery,
  allProjectSlugsQuery,
  nextProjectQuery,
  prevProjectQuery,
} from "@/sanity/lib/queries";
import KeyDecisions from "@/components/stories/KeyDecisions";

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs = await client.fetch(allProjectSlugsQuery);
  return slugs.map(({ slug }: { slug: string }) => ({ slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) {
    return {
      title: "Project Story | PadoLabs",
      description: "A project story page from PadoLabs.",
    };
  }

  const project = await client.fetch(singleProjectQuery, { slug });

  if (!project) {
    return {
      title: "Project not found | PadoLabs",
      description: "The requested project story could not be found.",
    };
  }

  const title = project.meta?.title ?? project.hero?.title ?? "Project Story";
  const description =
    project.meta?.description ??
    project.hero?.description ??
    "Read the project story from PadoLabs.";
  const keywords = project.meta?.keywords ?? [];
  const image =
    project.hero?.heroImage?.asset?.url ??
    project.hero?.thumbnail?.asset?.url;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "article",
      images: image ? [{ url: image, alt: title }] : undefined,
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
    },
  };
};


const ProjectStory = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  // Fetch current project and next project in parallel
  const project = await client.fetch(singleProjectQuery, { slug });

  if (!project) return <NotFound />;


  let nextProject = await client.fetch(nextProjectQuery, {
    order: project.order ?? 0,
  });

  // Wrap around: if no newer project, fetch the oldest one
  if (!nextProject) {
    nextProject = await client.fetch(
      groq`*[_type == "project"] | order(order asc, _createdAt asc)[0] {
        "slug": slug.current,
        hero { title, description },
      }`
    );
  }

  let prevProject = await client.fetch(prevProjectQuery, {
    order: project.order ?? 0,
  });

  // Wrap around: if no older project, fetch the newest one
  if (!prevProject) {
    prevProject = await client.fetch(
      groq`*[_type == "project"] | order(order desc, _createdAt desc)[0] {
        "slug": slug.current,
        hero { title, description },
      }`
    );
  }
  // context.body is string[] in Sanity — join for Context component
  const contextBody = Array.isArray(project.context?.body)
    ? project.context.body.join("\n\n")
    : project.context?.body ?? "";

  const contextForComponent = {
    ...project.context,
    body: contextBody,
  };

   const isdecisionsAvailable = project.engineeringDecisions?.items?.length > 0;

  return (
    <PageWrapper>
      <Navbar />

      {/* Hero */}
      <HeroSection
        backLink={{ href: "/stories", label: "Back to Stories" }}
        tags={project.hero?.stack ?? []}
        timeline={project.hero?.timeline}
        task={project.hero?.role}
        subtitle={project.hero?.subtitle}
        title={project.hero?.title}
        description={project.hero?.description}
        image={
          project.hero?.heroImage?.asset?.url ??
          project.hero?.thumbnail?.asset?.url
        }
        imageAlt={project.hero?.title}
        buttons={
          <>
            {project.hero?.liveUrl && (
              <Link
                href={project.hero.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton>
                  <ExternalLink size={16} style={{ marginRight: "0.5rem" }} />
                  Live Demo
                </PrimaryButton>
              </Link>
            )}
            {project.hero?.githubUrl && (
              <Link
                href={project.hero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SecondaryButton>
                  <Github size={16} style={{ marginRight: "0.5rem" }} />
                  View Source
                </SecondaryButton>
              </Link>
            )}
          </>
        }
      />

      {/* Context */}
      <Context project={{ ...project, context: contextForComponent }} />

      {/* Screenshots */}
      {project.screenshots?.length > 0 && (
        <ScreenshotsGrid>
          {project.screenshots.map(
            (shot: { asset: { url: string } }, i: number) => (
              <ScreenshotWrapper key={i}>
                <Screenshot
                  src={shot.asset?.url}
                  alt={`${project.hero?.title} screenshot ${i + 1}`}
                />
              </ScreenshotWrapper>
            )
          )}
        </ScreenshotsGrid>
      )}

      {/* Goals */}
      {project.goals?.items?.length > 0 && (
        <Goals num="02" goals={project.goals} />
      )}
   
      {/* Features */}
      {project.features?.items?.length > 0 && (
        <Goals num="03" goals={project.features} />
      )}

      {/* Process */}
      {project.process?.steps?.length > 0 && (
        <Process process={project.process.steps} />
      )}

         {/* Key Decisions */}
      {project.engineeringDecisions  && (
      <KeyDecisions decisions={project.engineeringDecisions.items} />
     )}

      {/* Challenges */}
      {project.challenges?.items?.length > 0 && (
        <Challenges challenges={project.challenges} isdecisionsAvailable={isdecisionsAvailable} />
      )}

      

      {/* Learnings */}
      {project.technicalLearnings?.items?.length > 0 && (
        <Learnings learnings={project.technicalLearnings.items} isdecisionsAvailable={isdecisionsAvailable}/>
      )}

      

      {/* Reflections */}
      {project.reflection && (
        <Reflections reflection={project.reflection} isdecisionsAvailable={isdecisionsAvailable} />
      )}
      {/* Growth */}
            {project.growth?.milestones?.length > 0 && (
              <Growth timelineData={project.growth.milestones} isdecisionsAvailable={isdecisionsAvailable} />
            )}

      <Border />

      {/* Project Navigation */}
      {(prevProject?.slug !== slug || nextProject?.slug !== slug) && (
        <ContentWrapper style={{ marginTop: "5rem" }}>
          <ProjectNavigationContainer>
            {prevProject && prevProject.slug !== slug && (
              <PrevProjectWrapper>
                <PrevProjectCard>
                  <PrevProjectLabel>Previous Story</PrevProjectLabel>
                  <PrevProjectLink href={`/stories/${prevProject.slug}`}>
                    <ArrowLeft
                      size={20}
                      style={{
                        color: "rgba(107, 114, 128, 1)",
                        transition: "all 0.2s ease",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                      <PrevProjectTitle>{prevProject.hero?.title}</PrevProjectTitle>
                      <PrevProjectDescription>
                        {prevProject.hero?.description}
                      </PrevProjectDescription>
                    </div>
                  </PrevProjectLink>
                </PrevProjectCard>
              </PrevProjectWrapper>
            )}

            {nextProject && nextProject.slug !== slug && (
              <NextProjectWrapper>
                <NextProjectCard>
                  <NextProjectLabel>Next Story</NextProjectLabel>
                  <NextProjectLink href={`/stories/${nextProject.slug}`}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                      <NextProjectTitle>{nextProject.hero?.title}</NextProjectTitle>
                      <NextProjectDescription>
                        {nextProject.hero?.description}
                      </NextProjectDescription>
                    </div>
                    <ArrowRight
                      size={20}
                      style={{
                        color: "rgba(107, 114, 128, 1)",
                        transition: "all 0.2s ease",
                        flexShrink: 0,
                      }}
                    />
                  </NextProjectLink>
                </NextProjectCard>
              </NextProjectWrapper>
            )}
          </ProjectNavigationContainer>
        </ContentWrapper>
      )}

      {/* CTA */}
      <CTASection
        title={
          project.cta?.title ??
          "Interested in building something like this?"
        }
        description={
          project.cta?.description ??
          "Let's work together to bring your idea to life."
        }
        buttonText="Contact Me"
      />

      <Footer />
    </PageWrapper>
  );
};

export default ProjectStory;

// ── Styled components ─────────────────────────────────────────────────────────
const Border = styled.div`
  border-top: 1px solid rgba(229, 231, 235, 1);
`;

const ProjectNavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ScreenshotsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 1.5rem 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 1.25rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 3rem 2rem;
  }
`;

const ScreenshotWrapper = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const Screenshot = styled.img`
  width: 100%;
  height: 11rem;
  object-fit: cover;

  @media (min-width: 640px) {
    height: 13rem;
  }

  @media (min-width: 1024px) {
    height: 14rem;
  }
`;

const NextProjectWrapper = styled.div`
  width: 100%;
`;

const NextProjectCard = styled.div`
  border-radius: 1rem;
  border: 1px solid rgba(229, 231, 235, 1);
  padding: 1.5rem 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const NextProjectLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(107, 114, 128, 1);
  margin-bottom: 0.75rem;
`;

const NextProjectLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.2s ease;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }

  &:hover h3 {
    color: #667eea;
  }

  &:hover svg {
    color: #667eea !important;
    transform: translateX(0.25rem);
  }
`;

const NextProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  transition: color 0.2s ease;
`;

const NextProjectDescription = styled.p`
  font-size: 0.875rem;
  color: rgba(107, 114, 128, 1);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const PrevProjectWrapper = styled.div`
  width: 100%;
`;

const PrevProjectCard = styled.div`
  border-radius: 1rem;
  border: 1px solid rgba(229, 231, 235, 1);
  padding: 1.5rem 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const PrevProjectLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(107, 114, 128, 1);
  margin-bottom: 0.75rem;
`;

const PrevProjectLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.2s ease;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }

  &:hover h3 {
    color: #667eea;
  }

  &:hover svg {
    color: #667eea !important;
    transform: translateX(-0.25rem);
  }
`;

const PrevProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  transition: color 0.2s ease;
`;

const PrevProjectDescription = styled.p`
  font-size: 0.875rem;
  color: rgba(107, 114, 128, 1);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;