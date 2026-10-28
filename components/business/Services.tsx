import styled from "styled-components";
import { Container, Eyebrow, Section, SectionHead, SectionSub, SectionTitle } from "./shared";
import { CodeIcon, GlobeIcon, PenToolIcon, PhoneIcon } from "./icons";
import type { ReactNode } from "react";

type Service = { icon: ReactNode; title: string; description: string };

const services: Service[] = [
  {
    icon: <GlobeIcon />,
    title: "Websites",
    description: "Modern, fast and scalable websites that showcase your brand and convert visitors.",
  },
  {
    icon: <CodeIcon />,
    title: "Web Applications",
    description: "Custom web apps that solve complex problems and streamline your operations.",
  },
  {
    icon: <PhoneIcon />,
    title: "Mobile Applications",
    description: "Intuitive mobile apps that keep your business closer to your users.",
  },
  {
    icon: <PenToolIcon />,
    title: "Product Design & Strategy",
    description: "User-centred design and strategy to turn your ideas into products people love.",
  },
];

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 56px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 24px;
  background: var(--sf-white);
  border: 1px solid var(--sf-border);
  border-radius: 12px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(119, 59, 219, 0.45);
    box-shadow: 0 12px 32px rgba(119, 59, 219, 0.1);
    transform: translateY(-3px);
  }
`;

const IconTile = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--sf-primary-soft);
  color: var(--sf-primary);
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: var(--sf-ink);
`;

const CardBody = styled.p`
  font-size: 14px;
  color: var(--sf-body);
`;

export const Services = () => (
  <Section id="services">
    <Container>
      <SectionHead>
        <Eyebrow>Our Services</Eyebrow>
        <SectionTitle>What We Can Build Together</SectionTitle>
        <SectionSub>
          We build digital products that help businesses grow, engage users, and
          create lasting value.
        </SectionSub>
      </SectionHead>
      <CardsGrid>
        {services.map((service) => (
          <Card key={service.title}>
            <IconTile>{service.icon}</IconTile>
            <CardTitle>{service.title}</CardTitle>
            <CardBody>{service.description}</CardBody>
          </Card>
        ))}
      </CardsGrid>
    </Container>
  </Section>
);
