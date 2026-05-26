import styled, { css } from 'styled-components';

export type StoryCardVariant =
  | 'interactive'
  | 'flat'
  | 'accordion'
  | 'benefit'
  | 'comparisonThen'
  | 'comparisonNow';

const variantStyles: Record<StoryCardVariant, ReturnType<typeof css>> = {
  interactive: css`
    border-radius: 1rem;
    border: 1px solid rgba(var(--border), 1);
    background: rgba(var(--card), 1);
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      transform: translateY(-0.25rem);
    }
  `,
  flat: css`
    border-radius: 1rem;
    border: 1px solid hsl(var(--border));
    background: hsl(var(--card));
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (min-width: 768px) {
      margin-top: 2rem;
    }
  `,
  accordion: css`
    border-radius: 1rem;
    border: 1px solid grey;
    background: hsl(var(--card));
    padding: 0 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin-bottom: 1rem;
    overflow: hidden;
  `,
  benefit: css`
    border-radius: 0.75rem;
    border: 1px solid hsl(var(--border));
    background: hsl(var(--card));
    padding: 1.25rem;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  `,
  comparisonThen: css`
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid hsl(var(--border));
    background: hsl(var(--card));
  `,
  comparisonNow: css`
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid hsl(var(--primary) / 0.3);
    background: linear-gradient(to bottom right, hsl(var(--primary) / 0.05), transparent);
    position: relative;
  `,
};

export const StoryCard = styled.div<{ $variant: StoryCardVariant }>`
  ${({ $variant }) => variantStyles[$variant]}
`;

export const InteractiveStoryCard = styled(StoryCard).attrs({
  $variant: 'interactive' as const,
})``;
