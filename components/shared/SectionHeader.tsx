import styled from 'styled-components';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

export const SectionHeader = ({ eyebrow, title }: SectionHeaderProps) => (
  <SectionHeaderWrapper>
    <Eyebrow>{eyebrow}</Eyebrow>
    <Title>{title}</Title>
  </SectionHeaderWrapper>
);

const SectionHeaderWrapper = styled.div`
  max-width: 42rem;
  display: flex;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
`;

const Eyebrow = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #667eea;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.025em;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;
