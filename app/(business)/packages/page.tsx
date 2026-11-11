"use client";

import Link from "next/link";
import styled from "styled-components";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { brandingPackages, packages, addOns } from "@/data/services";

export default function Packages() {
  return (
    <main>
      <Hero>
        <Eyebrow>OUR SERVICES</Eyebrow>
        <HeroTitle>
          Build a brand and digital presence around your <Gradient>business goals.</Gradient>
        </HeroTitle>
        <HeroText>
          From a recognizable visual identity to a fully functional web
          application, choose a starting package and let&apos;s shape the right
          solution for you.
        </HeroText>
        <HeroActions>
          <PrimaryLink href="/booking">
            Start a project <ArrowRight size={17} />
          </PrimaryLink>
          <SecondaryLink href="#packages">Explore packages</SecondaryLink>
        </HeroActions>
      </Hero>

      <Section id="packages">
        <SectionHeading>
          <Eyebrow>PACKAGES</Eyebrow>
          <Heading>Find the right starting point</Heading>
          <Description>
            Explore design, branding, website, and application packages. Each
            provides a clear starting scope, with custom requirements discussed
            during consultation.
          </Description>
        </SectionHeading>

        <PackageGrid>
          {[...packages.filter((item) => item.service !== "brand-identity"), ...brandingPackages].map((item) => (
            <PackageCard key={item.id} $popular={item.popular}>
              <PackageCategory>
                {item.service === "brand-identity"
                  ? "DESIGN & BRANDING"
                  : "WEB & DIGITAL PRODUCTS"}
              </PackageCategory>
              {item.popular && <PopularTag>Popular choice</PopularTag>}

              <PackageName>{item.name}</PackageName>
              <PackageDescription>{item.description}</PackageDescription>

              <Price>{item.priceLabel}</Price>
              <Timeline>Estimated delivery: {item.timeline}</Timeline>

              <FeatureList>
                {item.features.map((feature) => (
                  <Feature key={feature}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </Feature>
                ))}
              </FeatureList>

              {"bestFor" in item && typeof item.bestFor === "string" && (
                <BestFor>
                  <strong>Best for</strong>
                  <span>{item.bestFor}</span>
                </BestFor>
              )}

              <PackageLink href={`/booking?service=${item.service}&package=${item.id}`}>
                {"buttonLabel" in item && typeof item.buttonLabel === "string"
                  ? item.buttonLabel
                  : "Choose this package"}{" "}
                <ArrowRight size={16} />
              </PackageLink>
            </PackageCard>
          ))}
        </PackageGrid>

        <Note>
          Final pricing and delivery dates are confirmed after reviewing your
          requirements. Domain registration, hosting, paid subscriptions, and
          third-party service fees are quoted separately unless stated otherwise.
        </Note>
      </Section>

      <Section $background>
        <SectionHeading>
          <Eyebrow>OPTIONAL EXTRAS</Eyebrow>
          <Heading>Extend your project with add-ons</Heading>
          <Description>
            Need something beyond the package? You can request additional
            functionality when submitting your project enquiry.
          </Description>
        </SectionHeading>

        <AddOnGrid>
          {addOns.map((group) => (
            <AddOnCard key={group.group}>
              <AddOnTitle>{group.group}</AddOnTitle>
              {group.items.map((item) => (
                <AddOnRow key={item.id}>
                  <span>{item.label}</span>
                  <AddOnPrice>
                    From ₦{item.price.toLocaleString("en-NG")}
                  </AddOnPrice>
                </AddOnRow>
              ))}
            </AddOnCard>
          ))}
        </AddOnGrid>

        <Note>
          Add-on prices are starting estimates. The final cost depends on
          complexity and whether the feature is already included in your package.
        </Note>
      </Section>

      <CTA>
        <Sparkles size={28} />
        <CTATitle>Not sure which package you need?</CTATitle>
        <CTAText>
          Tell me what you want to achieve. I&apos;ll help identify the right
          approach and recommend a suitable package.
        </CTAText>
        <PrimaryLink href="/booking">
          Discuss your project <ArrowRight size={17} />
        </PrimaryLink>
      </CTA>

      <Footer />
    </main>
  );
}

const PackageCategory = styled.span`
  margin-bottom: 0.75rem;
  color: #773bdb;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.04em;
`;

const BestFor = styled.div`
  display: grid;
  gap: 0.35rem;
  margin-top: 1rem;
  color: #6e6e78;
  font-size: 0.75rem;
  line-height: 1.5;
`;

const Hero = styled.section`
  padding: 3rem 1.5rem ;
  text-align: center;
  background: var(--sf-lavender, #f8fafc);
`;

