"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  PageWrapper,
  HeroContainer,
  GradientOverlay,
  HeroContentWrapper,
  Container,
  ContentWrapper,
  Header,
} from "@/components/shared/Wrappers.styled";

import {
  BookingLayout,
  ProgressWrapper,
  ProgressStep,
  FormSection,
  SectionTitle,
  SectionDescription,
  SelectionGrid,
  SelectionCard,
  CardTitle,
  CardDescription,
  CardMeta,
  PopularLabel,
  FormGrid,
  FormGroup,
  CheckboxList,
  CheckboxItem,
  SummaryCard,
  SummaryRow,
  SummaryTotal,
  ButtonRow,
  PrimaryButton,
  SecondaryButton,
  Notice,
  MutedText,
} from "./BookingStyles";

import {
  services,
  packages,
  addOns,
  assets,
  timelines,
  budgets,
} from "@/data/services";

// Types for the data in services.ts
type ServiceOption = {
  id: string;
  label: string;
  description?: string;
};

type PackageOption = {
  id: string;
  service: string;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  timeline: string;
  features: string[];
  popular?: boolean;
};

type AddOnItem = {
  id: string;
  label: string;
  price: number;
};

type AddOnGroup = {
  group: string;
  items: AddOnItem[];
};

type ChoiceOption = {
  id: string;
  label: string;
};

type FormData = {
  projectName: string;
  projectDescription: string;
  targetAudience: string;
  existingWebsite: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
};

// Adapt the imported data to the types used by this page.
const serviceOptions = services as ServiceOption[];
const packageOptions = packages as PackageOption[];
const addOnGroups: AddOnGroup[] = addOns;
const assetOptions = assets as ChoiceOption[];

const initialFormData: FormData = {
  projectName: "",
  projectDescription: "",
  targetAudience: "",
  existingWebsite: "",
  fullName: "",
  email: "",
  phone: "",
  company: "",
};

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);

