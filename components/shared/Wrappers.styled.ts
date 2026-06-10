import styled from 'styled-components'


export const PageWrapper = styled.div`
  min-height: 100vh;
`;
export const Container = styled.section<{ $backgroundColor?: string }>`
  padding: 3rem 1.25rem;
  background: ${props => props.$backgroundColor ? props.$backgroundColor : 'white'};
  position: relative;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 0;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  padding: 2.5rem 1.25rem;
  overflow: hidden;
  background-color: #fff;

  @media (min-width: 640px) {
    padding: 3.5rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 0 8rem;
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  opacity: 0.6;
  pointer-events: none;
`;

export const HeroContentWrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.25rem;
  max-width: 1200px;
  position: relative;
  z-index: 10;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const TextContent = styled.div`
 text-align: left !important;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.25rem;
  max-width: 1300px;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const FlexGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const GridWrapper = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;


export const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const PageHeader = styled.header`
  padding: 1rem 0;
  text-align: center;
`;

// Grid Components for Cards
// CSS classes for motion components
export const StoriesGrid = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }
`;



export const ProjectGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  justify-items: center;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

