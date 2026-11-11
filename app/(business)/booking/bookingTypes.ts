export type ServiceOption = {
  id: string;
  label: string;
  description?: string;
};

export type PackageOption = {
  id: string;
  service: string;
  name: string;
  price: number | null;
  priceLabel: string;
  description: string;
  timeline: string;
  features: string[];
  popular?: boolean;
};

export type AddOnItem = {
  id: string;
  label: string;
  price: number;
};

export type AddOnGroup = {
  group: string;
  items: AddOnItem[];
};

export type ChoiceOption = {
  id: string;
  label: string;
};

export type BookingFormData = {
  projectName: string;
  projectDescription: string;
  targetAudience: string;
  existingWebsite: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
};