export default function BookingPage() {
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

  const [formData, setFormData] = useState<FormData>(initialFormData);

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

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
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

    const enquiry = {
      service: chosenService,
      package: chosenPackage ?? null,
      addOns: selectedAddOnItems,
      assets: selectedAssets,
      timeline: selectedTimeline,
      budget: selectedBudget,
      project: {
        name: formData.projectName,
        description: formData.projectDescription,
        targetAudience: formData.targetAudience,
        existingWebsite: formData.existingWebsite,
      },
      contact: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
      },
      estimatedTotal,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/project-enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiry),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong. Please try again."
        );
      }

      setSuccessMessage(
        "Your project enquiry has been submitted successfully. We'll review your requirements and get back to you."
      );

      setStep(5);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = [1, 2, 3, 4, 5];

  return (
    <PageWrapper>
      {/* Hero */}
      <HeroContainer>
        <GradientOverlay />

        <HeroContentWrapper>
          <h1>Lets Build Something Together</h1>
          <p>
            Tell us about your project. We will review your requirements and
            recommend the right solution for your business.
          </p>
        </HeroContentWrapper>
      </HeroContainer>

      {/* Booking form */}
      <Container>
        <ContentWrapper>
          <BookingLayout>
            {successMessage ? (
              <FormSection>
                <Header>
                  <SectionTitle>Enquiry Submitted!</SectionTitle>
                  <SectionDescription>{successMessage}</SectionDescription>
                </Header>

                <SummaryCard>
                  <SummaryRow>
                    <span>Service</span>
                    <strong>{chosenService?.label ?? "Not specified"}</strong>
                  </SummaryRow>

                  <SummaryRow>
                    <span>Package</span>
                    <strong>
                      {chosenPackage?.name ?? "To be discussed"}
                    </strong>
                  </SummaryRow>

                  <SummaryRow>
                    <span>Preferred timeline</span>
                    <strong>{selectedTimeline || "Not specified"}</strong>
                  </SummaryRow>
                </SummaryCard>

                <MutedText>
                  Your enquiry is not a confirmed booking. We will contact you
                  to discuss the scope, final pricing and next steps.
                </MutedText>
              </FormSection>
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
                  {progress.map((item) => (
                    <ProgressStep
                      key={item}
                      $active={step === item}
                      $completed={step > item}
                    />
                  ))}
                </ProgressWrapper>

                {errorMessage && <Notice $error>{errorMessage}</Notice>}

                {/* STEP 1: SERVICE */}
                {step === 1 && (
                  <FormSection>
                    <SectionTitle>What do you need?</SectionTitle>
                    <SectionDescription>
                      Select the type of service you are interested in.
                    </SectionDescription>

                    <SelectionGrid>
                      {serviceOptions.map((service) => (
                        <SelectionCard
                          type="button"
                          key={service.id}
                          $selected={selectedService === service.id}
                          onClick={() => {
                            setSelectedService(service.id);
                            setSelectedPackage("");
                            setSelectedAddOns([]);
                          }}
                        >
                          <CardTitle>{service.label}</CardTitle>
                          <CardDescription>
                            {service.description}
                          </CardDescription>
                        </SelectionCard>
                      ))}
                    </SelectionGrid>
                  </FormSection>
                )}

                {/* STEP 2: PACKAGE AND ADD-ONS */}
                {step === 2 && (
                  <FormSection>
                    <SectionTitle>Choose your package</SectionTitle>
                    <SectionDescription>
                      Select the package that best fits your needs. You can
                      also leave the decision to us.
                    </SectionDescription>

                    <SelectionGrid>
                      <SelectionCard
                        type="button"
                        $selected={selectedPackage === "unsure"}
                        onClick={() => setSelectedPackage("unsure")}
                      >
                        <CardTitle>I am not sure yet</CardTitle>
                        <CardDescription>
                          Help me choose the right solution based on my
                          requirements.
                        </CardDescription>
                      </SelectionCard>

                      {availablePackages.map((item) => (
                        <SelectionCard
                          type="button"
                          key={item.id}
                          $selected={selectedPackage === item.id}
                          onClick={() => setSelectedPackage(item.id)}
                        >
                          {item.popular && (
                            <PopularLabel>Popular choice</PopularLabel>
                          )}

                          <CardTitle>{item.name}</CardTitle>
                          <CardDescription>
                            {item.description}
                          </CardDescription>
                          <CardMeta>{item.priceLabel}</CardMeta>
                          <MutedText>{item.timeline}</MutedText>
                        </SelectionCard>
                      ))}
                    </SelectionGrid>

                    {chosenPackage && (
                      <div style={{ marginTop: "2rem" }}>
                        <SectionTitle>What&apos;s included?</SectionTitle>
                        <CheckboxList>
                          {chosenPackage.features.map((feature) => (
                            <CheckboxItem key={feature}>
                              <input type="checkbox" checked readOnly />
                              <span>{feature}</span>
                            </CheckboxItem>
                          ))}
                        </CheckboxList>
                      </div>
                    )}

                    <div style={{ marginTop: "2rem" }}>
                      <SectionTitle>Optional add-ons</SectionTitle>
                      <SectionDescription>
                        Select any additional features you&apos;d like us to
                        consider. We&apos;ll confirm which ones apply to your
                        selected package during the review.
                      </SectionDescription>

                      {addOnGroups.map((group) => (
                        <div key={group.group} style={{ marginBottom: "1.5rem" }}>
                          <CardTitle>{group.group}</CardTitle>

                          <CheckboxList>
                            {group.items.map((item) => (
                              <CheckboxItem key={item.id}>
                                <input
                                  type="checkbox"
                                  checked={selectedAddOns.includes(item.id)}
                                  onChange={() => toggleAddOn(item.id)}
                                />
                                <span>
                                  {item.label} — {formatCurrency(item.price)}
                                </span>
                              </CheckboxItem>
                            ))}
                          </CheckboxList>
                        </div>
                      ))}
                    </div>
                  </FormSection>
                )}

                {/* STEP 3: READINESS AND TIMELINE */}
                {step === 3 && (
                  <FormSection>
                    <SectionTitle>What do you already have?</SectionTitle>
                    <SectionDescription>
                      Select any assets or resources you already have. This
                      helps us understand what needs to be provided.
                    </SectionDescription>

                    <CheckboxList>
                      {assetOptions.map((asset) => (
                        <CheckboxItem key={asset.id}>
                          <input
                            type="checkbox"
                            checked={selectedAssets.includes(asset.id)}
                            onChange={() => toggleAsset(asset.id)}
                          />
                          <span>{asset.label}</span>
                        </CheckboxItem>
                      ))}
                    </CheckboxList>

                    <div style={{ marginTop: "2.5rem" }}>
                      <SectionTitle>When would you like to start?</SectionTitle>
                      <SectionDescription>
                        Choose your preferred timeline. We&apos;ll confirm a
                        realistic delivery schedule after reviewing the
                        project scope.
                      </SectionDescription>

                      <FormGroup>
                        <label htmlFor="timeline">Preferred timeline</label>
                        <select
                          id="timeline"
                          value={selectedTimeline}
                          onChange={(event) =>
                            setSelectedTimeline(event.target.value)
                          }
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
                          onChange={(event) =>
                            setSelectedBudget(event.target.value)
                          }
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
                )}

                {/* STEP 4: PROJECT DETAILS */}
                {step === 4 && (
                  <FormSection>
                    <SectionTitle>Tell us about your project</SectionTitle>
                    <SectionDescription>
                      Share some details about what you&apos;re trying to build and
                      the problem you&apos;re looking to solve.
                    </SectionDescription>

                    <FormGroup>
                      <label htmlFor="projectName">Project name *</label>
                      <input
                        id="projectName"
                        type="text"
                        placeholder="e.g. My Business Website"
                        value={formData.projectName}
                        onChange={(event) =>
                          updateFormData("projectName", event.target.value)
                        }
                      />
                    </FormGroup>

                    <FormGroup>
                      <label htmlFor="projectDescription">
                        Describe your project *
                      </label>
                      <textarea
                        id="projectDescription"
                        placeholder="What do you want us to build? What should it help your business achieve?"
                        value={formData.projectDescription}
                        onChange={(event) =>
                          updateFormData(
                            "projectDescription",
                            event.target.value
                          )
                        }
                      />
                    </FormGroup>

                    <FormGroup>
                      <label htmlFor="targetAudience">
                        Who is your target audience?
                      </label>
                      <input
                        id="targetAudience"
                        type="text"
                        placeholder="e.g. Small business owners, students, customers..."
                        value={formData.targetAudience}
                        onChange={(event) =>
                          updateFormData("targetAudience", event.target.value)
                        }
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
                        onChange={(event) =>
                          updateFormData("existingWebsite", event.target.value)
                        }
                      />
                    </FormGroup>
                  </FormSection>
                )}

                {/* STEP 5: CONTACT AND REVIEW */}
                {step === 5 && (
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
                          onChange={(event) =>
                            updateFormData("fullName", event.target.value)
                          }
                          placeholder="Your name"
                        />
                      </FormGroup>

                      <FormGroup>
                        <label htmlFor="email">Email address *</label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(event) =>
                            updateFormData("email", event.target.value)
                          }
                          placeholder="you@example.com"
                        />
                      </FormGroup>

                      <FormGroup>
                        <label htmlFor="phone">Phone number *</label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(event) =>
                            updateFormData("phone", event.target.value)
                          }
                          placeholder="+234..."
                        />
                      </FormGroup>

                      <FormGroup>
                        <label htmlFor="company">Business name</label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(event) =>
                            updateFormData("company", event.target.value)
                          }
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
                        <strong>
                          {chosenPackage
                            ? chosenPackage.priceLabel
                            : "To be confirmed"}
                        </strong>
                      </SummaryRow>

                      <SummaryRow>
                        <span>Selected add-ons</span>
                        <strong>
                          {selectedAddOnItems.length
                            ? formatCurrency(addOnTotal)
                            : "None"}
                        </strong>
                      </SummaryRow>

                      <SummaryRow>
                        <span>Preferred timeline</span>
                        <strong>{selectedTimeline}</strong>
                      </SummaryRow>

                      <SummaryTotal>
                        <span>Estimated total</span>
                        <strong>
                          {chosenPackage
                            ? formatCurrency(estimatedTotal)
                            : "Custom quote"}
                        </strong>
                      </SummaryTotal>

                      <MutedText>
                        This is an estimate, not a final quotation. Final
                        pricing will depend on the agreed project scope.
                        Domain, hosting and third-party subscription costs are
                        quoted separately where applicable.
                      </MutedText>
                    </SummaryCard>
                  </FormSection>
                )}

                <ButtonRow>
                  {step > 1 ? (
                    <SecondaryButton type="button" onClick={goToPreviousStep}>
                      Back
                    </SecondaryButton>
                  ) : (
                    <span />
                  )}

                  {step < 5 ? (
                    <PrimaryButton type="button" onClick={goToNextStep}>
                      Continue
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Project Enquiry"}
                    </PrimaryButton>
                  )}
                </ButtonRow>
              </>
            )}
          </BookingLayout>
        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
}