import Link from "next/link";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import styled from "styled-components";
import { getCourseBySlug } from "@/lib/data/courses";
import { TitleText, GradientText, NormalText } from "@/components/shared/Text.styled";
import { PageWrapper, PageHeader } from "@/components/shared/Wrappers.styled";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Code2,
  Download,
  FileText,
  GraduationCap,
  Layers,
  Lock,
  Monitor,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

interface TutorialPageProps {
  params: {
    slug: string;
  };
}

export default function TutorialPage({ params }: TutorialPageProps) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    return (
      <PageWrapper>
        <Navbar />
        <NotFoundContainer>
          <NotFoundContent>
            <NotFoundTitle>Course not found</NotFoundTitle>
            <NotFoundDescription>The course you're looking for doesn't exist or was moved.</NotFoundDescription>
            <Link href="/tutorial">
              <BackButton>
                Browse all courses <ArrowRight size={16} className="ml-1" />
              </BackButton>
            </Link>
          </NotFoundContent>
        </NotFoundContainer>
        <Footer />
      </PageWrapper>
    );
  }

  const infoItems = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: Monitor, label: "Delivery Mode", value: course.delivery },
    { icon: Target, label: "Prerequisites", value: course.prerequisites },
    { icon: ShieldCheck, label: "Support Included", value: course.support },
    { icon: Rocket, label: "Learning Style", value: "Project-Based Learning" },
  ];

  return (
    <PageWrapper>
      <Navbar />

      {/* Hero */}
      <HeroSection>
        <GradientBackground />
        <HeroContainer>
          <BackLink href="/tutorial">
            ← Back to courses
          </BackLink>
          <Badge>
            <Sparkles size={14} /> {course.level} · {course.duration}
          </Badge>
          <TitleText>
            <GradientText>{course.title}</GradientText>
          </TitleText>
          <NormalText>{course.tagline}</NormalText>

          <HeroTags>
            <HeroTag>
              <Clock size={14} /> {course.duration}
            </HeroTag>
            <HeroTag>
              <Monitor size={14} /> {course.delivery}
            </HeroTag>
            <HeroTag>
              <Target size={14} /> {course.prerequisites}
            </HeroTag>
            <PriceTag>{course.price}</PriceTag>
          </HeroTags>

          <HeroButtons>
            <EnrollButton href="#enroll">
              Enroll Now <ArrowRight size={16} className="ml-1" />
            </EnrollButton>
            <ContactButton href="/contact">
              <Send size={16} className="mr-1" /> Contact Me
            </ContactButton>
          </HeroButtons>
        </HeroContainer>

        {/* Banner */}
        <Banner>
          <BannerBackground />
          <BannerContent>
            <BannerIcon>
              <Code2 size={40} />
            </BannerIcon>
            <BannerLabel>Cohort-based</BannerLabel>
            <BannerTitle>{course.level} Program</BannerTitle>
          </BannerContent>
        </Banner>
      </HeroSection>

      {/* About */}
      <Section>
        <SectionHeader>
          <TitleText>
            About the <GradientText>Course</GradientText>
          </TitleText>
        </SectionHeader>
        <AboutCard>
          <AboutText>{course.overview}</AboutText>
        </AboutCard>
      </Section>

      {/* Curriculum */}
      <Section $backgroundColor="rgba(102, 126, 234, 0.05)">
        <SectionHeader>
          <SectionBadge>
            <Layers size={14} /> Curriculum
          </SectionBadge>
          <TitleText>
            What you will <GradientText>learn</GradientText>
          </TitleText>
          <NormalText>
            A structured path through the tools and mental models modern teams use every day.
          </NormalText>
        </SectionHeader>

        <CurriculumAccordion>
          {course.modules.map((mod, i) => (
            <ModuleItem key={mod.title}>
              <ModuleHeader>
                <ModuleNumber>{String(i + 1).padStart(2, "0")}</ModuleNumber>
                <ModuleInfo>
                  <ModuleLabel>Module {i + 1}</ModuleLabel>
                  <ModuleTitle>{mod.title}</ModuleTitle>
                </ModuleInfo>
              </ModuleHeader>
              <ModuleContent>
                <ModuleDescription>{mod.description}</ModuleDescription>
                <LessonList>
                  {mod.lessons.map((lesson) => (
                    <LessonItem key={lesson}>
                      <CheckCircle2 size={16} />
                      <span>{lesson}</span>
                    </LessonItem>
                  ))}
                </LessonList>
              </ModuleContent>
            </ModuleItem>
          ))}
        </CurriculumAccordion>
      </Section>

      {/* Resources */}
      <Section>
        <SectionHeader>
          <SectionBadge>
            <FileText size={14} /> Included resources
          </SectionBadge>
          <TitleText>
            Resources <GradientText>included</GradientText>
          </TitleText>
          <NormalText>
            Notes, cheatsheets and setup guides you'll keep for life.
          </NormalText>
        </SectionHeader>

        <ResourcesGrid>
          {course.resources.map((r) => (
            <ResourceCard key={r.title}>
              <ResourcePreview>
                <FileText size={44} />
                <ResourceType>{r.type}</ResourceType>
                {r.premium && <PremiumBadge>Premium</PremiumBadge>}
              </ResourcePreview>
              <ResourceFooter>
                <ResourceTitle>{r.title}</ResourceTitle>
                <ResourceButton>
                  {r.premium ? <Lock size={16} /> : <Download size={16} />}
                </ResourceButton>
              </ResourceFooter>
            </ResourceCard>
          ))}
        </ResourcesGrid>
      </Section>

      {/* Capstone */}
      <Section $backgroundColor="rgba(102, 126, 234, 0.05)">
        <SectionHeader>
          <SectionBadge>
            <Rocket size={14} /> Capstone project
          </SectionBadge>
          <TitleText>
            Ship a <GradientText>real project</GradientText>
          </TitleText>
        </SectionHeader>

        <CapstoneCard>
          <CapstonePreview>
            <ProjectPreview>
              <Monitor size={48} />
              <ProjectPreviewText>Project screenshot</ProjectPreviewText>
            </ProjectPreview>
          </CapstonePreview>
          <CapstoneContent>
            <CapstoneLabel>Final project</CapstoneLabel>
            <CapstoneTitle>{course.capstone.title}</CapstoneTitle>
            <CapstoneDescription>{course.capstone.description}</CapstoneDescription>
            <CapstoneHighlights>
              {course.capstone.highlights.map((h) => (
                <HighlightItem key={h}>
                  <CheckCircle2 size={16} />
                  <span>{h}</span>
                </HighlightItem>
              ))}
            </CapstoneHighlights>
            <CapstoneButton href="#enroll">
              Build this project <ArrowRight size={16} className="ml-1" />
            </CapstoneButton>
          </CapstoneContent>
        </CapstoneCard>
      </Section>

      {/* Course info */}
      <Section>
        <SectionHeader>
          <TitleText>
            Course <GradientText>information</GradientText>
          </TitleText>
        </SectionHeader>
        <InfoGrid>
          {infoItems.map((item) => (
            <InfoCard key={item.label}>
              <InfoIcon>
                <item.icon size={20} />
              </InfoIcon>
              <InfoLabel>{item.label}</InfoLabel>
              <InfoValue>{item.value}</InfoValue>
            </InfoCard>
          ))}
        </InfoGrid>
      </Section>

      {/* CTA */}
      <CTASection id="enroll">
        <CTAContent>
          <CTABackground />
          <CTAIcon>
            <GraduationCap size={28} />
          </CTAIcon>
          <CTATitle>Ready to start your journey?</CTATitle>
          <CTADescription>
            Join the next cohort of {course.title} and start shipping real work.
          </CTADescription>
          <CTAButtons>
            <Link href="/contact">
              <CTAButton>
                Enroll Now <ArrowRight size={16} className="ml-1" />
              </CTAButton>
            </Link>
            <Link href="/contact">
              <ContactButton>
                <Send size={16} className="mr-1" /> Contact Me
              </ContactButton>
            </Link>
          </CTAButtons>
        </CTAContent>
      </CTASection>

      <Footer />
    </PageWrapper>
  );
}

