// app/home/page.tsx  ← no "use client"
import NavBar from "@/components/layout/NavBar";
import HeroSection from "@/components/home/HeroSection";
import { ArrowRight } from "lucide-react";
import { GradientText } from "@/components/shared/Text.styled";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons.styled";
import heroImg from "@/assests/placeholder.jpg";
import SkillsSection from "@/components/home/SkillsSection";
import StoriesSection from "@/components/home/StoriesSection";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
import { PageWrapper } from "@/components/shared/Wrappers.styled";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allProjectsQuery } from "@/sanity/lib/queries";
import type { Project } from "@/lib/projects";

export default async function HomePage() {
  // ── Fetch on the server — no CORS, no useEffect ───────────────────────────
  const sanityProjects = await client.fetch(allProjectsQuery);

  const sanityWebRecent = sanityProjects.filter(
    (p: Project) => p.category?.categorySlug === "web-recent"
  );

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
              <Link href="/contact">
                <PrimaryButton>
                  Hire Me <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </PrimaryButton>
              </Link>
              <Link href="/stories">
                <SecondaryButton>View Stories</SecondaryButton>
              </Link>
            </>
          }
        />
        <AboutSection />
        <SkillsSection />
        <StoriesSection projects={sanityWebRecent} />
        <CTASection
          title="Let's turn ideas into real-world systems."
          description="Whether it's a web app, an IoT solution, or a technical challenge—I'd love to work with you."
        />
        <Footer />
      </main>
    </PageWrapper>
  );
}