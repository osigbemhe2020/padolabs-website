import Image from "next/image";
import styled from "styled-components";
import { Container } from "./shared";
import { ArrowUpRightIcon } from "./icons";
import workFintech from "@/assests/work-fintech.svg";
import workCareermap from "@/assests/work-careermap.svg";
import workWellme from "@/assests/work-wellme.svg";

type Project = {
  image: typeof workFintech;
  background: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    image: workFintech,
    background: "#EDE7F8",
    category: "Website development",
    title: "Aster — Business website",
    description:
      "An exploration of a clear, confident website for a modern professional services business.",
    tags: ["Strategy", "Web design"],
  },
  {
    image: workCareermap,
    background: "#EDE7F8",
    category: "Web application",
    title: "Pathway — Career platform",
    description:
      "A concept connecting emerging talent with opportunities through a simpler career journey.",
    tags: ["UX/UI", "Web app"],
  },
  {
    image: workWellme,
    background: "#DDEBE3",
    category: "Mobile application",
    title: "Wellme — Wellness app",
    description:
      "A calmer way to discover wellbeing support, book appointments and make time for yourself.",
    tags: ["Product design", "Mobile"],
  },
];

const WorkSection = styled.section`
  background: #FFFFFF;
  padding: 96px 0;

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

const WorkInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 760px;
  text-align: center;
`;

const Eyebrow = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06em;
  color: #773BDB;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.222;
  color: #111114;
`;

const Description = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #62616D;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 520px;
  overflow: hidden;
  background: #FFFFFF;
  border: 1px solid #DEDAE6;
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(119, 59, 219, 0.45);
    box-shadow: 0 14px 36px rgba(119, 59, 219, 0.12);
    transform: translateY(-3px);
  }
`;

const Thumbnail = styled.span<{ $background: string }>`
  display: block;
  position: relative;
  align-self: stretch;
  height: 240px;
  flex: none;
  overflow: hidden;
  background: ${({ $background }) => $background};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.03);
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  flex: 1;
  gap: 12px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Classification = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-self: stretch;
  gap: 8px;
`;

const Pill = styled.span`
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 8px;
  background: #EDE7F8;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #773BDB;
`;

const Category = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #62616D;
`;

const ProjectTitle = styled.h3`
  align-self: stretch;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: #111114;
`;

const ProjectSummary = styled.p`
  align-self: stretch;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #62616D;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-self: stretch;
  gap: 12px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #62616D;
`;

const ViewButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 40px;
  margin-top: auto;
  padding: 8px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #773BDB;
  transition: background 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  ${ProjectCard}:hover & {
    background: #EDE7F8;
  }

  ${ProjectCard}:hover & svg {
    transform: translate(2px, -2px);
  }
`;

const Disclosure = styled.p`
  align-self: stretch;
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #62616D;
`;

export const Work = () => (
  <WorkSection id="work">
    <WorkInner>
      <Heading>
        <Eyebrow>Featured concepts</Eyebrow>
        <Title>Ideas made tangible.</Title>
        <Description>
          Three explorations of how thoughtful digital products can solve everyday
          challenges.
        </Description>
      </Heading>

      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title} href="#contact" aria-label={project.title}>
            <Thumbnail $background={project.background}>
              <Image
                src={project.image}
                alt={project.title}
                width={768}
                height={480}
                loading="lazy"
              />
            </Thumbnail>
            <Details>
              <Classification>
                <Pill>Concept project</Pill>
                <Category>{project.category}</Category>
              </Classification>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectSummary>{project.description}</ProjectSummary>
              <ProjectTags>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ProjectTags>
              <ViewButton>
                View project <ArrowUpRightIcon />
              </ViewButton>
            </Details>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <Disclosure>
        All projects shown are self-initiated concepts, not commissioned client work.
      </Disclosure>
    </WorkInner>
  </WorkSection>
);