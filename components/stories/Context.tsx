
import styled from 'styled-components';
import { Quote, Sparkles } from 'lucide-react';
import { Container, ContentWrapper} from '../shared/Wrappers.styled';
import { SectionHeader } from '../shared/SectionHeader';

interface props {
  context: {
    body: string;
    highlightQuote: string;
    milestone: string;
  };
}

const Context = ({ project }: { project: props }) => (
    <Container>
      <ContentWrapper>
      <ContextGrid>
        <LeftColumn>
          <Line />
          <Dot />
          <SectionHeader eyebrow="01" title="The Context" />
          <Text>{project.context.body}</Text>
        </LeftColumn>
        <Card>
          <Quote className="text-primary/40 mb-4" size={32} />
          <QuoteP>
            {project.context.highlightQuote}
          </QuoteP>
          <Footer>
            <Sparkles size={16} className="text-primary" />
            Milestone · {project.context.milestone}
          </Footer>
        </Card>
      </ContextGrid>
      </ContentWrapper>
    </Container>
);

export default Context;

const ContextGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 60% 40%;
  }
`;

const LeftColumn = styled.div`
  position: relative;
  padding-left: 2rem;
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 1px;
  background: linear-gradient(to bottom, #667eea, rgba(102, 126, 234, 0.4), transparent);
`;

const Dot = styled.div`
  position: absolute;
  left: -4px;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #667eea;
  box-shadow: 0 0 10px rgba(102, 126, 234, 1);
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(107, 114, 128, 1);
  white-space: pre-line;
  text-align: left;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

const Card = styled.div`
  border-radius: 1rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
  background: linear-gradient(to bottom right, rgba(102, 126, 234, 0.05), transparent);
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const QuoteP = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  line-height: 1.75;
`;

const Footer = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(229, 231, 235, 1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: rgba(107, 114, 128, 1);
`;
