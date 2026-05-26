import styled from "styled-components";
import {Container } from "../shared/Wrappers.styled";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Python",  "Tailwind CSS", "Express.js", "MongoDB", "MySQL",
  "PostgreSQL", "Docker", "Git", "redis","sanity io"
];


const SkillsSection = () => {
  return (
    <Container $backgroundColor={'rgba(102, 126, 234, 0.1)'}>
      <SkillsWrapper>
        <SkillsGrid>
          {skills.concat(skills).map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </SkillsGrid>
      </SkillsWrapper>
    </Container>
  );
};


const SkillsWrapper = styled.div`
 margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;

  display: flex;
  gap: 1rem;
  width: max-content;
  animation: scroll 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const SkillTag = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: white;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: border-color 0.2s ease;
  cursor: default;

  &:hover {
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

export default SkillsSection;
