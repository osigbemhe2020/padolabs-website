import styled, { css } from 'styled-components';
import { SectionAnchor } from '../Layout.styled';

type PaddingVariant = 'default' | 'compact';
type GradientVariant = 'lightpurple' | 'hsl' | 'none';

interface StorySectionProps {
  id?: string;
  padding?: PaddingVariant;
  gradient?: GradientVariant;
  children: React.ReactNode;
}

const paddingStyles: Record<PaddingVariant, ReturnType<typeof css>> = {
  default: css`padding: 5rem 0;`,
  compact: css`padding: 1rem 0;`,
};

const gradientStyles: Record<GradientVariant, ReturnType<typeof css>> = {
  none: css``,
  
  hsl: css`
    background: linear-gradient(to bottom, transparent, rgba(118, 75, 162, 0.3), transparent);
  `,
  lightpurple: css`
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  `,
};

const StyledSection = styled(SectionAnchor)<{
  $padding: PaddingVariant;
  $gradient: GradientVariant;
}>`
  ${({ $padding }) => paddingStyles[$padding]}
  ${({ $gradient }) => gradientStyles[$gradient]}
`;

export const StorySection = ({
  id,
  padding = 'default',
  gradient = 'none',
  children,
}: StorySectionProps) => (
  <StyledSection id={id} $padding={padding} $gradient={gradient}>
    {children}
  </StyledSection>
);
