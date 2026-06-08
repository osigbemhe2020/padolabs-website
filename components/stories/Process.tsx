import styled from 'styled-components';
import { SectionHeader } from '../shared/SectionHeader';
import { ContentContainer } from '../shared/Layout.styled';
import { StorySection } from '../shared/stories/StorySection';
import { StoryCard } from '../shared/StoryCard.styled';
import { MonoLabel } from '../shared/Text.styled';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image?: string;
}

interface ProcessProps {
  process: ProcessStep[];
}

const Process = ({ process }: ProcessProps) => {
  return (
    <StorySection id="process" gradient="lightpurple" padding="compact">
      <ContentContainer>
        <SectionHeader eyebrow="05" title="Development Process" />
        <ProcessGrid>
          <Grid>
            {process.map((p, index) => (
              <ProcessCard key={`${p.step}-${index}`}>
                <StoryCard $variant="flat">
                  <StepNumber>{p.step}</StepNumber>
                  <IconPlaceholder>
                    <IconLines>
                      <img src={p.image} alt={p.title} />
                    </IconLines>
                  </IconPlaceholder>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </StoryCard>
              </ProcessCard>
            ))}
          </Grid>
        </ProcessGrid>
      </ContentContainer>
    </StorySection>
  );
};

export default Process;

const ProcessGrid = styled.div`
  position: relative;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 3rem;
      height: 1px;
      background: linear-gradient(to right, transparent, hsl(var(--primary) / 0.4), transparent);
    }
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  align-items: stretch;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProcessCard = styled.div`
  position: relative;
  display: flex;

  /* Make the StoryCard fill the card so all cards in a row match height */
  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: -0.25rem;
      left: 1.5rem;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background: hsl(var(--primary));
      box-shadow: 0 0 12px hsl(var(--primary));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const StepNumber = styled(MonoLabel)`
  font-size: 0.75rem;
  color: hsl(var(--primary));
  margin-bottom: 0.5rem;
  display: block;
`;

const IconPlaceholder = styled.div`
  height: 5rem;
  border-radius: 0.5rem;
  background: hsl(var(--accent) / 0.6);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconLines = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    max-height: 100%;
    width: 90%;
    
  }
`;

const CardTitle = styled.h3`
  font-weight: 600;
  color: hsl(var(--foreground));
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  line-height: 1.75;
`;
