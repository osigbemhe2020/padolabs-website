import Link from "next/link";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ProjectCarousel from "@/components/shared/ProjectCarousel";
import styled from "styled-components";
import {
  ArrowRight,
  Briefcase,
  Check,
  Code2,
  Compass,
  Cpu,
  Globe,
  Layers,
  Layout,
  MessageSquare,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  PageWrapper,
  Container,
  HeroContainer,
  GradientOverlay,
  HeroContentWrapper,
  HeroGrid,
  TextContent,
  ContentWrapper,
  Header,
} from "@/components/shared/Wrappers.styled";
import { TitleText, GradientText, NormalText } from "@/components/shared/Text.styled";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons.styled";
import { client } from "@/sanity/lib/client";
import { allProjectsQuery } from "@/sanity/lib/queries";
import type { Project } from "@/lib/projects";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, responsive websites and web apps built with Next.js, React, and modern CSS architecture.",
  },
  {
    icon: Code2,
    title: "Fullstack Applications",
    description:
      "End-to-end applications with secure APIs, database modeling, authentication, and performant backends.",
  },
  {
    icon: Layout,
    title: "UI Implementation",
    description:
      "Pixel-perfect translation of designs into interactive, accessible, and responsive user interfaces.",
  },
  {
    icon: MessageSquare,
    title: "Technical Consulting",
    description:
      "Architecture design, tech stack selection, code reviews, and performance optimization for growing products.",
  },
];

const process = [
  {
    step: "01",
    icon: Compass,
    title: "Discovery",
    description:
      "We unpack your vision, target users, and key deliverables to establish clear goals from day one.",
  },
  {
    step: "02",
    icon: Layout,
    title: "Planning & Architecture",
    description:
      "I map out system design, milestone timelines, and UI wireframes so development moves fast and predictably.",
  },
  {
    step: "03",
    icon: Palette,
    title: "Design & Development",
    description:
      "Iterative sprints with clean code, frequent updates, and live staging previews for feedback.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Testing & Polish",
    description:
      "Comprehensive testing across devices, performance audits, security checks, and final polish.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Smooth production deployment, DNS configuration, handoff documentation, and post-launch support.",
  },
];

