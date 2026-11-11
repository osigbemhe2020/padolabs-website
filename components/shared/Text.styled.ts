import styled from 'styled-components'

export const NormalText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--sf-body, rgba(17, 24, 39, 0.8));
`;

export const GradientText = styled.span`
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const TitleText = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--sf-ink, #111827);
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: var(--sf-ink, #111827);

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: var(--sf-muted, #6b7280);
  max-width: 30rem;
  line-height: 1.4;
`;

export const MonoLabel = styled.span`
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
`;