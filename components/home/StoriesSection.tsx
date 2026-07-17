"use client";
import { Container, Header } from "../shared/Wrappers.styled";
import { TitleText, GradientText, NormalText } from "../shared/Text.styled";
import ProjectCarousel from "@/components/shared/ProjectCarousel";
import { type Project } from "@/lib/projects";

const StoriesSection = ({ projects }: { projects: Project[] }) => {
  return (
    <Container>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <Header>
          <TitleText>
            Stories Behind <GradientText>My Work</GradientText>
          </TitleText>
          <NormalText>
            Every project has a story, shaped by challenges, breakthroughs, and real-world impact.
          </NormalText>
        </Header>

          <ProjectCarousel projects={projects} />
      </div>
    </Container>
  );
};

export default StoriesSection;