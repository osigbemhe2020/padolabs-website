import styled from "styled-components";
import { HeroContentWrapper } from "@/components/shared/Wrappers.styled";

export const BookingLayout = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const BookingHeroContent = styled(HeroContentWrapper)`
  h1 {
    margin-bottom: 0.75rem;
    color: var(--sf-ink, #111114);
    font-size: clamp(2rem, 4vw, 3.25rem);
    font-weight: 700;
    line-height: 1.15;
  }

  p {
    max-width: 42rem;
    margin: 0 auto;
    color: var(--sf-body, #62616d);
    font-size: 1rem;
    line-height: 1.7;
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 2rem 0 3rem;
`;

export const ProgressStep = styled.div<{ $active: boolean; $completed: boolean }>`
  flex: 1;
  height: 5px;
  border-radius: 10px;
  background: ${({ $active, $completed }) =>
    $active || $completed
      ? "var(--sf-primary, #7654d6)"
      : "var(--sf-border, #e8e5ef)"};
`;

export const FormSection = styled.div`
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--sf-ink, #171717);
`;

export const SectionDescription = styled.p`
  color: var(--sf-muted, #737373);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const SelectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SelectionCard = styled.button<{ $selected: boolean }>`
  width: 100%;
  text-align: left;
  padding: 1.25rem;
  border: 1px solid ${({ $selected }) =>
    $selected ? "var(--sf-primary, #7654d6)" : "var(--sf-border, #e5e5e5)"};
  border-radius: 12px;
  background: ${({ $selected }) =>
    $selected ? "var(--sf-primary-soft, #f7f4ff)" : "var(--sf-white, #fff)"};
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    border-color: var(--sf-primary, #7654d6);
  }

  &:focus-visible {
    outline: 3px solid rgba(119, 59, 219, 0.25);
    outline-offset: 2px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--sf-ink, #171717);
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: var(--sf-muted, #737373);
  line-height: 1.5;
`;

export const CardMeta = styled.p`
  margin-top: 0.85rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--sf-primary, #7654d6);
`;

export const PopularLabel = styled.span`
  display: inline-block;
  padding: 0.3rem 0.6rem;
  margin-bottom: 0.75rem;
  border-radius: 20px;
  background: var(--sf-primary-soft, #eee8ff);
  color: var(--sf-primary-dark, #6844c2);
  font-size: 0.75rem;
  font-weight: 700;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--sf-ink, #262626);
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 1px solid var(--sf-border, #dedede);
    border-radius: 8px;
    background: var(--sf-white, #fff);
    color: var(--sf-ink, #171717);
    font: inherit;
    font-size: 0.9rem;
    outline: none;

    &:focus {
      border-color: var(--sf-primary, #7654d6);
      box-shadow: 0 0 0 3px rgba(119, 59, 219, 0.1);
    }
  }

  textarea {
    min-height: 130px;
    resize: vertical;
  }
`;

export const CheckboxList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CheckboxItem = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.9rem;
  border: 1px solid var(--sf-border, #e5e5e5);
  border-radius: 8px;
  cursor: pointer;

  input {
    margin-top: 0.2rem;
    accent-color: var(--sf-primary, #7654d6);
  }

  span {
    font-size: 0.875rem;
    color: var(--sf-body, #404040);
    line-height: 1.5;
  }
`;

export const SummaryCard = styled.aside`
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid var(--sf-border, #e5e5e5);
  border-radius: 12px;
  background: var(--sf-lavender-soft, #fafafa);
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.65rem 0;
  font-size: 0.9rem;
  color: var(--sf-body, #525252);

  strong {
    color: var(--sf-ink, #171717);
    text-align: right;
  }
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  margin-top: 0.75rem;
  border-top: 1px solid var(--sf-border, #dedede);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--sf-ink, #171717);
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const PrimaryButton = styled.button`
  padding: 0.95rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: var(--sf-primary, #7654d6);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: var(--sf-primary-dark, #6240bd);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled.button`
  padding: 0.95rem 1.5rem;
  border: 1px solid var(--sf-border, #dedede);
  border-radius: 8px;
  background: var(--sf-white, #fff);
  color: var(--sf-body, #404040);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--sf-lavender-soft, #f5f5f5);
  }
`;

export const Notice = styled.p<{ $error?: boolean }>`
  padding: 0.9rem 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  background: ${({ $error }) => ($error ? "#fff1f1" : "#f0faf3")};
  color: ${({ $error }) => ($error ? "#b42318" : "#18713b")};
  font-size: 0.9rem;
  line-height: 1.5;
`;

export const MutedText = styled.p`
  color: var(--sf-muted, #737373);
  font-size: 0.85rem;
  line-height: 1.6;
`;

export const PackagesLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--sf-primary, #7654d6);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--sf-primary-dark, #6240bd);
    text-decoration: underline;
  }
`;