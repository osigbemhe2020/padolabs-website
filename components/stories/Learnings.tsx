"use client";

import React, { useState } from 'react';
import { Lightbulb, ChevronDown } from 'lucide-react';
import styled from 'styled-components';
import { SectionHeader } from '../shared/SectionHeader';
import { ContentContainer } from '../shared/Layout.styled';
import { StorySection } from '../shared/stories/StorySection';
import { StoryCard } from '../shared/StoryCard.styled';
import { ProgressBar } from '../shared/ProgressBar';

const AccordionContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

const AccordionTrigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    text-decoration: none;
  }

  .icon {
    transition: transform 0.2s ease;

    &.open {
      transform: rotate(180deg);
    }
  }
`;

const TriggerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

const IconWrapper = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  background: hsl(var(--primary) / 0.1);
  color: hsl(var(--primary));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemTitle = styled.span`
  font-weight: 600;
  color: hsl(var(--foreground));
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '1.25rem' : '0')};
`;

const Description = styled.p`
  color: hsl(var(--muted-foreground));
  line-height: 1.75;
  margin-bottom: 1rem;
`;

interface LearningItem {
  title: string;
  body: string;
  progress: number;
}

interface LearningsProps {
  learnings: LearningItem[];
}

const AccordionItemComponent: React.FC<{ item: LearningItem; index: number }> = ({
  item,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <StoryCard $variant="accordion">
      <AccordionTrigger onClick={() => setIsOpen(!isOpen)}>
        <TriggerContent>
          <IconWrapper>
            <Lightbulb size={16} />
          </IconWrapper>
          <ItemTitle>{item.title}</ItemTitle>
        </TriggerContent>
        <ChevronDown size={20} className={`icon ${isOpen ? 'open' : ''}`} />
      </AccordionTrigger>
      <AccordionContent $isOpen={isOpen}>
        <Description>{item.body}</Description>
        <ProgressBar value={item.progress} />
      </AccordionContent>
    </StoryCard>
  );
};

const Learnings: React.FC<LearningsProps> = ({ learnings }) => {
  return (
    <StorySection id="learnings" gradient="lightpurple">
      
      <ContentContainer>
        <SectionHeader eyebrow="06" title="Technical takeaways" />
        <AccordionContainer>
          {learnings.map((learning, index) => (
            <AccordionItemComponent
              key={`${learning.title}-${index}`}
              item={learning}
              index={index}
            />
          ))}
        </AccordionContainer>
      </ContentContainer>
    </StorySection>
  );
};

export default Learnings;
