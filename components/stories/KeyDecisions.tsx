//KeyDecisions.tsx
import styled from 'styled-components';
import { SectionHeader } from '../shared/SectionHeader';
import { ContentContainer } from '../shared/Layout.styled';
import { MonoLabel } from '../shared/Text.styled';

export interface KeyDecision {
  title: string;
  choice: string;
  rejected: string;
  rationale: string;
}

interface KeyDecisionsProps {
  decisions?: KeyDecision[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const KeyDecisions = ({
  decisions = [],
  eyebrow = '05',
  title = 'Key Engineering Decisions',
  subtitle = 'This are the core technicals decisions that shaped the project’s architecture and development approach.',
}: KeyDecisionsProps) => {
  return (
    <Section id="decisions">
      <ContentContainer>
        <Heading>
          <SectionHeader eyebrow={eyebrow} title={title} />
          <Subtitle>{subtitle}</Subtitle>
        </Heading>

        <DecisionsGrid>
          {decisions.map((decision, index) => (
            <DecisionCard key={decision.title}>
              <AccentStripe />
              <CardHeader>
                <HeaderContent>
                  <Label>
                    DECISION · 0{index + 1}
                  </Label>
                  <DecisionTitle>{decision.title}</DecisionTitle>
                </HeaderContent>
              </CardHeader>

              <CardBody>
                <OptionGrid>
                  <ChoiceBlock>
                    <OptionLabel>Chose</OptionLabel>
                    <OptionText>{decision.choice}</OptionText>
                  </ChoiceBlock>
                  <RejectedBlock>
                    <OptionLabel>Over</OptionLabel>
                    <OptionText as="span">{decision.rejected}</OptionText>
                  </RejectedBlock>
                </OptionGrid>

                <Rationale>
                  <MonoLabelText>{'// why'}</MonoLabelText>
                  {decision.rationale}
                </Rationale>
              </CardBody>
            </DecisionCard>
          ))}
        </DecisionsGrid>
      </ContentContainer>
    </Section>
  );
};

export default KeyDecisions;

const Section = styled.section`
  padding: 5rem 0;
  scroll-margin-top: 6rem;
`;

const Heading = styled.div`
  max-width: 42rem;
  margin-bottom: 3.5rem;
`;

const Subtitle = styled.p`
  
  line-height: 1.75;
`;

const DecisionsGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const AccentStripe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.25rem;
  height: 100%;
  background: linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--primary) / 0.4), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const DecisionCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 1.5rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  padding: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  &:hover {
    border-color: hsl(var(--primary) / 0.3);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.12);
  }

  &:hover ${AccentStripe} {
    opacity: 1;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;



const HeaderContent = styled.div`
  display: grid;
  gap: 0.25rem;
`;

const Label = styled.span`
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.625rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: hsl(var(--muted-foreground) / 0.65);
`;

const DecisionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: hsl(var(--foreground));
  line-height: 1.2;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const ChoiceBlock = styled.div`
  border-radius: 1rem;
  border: 1px solid hsl(var(--primary) / 0.2);
  background: hsl(var(--primary) / 0.05);
  padding: 1rem;
`;

const RejectedBlock = styled(ChoiceBlock)`
  border-color: hsl(var(--border));
  background: hsl(var(--muted-foreground) / 0.08);
`;

const OptionLabel = styled.p`
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 0.5rem;
  color: hsl(var(--primary) / 0.7);
`;

const OptionText = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: hsl(var(--foreground));
  line-height: 1.5;
`;

const Rationale = styled.p`
  font-size: 0.95rem;
  color: hsl(var(--muted-foreground));
  line-height: 1.75;
`;

const MonoLabelText = styled(MonoLabel)`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  color: hsl(var(--primary));
`;
