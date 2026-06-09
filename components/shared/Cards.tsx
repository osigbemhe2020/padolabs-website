import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";
import { ReadMoreButton } from "./buttons.styled";
import { StoriesGrid, ProjectGrid } from "./Wrappers.styled";
export { StoriesGrid, ProjectGrid };
import { Project } from "@/lib/projects";

// Project Card Components
interface ProjectCardProps {
  project: Project;
  showReadMore?: boolean;
}

export const ProjectCard = ({ project, showReadMore = true }: ProjectCardProps) => (
  <Card>
    <ImageContainer>
      <ProjectImage
        src={
          project.hero?.heroImage?.asset?.url ||
          project.hero?.thumbnail?.asset?.url ||
          project.image
        }
        alt={project.meta?.title}
      />
    </ImageContainer>
    <CardContent>
      <CardTitle>{project.meta?.title}</CardTitle>
      <CardDescription>{project.meta?.description}</CardDescription>
      <TagsContainer>
        {project.meta?.keywords?.slice(0, 7).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
      {showReadMore && (
        project.slug ? (
          <Link href={`/stories/${project.slug}`}>
            <ReadMoreButton>
              Read Story <ArrowRight size={14} className="ml-1" />
            </ReadMoreButton>
          </Link>
        ) : (
          <ReadMoreButton disabled>
            Read Story <ArrowRight size={14} className="ml-1" />
          </ReadMoreButton>
        )
      )}
    </CardContent>
  </Card>
);

// Unified Smart Card Component
interface Tutorial {
  title: string;
  category: string;
  duration: string;
}

interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface SmartCardProps {
  item: Tutorial | Service;
  type: 'tutorial' | 'service';
}

export const SmartCard = ({ item, type }: SmartCardProps) => {
  if (type === 'service') {
    const service = item as Service;
    return (
      <Card>
        <IconContainer>
          <BookOpen size={18} />
        </IconContainer>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.desc}</CardDescription>
        <ReadMoreButton>
          Read More <ArrowRight size={14} className="ml-1" />
        </ReadMoreButton>
      </Card>
    );
  }

  // Must be tutorial
  const tutorial = item as Tutorial;
  return (
    <Card>
      <TutorialIconContainer>
        <BookOpen size={18} />
      </TutorialIconContainer>
      <Category>{tutorial.category}</Category>
      <CardTitle>{tutorial.title}</CardTitle>
      <Duration>{tutorial.duration}</Duration>
      <ReadMoreButton>
        Read More <ArrowRight size={14} className="ml-1" />
      </ReadMoreButton>
    </Card>
  );
};

// Legacy components for backward compatibility
interface TutorialCardProps {
  tutorial: Tutorial;
}

export const TutorialCard = ({ tutorial }: TutorialCardProps) => (
  <SmartCard item={tutorial} type="tutorial" />
);

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => (
  <SmartCard item={service} type="service" />
);

// Unified Card Component
const Card = styled.div`
  padding: 1.5rem;
  border-radius: 0.75rem;
  min-width: 16rem;
  max-width: 20rem;
  min-height: 16rem;
  height: 100%;
  background: white;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-0.25rem);
  }
`;

// Icon Container Components
const IconContainer = styled.div<{ children?: React.ReactNode }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${Card}:hover & {
    background: var(--gradient-primary);
    color: white;
  }
`;

const TutorialIconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  margin-bottom: 1rem;
`;

// Service Card Components


// Tutorial Card Components
const Category = styled.span`
  font-size: 0.6875rem;
  font-weight: 500;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Duration = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  font-weight: 600;
  color: #111827;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
`;

// Project Card Image Components
const ImageContainer = styled.div`
  width: 100%;
  height: 12rem;
  overflow: hidden;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

// Tag Components
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
