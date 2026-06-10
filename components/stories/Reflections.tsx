"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import styled from 'styled-components';
import { SectionHeader } from '../shared/SectionHeader';
import { ContentContainer } from '../shared/Layout.styled';
import { StorySection } from '../shared/stories/StorySection';
import { StoryCard } from '../shared/StoryCard.styled';
import { Badge } from '../shared/Badge.styled';

interface ReflectionProps {
  reflection: {
    title: string;
    intro: string;
    then: {
      title: string;
      thenbody: string;
      image?: {
        asset?: {
          url?: string;
        };
      };
    };
    now: {
      title: string;
      nowbody: string;
      image?: {
        asset?: {
          url?: string;
        };
      };
    };
    improvements?: string[];
  };
}

const Reflections: React.FC<ReflectionProps> = ({ reflection }) => {

  return (
    <StorySection id="reflection" padding="compact">
      <ContentContainer>
        <SectionHeader eyebrow="07" title="Then vs. Now" />
        <p>
          {reflection.intro}
        </p>

        <ComparisonGrid>
          <StoryCard $variant="comparisonThen">
            <Badge $variant="then">Then</Badge>
            <CardTitle>{reflection.then.title}</CardTitle>
            <CardDescription>
             {reflection.then.thenbody}
            </CardDescription>
            <MockupContainer>
              {/* <MockupBar $width="100%" $variant="muted" />
              <MockupBar $width="75%" $variant="muted" /> */}
              {reflection.then.image?.asset?.url ? (
                <MockupImage
                  src={reflection.then.image.asset.url}
                  alt={`${reflection.then.title} illustration`}
                />
              ) : (
                <MockupBox style={{ background: 'hsl(var(--muted) / 0.7)' }} />
              )}
            </MockupContainer>
          </StoryCard>

          <StoryCard $variant="comparisonNow">
            <Badge $variant="now">Now</Badge>
            <CardTitle>{reflection.now.title}</CardTitle>
            <CardDescription>
              {reflection.now.nowbody}
            </CardDescription>
            <MockupContainer>
              {/* <MockupBar $width="100%" $variant="primary" $opacity={0.9} />
              <MockupBar $width="66.67%" $variant="primary" $opacity={0.4} /> */}
              {reflection.now.image?.asset?.url ? (
                <MockupImage
                  src={reflection.now.image.asset.url}
                  alt={`${reflection.now.title} illustration`}
                />
              ) : (
                <MockupBox
                  style={{
                    background: 'hsl(var(--primary) / 0.2)',
                    border: '1px solid hsl(var(--primary) / 0.3)',
                  }}
                />
              )}
            </MockupContainer>
          </StoryCard>
        </ComparisonGrid>

        <CardTitle>Areas for improvement</CardTitle>

        <BenefitsGrid>
          {reflection.improvements?.map((i) => (
            <StoryCard key={i} $variant="benefit">
              <CheckCircle2
                style={{
                  color: 'purple',
                  flexShrink: 0,
                  marginTop: '0.125rem',
                }}
                size={18}
              />
              <BenefitText>{i}</BenefitText>
            </StoryCard>
          ))}
        </BenefitsGrid>
      </ContentContainer>
    </StorySection>
  );
};

export default Reflections;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
  color: hsl(var(--foreground));
`;

const CardDescription = styled.p`
  color: hsl(var(--muted-foreground));
  line-height: 1.75;
  margin-bottom: 1.5rem;
`;

const MockupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MockupBar = styled.div<{
  $width?: string;
  $opacity?: number;
  $variant?: 'muted' | 'primary';
}>`
  height: 0.75rem;
  border-radius: 9999px;

  ${({ $width }) => $width && `width: ${$width};`}
  ${({ $opacity }) => $opacity && `opacity: ${$opacity};`}

  ${({ $variant }) =>
    $variant === 'primary' &&
    `
    background: hsl(var(--primary));
  `}

  ${({ $variant }) =>
    $variant === 'muted' &&
    `
    background: hsl(var(--muted));
  `}
`;

const MockupBox = styled.div`
  height: 5rem;
  width: 100%;
  border-radius: 0.5rem;
`;

const MockupImage = styled.img`
  height: 10rem;
  width: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BenefitText = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--foreground));
`;
