import {
  ButtonRow,
  PrimaryButton,
  SecondaryButton,
} from "./BookingStyles";

type BookingNavigationProps = {
  step: number;
  isSubmitting: boolean;
  onBack: () => void;
  onContinue: () => void;
  onSubmit: () => void;
};

export default function BookingNavigation({
  step,
  isSubmitting,
  onBack,
  onContinue,
  onSubmit,
}: BookingNavigationProps) {
  return (
    <ButtonRow>
      {step > 1 ? (
        <SecondaryButton type="button" onClick={onBack}>
          Back
        </SecondaryButton>
      ) : (
        <span />
      )}

      {step < 5 ? (
        <PrimaryButton type="button" onClick={onContinue}>
          Continue
        </PrimaryButton>
      ) : (
        <PrimaryButton
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Project Enquiry"}
        </PrimaryButton>
      )}
    </ButtonRow>
  );
}
