import type { FormEvent } from "react";
import styled from "styled-components";
import { Send } from "lucide-react";
import { PrimaryButton } from "./buttons.styled";

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface ContactFormProps {
  form: ContactFormValues;
  onChange: (field: keyof ContactFormValues, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
}

export const ContactForm = ({ form, onChange, onSubmit, submitting }: ContactFormProps) => (
  <FormCard>
    <Form onSubmit={onSubmit}>
      <FieldsRow>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <StyledInput
            id="name"
            value={form.name}
            onChange={(event) => onChange("name", event.target.value)}
            placeholder="Your name"
            maxLength={100}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <StyledInput
            id="email"
            type="email"
            value={form.email}
            onChange={(event) => onChange("email", event.target.value)}
            placeholder="you@email.com"
            maxLength={255}
          />
        </Field>
      </FieldsRow>

      <Field>
        <FieldLabel htmlFor="subject">Subject</FieldLabel>
        <StyledInput
          id="subject"
          value={form.subject}
          onChange={(event) => onChange("subject", event.target.value)}
          placeholder="What's this about?"
          maxLength={150}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <StyledTextarea
          id="message"
          value={form.message}
          onChange={(event) => onChange("message", event.target.value)}
          placeholder="Tell me about your project..."
          maxLength={1000}
        />
      </Field>

      <SubmitButton type="submit" disabled={submitting}>
        <ButtonIcon>
          <Send size={16} />
        </ButtonIcon>
        {submitting ? "Sending..." : "Send Message"}
      </SubmitButton>
    </Form>
  </FormCard>
);

const FormCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.05);
`;

const Form = styled.form`
  display: grid;
  gap: 1.25rem;
`;

const FieldsRow = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Field = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const FieldLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: #0f172a;
`;

const StyledInput = styled.input`
  width: 100%;
  min-height: 3rem;
  border-radius: 1rem;
  border: 1px solid rgba(226, 232, 240, 0.95);
  background: #f8fafc;
  padding: 0.95rem 1rem;
  font-size: 1rem;
  color: #0f172a;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: rgba(59, 130, 246, 0.75);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 10rem;
  border-radius: 1rem;
  border: 1px solid rgba(226, 232, 240, 0.95);
  background: #f8fafc;
  padding: 1rem;
  font-size: 1rem;
  color: #0f172a;
  resize: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: rgba(59, 130, 246, 0.75);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);
  }
`;

const SubmitButton = styled(PrimaryButton)`
  width: fit-content;
  min-width: 11rem;
  margin-top: 0.25rem;
  align-self: start;
`;

const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