// ─── Styled Components ─────────────────────────────────────────────────────

const NotFoundContainer = styled.section`
  padding: 10rem 1.25rem;
  text-align: center;
`;

const NotFoundContent = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NotFoundTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: hsl(var(--foreground));
`;

const NotFoundDescription = styled.p`
  color: hsl(var(--muted-foreground));
`;

const BackButton = styled.button`
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

const HeroSection = styled.section`
  position: relative;
  padding: 8rem 1.25rem 4rem;
  overflow: hidden;
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  opacity: 0.6;
  pointer-events: none;
`;

const HeroContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: hsl(var(--primary));
  text-decoration: none;
  margin-bottom: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
`;

const HeroTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const HeroTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  font-size: 0.875rem;
  color: hsl(var(--foreground));
`;

const PriceTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  background: var(--gradient-primary);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
`;

const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const EnrollButton = styled.a`
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

const ContactButton = styled.a`
  background: transparent;
  color: hsl(var(--foreground));
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: hsl(var(--muted));
  }
`;

const CTAButton = styled.button`
  background: white;
  color: hsl(var(--foreground));
  border: none;
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
  }
`;

const Banner = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 1.5rem;
  background: var(--gradient-primary);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 25%;
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    filter: blur(3rem);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 25%;
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    filter: blur(3rem);
  }
