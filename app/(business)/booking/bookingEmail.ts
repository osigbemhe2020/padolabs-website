import emailjs from "@emailjs/browser";
import { assetOptions, formatCurrency } from "./bookingData";
import type { AddOnItem, BookingFormData } from "./bookingTypes";

type BookingEmailDetails = {
  formData: BookingFormData;
  serviceName: string | undefined;
  packageName: string;
  addOns: AddOnItem[];
  selectedAssets: string[];
  timeline: string;
  budget: string;
  estimatedTotal: number;
  hasPackagePrice: boolean;
};

export async function sendBookingEmail({
  formData,
  serviceName,
  packageName,
  addOns,
  selectedAssets,
  timeline,
  budget,
  estimatedTotal,
  hasPackagePrice,
}: BookingEmailDetails) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "Email service is not configured. Please contact us directly."
    );
  }

  const templateParams = {
    from_name: formData.fullName.trim(),
    from_email: formData.email.trim(),
    subject: "Booking",
    message: [
      `Name: ${formData.fullName.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Business: ${formData.company.trim() || "Not provided"}`,
      "",
      `Service: ${serviceName ?? "Not specified"}`,
      `Package: ${packageName}`,
      `Selected add-ons: ${addOns.length ? addOns.map((item) => `${item.label} (${formatCurrency(item.price)})`).join(", ") : "None"}`,
      `Assets available: ${assetOptions.filter((asset) => selectedAssets.includes(asset.id)).map((asset) => asset.label).join(", ") || "None specified"}`,
      `Preferred timeline: ${timeline}`,
      `Budget: ${budget || "Not specified"}`,
      `Estimated total: ${hasPackagePrice ? formatCurrency(estimatedTotal) : "Custom quote"}`,
      "",
      `Project name: ${formData.projectName.trim()}`,
      `Project description: ${formData.projectDescription.trim()}`,
      `Target audience: ${formData.targetAudience.trim() || "Not provided"}`,
      `Existing website: ${formData.existingWebsite.trim() || "Not provided"}`,
    ].join("\n"),
  };

  await emailjs.send(serviceId, templateId, templateParams, publicKey);
}
