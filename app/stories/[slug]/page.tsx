//stories/[slug]/page.tsx
import Link from "next/link";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Context from "@/components/stories/Context";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, getNextProject } from "@/data/mainProjects";
import NotFound from "@/components/shared/NotFound";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons.styled";
import { PageWrapper, ContentWrapper} from "@/components/shared/Wrappers.styled";
import styled from "styled-components";
import HeroSection from "@/components/home/HeroSection";
import Goals from "@/components/stories/Goals";
import Challenges from "@/components/stories/Challenges";
import Process from "@/components/stories/Process";
import Learnings from "@/components/stories/Learnings";
//import KeyDecisions from "@/components/stories/KeyDecisions";
//import Reflections from "@/components/stories/Reflections";
import Growth from "@/components/stories/Growth";
import CTASection from "@/components/home/CTASection";


const ProjectStory = async ({ params }: { params: { slug: string } }) => {
  const { slug }=  await params;
  const project = slug ? getProjectBySlug(slug) : undefined;
  const nextProject = slug ? getNextProject(slug) : undefined;

  if (!project) return <NotFound />;

  return (
    <PageWrapper>
      <Navbar />
      {/* Hero */}
      <HeroSection
        backLink={{ href: "/stories", label: "Back to Stories" }}
        tags={project.hero.stack}
        timeline={project.hero.timeline}
        task={project.hero.role}
        subtitle={project.hero.subtitle}
        title={project.hero.title}
        description={project.hero.description}
        image={project.hero.heroImage}
        imageAlt={project.hero.title}
        buttons={
          <>
            {project.hero.liveUrl && (
              <Link href={project.hero.liveUrl} target="_blank" rel="noopener noreferrer">
              <PrimaryButton>
                <ExternalLink size={16} style={{ marginRight: "0.5rem" }} /> Live Demo
              </PrimaryButton>
              </Link>
            )}
            {project.hero.githubUrl && (
              <Link href={project.hero.githubUrl} target="_blank" rel="noopener noreferrer">
              <SecondaryButton>
                <Github size={16} style={{ marginRight: "0.5rem" }} /> View Source
              </SecondaryButton>
              </Link>
            )}
          </>
        }
      />
      <Context project={project}/>
      {project.screenshots.length > 0 && (
        <ScreenshotsGrid>
          {project.screenshots.map((src, i) => (
            <ScreenshotWrapper key={i}>
              <Screenshot
                src={src}
                alt={`${project.hero.title} screenshot ${i + 1}`}
              />
            </ScreenshotWrapper>
          ))}
        </ScreenshotsGrid>
      )}

      <Goals num="02" goals={project.goals} />
      {project.features && <Goals num="03" goals={project.features} />}
      {/* <KeyDecisions  /> */}
      <Challenges challenges={project.challenges} />
      <Process process={project.process.steps} />
      <Learnings learnings={project.technicalLearnings.items} />
      {/* <Reflections /> */}
      <Growth timelineData={project.growth.milestones} />
      <Border />

        {/* Next Project */}
        {nextProject && (
          <ContentWrapper style={{ marginTop: '5rem' }}>
            <NextProjectWrapper>
              <NextProjectCard>
                <NextProjectLabel>Next Story</NextProjectLabel>
                <NextProjectLink href={`/stories/${nextProject.slug}`}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <NextProjectTitle>{nextProject.hero.title}</NextProjectTitle>
                    <NextProjectDescription>{nextProject.hero.description}</NextProjectDescription>
                  </div>
                  <ArrowRight
                    size={20}
                    style={{
                      color: 'rgba(107, 114, 128, 1)',
                      transition: 'all 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </NextProjectLink>
              </NextProjectCard>
            </NextProjectWrapper>
          </ContentWrapper>
        )}

        {/* CTA */}
          <CTASection
            title="Interested in building something like this?"
            description="Let's work together to bring your idea to life."
            buttonText="Contact Me"
          />
    

      <Footer />
    </PageWrapper>
  );
};

export default ProjectStory;

const Border = styled.div`
  border-top: 1px solid rgba(229, 231, 235, 1);
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
  max-width: 48rem;
  margin: 0 auto;
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
    color: #667eea;
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
