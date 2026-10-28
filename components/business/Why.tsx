import styled from "styled-components";
import type { ReactNode } from "react";
import { Container } from "./shared";
import { LayersIcon, ScanSearchIcon, UsersRoundIcon } from "./icons";

type Reason = { icon: ReactNode; title: string; description: string };

const reasons: Reason[] = [
  {
    icon: <ScanSearchIcon />,
    title: "Problem-First Thinking",
    description:
      "We start with the challenge, not the technology. Every decision connects back to your goals.",
  },
  {
    icon: <UsersRoundIcon />,
    title: "Collaborative Execution",
    description:
      "You’re part of the process, with open communication and clear decisions at every stage.",
  },
  {
    icon: <LayersIcon />,
    title: "Practical, Scalable Solutions",
    description:
      "Built for what you need today, with a solid foundation for whatever comes tomorrow.",
  },
];

const WhySection = styled.section`
  background: #EDE7F8;
  padding: 96px 0;

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

const WhyInner = styled(Container)`
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

const Groups = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 1 280px;
`;

const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #FFFFFF;
  color: #773BDB;
`;

const ReasonTitle = styled.h3`
  align-self: stretch;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #111114;
`;

const ReasonBody = styled.p`
  align-self: stretch;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #62616D;
`;

export const Why = () => (
  <WhySection id="about">
    <WhyInner>
      <Heading>
        <Eyebrow>Why Solution Factory</Eyebrow>
        <Title>More than code. Solutions with purpose.</Title>
      </Heading>

      <Groups>
        {reasons.map((reason) => (
          <Group key={reason.title}>
            <IconContainer>{reason.icon}</IconContainer>
            <ReasonTitle>{reason.title}</ReasonTitle>
            <ReasonBody>{reason.description}</ReasonBody>
          </Group>
        ))}
      </Groups>
    </WhyInner>
  </WhySection>
);