const packages = [
  {
    name: "Starter Website",
    tagline: "Perfect for portfolios, landing pages, and small business sites",
    price: "₦960,000+",
    ideal: "Solo founders, creatives, and small teams",
    timeline: "1–2 weeks",
    deliverables: [
      "Custom multi-page responsive design",
      "SEO-friendly structure & metadata",
      "Interactive contact forms & social links",
      "Speed & accessibility optimization",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Business Website",
    tagline: "A tailored web presence with dynamic features and content management",
    price: "₦2,800,000+",
    ideal: "Growing businesses & organizations",
    timeline: "3–5 weeks",
    deliverables: [
      "Custom design system & UI components",
      "Headless CMS integration (Sanity/Strapi)",
      "Analytics, conversion & lead tracking",
      "Structured revisions & launch warranty",
    ],
    cta: "Start a Project",
    featured: true,
  },
  {
    name: "Fullstack Application",
    tagline: "End-to-end product development for startups and ambitious platforms",
    price: "₦6,400,000+",
    ideal: "Startups & scaling products",
    timeline: "6–12 weeks",
    deliverables: [
      "Custom frontend & backend APIs",
      "Database architecture & state management",
      "User authentication & role-based access",
      "CI/CD setup, deployment & ongoing support",
    ],
    cta: "Book Consultation",
    featured: false,
  },
];

const reasons = [
  {
    icon: Code2,
    title: "Developer First",
    description:
      "I write production-ready code with clean architecture, not just surface-level mockups. Every project is built to scale.",
  },
  {
    icon: Briefcase,
    title: "Real Project Experience",
    description:
      "From IoT systems to e-commerce platforms, I bring hands-on experience shipping products that users rely on daily.",
  },
  {
    icon: Layers,
    title: "Long-Term Support",
    description:
      "I don't disappear after launch. I provide clear handoff docs, ongoing updates, and guidance as your product expands.",
  },
];

export default async function WorkWithMe() {
  const sanityProjects = await client.fetch(allProjectsQuery);
  const featuredProjects = sanityProjects.filter(
    (p: Project) => p.category?.categorySlug === "web-recent"
  );

  return (
    
      <main>
        {/* Hero Section with Interactive Tech Card */}
        <HeroContainer>
          <GradientOverlay />
          <HeroContentWrapper>
            <HeroGrid>
              <TextContent>
                <HeroBadge>
                  <Sparkles size={14} /> Available for new projects
                </HeroBadge>
                <HeroTitle>
                  Building Digital Products That{" "}
                  <GradientText>Solve Real Problems</GradientText>
                </HeroTitle>
                <HeroDescription>
                  I partner with founders, businesses, and teams to build high-performance
                  web applications, interactive interfaces, and scalable digital solutions.
                </HeroDescription>
                <HeroHighlightText>
                  Clean architecture, clear communication, and reliable execution from idea to launch.
                </HeroHighlightText>
                <HeroButtonGroup>
                  <Link href="/contact">
                    <PrimaryButton>
                      Start a Project <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </PrimaryButton>
                  </Link>
                  <Link href="/stories">
                    <SecondaryButton>View Case Studies</SecondaryButton>
                  </Link>
                </HeroButtonGroup>
              </TextContent>

              <HeroCardWrapper>
                <FloatingIcon>
                  <Zap size={26} />
                </FloatingIcon>
                <HeroCard>
                  <FeatureList>
                    <FeatureItem>
                      <FeatureIcon>
                        <Code2 size={18} />
                      </FeatureIcon>
                      <FeatureText>
                        <FeatureLabel>Clean Architecture</FeatureLabel>
                        <FeatureSublabel>Scalable, maintainable code</FeatureSublabel>
                      </FeatureText>
                    </FeatureItem>
                    <FeatureItem>
                      <FeatureIcon>
                        <Globe size={18} />
                      </FeatureIcon>
                      <FeatureText>
                        <FeatureLabel>Web &amp; Cloud Ready</FeatureLabel>
                        <FeatureSublabel>Modern deployment workflows</FeatureSublabel>
                      </FeatureText>
                    </FeatureItem>
                    <FeatureItem>
                      <FeatureIcon>
                        <Cpu size={18} />
                      </FeatureIcon>
                      <FeatureText>
                        <FeatureLabel>Fullstack &amp; Systems</FeatureLabel>
                        <FeatureSublabel>From UI to APIs &amp; database design</FeatureSublabel>
                      </FeatureText>
                    </FeatureItem>
                  </FeatureList>

                  <TerminalSnippet>
                    <TerminalHeader>
                      <TerminalDot color="#ef4444" />
                      <TerminalDot color="#f59e0b" />
                      <TerminalDot color="#10b981" />
                      <TerminalTitle>project.build()</TerminalTitle>
                    </TerminalHeader>
                    <TerminalBody>
                      <TerminalLine>&gt; initializing design system...</TerminalLine>
                      <TerminalLine>&gt; compiling components &amp; APIs...</TerminalLine>
                      <TerminalLine $success>&gt; build &amp; launch successful.</TerminalLine>
                    </TerminalBody>
                  </TerminalSnippet>
                </HeroCard>
              </HeroCardWrapper>
            </HeroGrid>
          </HeroContentWrapper>
        </HeroContainer>

        {/* Services Section */}
        <Container $backgroundColor="linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)">
          <ContentWrapper>
            <Header>
              <TitleText>
                What I Can <GradientText>Build For You</GradientText>
              </TitleText>
              <NormalText>
                End-to-end development services tailored to your product, timeline, and goals.
              </NormalText>
            </Header>

            <ServicesGrid>
              {services.map((service) => (
                <ServiceCard key={service.title}>
                  <ServiceIconWrapper>
                    <service.icon size={24} />
                  </ServiceIconWrapper>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </ContentWrapper>
        </Container>

        {/* Process Section */}
        <Container>
          <ContentWrapper>
            <Header>
              <TitleText>
                How We&apos;ll <GradientText>Work Together</GradientText>
              </TitleText>
              <NormalText>
                A clear, collaborative process from first conversation to deployed product.
              </NormalText>
            </Header>

            <ProcessGrid>
              {process.map((p) => (
                <ProcessCard key={p.step}>
                  <StepBadge>{p.step}</StepBadge>
                  <ProcessIconWrapper>
                    <p.icon size={22} />
                  </ProcessIconWrapper>
                  <ProcessTitle>{p.title}</ProcessTitle>
                  <ProcessDescription>{p.description}</ProcessDescription>
                </ProcessCard>
              ))}
            </ProcessGrid>
          </ContentWrapper>
        </Container>

        {/* Featured Case Studies / Work Carousel */}
        {featuredProjects && featuredProjects.length > 0 && (
          <Container $backgroundColor="rgba(102, 126, 234, 0.05)">
            <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
              <Header>
                <TitleText>
                  Featured <GradientText>Case Studies</GradientText>
                </TitleText>
                <NormalText>
                  Real-world projects shipped with modern technology, measurable impact, and deep attention to detail.
                </NormalText>
              </Header>

              <ProjectCarousel projects={featuredProjects} />
            </div>
          </Container>
        )}

        {/* Engagement Packages */}
        <Container>
          <ContentWrapper>
            <Header>
              <TitleText>
                Engagement <GradientText>Packages</GradientText>
              </TitleText>
              <NormalText>
                Transparent scopes and predictable pricing to kickstart your project without surprises.
              </NormalText>
            </Header>

            <PackagesGrid>
              {packages.map((pkg) => (
                <PackageCard key={pkg.name} $featured={pkg.featured}>
                  {pkg.featured && <PopularBadge>Most Popular</PopularBadge>}
                  <PackageHeader>
                    <PackageTitle $featured={pkg.featured}>{pkg.name}</PackageTitle>
                    <PackageTagline $featured={pkg.featured}>{pkg.tagline}</PackageTagline>
                  </PackageHeader>

                  <PackagePrice $featured={pkg.featured}>{pkg.price}</PackagePrice>

                  <DeliverablesHeader $featured={pkg.featured}>Deliverables</DeliverablesHeader>
                  <DeliverablesList>
                    {pkg.deliverables.map((d) => (
                      <DeliverableItem key={d} $featured={pkg.featured}>
                        <CheckIconWrapper $featured={pkg.featured}>
                          <Check size={14} />
                        </CheckIconWrapper>
                        <DeliverableText $featured={pkg.featured}>{d}</DeliverableText>
                      </DeliverableItem>
                    ))}
                  </DeliverablesList>

                  <TimelineWrapper $featured={pkg.featured}>
                    <span>Estimated Timeline:</span> {pkg.timeline}
                  </TimelineWrapper>

                  <PackageActionLink href="/contact" $featured={pkg.featured}>
                    {pkg.cta} <ArrowRight size={16} />
                  </PackageActionLink>
                </PackageCard>
              ))}
            </PackagesGrid>
          </ContentWrapper>
        </Container>

        {/* Why Work With Me */}
        <Container $backgroundColor="linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)">
          <ContentWrapper>
            <Header>
              <TitleText>
                Why Partner <GradientText>With Me</GradientText>
              </TitleText>
              <NormalText>
                A development partnership focused on high code quality, steady communication, and long-term results.
              </NormalText>
            </Header>

            <ReasonsGrid>
              {reasons.map((r) => (
                <ReasonCard key={r.title}>
                  <ReasonIconWrapper>
                    <r.icon size={26} />
                  </ReasonIconWrapper>
                  <ReasonTitle>{r.title}</ReasonTitle>
                  <ReasonDescription>{r.description}</ReasonDescription>
                </ReasonCard>
              ))}
            </ReasonsGrid>
          </ContentWrapper>
        </Container>

        {/* Standard Home CTA Section */}
        <CTASection
          title="Have an idea worth building?"
          description="Whether it's a new web application, a redesign, or a technical consultation, let's make it happen."
          buttonText="Book a Consultation"
        />

        <Footer />
      </main>
  );
}

// ─── Styled Components ────────────────────────────────────────────────────────

// Hero Section Components
const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  font-size: 0.8rem;
  font-weight: 600;
  width: fit-content;
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  color: #111827;
  letter-spacing: -0.02em;

  @media (min-width: 640px) {
    font-size: 2.85rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.25rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.65;
  color: #4b5563;
  max-width: 38rem;
`;

const HeroHighlightText = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: #667eea;
  line-height: 1.5;
`;

const HeroButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 0.5rem;
`;

const HeroCardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  display: none;
  animation: slideInRight 0.8s ease-out;

  @media (min-width: 1024px) {
    display: block;
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  top: -1.25rem;
  right: -1.25rem;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 1.15rem;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 28px rgba(102, 126, 234, 0.4);
  z-index: 10;
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;

const HeroCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 1.75rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem 1rem;
  border-radius: 0.875rem;
  background: #f9fafb;
  border: 1px solid #f3f4f6;
  transition: all 0.25s ease;

  &:hover {
    background: white;
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 4px 14px rgba(102, 126, 234, 0.08);
    transform: translateX(4px);
  }
`;

const FeatureIcon = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.65rem;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FeatureLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: #111827;
`;

const FeatureSublabel = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

const TerminalSnippet = styled.div`
  background: #0f172a;
  border-radius: 0.875rem;
  padding: 0.85rem 1rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.65rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #1e293b;
`;

const TerminalDot = styled.div<{ color: string }>`
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const TerminalTitle = styled.span`
  font-size: 0.725rem;
  color: #94a3b8;
  margin-left: 0.4rem;
  font-weight: 600;
`;

const TerminalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const TerminalLine = styled.div<{ $success?: boolean }>`
  font-size: 0.75rem;
  color: ${(props) => (props.$success ? "#10b981" : "#94a3b8")};
  font-weight: ${(props) => (props.$success ? "600" : "400")};
`;

// Services Section
const ServicesGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 1.25rem;
  padding: 2rem 1.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(102, 126, 234, 0.12);
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

const ServiceIconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.12) 0%, rgba(118, 75, 162, 0.12) 100%);
  color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    background: var(--gradient-primary);
    color: white;
    transform: scale(1.08);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #6b7280;
`;

// Process Section
const ProcessGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ProcessCard = styled.div`
  position: relative;
  background: white;
  border-radius: 1.25rem;
  padding: 2.25rem 1.25rem 1.75rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(102, 126, 234, 0.12);
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

const StepBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  padding: 0.2rem 0.55rem;
  border-radius: 9999px;
`;

const ProcessIconWrapper = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.875rem;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 6px 18px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease;

  ${ProcessCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProcessTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.6rem;
`;

const ProcessDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.55;
  color: #6b7280;
`;

// Packages Section
const PackagesGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1150px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  align-items: stretch;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PackageCard = styled.div<{ $featured?: boolean }>`
  position: relative;
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  ${(props) =>
    props.$featured
      ? `
    background: var(--gradient-primary);
    color: white;
    box-shadow: 0 20px 48px rgba(102, 126, 234, 0.35);
    transform: scale(1.04);
    border: none;
    z-index: 2;

    @media (max-width: 1023px) {
      transform: none;
    }
  `
      : `
    background: white;
    color: #111827;
    border: 1px solid #e5e7eb;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
      border-color: rgba(102, 126, 234, 0.4);
    }
  `}
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -0.85rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.35rem 1rem;
  border-radius: 9999px;
  background: white;
  color: #667eea;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
`;

const PackageHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const PackageTitle = styled.h3<{ $featured?: boolean }>`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${(props) => (props.$featured ? "white" : "#111827")};
`;

const PackageTagline = styled.p<{ $featured?: boolean }>`
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${(props) =>
    props.$featured ? "rgba(255, 255, 255, 0.85)" : "#6b7280"};
`;

const PackagePrice = styled.div<{ $featured?: boolean }>`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.75rem;
  color: ${(props) => (props.$featured ? "white" : "#111827")};
`;

const DeliverablesHeader = styled.div<{ $featured?: boolean }>`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
  color: ${(props) =>
    props.$featured ? "rgba(255, 255, 255, 0.85)" : "#667eea"};
`;

const DeliverablesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const DeliverableItem = styled.li<{ $featured?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.9rem;
`;

const CheckIconWrapper = styled.div<{ $featured?: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.15rem;
  background: ${(props) =>
    props.$featured ? "rgba(255, 255, 255, 0.25)" : "rgba(102, 126, 234, 0.15)"};
  color: ${(props) => (props.$featured ? "white" : "#667eea")};
`;

const DeliverableText = styled.span<{ $featured?: boolean }>`
  color: ${(props) =>
    props.$featured ? "rgba(255, 255, 255, 0.95)" : "#4b5563"};
  line-height: 1.45;
`;

const TimelineWrapper = styled.div<{ $featured?: boolean }>`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid
    ${(props) =>
      props.$featured ? "rgba(255, 255, 255, 0.2)" : "#f3f4f6"};
  color: ${(props) =>
    props.$featured ? "rgba(255, 255, 255, 0.8)" : "#6b7280"};

  span {
    font-weight: 600;
  }
`;

const PackageActionLink = styled(Link)<{ $featured?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  margin-top: auto;

  ${(props) =>
    props.$featured
      ? `
    background: white;
    color: #667eea;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.95);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
  `
      : `
    background: var(--gradient-primary);
    color: white;

    &:hover {
      opacity: 0.92;
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(102, 126, 234, 0.3);
    }
  `}
`;

// Why Work With Me Section
const ReasonsGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ReasonCard = styled.div`
  background: white;
  border-radius: 1.25rem;
  padding: 2.25rem 1.75rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(102, 126, 234, 0.12);
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

const ReasonIconWrapper = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 1rem;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 6px 18px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease;

  ${ReasonCard}:hover & {
    transform: scale(1.08);
  }
`;

const ReasonTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

const ReasonDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.65;
  color: #6b7280;
`;
