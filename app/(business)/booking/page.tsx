"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  PageWrapper,
  HeroContainer,
  GradientOverlay,
  Container,
  ContentWrapper,
  Header,
} from "@/components/shared/Wrappers.styled";
import BookingConfirmation from "./BookingConfirmation";
import BookingNavigation from "./BookingNavigation";
import BookingStepContent from "./BookingStepContent";
import {
  BookingLayout,
  BookingHeroContent,
  ProgressWrapper,
  ProgressStep,
  SectionTitle,
  SectionDescription,
  Notice,
} from "./BookingStyles";
import {
  addOnGroups,
  initialFormData,
  packageOptions,
  serviceOptions,
} from "./bookingData";
import { sendBookingEmail } from "./bookingEmail";
import type { BookingFormData } from "./bookingTypes";

function BookingForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(() => {
    const serviceFromUrl = searchParams.get("service");
    return (
      serviceOptions.find((service) => service.id === serviceFromUrl)?.id ?? ""
    );
  });
  const [selectedPackage, setSelectedPackage] = useState(() => {
    const packageFromUrl = searchParams.get("package");
    return packageOptions.find((item) => item.id === packageFromUrl)?.id ?? "";
  });
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const availablePackages = useMemo(
    () => packageOptions.filter((item) => item.service === selectedService),
    [selectedService]
  );
  const chosenService = serviceOptions.find(
    (item) => item.id === selectedService
  );
  const chosenPackage = packageOptions.find(
    (item) => item.id === selectedPackage
  );
  const selectedAddOnItems = addOnGroups.flatMap((group) =>
    group.items.filter((item) => selectedAddOns.includes(item.id))
  );
  const addOnTotal = selectedAddOnItems.reduce(
    (total, item) => total + item.price,
    0
  );
  const estimatedTotal = (chosenPackage?.price ?? 0) + addOnTotal;

  const updateFormData = (field: keyof BookingFormData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const toggleAsset = (id: string) => {
    setSelectedAssets((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const selectService = (serviceId: string) => {
    setSelectedService(serviceId);
    setSelectedPackage("");
    setSelectedAddOns([]);
  };

  const goToNextStep = () => {
    setErrorMessage("");

    if (step === 1 && !selectedService) {
      setErrorMessage("Please select the type of service you need.");
      return;
    }

    if (step === 2 && !selectedPackage) {
      setErrorMessage("Please select a package or choose 'I'm not sure'.");
      return;
    }

    if (step === 3 && !selectedTimeline) {
      setErrorMessage("Please select your preferred project timeline.");
      return;
    }

    if (step === 4) {
      if (!formData.projectName.trim()) {
        setErrorMessage("Please provide a project name.");
        return;
      }

      if (!formData.projectDescription.trim()) {
        setErrorMessage("Please describe what you want to build.");
        return;
      }
    }

    setStep((previous) => Math.min(previous + 1, 5));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousStep = () => {
    setErrorMessage("");
    setStep((previous) => Math.max(previous - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    setErrorMessage("");

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your phone number.");
      return;
    }

    try {
      setIsSubmitting(true);
      await sendBookingEmail({
        formData,
        serviceName: chosenService?.label,
        packageName:
          chosenPackage?.name ??
          (selectedPackage === "unsure"
            ? "To be recommended"
            : "Custom discussion"),
        addOns: selectedAddOnItems,
        selectedAssets,
        timeline: selectedTimeline,
        budget: selectedBudget,
        estimatedTotal,
        hasPackagePrice: Boolean(chosenPackage),
      });

      setSuccessMessage(
        "Your project enquiry has been submitted successfully. We'll review your requirements and get back to you."
      );
      setStep(5);
    } catch (error) {
      console.error("EmailJS booking submission error:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <HeroContainer>
        <GradientOverlay />
        <BookingHeroContent>
          <h1>Lets Build Something Together</h1>
          <p>
            Tell us about your project. We will review your requirements and
            recommend the right solution for your business.
          </p>
        </BookingHeroContent>
      </HeroContainer>

      <Container>
        <ContentWrapper>
          <BookingLayout>
            {successMessage ? (
              <BookingConfirmation
                message={successMessage}
                chosenService={chosenService}
                chosenPackage={chosenPackage}
                selectedTimeline={selectedTimeline}
              />
            ) : (
              <>
                <Header>
                  <SectionTitle>Project Enquiry</SectionTitle>
                  <SectionDescription>
                    Complete the steps below so we can understand your project
                    and prepare a suitable proposal.
                  </SectionDescription>
                </Header>

                <ProgressWrapper>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <ProgressStep
                      key={item}
                      $active={step === item}
                      $completed={step > item}
                    />
                  ))}
                </ProgressWrapper>

                {errorMessage && <Notice $error>{errorMessage}</Notice>}

                <BookingStepContent
                  step={step}
                  selectedService={selectedService}
                  selectedPackage={selectedPackage}
                  selectedAddOns={selectedAddOns}
                  selectedAssets={selectedAssets}
                  selectedTimeline={selectedTimeline}
                  selectedBudget={selectedBudget}
                  formData={formData}
                  availablePackages={availablePackages}
                  chosenService={chosenService}
                  chosenPackage={chosenPackage}
                  addOnTotal={addOnTotal}
                  estimatedTotal={estimatedTotal}
                  selectedAddOnCount={selectedAddOnItems.length}
                  onSelectService={selectService}
                  onSelectPackage={setSelectedPackage}
                  onToggleAddOn={toggleAddOn}
                  onToggleAsset={toggleAsset}
                  onTimelineChange={setSelectedTimeline}
                  onBudgetChange={setSelectedBudget}
                  onFormDataChange={updateFormData}
                />

                <BookingNavigation
                  step={step}
                  isSubmitting={isSubmitting}
                  onBack={goToPreviousStep}
                  onContinue={goToNextStep}
                  onSubmit={handleSubmit}
                />
              </>
            )}
          </BookingLayout>
        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}
