
import styled from 'styled-components';

export const CTAButton = styled.button`
  background: white;
  color: #111827;
  border: none;
  border-radius: 0.5rem;
  padding: 0.8rem 1.35rem;
  text-decoration: none;
  margin: 2rem auto;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
  min-height: 3rem;

  .text {
    text-decoration: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-1px);
  }

  @media (min-width: 640px) {
    padding: 1rem 1.75rem;
    font-size: 1.05rem;
  }
`;

export const LearnMoreButton = styled.button`
  padding: 0.6rem 1rem;
  background: transparent;
  color: #111827;
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    border-color: rgba(102, 126, 234, 0.45);
  }
`;


export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #667eea;
  padding: 0;
  height: auto;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(102, 126, 234, 0.8);
  }
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.35rem;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  transition: opacity 0.2s ease, transform 0.2s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
  }

  @media (min-width: 1024px) {
    padding: 1rem 1.75rem;
    font-size: 1.05rem;
  }
`;

export const SecondaryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #764ba2 ;
  border: 1px solid #764ba2 ;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
`;