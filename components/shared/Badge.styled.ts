import styled, { css } from 'styled-components';

export type BadgeVariant =
  | 'then'
  | 'now'
  | 'challenge'
  | 'timeline';

const variantStyles: Record<BadgeVariant, ReturnType<typeof css>> = {
  then: css`
    background: hsl(var(--muted));
    color: hsl(var(--muted-foreground));
  `,
  now: css`
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  `,
  challenge: css`
    font-size: 1.45rem;
    font-weight: 600;
    padding: 0.25rem 0.625rem;
    border-radius: 0.375rem;
    background: hsl(var(--primary) / 0.3);
    color: white;
  `,
  timeline: css`
    margin-left: 0.5rem;
    font-size: 0.625rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.125rem 0.5rem;
    border-radius: 0.25rem;
    background: var(--gradient-primary);
    color: white;
  `,
};

export const Badge = styled.span<{ $variant: BadgeVariant }>`
  display: inline-block;

  ${({ $variant }) =>
    $variant === 'then' || $variant === 'now'
      ? css`
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.625rem;
          border-radius: 0.375rem;
        `
      : ''}

  ${({ $variant }) => variantStyles[$variant]}
`;
