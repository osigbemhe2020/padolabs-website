import { Header } from "@/components/shared/Wrappers.styled";
import {
  FormSection,
  SectionTitle,
  SectionDescription,
  SummaryCard,
  SummaryRow,
  MutedText,
} from "./BookingStyles";
import type { PackageOption, ServiceOption } from "./bookingTypes";

type BookingConfirmationProps = {
  message: string;
  chosenService: ServiceOption | undefined;
  chosenPackage: PackageOption | undefined;
  selectedTimeline: string;
};

export default function BookingConfirmation({
  message,
  chosenService,
  chosenPackage,
  selectedTimeline,
}: BookingConfirmationProps) {
  return (
    <FormSection>
      <Header>
        <SectionTitle>Enquiry Submitted!</SectionTitle>
        <SectionDescription>{message}</SectionDescription>
      </Header>

      <SummaryCard>
        <SummaryRow>
          <span>Service</span>
          <strong>{chosenService?.label ?? "Not specified"}</strong>
        </SummaryRow>
        <SummaryRow>
          <span>Package</span>
          <strong>{chosenPackage?.name ?? "To be discussed"}</strong>
        </SummaryRow>
        <SummaryRow>
          <span>Preferred timeline</span>
          <strong>{selectedTimeline || "Not specified"}</strong>
        </SummaryRow>
      </SummaryCard>

      <MutedText>
        Your enquiry is not a confirmed booking. We will contact you to discuss
        the scope, final pricing and next steps.
      </MutedText>
    </FormSection>
  );
}
