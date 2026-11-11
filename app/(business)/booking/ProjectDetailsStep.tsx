import {
  FormSection,
  SectionTitle,
  SectionDescription,
  FormGroup,
} from "./BookingStyles";
import type { BookingFormData } from "./bookingTypes";

type ProjectDetailsStepProps = {
  formData: BookingFormData;
  onChange: (field: keyof BookingFormData, value: string) => void;
};

export default function ProjectDetailsStep({
  formData,
  onChange,
}: ProjectDetailsStepProps) {
  return (
    <FormSection>
      <SectionTitle>Tell us about your project</SectionTitle>
      <SectionDescription>
        Share some details about what you&apos;re trying to build and the
        problem you&apos;re looking to solve.
      </SectionDescription>

      <FormGroup>
        <label htmlFor="projectName">Project name *</label>
        <input
          id="projectName"
          type="text"
          placeholder="e.g. My Business Website"
          value={formData.projectName}
          onChange={(event) => onChange("projectName", event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="projectDescription">Describe your project *</label>
        <textarea
          id="projectDescription"
          placeholder="What do you want us to build? What should it help your business achieve?"
          value={formData.projectDescription}
          onChange={(event) =>
            onChange("projectDescription", event.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="targetAudience">Who is your target audience?</label>
        <input
          id="targetAudience"
          type="text"
          placeholder="e.g. Small business owners, students, customers..."
          value={formData.targetAudience}
          onChange={(event) => onChange("targetAudience", event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="existingWebsite">
          Existing website URL (if available)
        </label>
        <input
          id="existingWebsite"
          type="url"
          placeholder="https://example.com"
          value={formData.existingWebsite}
          onChange={(event) => onChange("existingWebsite", event.target.value)}
        />
      </FormGroup>
    </FormSection>
  );
}