`;

const BannerContent = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const BannerIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  margin-bottom: 1.25rem;
`;

const BannerLabel = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

const BannerTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Section = styled.section<{ $backgroundColor?: string }>`
  padding: 5rem 1.25rem;
  background: ${props => props.$backgroundColor || 'white'};

  @media (min-width: 1024px) {
    padding: 5rem 0;
  }
`;

const SectionHeader = styled.div`
  max-width: 42rem;
  margin: 0 auto 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SectionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  background: hsl(var(--card));
  color: hsl(var(--foreground));
  font-size: 0.75rem;
  font-weight: 500;
  align-self: center;
`;

const AboutCard = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  @media (min-width: 640px) {
    padding: 2.5rem 3rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.125rem;
  color: hsl(var(--muted-foreground));
  line-height: 1.75;
`;

const CurriculumAccordion = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ModuleItem = styled.div`
  border-radius: 1rem;
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ModuleHeader = styled.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ModuleNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: hsl(var(--accent));
  color: hsl(var(--primary));
  font-weight: 700;
`;

const ModuleInfo = styled.div`
  flex: 1;
`;

const ModuleLabel = styled.p`
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(var(--primary));
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const ModuleTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(var(--foreground));
`;

const ModuleContent = styled.div`
  padding: 0 1.5rem 1.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ModuleDescription = styled.p`
  color: hsl(var(--muted-foreground));
`;

const LessonList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LessonItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
`;

const ResourcesGrid = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ResourceCard = styled.div`
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const ResourcePreview = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, hsl(var(--primary) / 0.1) via hsl(var(--accent)) to hsl(var(--primary) / 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--primary) / 0.6);
`;

const ResourceType = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-size: 0.6875rem;
  font-weight: 500;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  color: hsl(var(--foreground));
  border: 1px solid hsl(var(--border));
`;

const PremiumBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.6875rem;
  font-weight: 500;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  background: var(--gradient-primary);
  color: white;
`;

const ResourceFooter = styled.div`
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

const ResourceTitle = styled.p`
  font-weight: 600;
  color: hsl(var(--foreground));
`;

const ResourceButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: hsl(var(--accent));
  color: hsl(var(--primary));
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--gradient-primary);
    color: white;
  }
`;

const CapstoneCard = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CapstonePreview = styled.div`
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, hsl(var(--primary) / 0.15) via hsl(var(--accent)) to hsl(var(--primary) / 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;

  @media (min-width: 1024px) {
    aspect-ratio: auto;
  }
`;

const ProjectPreview = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid hsl(var(--border));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 1rem;
    border-radius: 0.75rem;
    border: 2px dashed hsl(var(--primary) / 0.2);
  }
`;

const ProjectPreviewText = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  margin-top: 0.75rem;
`;

const CapstoneContent = styled.div`
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 640px) {
    padding: 2.5rem 3rem;
  }
`;

const CapstoneLabel = styled.p`
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(var(--primary));
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const CapstoneTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: hsl(var(--foreground));

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;

const CapstoneDescription = styled.p`
  color: hsl(var(--muted-foreground));
  line-height: 1.75;
  margin-bottom: 1.5rem;
`;

const CapstoneHighlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin: 0 0 2rem 0;
  padding: 0;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
`;

const CapstoneButton = styled.a`
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

const InfoGrid = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const InfoCard = styled.div`
  padding: 1.5rem;
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: hsl(var(--primary) / 0.3);
  }
`;

const InfoIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: hsl(var(--accent));
  color: hsl(var(--primary));
  margin-bottom: 1rem;
`;

const InfoLabel = styled.p`
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(var(--primary));
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: hsl(var(--foreground));
`;

const CTASection = styled.section`
  padding: 6rem 1.25rem;
`;

const CTAContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  border-radius: 1.5rem;
  background: var(--gradient-primary);
  padding: 3rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  @media (max-width: 640px) {
    padding: 2rem 1.5rem;
  }
`;

const CTABackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 25%;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    filter: blur(3rem);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 25%;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    filter: blur(3rem);
  }
`;

const CTAIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  margin-bottom: 1.5rem;
`;

const CTATitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const CTADescription = styled.p`
  max-width: 40rem;
  margin: 0 auto 2rem;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;
