
import styled from 'styled-components';

export const CTAButton = styled.button`
  background: white;
  color: #111827;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  margin: 2rem auto;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  .text{
    margin-left: 0.5rem;
    text-decoration: none;
    }

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  @media (min-width: 640px) {
    padding: 1rem 2rem;
    font-size: 1.25rem;
  }
`;

export const LearnMoreButton = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  color: #111827;
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
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
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(102, 126, 234, 0.8);
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
    font-size: 1.125rem;
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