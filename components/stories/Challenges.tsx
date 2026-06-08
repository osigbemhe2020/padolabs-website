import styled from 'styled-components';
import { SectionHeader } from '../shared/SectionHeader';
import { ContentContainer } from '../shared/Layout.styled';
import { StorySection } from '../shared/stories/StorySection';
import { Badge } from '../shared/Badge.styled';
import { MonoLabel } from '../shared/Text.styled';


interface Challenge {
  title: string;
  description: string;
}

interface ChallengesProps {
  challenges: {
    title: string;
    intro: string;
    items: Challenge[];
    imageUrl?: string;
  };
}

const Challenges = ({ challenges }: ChallengesProps) => {
  const challengesArray = challenges.items;

  return (
    <StorySection id="challenges">
      <ContentContainer>
        <ChallengesCard>
          <DotPattern />
          <Content>
            <SectionHeader eyebrow="04" title="What where my main challenges" />
            <Description>{challenges.intro}</Description>
            <ChallengesGrid>
            <ChallengesContent>
              {challengesArray.map((c, i) => (
                <Challenge key={`${c.title}-${i}`}>
                  <ChallengeHeader>
                    <ChallengeNumber>0{i + 1}</ChallengeNumber>
                    <Badge $variant="challenge">{c.title}</Badge>
                  </ChallengeHeader>
                  <ChallengeText>{c.description}</ChallengeText>
                </Challenge>
              ))}
            </ChallengesContent>
            <ChallengeImage>
              <img src={challenges.imageUrl} alt="Illustration representing challenges" />
            </ChallengeImage>
            </ChallengesGrid>
          </Content>
        </ChallengesCard>
      </ContentContainer>
    </StorySection>
  );
};

export default Challenges;

const ChallengesCard = styled.div`
  border-radius: 1.5rem;
  background: hsl(262, 60%, 15%);
  color: white;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 640px) {
    padding: 3.5rem;
  }
`;

const Challenge = styled.div`
  max-width: 30rem;
  padding: 0.5rem;
`;

const DotPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: radial-gradient(circle at 20% 20%, white 1px, transparent 1px);
  background-size: 32px 32px;
`;

const Content = styled.div`
  position: relative;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  max-width: 42rem;
  margin-bottom: 2.5rem;
`;
const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  align-items: start;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const ChallengesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
const ChallengeImage = styled.div`
 
  position: relative;        /* required for fill mode */
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: none;
  height: 480px;             /* fill mode needs a defined height on the parent */

  @media (min-width: 1024px) {
    display: block;
  }
`;

const ChallengeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const ChallengeNumber = styled(MonoLabel)`
  font-size: 1.25rem;
  color: rgba(var(--primary-foreground), 0.6);
`;

const ChallengeText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.75;
`;
