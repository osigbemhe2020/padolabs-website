'use client';

import styled from 'styled-components';
import { MonoLabel } from './Text.styled';

interface ProgressBarProps {
  value: number;
}

export const ProgressBar = ({ value }: ProgressBarProps) => (
  <ProgressContainer>
    <ProgressTrack>
      <ProgressFill $width={value} />
    </ProgressTrack>
    <ProgressText>{value}%</ProgressText>
  </ProgressContainer>
);

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ProgressTrack = styled.div`
  flex: 1;
  height: 0.375rem;
  border-radius: 9999px;
  background: rgba(102, 126, 234, 0.12);
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $width: number }>`
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 9999px;
  width: ${({ $width }) => $width}%;
`;

const ProgressText = styled(MonoLabel)`
  font-size: 0.75rem;
  color: hsl(var(--foreground));
`;
