import styled from 'styled-components';
import { InteractiveStoryCard } from './StoryCard.styled';

export const IconBox = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: hsl(var(--primary) / 0.1);
  color: hsl(var(--primary));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  ${InteractiveStoryCard}:hover & {
    background: hsl(var(--primary));
    color: hsl(var(--foreground));
  }
`;