const Eyebrow = styled.span`
  display: inline-block;
  color: var(--sf-primary, #667eea);
  background: var(--sf-primary-soft, rgba(102, 126, 234, 0.1));
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

const HeroTitle = styled.h1`
  max-width: 850px;
  margin: 1.5rem auto;
  color: var(--sf-ink, #111827);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  line-height: 1.12;
  font-weight: 800;
`;

const Gradient = styled.span`
  background: var(--gradient-primary);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const HeroText = styled.p`
  max-width: 650px;
  margin: 0 auto;
  color: var(--sf-muted, #6b7280);
  line-height: 1.8;
`;

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.9rem 1.3rem;
  border-radius: 0.75rem;
  color: white;
  background: var(--gradient-primary);
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SecondaryLink = styled(Link)`
  color: var(--sf-body, #4b5563);
  text-decoration: none;
  font-weight: 600;
  padding: 0.9rem 1rem;
`;

const Section = styled.section<{ $background?: boolean }>`
  padding: 5rem 1.5rem;
  background: ${(p) =>
    p.$background ? "var(--sf-lavender-soft, #f8fafc)" : "var(--sf-white, white)"};
`;

const SectionHeading = styled.div`
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: center;
`;

const Heading = styled.h2`
  color: var(--sf-ink, #111827);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin: 1rem 0;
`;

const Description = styled.p`
  color: var(--sf-muted, #6b7280);
  line-height: 1.7;
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  max-width: 1250px;
  margin: auto;
  align-items: stretch;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PackageCard = styled.article<{ $popular?: boolean }>`
  position: relative;
  padding: 2rem;
  border-radius: 1.25rem;
  border: 1px solid
    ${(p) => (p.$popular ? "var(--sf-primary, #667eea)" : "var(--sf-border, #e5e7eb)")};
  background: white;
  box-shadow: ${(p) =>
    p.$popular ? "0 12px 35px rgba(119,59,219,.12)" : "0 4px 20px rgba(0,0,0,.035)"};
  display: flex;
  flex-direction: column;
`;

const PopularTag = styled.span`
  align-self: flex-start;
  background: rgba(102, 126, 234, 0.1);
  color: var(--sf-primary, #667eea);
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PackageName = styled.h3`
  font-size: 1.3rem;
  color: var(--sf-ink, #111827);
  margin: 0 0 0.6rem;
`;

const PackageDescription = styled.p`
  color: var(--sf-muted, #6b7280);
  line-height: 1.6;
  min-height: 75px;
  font-size: 0.9rem;
`;

const Price = styled.p`
  color: var(--sf-ink, #111827);
  font-size: 1.8rem;
  font-weight: 800;
  margin: 1rem 0 0.3rem;
`;

const Timeline = styled.p`
  color: var(--sf-muted, #6b7280);
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  color: var(--sf-body, #4b5563);
  font-size: 0.875rem;
  line-height: 1.5;

  svg {
    color: var(--sf-primary, #667eea);
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const PackageLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: auto;
  padding: 0.9rem 1rem;
  border-radius: 0.7rem;
  color: var(--sf-primary, #667eea);
  border: 1px solid rgba(119, 59, 219, 0.35);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 700;

  &:hover {
    background: var(--sf-primary-soft, rgba(102, 126, 234, 0.07));
  }
`;

const Note = styled.p`
  max-width: 900px;
  margin: 2rem auto 0;
  color: var(--sf-muted, #6b7280);
  font-size: 0.85rem;
  line-height: 1.7;
  text-align: center;
`;

const AddOnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 1.25rem;
  max-width: 1100px;
  margin: auto;
`;

const AddOnCard = styled.article`
  background: var(--sf-white, white);
  border: 1px solid var(--sf-border, #e5e7eb);
  border-radius: 1rem;
  padding: 1.5rem;
`;

const AddOnTitle = styled.h3`
  color: var(--sf-ink, #111827);
  font-size: 1rem;
  margin: 0 0 1.2rem;
`;

const AddOnRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--sf-border, #f1f5f9);
  color: var(--sf-body, #4b5563);
  font-size: 0.83rem;

  &:last-child {
    border-bottom: 0;
  }
`;

const AddOnPrice = styled.span`
  white-space: nowrap;
  color: var(--sf-ink, #111827);
  font-weight: 700;
`;

const CTA = styled.section`
  padding: 5rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > svg {
    color: var(--sf-primary, #667eea);
  }
`;

const CTATitle = styled.h2`
  color: var(--sf-ink, #111827);
  font-size: 2rem;
  margin: 0;
`;

const CTAText = styled.p`
  max-width: 600px;
  color: var(--sf-muted, #6b7280);
  line-height: 1.7;
  margin: 0 0 1rem;
`;