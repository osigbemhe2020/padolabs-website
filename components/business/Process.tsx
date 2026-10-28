import styled from "styled-components";
import type { ReactNode } from "react";
import { Container } from "./shared";
import {
  ListChecksIcon,
  PencilRulerIcon,
  ProcessRocketIcon,
  ProcessSearchIcon,
} from "./icons";

type Step = { number: string; icon: ReactNode; title: string; description: string };

const steps: Step[] = [
  {
    number: "01",
    icon: <ProcessSearchIcon />,
    title: "Discover",
    description:
      "We listen, ask questions and understand your goals, your users and the problem to solve.",
  },
  {
    number: "02",
    icon: <ListChecksIcon />,
    title: "Plan",
    description:
      "Together, we define the scope, choose the right approach and map a clear path forward.",
  },
  {
    number: "03",
    icon: <PencilRulerIcon />,
    title: "Design & Build",
    description:
      "We turn the plan into a thoughtful product, with your feedback at every key stage.",
  },
  {
    number: "04",
    icon: <ProcessRocketIcon />,
    title: "Launch & Improve",
    description:
      "We test, launch and help you keep improving as your business and your users evolve.",
  },
];

const ProcessSection = styled.section`
  background: #EDE7F8;
  padding: 96px 0;

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

const ProcessInner = styled(Container)`
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

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`;

const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 1 260px;
  min-width: 260px;
  min-height: 234px;
  padding: 24px;
  background: #FFFFFF;
  border-radius: 12px;
`;

const StepIdentifier = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #773BDB;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const StepIcon = styled.span`
  display: inline-flex;
  color: #773BDB;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
`;

const StepTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #111114;
`;

const StepBody = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #62616D;
`;

export const Process = () => (
  <ProcessSection id="process">
    <ProcessInner>
      <Heading>
        <Eyebrow>Our process</Eyebrow>
        <Title>From the first conversation to launch.</Title>
        <Description>
          A clear, collaborative process. No guesswork, no disappearing acts.
        </Description>
      </Heading>

      <Grid>
        {steps.map((step) => (
          <StepCard key={step.number}>
            <StepIdentifier>
              <StepNumber>{step.number}</StepNumber>
              <StepIcon>{step.icon}</StepIcon>
            </StepIdentifier>
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepBody>{step.description}</StepBody>
            </StepContent>
          </StepCard>
        ))}
      </Grid>
    </ProcessInner>
  </ProcessSection>
);