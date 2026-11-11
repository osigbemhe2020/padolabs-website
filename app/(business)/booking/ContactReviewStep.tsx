import {
  FormSection,
  SectionTitle,
  SectionDescription,
  FormGrid,
  FormGroup,
  SummaryCard,
  SummaryRow,
  SummaryTotal,
  MutedText,
} from "./BookingStyles";
import { formatCurrency } from "./bookingData";
import type { BookingFormData, PackageOption, ServiceOption } from "./bookingTypes";

type ContactReviewStepProps = {
  formData: BookingFormData;
  chosenService: ServiceOption | undefined;
  chosenPackage: PackageOption | undefined;
  selectedPackage: string;
  selectedTimeline: string;
  addOnTotal: number;
  estimatedTotal: number;
  selectedAddOnCount: number;
  onChange: (field: keyof BookingFormData, value: string) => void;
};

export default function ContactReviewStep({
  formData,
  chosenService,
  chosenPackage,
  selectedPackage,
  selectedTimeline,
  addOnTotal,
  estimatedTotal,
  selectedAddOnCount,
  onChange,
}: ContactReviewStepProps) {
  return (
    <FormSection>
      <SectionTitle>Your contact details</SectionTitle>
      <SectionDescription>
        How can we reach you to discuss your project?
      </SectionDescription>

      <FormGrid>
        <FormGroup>
          <label htmlFor="fullName">Full name *</label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(event) => onChange("fullName", event.target.value)}
            placeholder="Your name"
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(event) => onChange("email", event.target.value)}
            placeholder="you@example.com"
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="phone">Phone number *</label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            placeholder="+234..."
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="company">Business name</label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(event) => onChange("company", event.target.value)}
            placeholder="Your business name"
          />
        </FormGroup>
      </FormGrid>

      <SummaryCard>
        <SectionTitle>Project summary</SectionTitle>

        <SummaryRow>
          <span>Service</span>
          <strong>{chosenService?.label}</strong>
        </SummaryRow>

        <SummaryRow>
          <span>Package</span>
          <strong>
            {chosenPackage?.name ??
              (selectedPackage === "unsure"
                ? "To be recommended"
                : "Custom discussion")}
          </strong>
        </SummaryRow>

        <SummaryRow>
          <span>Package price</span>
          <strong>{chosenPackage?.priceLabel ?? "To be confirmed"}</strong>
        </SummaryRow>

        <SummaryRow>
          <span>Selected add-ons</span>
          <strong>
            {selectedAddOnCount ? formatCurrency(addOnTotal) : "None"}
          </strong>
        </SummaryRow>

        <SummaryRow>
          <span>Preferred timeline</span>
          <strong>{selectedTimeline}</strong>
        </SummaryRow>

        <SummaryTotal>
          <span>Estimated total</span>
          <strong>
            {chosenPackage ? formatCurrency(estimatedTotal) : "Custom quote"}
          </strong>
        </SummaryTotal>

        <MutedText>
          This is an estimate, not a final quotation. Final pricing will depend
          on the agreed project scope. Domain, hosting and third-party
          subscription costs are quoted separately where applicable.
        </MutedText>
      </SummaryCard>
    </FormSection>
  );
}
