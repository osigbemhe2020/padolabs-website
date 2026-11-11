import {
  FormSection,
  SectionTitle,
  SectionDescription,
  SelectionGrid,
  SelectionCard,
  CardTitle,
  CardDescription,
} from "./BookingStyles";
import { serviceOptions } from "./bookingData";

type ServiceStepProps = {
  selectedService: string;
  onSelectService: (serviceId: string) => void;
};

export default function ServiceStep({
  selectedService,
  onSelectService,
}: ServiceStepProps) {
  return (
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
            onClick={() => onSelectService(service.id)}
          >
            <CardTitle>{service.label}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </SelectionCard>
        ))}
      </SelectionGrid>
    </FormSection>
  );
}
