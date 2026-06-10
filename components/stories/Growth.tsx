"use client";

import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../shared/SectionHeader';
import { ContentContainer } from '../shared/Layout.styled';
import { StorySection } from '../shared/stories/StorySection';
import { Badge } from '../shared/Badge.styled';
import { MonoLabel } from '../shared/Text.styled';

interface TimelineItem {
  title: string;
  status: string;
}

interface GrowthProps {
  timelineData: TimelineItem[];
}

const Growth: React.FC<GrowthProps> = ({ timelineData }) => {
  return (
    <StorySection gradient="hsl">
      <ContentContainer>
        <SectionHeader eyebrow="08" title="Where this project fits" />

        <TimelineContainer>
          <TimelineLine />
          {timelineData.map((item, index) => (
            <TimelineItem key={`${item.title}-${index}`}>
              <TimelineDot />
              <Status>{item.status}</Status>
              <Title>{item.title}</Title>
              {index === 1 && (
                <Badge $variant="timeline">This project</Badge>
              )}
            </TimelineItem>
          ))}
        </TimelineContainer>
      </ContentContainer>
    </StorySection>
  );
};

export default Growth;

const TimelineContainer = styled.div`
  position: relative;
  margin-top: 3.5rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--gradient-primary);;
  box-shadow: 0 0 8px var(--gradient-primary);;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 3rem;
  padding-bottom: 2.5rem;

  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 0.5625rem;
  top: 0.375rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--gradient-primary);
  box-shadow: 0 0 14px var(--gradient-primary);
`;

const Status = styled(MonoLabel)`
  font-size: 0.75rem;
  color: var(--gradient-primary);
  margin-bottom: 0.25rem;
  display: block;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #2a332d;
`;
