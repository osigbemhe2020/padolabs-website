import {
  FormSection,
  SectionTitle,
  SectionDescription,
  CheckboxList,
  CheckboxItem,
  FormGroup,
} from "./BookingStyles";
import { assetOptions } from "./bookingData";
import { budgets, timelines } from "@/data/services";

type ReadinessStepProps = {
  selectedAssets: string[];
  selectedTimeline: string;
  selectedBudget: string;
  onToggleAsset: (assetId: string) => void;
  onTimelineChange: (timeline: string) => void;
  onBudgetChange: (budget: string) => void;
};

export default function ReadinessStep({
  selectedAssets,
  selectedTimeline,
  selectedBudget,
  onToggleAsset,
  onTimelineChange,
  onBudgetChange,
}: ReadinessStepProps) {
  return (
    <FormSection>
      <SectionTitle>What do you already have?</SectionTitle>
      <SectionDescription>
        Select any assets or resources you already have. This helps us
        understand what needs to be provided.
      </SectionDescription>

      <CheckboxList>
        {assetOptions.map((asset) => (
          <CheckboxItem key={asset.id}>
            <input
              type="checkbox"
              checked={selectedAssets.includes(asset.id)}
              onChange={() => onToggleAsset(asset.id)}
            />
            <span>{asset.label}</span>
          </CheckboxItem>
        ))}
      </CheckboxList>

      <div style={{ marginTop: "2.5rem" }}>
        <SectionTitle>When would you like to start?</SectionTitle>
        <SectionDescription>
          Choose your preferred timeline. We&apos;ll confirm a realistic
          delivery schedule after reviewing the project scope.
        </SectionDescription>

        <FormGroup>
          <label htmlFor="timeline">Preferred timeline</label>
          <select
            id="timeline"
            value={selectedTimeline}
            onChange={(event) => onTimelineChange(event.target.value)}
          >
            <option value="">Select a timeline</option>
            {timelines.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="budget">Estimated budget</label>
          <select
            id="budget"
            value={selectedBudget}
            onChange={(event) => onBudgetChange(event.target.value)}
          >
            <option value="">Select your budget</option>
            {budgets.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </FormGroup>
      </div>
    </FormSection>
  );
}
