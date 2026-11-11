import ServiceStep from "./ServiceStep";
import PackageStep from "./PackageStep";
import ReadinessStep from "./ReadinessStep";
import ProjectDetailsStep from "./ProjectDetailsStep";
import ContactReviewStep from "./ContactReviewStep";
import type {
  BookingFormData,
  PackageOption,
  ServiceOption,
} from "./bookingTypes";

type BookingStepContentProps = {
  step: number;
  selectedService: string;
  selectedPackage: string;
  selectedAddOns: string[];
  selectedAssets: string[];
  selectedTimeline: string;
  selectedBudget: string;
  formData: BookingFormData;
  availablePackages: PackageOption[];
  chosenService: ServiceOption | undefined;
  chosenPackage: PackageOption | undefined;
  addOnTotal: number;
  estimatedTotal: number;
  selectedAddOnCount: number;
  onSelectService: (serviceId: string) => void;
  onSelectPackage: (packageId: string) => void;
  onToggleAddOn: (addOnId: string) => void;
  onToggleAsset: (assetId: string) => void;
  onTimelineChange: (timeline: string) => void;
  onBudgetChange: (budget: string) => void;
  onFormDataChange: (field: keyof BookingFormData, value: string) => void;
};

export default function BookingStepContent({
  step,
  selectedService,
  selectedPackage,
  selectedAddOns,
  selectedAssets,
  selectedTimeline,
  selectedBudget,
  formData,
  availablePackages,
  chosenService,
  chosenPackage,
  addOnTotal,
  estimatedTotal,
  selectedAddOnCount,
  onSelectService,
  onSelectPackage,
  onToggleAddOn,
  onToggleAsset,
  onTimelineChange,
  onBudgetChange,
  onFormDataChange,
}: BookingStepContentProps) {
  switch (step) {
    case 1:
      return (
        <ServiceStep
          selectedService={selectedService}
          onSelectService={onSelectService}
        />
      );
    case 2:
      return (
        <PackageStep
          availablePackages={availablePackages}
          chosenPackage={chosenPackage}
          selectedPackage={selectedPackage}
          selectedAddOns={selectedAddOns}
          onSelectPackage={onSelectPackage}
          onToggleAddOn={onToggleAddOn}
        />
      );
    case 3:
      return (
        <ReadinessStep
          selectedAssets={selectedAssets}
          selectedTimeline={selectedTimeline}
          selectedBudget={selectedBudget}
          onToggleAsset={onToggleAsset}
          onTimelineChange={onTimelineChange}
          onBudgetChange={onBudgetChange}
        />
      );
    case 4:
      return (
        <ProjectDetailsStep
          formData={formData}
          onChange={onFormDataChange}
        />
      );
    case 5:
      return (
        <ContactReviewStep
          formData={formData}
          chosenService={chosenService}
          chosenPackage={chosenPackage}
          selectedPackage={selectedPackage}
          selectedTimeline={selectedTimeline}
          addOnTotal={addOnTotal}
          estimatedTotal={estimatedTotal}
          selectedAddOnCount={selectedAddOnCount}
          onChange={onFormDataChange}
        />
      );
    default:
      return null;
  }
}
