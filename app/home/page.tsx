// app/home/page.tsx
"use client";

import NavBar from "@/components/layout/NavBar";
import HeroSection from "@/components/home/HeroSection";
import { ArrowRight } from "lucide-react";
import { GradientText } from "@/components/shared/Text.styled";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons.styled";
import heroImg from "@/assests/placeholder.jpg";
import SkillsSection from "@/components/home/SkillsSection";
import StoriesSection from "@/components/home/StoriesSection";
//import TutorialsSection from "@/components/home/TutorialsSection";
//import CountdownSection from "@/components/home/CountdownSection";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
import { PageWrapper } from "@/components/shared/Wrappers.styled";

export default function HomePage() {
  return (
    <PageWrapper>
      <NavBar />
      <main>
        <HeroSection
          badge="Fullstack Developer"
          title={
            <>
              PadoLabs — <GradientText>Building Ideas into</GradientText> Real-World Systems
            </>
          }
          description={
            <>
              {/* I&apos;m Dirisu Paul — I build and document projects across Embedded Systems,
              IoT, Web Development, and Machine Learning.
              <br />
              This is more than a portfolio — it&apos;s a lab for experimentation, growth,
              and innovation. */}
              I&apos;m Dirisu Paul — a fullstack developer building and documenting 
              web applications built by me and my journey as a developer.
            <br />
            This is more than a portfolio — it&apos;s a lab for experimentation, 
            growth, and innovation.

            </>
          }
          highlightText="Every project here tells a story of solving problems and learning by doing."
          image={heroImg}
          imageAlt="Abstract tech illustration"
          buttons={
            <>
              <PrimaryButton>
                Hire Me <ArrowRight size={18} style={{ marginLeft: "8px" }} />
              </PrimaryButton>
              <SecondaryButton>View Stories</SecondaryButton>
            </>
          }
        />
        {/* <CountdownSection /> */}
        <AboutSection />
        <SkillsSection />
        <StoriesSection />
        {/* <TutorialsSection /> */}
        <CTASection
          title="Let's turn ideas into real-world systems."
          description="Whether it's a web app, an IoT solution, or a technical challenge—I'd love to work with you."
        />
        <Footer />
      </main>
    </PageWrapper>
  );
}