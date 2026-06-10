import { Mail } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";
import { ContentWrapper, Container } from "../shared/Wrappers.styled";
import { TitleText, NormalText } from "../shared/Text.styled";
import { CTAButton } from "../shared/buttons.styled";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
}

const CTASection = ({ title, description, buttonText = "Get In Touch" }: CTASectionProps) => {
  return (
    <Container >
      <ContentWrapper>
        <CTACard>
          <TitleText>
            {title}
          </TitleText>
          <Description>
            <NormalText>
              {description}
            </NormalText>
          </Description>
          <Link href="/contact" style={{ textDecoration: "none" }}>
          <CTAButton>
            <Mail size={18} /> <span className="text">{buttonText}</span>
          </CTAButton>
          </Link>
        </CTACard>
      </ContentWrapper>
    </Container>
  );
};


const CTACard = styled.div`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border-radius: 1rem;
  background: var(--gradient-primary);
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    width: 95%;
    padding: 1rem;  
    }
`;

// const Title = styled.h2`
//   font-size: 1.875rem;
//   font-weight: 700;
//   color: #111827;
//   margin-bottom: 1rem;

//   @media (min-width: 640px) {
//     font-size: 2.25rem;
//   }
// `;

export const Description = styled.div`
  max-width: 28rem;
  margin: 1rem auto ;
  text-align: center;
`;



export default CTASection;
