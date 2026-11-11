import {
  services,
  packages,
  addOns,
  assets,
} from "@/data/services";

import type {
  AddOnGroup,
  BookingFormData,
  ChoiceOption,
  PackageOption,
  ServiceOption,
} from "./bookingTypes";

export const serviceOptions = services as ServiceOption[];
export const packageOptions = packages as PackageOption[];
export const addOnGroups: AddOnGroup[] = addOns;
export const assetOptions = assets as ChoiceOption[];

export const initialFormData: BookingFormData = {
  projectName: "",
  projectDescription: "",
  targetAudience: "",
  existingWebsite: "",
  fullName: "",
  email: "",
  phone: "",
  company: "",
};

export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
