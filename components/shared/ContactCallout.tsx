import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "./buttons.styled";

interface ContactCalloutProps {
  heading: string;
  copy: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export const ContactCallout = ({
  heading,
  copy,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: ContactCalloutProps) => (
  <CalloutCard>
    <CalloutHeading>{heading}</CalloutHeading>
    <CalloutCopy>{copy}</CalloutCopy>
    <ButtonRow>
      <PrimaryButton as="a" href={primaryHref}>
        {primaryLabel}
        <ArrowRight size={16} />
      </PrimaryButton>
      <SecondaryButton as="a" href={secondaryHref}>
        {secondaryLabel}
      </SecondaryButton>
    </ButtonRow>
  </CalloutCard>
);

const CalloutCard = styled.section`
  border-radius: 2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(236, 72, 153, 0.14));
  padding: 3rem 2rem;
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.08);
  text-align: center;
`;

const CalloutHeading = styled.h2`
  font-size: clamp(2rem, 3vw, 3rem);
  margin: 0 0 1rem;
  font-weight: 800;
  color: #0f172a;
`;

const CalloutCopy = styled.p`
  max-width: 44rem;
  margin: 0 auto 2rem;
  color: rgba(15, 23, 42, 0.78);
  font-size: 1.05rem;
  line-height: 1.8;
`;

const ButtonRow = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, auto);
  }
`;
