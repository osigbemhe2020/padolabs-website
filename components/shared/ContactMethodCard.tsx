import styled from "styled-components";
import type { ElementType } from "react";

interface ContactMethodCardProps {
  icon: ElementType;
  name: string;
  handle: string;
  note: string;
  href: string;
}

export const ContactMethodsGrid = styled.div`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ContactMethodCard = ({ icon: Icon, name, handle, note, href }: ContactMethodCardProps) => (
  <ContactMethodLink href={href}>
    <ContactCard>
      <MethodIcon>
        <Icon size={20} />
      </MethodIcon>
      <MethodName>{name}</MethodName>
      <MethodHandle>{handle}</MethodHandle>
      <MethodNote>{note}</MethodNote>
    </ContactCard>
  </ContactMethodLink>
);

const ContactMethodLink = styled.a`
  text-decoration: none;
`;

const ContactCard = styled.div`
  height: 100%;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: white;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.05);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  display: grid;
  gap: 1rem;

  &:hover {
    transform: translateY(-0.25rem);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 24px 55px rgba(15, 23, 42, 0.08);
  }
`;

const MethodIcon = styled.div`
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: 1rem;
  background: rgba(243, 244, 246, 0.85);
  color: #2563eb;
`;

const MethodName = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
`;

const MethodHandle = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #2563eb;
`;

const MethodNote = styled.p`
  margin: 0;
  font-size: 0.88rem;
  color: #64748b;
  line-height: 1.7;
`;
