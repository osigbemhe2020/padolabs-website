import {
  FormSection,
  SectionTitle,
  SectionDescription,
  SelectionGrid,
  SelectionCard,
  CardTitle,
  CardDescription,
  CardMeta,
  PopularLabel,
  CheckboxList,
  CheckboxItem,
  MutedText,
  PackagesLink,
} from "./BookingStyles";
import { addOnGroups, formatCurrency } from "./bookingData";
import type { AddOnItem, PackageOption } from "./bookingTypes";

type PackageStepProps = {
  availablePackages: PackageOption[];
  chosenPackage: PackageOption | undefined;
  selectedPackage: string;
  selectedAddOns: string[];
  onSelectPackage: (packageId: string) => void;
  onToggleAddOn: (addOnId: string) => void;
};

export default function PackageStep({
  availablePackages,
  chosenPackage,
  selectedPackage,
  selectedAddOns,
  onSelectPackage,
  onToggleAddOn,
}: PackageStepProps) {
  const renderAddOn = (item: AddOnItem) => (
    <CheckboxItem key={item.id}>
      <input
        type="checkbox"
        checked={selectedAddOns.includes(item.id)}
        onChange={() => onToggleAddOn(item.id)}
      />
      <span>
        {item.label} — {formatCurrency(item.price)}
      </span>
    </CheckboxItem>
  );

  return (
    <FormSection>
      <SectionTitle>Choose your package</SectionTitle>
      <SectionDescription>
        Select the package that best fits your needs. You can also leave the
        decision to us.
      </SectionDescription>
      <PackagesLink href="/packages">
        View detailed package information →
      </PackagesLink>

      <SelectionGrid>
        <SelectionCard
          type="button"
          $selected={selectedPackage === "unsure"}
          onClick={() => onSelectPackage("unsure")}
        >
          <CardTitle>I am not sure yet</CardTitle>
          <CardDescription>
            Help me choose the right solution based on my requirements.
          </CardDescription>
        </SelectionCard>

        {availablePackages.map((item) => (
          <SelectionCard
            type="button"
            key={item.id}
            $selected={selectedPackage === item.id}
            onClick={() => onSelectPackage(item.id)}
          >
            {item.popular && <PopularLabel>Popular choice</PopularLabel>}
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
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
          Select any additional features you&apos;d like us to consider.
          We&apos;ll confirm which ones apply to your selected package during
          the review.
        </SectionDescription>

        {addOnGroups.map((group) => (
          <div key={group.group} style={{ marginBottom: "1.5rem" }}>
            <CardTitle>{group.group}</CardTitle>
            <CheckboxList>{group.items.map(renderAddOn)}</CheckboxList>
          </div>
        ))}
      </div>
    </FormSection>
  );
}
