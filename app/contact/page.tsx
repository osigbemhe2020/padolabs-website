'use client';

import { useState, type FormEvent } from "react";
import styled from "styled-components";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { HeroSectionNoImage } from "@/components/home/HeroSection";
import { Description, Title } from "@/components/shared/Text.styled";
import { Container, PageWrapper,ContentWrapper } from "@/components/shared/Wrappers.styled";
import { ContactForm } from "@/components/shared/ContactForm";
import { ContactMethodCard, ContactMethodsGrid } from "@/components/shared/ContactMethodCard";
import CTASection from "@/components/home/CTASection";
import { ContactInfoPanel } from "@/components/shared/ContactInfoPanel";
import { Mail, Github, Linkedin, Twitter, Clock,} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const contactMethods = [
  { icon: Mail, name: "Email", handle: "hello@padolabs.dev", note: "Best for project inquiries", href: "mailto:dirisupaul16@gmail.com" },
  { icon: Linkedin, name: "LinkedIn", handle: "/in/padolabs", note: "Let's connect professionally", href: "https://www.linkedin.com/in/paul-dirisu-61303019a/" },
  { icon: Github, name: "GitHub", handle: "@padolabs", note: "Explore my open source work", href: "https://github.com/osigbemhe2020" },
  { icon: Twitter, name: "Twitter / X", handle: "@padolabs", note: "Thoughts on dev & design", href: "#" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      toast.error(`Please check your inputs: ${result.error.issues[0].message}`);
      return;
    }

    setSubmitting(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Message sent successfully!");

      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <Navbar />

        <HeroSectionNoImage />

      <Section $backgroundColor="#f8fafc">
        <ContentWrapper>
          <TwoColumnGrid>
            <LeftColumn>
              <ContactInfoPanel
                title="Send a message"
                description="Tell me about your project, your team, or the problem you&apos;re trying to solve. The more context you share, the better I can help shape a meaningful response."
                heroIcon={Mail}
                infoIcon={Clock}
                infoTitle="Quick response"
                infoText="Typically responds within 24–48 hours."
              />
            </LeftColumn>

            <RightColumn>
              <ContactForm
                form={form}
                submitting={submitting}
                onChange={(field, value) => setForm({ ...form, [field]: value })}
                onSubmit={handleSubmit}
              />
            </RightColumn>
          </TwoColumnGrid>
        </ContentWrapper>
      </Section>

       <Section $backgroundColor="#eef2ff">
        <ContentWrapper>
          <CenterHeader>
            <SectionTitle>Or reach me directly</SectionTitle>
            <SectionDescription>Pick the channel that works best for you.</SectionDescription>
          </CenterHeader>

          <ContactMethodsGrid>
            {contactMethods.map(({ icon, name, note, href }) => (
              <ContactMethodCard
                key={name}
                icon={icon}
                name={name}
                note={note}
                href={href}
              />
            ))}
          </ContactMethodsGrid> 
        </ContentWrapper>
      </Section> 

     
          <CTASection
            title="Have an idea worth building?"
            description="Let's turn it into a real-world digital experience."
            buttonText="Start a Project"
          />
        

      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3200}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </PageWrapper>
  );
};

export default Contact;


const Section = styled(Container)<{ $backgroundColor?: string }>`
  background: ${(props) => props.$backgroundColor ?? "transparent"};
`;



const TwoColumnGrid = styled.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  display: grid;
  gap: 2rem;
`;

const RightColumn = styled.div``;

const CenterHeader = styled.div`
  display: grid;
  gap: 0.75rem;
  justify-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled(Title)`
  font-size: 2.25rem;
  margin-bottom: 0;
`;

const SectionDescription = styled(Description)`
  margin: 0;
  line-height: 1.75;
`;

