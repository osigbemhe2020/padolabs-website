import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import styled from "styled-components";
import {
  //embeddedEarly,
  //embeddedRecent,
  //webEarly,
  //webRecent,
  type Project,
} from "@/lib/projects";

import ProjectCarousel from "@/components/shared/ProjectCarousel";
import { TitleText, GradientText, NormalText } from "@/components/shared/Text.styled";
import { PageHeader, PageWrapper } from "@/components/shared/Wrappers.styled";
import { client } from "@/sanity/lib/client";
import { allProjectsQuery } from "@/sanity/lib/queries";
//import { urlFor } from "@/sanity/lib/image";

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
      <ProjectGroupLabel $isRecent={isRecent}>{label}</ProjectGroupLabel>
      <ProjectGroupDescription>{description}</ProjectGroupDescription>
    </ProjectGroupHeader>
    <ProjectCarousel projects={projects} />
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
      description="Where the journey began, with foundational projects and early explorations"
      projects={earlyProjects}
    />
  </CategorySectionContainer>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

// const Stories = async () => {
//   // Define the tabs array.
//   // Each tab has:
//   //   title: the label shown on the tab button
//   //   component: the JSX rendered in that tab's panel
//   //
//   // We render CategorySection as JSX here, not a component class reference,
//   // because SimpleTabBar accepts pre-rendered ReactNode rather than component types.
//   // This keeps SimpleTabBar simple and avoids extra prop plumbing.

//   const sanityProjects = await client.fetch(allProjectsQuery);
//     console.log('Sanity projects in stories page>>>>>', sanityProjects);
     
//     const test = sanityProjects[0].category?.slug.current === 'web-early';
//     console.log('test category slug >>>>>', test);

//     const sanitywebEarly = sanityProjects.filter((p: Project) => p.category?.slug?.current === 'web-early');
    

//     console.log('sanity web early >>>>>', sanitywebEarly.meta);
    
//   const tabs = [
//     {
//       title: "Web Development",
//       component: (
//         <CategorySection
//           title="Web Development"
//           earlyProjects={sanitywebEarly}
//           recentProjects={webRecent}
//         />
//       ),
//     },
//     // {
//     //   title: "Embedded Systems & IoT",
//     //   component: (
//     //     <CategorySection
//     //       title="Embedded Systems & IoT"
//     //       earlyProjects={embeddedEarly}
//     //       recentProjects={embeddedRecent}
//     //     />
//     //   ),
//     // },
//   ];

//   return (
//     <PageWrapper>
//       <Navbar />

//       <PageHeader>
//         <TitleText>
//           Project <GradientText>Stories</GradientText>
//         </TitleText>
//         <NormalText>Real projects, challenges, and lessons behind them</NormalText>
//         <br />
//         <PageAccent />
//       </PageHeader>

//       <MainContent>
//         {/* ── Replaced the two stacked CategorySections with a TabBar ──
//             Before:
//               <CategorySection title="Web Development" ... />
//               <CategorySection title="Embedded Systems & IoT" ... />

//             After:
//               <SimpleTabBar tabs={tabs} />

//             The tab bar renders both sections internally but only shows one
//             at a time using the translateX sliding technique. */}
//         <SimpleTabBar tabs={tabs} />
//       </MainContent>

//       <Footer />
//     </PageWrapper>
//   );
// };

const Stories = async () => {
  const sanityProjects = await client.fetch(allProjectsQuery);


  // Filter by category name; the category has no slug field
 const sanityWebEarly = sanityProjects.filter(
  (p: Project) => p.category?.categorySlug === "web-early"  // ← was "early-web"
);

const sanityWebRecent = sanityProjects.filter(
  (p: Project) => p.category?.categorySlug === "web-recent"  // ← was "recent-web"
);

  const tabs = [
    {
      title: "Web Development",
      component: (
        <CategorySection
          title="Web Development"
          earlyProjects={sanityWebEarly}
          recentProjects={sanityWebRecent}   // swap this out once you migrate recent too
        />
      ),
    },
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

const ProjectGroupLabel = styled.span<{ $isRecent?: boolean }>`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: ${(props) =>
    props.$isRecent
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "#CBD5E1"};
  color: ${(props) =>
    props.$isRecent ? "white" : "#475569"};
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
  background: #ffffff;
`;

