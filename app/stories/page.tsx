import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import styled from "styled-components";
import {
  //embeddedEarly,
  //embeddedRecent,
  webEarly,
  webRecent,
  type Project,
} from "@/lib/projects";
import { ProjectCard, ProjectGrid } from "@/components/shared/Cards";
import { TitleText, GradientText, NormalText } from "@/components/shared/Text.styled";
import { PageHeader, PageWrapper } from "@/components/shared/Wrappers.styled";

// ── New import ────────────────────────────────────────────────────────────────
// SimpleTabBar accepts a `tabs` array where each item has a title and a
// pre-rendered component (JSX). It handles all the sliding logic internally.
import SimpleTabBar from "@/components/shared/TabBar";

// ─── Sub-components (unchanged from your original) ───────────────────────────

const ProjectGroup = ({
  label,
  description,
  projects,
  isRecent,
}: {
  label: string;
  description: string;
  projects: Project[];
  isRecent?: boolean;
}) => (
  <ProjectGroupContainer>
    <ProjectGroupHeader>
      <ProjectGroupLabel isRecent={isRecent}>{label}</ProjectGroupLabel>
      <ProjectGroupDescription>{description}</ProjectGroupDescription>
    </ProjectGroupHeader>
    <ProjectGrid>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </ProjectGrid>
  </ProjectGroupContainer>
);

const CategorySection = ({
  title,
  earlyProjects,
  recentProjects,
}: {
  title: string;
  earlyProjects: Project[];
  recentProjects: Project[];
}) => (
  <CategorySectionContainer>
    <CategoryHeader>
      <CategoryAccent />
      <CategoryTitle>{title}</CategoryTitle>
    </CategoryHeader>

    <ProjectGroup
      label="Recent Work"
      description="Advanced projects with real-world impact and production-level quality"
      projects={recentProjects}
      isRecent
    />

    <CategoryDivider />

    <ProjectGroup
      label="Early Stage"
      description="Where journey began — foundational projects and first explorations"
      projects={earlyProjects}
    />
  </CategorySectionContainer>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

const Stories = () => {
  // Define the tabs array.
  // Each tab has:
  //   title   — the label shown on the tab button
  //   component — the JSX rendered in that tab's panel
  //
  // We render CategorySection as JSX here (not a component class reference)
  // because SimpleTabBar accepts pre-rendered ReactNode, not component types.
  // This keeps SimpleTabBar simple — no need for generic props passing.
  const tabs = [
    {
      title: "Web Development",
      component: (
        <CategorySection
          title="Web Development"
          earlyProjects={webEarly}
          recentProjects={webRecent}
        />
      ),
    },
    // {
    //   title: "Embedded Systems & IoT",
    //   component: (
    //     <CategorySection
    //       title="Embedded Systems & IoT"
    //       earlyProjects={embeddedEarly}
    //       recentProjects={embeddedRecent}
    //     />
    //   ),
    // },
  ];

  return (
    <PageWrapper>
      <Navbar />

      <PageHeader>
        <TitleText>
          Project <GradientText>Stories</GradientText>
        </TitleText>
        <NormalText>Real projects, challenges, and lessons behind them</NormalText>
        <br />
        <PageAccent />
      </PageHeader>

      <MainContent>
        {/* ── Replaced the two stacked CategorySections with a TabBar ──
            Before:
              <CategorySection title="Web Development" ... />
              <CategorySection title="Embedded Systems & IoT" ... />

            After:
              <SimpleTabBar tabs={tabs} />

            The tab bar renders both sections internally but only shows one
            at a time using the translateX sliding technique. */}
        <SimpleTabBar tabs={tabs} />
      </MainContent>

      <Footer />
    </PageWrapper>
  );
};

export default Stories;

// ─── Styled Components (all unchanged from your original) ─────────────────────

const ProjectGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectGroupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ProjectGroupLabel = styled.span<{ isRecent?: boolean }>`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: ${(props) =>
    props.isRecent
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "hsl(var(--secondary))"};
  color: ${(props) =>
    props.isRecent ? "white" : "hsl(var(--secondary-foreground))"};
`;

const ProjectGroupDescription = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
`;

const CategorySectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CategoryAccent = styled.div`
  width: 0.25rem;
  height: 2rem;
  border-radius: 9999px;
  background: var(--gradient-primary);
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(var(--foreground));

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;

const CategoryDivider = styled.div`
  border-top: 1px solid hsl(var(--border));
`;

const PageAccent = styled.div`
  width: 4rem;
  height: 0.25rem;
  margin: 0 auto;
  border-radius: 9999px;
  background: var(--gradient-primary);
`;

const MainContent = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 6rem;
`;

