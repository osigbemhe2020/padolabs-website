import type { ElementType } from "react";
import styled from "styled-components";
import { Title, Description } from "./Text.styled";

interface ContactInfoPanelProps {
  title: string;
  description: string;
  heroIcon: ElementType;
  infoIcon: ElementType;
  infoTitle: string;
  infoText: string;
}

export const ContactInfoPanel = ({
  title,
  description,
  heroIcon: HeroIcon,
  infoIcon: InfoIcon,
  infoTitle,
  infoText,
}: ContactInfoPanelProps) => (
  <Wrapper>
    <Header>
      <PanelTitle>{title}</PanelTitle>
      <PanelDescription>{description}</PanelDescription>
    </Header>

    <HeroCard>
      <HeroGraphic>
        <HeroIcon size={64} />
      </HeroGraphic>
    </HeroCard>

    <InfoCard>
      <StatusIcon>
        <InfoIcon size={18} />
      </StatusIcon>
      <InfoCopy>
        <strong>{infoTitle}</strong>
        <span>{infoText}</span>
      </InfoCopy>
    </InfoCard>
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
`;

const Header = styled.div`
  display: grid;
  gap: 1rem;
`;

const PanelTitle = styled(Title)`
  font-size: 2.25rem;
  margin-bottom: 0;
`;

const PanelDescription = styled(Description)`
  margin: 0;
  line-height: 1.75;
`;

const HeroCard = styled.div`
  position: relative;
  min-height: 14rem;
  border-radius: 1.5rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.95));
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.16);
  display: grid;
  place-items: center;
`;

const HeroGraphic = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: #3b82f6;
`;

const InfoCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 1.25rem;
  background: white;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 15px 45px rgba(15, 23, 42, 0.04);
  align-items: center;
`;

const StatusIcon = styled.div`
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: rgba(56, 189, 248, 0.16);
  color: #0284c7;
`;

const InfoCopy = styled.div`
  display: grid;
  gap: 0.25rem;
  color: #334155;

  strong {
    font-size: 0.95rem;
    display: block;
    color: #0f172a;
  }

  span {
    font-size: 0.875rem;
  }
`;
