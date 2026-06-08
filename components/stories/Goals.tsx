import styled from 'styled-components';
import { SectionHeader } from '../shared/SectionHeader';
import { ContentContainer } from '../shared/Layout.styled';
import { StorySection } from '../shared/stories/StorySection';
import { InteractiveStoryCard } from '../shared/StoryCard.styled';


interface Goal {
  title: string;
  description: string;
}

interface GoalsGroup {
  title: string;
  items: Goal[];
}

interface GoalsProps {
  goals: GoalsGroup;
  num: string;
}

const Goals = ({ goals, num }: GoalsProps) => {
  const goalsItems = goals.items;
  const goalsTitle = goals.title;
  return (
    <StorySection id="goals" gradient="lightpurple">
      <ContentContainer>
        <SectionHeader eyebrow={num} title={goalsTitle} />
        <GoalsGrid>
          {goalsItems.map((g, index) => {
            return (
              <InteractiveStoryCard key={`${g.title}-${index}`}>
                
                <GoalTitle>{g.title}</GoalTitle>
                <GoalDescription>{g.description}</GoalDescription>
              </InteractiveStoryCard>
            );
          })}
        </GoalsGrid>
      </ContentContainer>
    </StorySection>
  );
};

export default Goals;

const GoalsGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GoalTitle = styled.h3`
  font-weight: 600;
  color: rgba(var(--foreground), 1);
  margin-bottom: 0.5rem;
`;

const GoalDescription = styled.p`
  font-size: 0.875rem;
  color: rgba(var(--muted-foreground), 1);
  line-height: 1.6;
`;
