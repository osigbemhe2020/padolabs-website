"use client";

import { useState, type FormEvent } from "react";
import Footer from "@/components/layout/Footer";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Lightbulb,
  ClipboardList,
  Code2,
  Rocket,
  Globe,
  LayoutDashboard,
  ShoppingBag,
  MessageSquare,
  Sparkles,
  Check,
  ArrowRight,
  Send,
  Palette,
  Server,
  Link2,
  User,
  Building2,
  Mail,
  Phone,
  Calendar,
  Wallet,
  Users,
  CreditCard,
  Bell,
  Shield,
  ShoppingCart,
  Newspaper,
  Files,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  PageWrapper,
  Container,
  HeroContainer,
  GradientOverlay,
  HeroContentWrapper,
  ContentWrapper,
  Header,
} from "@/components/shared/Wrappers.styled";
import { TitleText, GradientText, NormalText } from "@/components/shared/Text.styled";

// ─── Data Definitions ──────────────────────────────────────────────────────────

const processSteps = [
  {
    step: "01",
    icon: Lightbulb,
    title: "Project Discovery",
    desc: "You share your project goals, vision, user needs, and timeline constraints.",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "We discuss your requirements, scope, architecture recommendations, and questions.",
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "Proposal & Roadmap",
    desc: "You receive a transparent quote, milestone breakdown, and deliverable commitments.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Development & Launch",
    desc: "We build in iterative sprints with staging previews, testing, and full launch support.",
  },
];

const serviceOptions = [
  { id: "business-website", label: "Business Website", icon: Globe, desc: "Fast marketing & brand sites" },
  { id: "web-app", label: "Web Application", icon: LayoutDashboard, desc: "SaaS platforms, dashboards & tools" },
  { id: "ecommerce", label: "E-Commerce Store", icon: ShoppingBag, desc: "Online stores & payment flows" },
  { id: "consultation", label: "Technical Consulting", icon: MessageSquare, desc: "Architecture, audits & advice" },
  { id: "other", label: "Custom Solution", icon: Sparkles, desc: "Bespoke digital product" },
];

const assetOptions = [
  { id: "design", label: "Design Mockups Ready", desc: "Figma, Sketch, or UI assets available", icon: Palette },
  { id: "domain", label: "Domain Name Registered", desc: "Custom domain already purchased", icon: Link2 },
  { id: "hosting", label: "Hosting / Cloud Setup", desc: "AWS, Vercel, or existing infrastructure", icon: Server },
];

const featureOptions = [
  { id: "contact-form", label: "Contact & Lead Form", icon: Mail },
  { id: "user-accounts", label: "User Authentication", icon: Users },
  { id: "dashboard", label: "Interactive Dashboard", icon: LayoutDashboard },
  { id: "blog", label: "Blog & Content Hub", icon: Newspaper },
  { id: "cms", label: "Headless CMS Integration", icon: Files },
  { id: "payments", label: "Payment Gateways (Stripe)", icon: CreditCard },
  { id: "booking", label: "Booking & Scheduling", icon: Calendar },
  { id: "notifications", label: "Email / In-app Alerts", icon: Bell },
  { id: "admin", label: "Admin Management Panel", icon: Shield },
  { id: "ecommerce", label: "Cart & Checkout Flow", icon: ShoppingCart },
];

const budgetOptions = [
  { id: "under-1k", label: "Under ₦960,000", desc: "Small MVP, landing page or prototype" },
  { id: "1k-3k", label: "₦960,000 – ₦2,800,000", desc: "Custom business site or lightweight app" },
  { id: "3k-7k", label: "₦2,800,000 – ₦6,400,000", desc: "Dynamic web application or CMS platform" },
  { id: "7k-plus", label: "₦6,400,000+", desc: "Full-scale product, custom APIs & system" },
];

const timelineOptions = [
  { id: "asap", label: "Urgent (1–2 Weeks)", desc: "Need expedited delivery" },
  { id: "1-month", label: "Standard (3–4 Weeks)", desc: "Typical milestone cycle" },
  { id: "1-3-months", label: "Extended (1–3 Months)", desc: "Complex or multi-phase product" },
  { id: "flexible", label: "Flexible Timing", desc: "Prioritize quality over speed" },
];

// ─── Component ─────────────────────────────────────────────────────────────────

const Booking = () => {
  const [service, setService] = useState("");
  const [assets, setAssets] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    building: "",
    problem: "",
    users: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const toggleAsset = (id: string) =>
    setAssets((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));

  const toggleFeature = (id: string) =>
    setFeatures((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!service) {
      toast.error("Please select a project service type (Step 01).");
      return;
    }
    if (!form.fullName.trim() || !form.email.trim()) {
      toast.error("Please enter your name and email address (Step 02).");
      return;
    }
    if (!form.email.includes("@")) {
      toast.error("Please provide a valid email address.");
      return;
    }
    if (!form.building.trim()) {
      toast.error("Please describe what you want to build (Step 03).");
      return;
    }
    if (!budget) {
      toast.error("Please pick a target budget range (Step 06).");
      return;
    }
    if (!timeline) {
      toast.error("Please select an estimated timeline (Step 07).");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      toast.success("Project request received! I'll review your details and get back to you within 24–48 hours.");
      setForm({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        building: "",
        problem: "",
        users: "",
      });
      setService("");
      setAssets([]);
      setFeatures([]);
      setBudget("");
      setTimeline("");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <main>
      <ToastContainer position="top-right" autoClose={4000} />

      {/* Hero Section */}
      <HeroContainer>
        <GradientOverlay />
        <HeroContentWrapper>
          <HeroBadge>
            <Sparkles size={14} /> Project Discovery &amp; Estimation
          </HeroBadge>
          <HeroTitle>
            Let&apos;s Turn Your Idea Into a <GradientText>Real-World Product</GradientText>
          </HeroTitle>
          <HeroDescription>
            Tell me about what you&apos;re building. I&apos;ll assess your technical requirements, recommend
            the most effective stack, and provide a clear timeline and quote.
          </HeroDescription>

          {/* Process Stepper */}
          <HeroStepperContainer>
            <StepperGrid>
              {[
                { icon: Lightbulb, label: "Idea", sub: "Vision & Scope" },
                { icon: ClipboardList, label: "Planning", sub: "System Design" },
                { icon: Code2, label: "Development", sub: "Clean Execution" },
                { icon: Rocket, label: "Launch", sub: "Scale & Support" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <StepperItem key={label}>
                  <StepperIconWrapper>
                    <Icon size={24} />
                    <StepperNumberBadge>{i + 1}</StepperNumberBadge>
                  </StepperIconWrapper>
                  <StepperTextWrapper>
                    <StepperLabel>{label}</StepperLabel>
                    <StepperSub>{sub}</StepperSub>
                  </StepperTextWrapper>
                </StepperItem>
              ))}
            </StepperGrid>
          </HeroStepperContainer>
        </HeroContentWrapper>
      </HeroContainer>

      {/* What Happens Next */}
      <Container $backgroundColor="#f8fafc">
        <ContentWrapper>
          <Header>
            <TitleText>
              What Happens <GradientText>Next</GradientText>
            </TitleText>
            <NormalText>
              A straightforward, transparent path from initial discovery to deployed product.
            </NormalText>
          </Header>

          <ProcessGrid>
            {processSteps.map((step) => (
              <ProcessCard key={step.step}>
                <StepBadge>{step.step}</StepBadge>
                <ProcessIconWrapper>
                  <step.icon size={22} />
                </ProcessIconWrapper>
                <ProcessTitle>{step.title}</ProcessTitle>
                <ProcessDescription>{step.desc}</ProcessDescription>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </ContentWrapper>
      </Container>

      {/* Booking Questionnaire Form */}
      <form onSubmit={handleSubmit}>
        {/* Step 01: Service Type */}
        <Container>
          <ContentWrapper>
            <Header>
              <SectionEyebrow>Step 01</SectionEyebrow>
              <TitleText>
                What Are You <GradientText>Looking to Build?</GradientText>
              </TitleText>
              <NormalText>Select the category that best matches your project goals.</NormalText>
            </Header>

            <ServiceGrid>
              {serviceOptions.map((opt) => {
                const selected = service === opt.id;
                return (
                  <SelectCard
                    key={opt.id}
                    type="button"
                    onClick={() => setService(opt.id)}
                    $selected={selected}
                  >
                    <SelectCardIcon $selected={selected}>
                      <opt.icon size={22} />
                    </SelectCardIcon>
                    <SelectCardTitle>{opt.label}</SelectCardTitle>
                    <SelectCardDesc>{opt.desc}</SelectCardDesc>
                    {selected && (
                      <SelectedIndicator>
                        <CheckCircle2 size={15} /> Selected
                      </SelectedIndicator>
                    )}
                  </SelectCard>
                );
              })}
            </ServiceGrid>
          </ContentWrapper>
        </Container>

        {/* Step 02: About You */}
        <Container $backgroundColor="linear-gradient(135deg, rgba(102, 126, 234, 0.04) 0%, rgba(118, 75, 162, 0.04) 100%)">
          <ContentWrapper>
            <Header>
              <SectionEyebrow>Step 02</SectionEyebrow>
              <TitleText>
                Tell Me About <GradientText>Yourself</GradientText>
              </TitleText>
              <NormalText>Basic contact information so I can get in touch with your proposal.</NormalText>
            </Header>

            <FormCardWrapper>
              <FormCardGrid>
                <FormGroup>
                  <FormLabel>
                    <User size={16} /> Full Name <span className="req">*</span>
                  </FormLabel>
                  <StyledInput
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    maxLength={100}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>
                    <Building2 size={16} /> Business / Organization
                  </FormLabel>
                  <StyledInput
                    type="text"
                    value={form.businessName}
                    onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                    placeholder="e.g. Acme Studio (optional)"
                    maxLength={100}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>
                    <Mail size={16} /> Email Address <span className="req">*</span>
                  </FormLabel>
                  <StyledInput
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@company.com"
                    maxLength={255}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>
                    <Phone size={16} /> Phone / WhatsApp
                  </FormLabel>
                  <StyledInput
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000 (optional)"
                    maxLength={30}
                  />
                </FormGroup>
              </FormCardGrid>
            </FormCardWrapper>
          </ContentWrapper>
        </Container>

        {/* Step 03: Project Vision & Scope */}
        <Container>
          <ContentWrapper>
            <Header>
              <SectionEyebrow>Step 03</SectionEyebrow>
              <TitleText>
                Project <GradientText>Scope &amp; Goals</GradientText>
              </TitleText>
              <NormalText>The more detail you provide, the more precise and actionable the proposal will be.</NormalText>
            </Header>

            <QuestionsStack>
              <QuestionBox>
                <QuestionHeader>
                  <QuestionNumber>A</QuestionNumber>
                  <div>
                    <QuestionTitle>What are you building?</QuestionTitle>
                    <QuestionSubtitle>Briefly summarize the product, core functionality, or redesign.</QuestionSubtitle>
                  </div>
                </QuestionHeader>
                <StyledTextarea
                  value={form.building}
                  onChange={(e) => setForm({ ...form, building: e.target.value })}
                  placeholder="e.g. A multi-tenant SaaS dashboard where teams can manage customer workflows, schedule automated reports, and collect Stripe payments..."
                  rows={4}
                  maxLength={1000}
                  required
                />
              </QuestionBox>

              <QuestionBox>
                <QuestionHeader>
                  <QuestionNumber>B</QuestionNumber>
                  <div>
                    <QuestionTitle>What problem does it solve?</QuestionTitle>
                    <QuestionSubtitle>What is the main pain point, bottleneck, or opportunity?</QuestionSubtitle>
                  </div>
                </QuestionHeader>
                <StyledTextarea
                  value={form.problem}
                  onChange={(e) => setForm({ ...form, problem: e.target.value })}
                  placeholder="e.g. Currently our team spends 15 hours a week handling spreadsheets manually. We need a reliable web application that centralizes data..."
                  rows={3}
                  maxLength={1000}
                />
              </QuestionBox>

              <QuestionBox>
                <QuestionHeader>
                  <QuestionNumber>C</QuestionNumber>
                  <div>
                    <QuestionTitle>Who is the target audience?</QuestionTitle>
                    <QuestionSubtitle>Who will use this platform day-to-day?</QuestionSubtitle>
                  </div>
                </QuestionHeader>
                <StyledTextarea
                  value={form.users}
                  onChange={(e) => setForm({ ...form, users: e.target.value })}
                  placeholder="e.g. Mid-sized agencies, marketing professionals, and internal operations staff..."
                  rows={3}
                  maxLength={1000}
                />
              </QuestionBox>
            </QuestionsStack>
          </ContentWrapper>
        </Container>

        {/* Step 04: Existing Assets */}
        <Container $backgroundColor="#f8fafc">
          <ContentWrapper>
            <Header>
              <SectionEyebrow>Step 04</SectionEyebrow>
              <TitleText>
                Existing <GradientText>Assets &amp; Readiness</GradientText>
              </TitleText>
              <NormalText>Check off anything you already have prepared or in place.</NormalText>
            </Header>

            <AssetsGrid>
              {assetOptions.map((opt) => {
                const selected = assets.includes(opt.id);
                return (
                  <AssetCard
                    key={opt.id}
                    type="button"
                    onClick={() => toggleAsset(opt.id)}
                    $selected={selected}
                  >
                    <AssetIconWrapper $selected={selected}>
                      <opt.icon size={22} />
                    </AssetIconWrapper>
                    <AssetTextWrapper>
                      <AssetTitle>{opt.label}</AssetTitle>
                      <AssetDesc>{opt.desc}</AssetDesc>
                    </AssetTextWrapper>
                    <CheckboxIndicator $selected={selected}>
                      {selected ? <Check size={14} /> : null}
                    </CheckboxIndicator>
                  </AssetCard>
                );
              })}
            </AssetsGrid>
          </ContentWrapper>
        </Container>

        {/* Step 05: Key Features */}
        <Container>
          <ContentWrapper>
            <Header>
              <SectionEyebrow>Step 05</SectionEyebrow>
              <TitleText>
                Key <GradientText>Features Needed</GradientText>
              </TitleText>
              <NormalText>Select all functional modules you envision for this release.</NormalText>
            </Header>

            <FeaturesGrid>
              {featureOptions.map((opt) => {
                const selected = features.includes(opt.id);
                return (
                  <FeatureCard
                    key={opt.id}
                    type="button"
                    onClick={() => toggleFeature(opt.id)}
                    $selected={selected}
                  >
                    <FeatureIconWrapper $selected={selected}>
                      <opt.icon size={20} />
                    </FeatureIconWrapper>
                    <FeatureName>{opt.label}</FeatureName>
                    <FeatureCheckBadge $selected={selected}>
                      {selected ? <Check size={12} /> : "+"}
                    </FeatureCheckBadge>
                  </FeatureCard>
                );
              })}
            </FeaturesGrid>
          </ContentWrapper>
        </Container>

        {/* Step 06: Budget & Step 07: Timeline Combined */}
        <Container $backgroundColor="linear-gradient(135deg, rgba(102, 126, 234, 0.04) 0%, rgba(118, 75, 162, 0.04) 100%)">
          <ContentWrapper>
            {/* Budget */}
            <Header>
              <SectionEyebrow>Step 06</SectionEyebrow>
              <TitleText>
                Target <GradientText>Budget Range</GradientText>
              </TitleText>
              <NormalText>An estimated budget allows me to scope features realistically and optimize cost.</NormalText>
            </Header>

            <BudgetGrid>
              {budgetOptions.map((opt) => {
                const selected = budget === opt.id;
                return (
                  <BudgetCard
                    key={opt.id}
                    type="button"
                    onClick={() => setBudget(opt.id)}
                    $selected={selected}
                  >
                    <BudgetHeader>
                      <Wallet size={20} color={selected ? "#667eea" : "#9ca3af"} />
                      {selected && <CheckCircle2 size={16} color="#667eea" />}
                    </BudgetHeader>
                    <BudgetPrice>{opt.label}</BudgetPrice>
                    <BudgetDesc>{opt.desc}</BudgetDesc>
                  </BudgetCard>
                );
              })}
            </BudgetGrid>

            {/* Timeline */}
            <div style={{ marginTop: "4.5rem" }}>
              <Header>
                <SectionEyebrow>Step 07</SectionEyebrow>
                <TitleText>
                  Expected <GradientText>Launch Window</GradientText>
                </TitleText>
                <NormalText>When are you aiming to have this product live in production?</NormalText>
              </Header>

              <TimelineGrid>
                {timelineOptions.map((opt) => {
                  const selected = timeline === opt.id;
                  return (
                    <TimelineCard
                      key={opt.id}
                      type="button"
                      onClick={() => setTimeline(opt.id)}
                      $selected={selected}
                    >
                      <TimelineHeader>
                        <Calendar size={20} color={selected ? "#667eea" : "#9ca3af"} />
                        {selected && <CheckCircle2 size={16} color="#667eea" />}
                      </TimelineHeader>
                      <TimelineTitle>{opt.label}</TimelineTitle>
                      <TimelineDesc>{opt.desc}</TimelineDesc>
                    </TimelineCard>
                  );
                })}
              </TimelineGrid>
            </div>
          </ContentWrapper>
        </Container>

        {/* Final Submission Card */}
        <Container>
          <ContentWrapper>
            <SubmitCTAWrapper>
              <SubmitCTACard>
                <SubmitCTAIcon>
                  <ShieldCheck size={36} />
                </SubmitCTAIcon>
                <SubmitCTATitle>Ready to Bring Your Idea to Life?</SubmitCTATitle>
                <SubmitCTADesc>
                  I personally review every inquiry and reply within 24 to 48 hours with a breakdown,
                  recommended stack, and available start date.
                </SubmitCTADesc>
                <SubmitButton type="submit" disabled={submitting}>
                  <Send size={18} />
                  <span>{submitting ? "Submitting Request..." : "Submit Project Discovery Request"}</span>
                  <ArrowRight size={18} />
                </SubmitButton>
              </SubmitCTACard>
            </SubmitCTAWrapper>
          </ContentWrapper>
        </Container>
      </form>

      <Footer />
    </main>
  );
};

export default Booking;

// ─── Styled Components ────────────────────────────────────────────────────────

const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  font-size: 0.825rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  color: #111827;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 2.85rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.25rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.65;
  color: #4b5563;
  max-width: 40rem;
  margin: 0 auto 2.5rem;
`;

const HeroStepperContainer = styled.div`
  max-width: 900px;
  margin: 1rem auto 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 1.75rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const StepperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StepperItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StepperIconWrapper = styled.div`
  position: relative;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 1rem;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.3);
`;

const StepperNumberBadge = styled.span`
  position: absolute;
  top: -0.35rem;
  right: -0.35rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: white;
  color: #667eea;
  font-size: 0.7rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

const StepperTextWrapper = styled.div`
  text-align: left;
`;

const StepperLabel = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

const StepperSub = styled.p`
  font-size: 0.775rem;
  color: #6b7280;
  margin: 0.15rem 0 0;
`;

// Section Eyebrows
const SectionEyebrow = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  width: fit-content;
  margin: 0 auto 0.5rem;
  display: inline-block;
`;

// Process Section
const ProcessGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProcessCard = styled.div`
  position: relative;
  background: white;
  border-radius: 1.25rem;
  padding: 2.25rem 1.5rem 1.75rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(102, 126, 234, 0.12);
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

const StepBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  padding: 0.2rem 0.55rem;
  border-radius: 9999px;
`;

const ProcessIconWrapper = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.875rem;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 6px 18px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease;

  ${ProcessCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProcessTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const ProcessDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.55;
  color: #6b7280;
`;

// Service Cards Grid
const ServiceGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const SelectCard = styled.button<{ $selected?: boolean }>`
  background: ${(props) =>
    props.$selected
      ? "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)"
      : "white"};
  border: 2px solid ${(props) => (props.$selected ? "#667eea" : "#e5e7eb")};
  border-radius: 1.25rem;
  padding: 1.75rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${(props) =>
    props.$selected
      ? "0 10px 28px rgba(102, 126, 234, 0.2)"
      : "0 4px 16px rgba(0, 0, 0, 0.04)"};

  &:hover {
    transform: translateY(-4px);
    border-color: #667eea;
    box-shadow: 0 12px 28px rgba(102, 126, 234, 0.15);
  }
`;

const SelectCardIcon = styled.div<{ $selected?: boolean }>`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 1rem;
  background: ${(props) => (props.$selected ? "var(--gradient-primary)" : "rgba(102, 126, 234, 0.1)")};
  color: ${(props) => (props.$selected ? "white" : "#667eea")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.25s ease;
`;

const SelectCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.35rem;
`;

const SelectCardDesc = styled.p`
  font-size: 0.775rem;
  line-height: 1.45;
  color: #6b7280;
  margin: 0;
`;

const SelectedIndicator = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.85rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #667eea;
`;

// About You Form Cards
const FormCardWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 2.25rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 640px) {
    padding: 1.5rem 1.25rem;
  }
`;

const FormCardGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;

  .req {
    color: #ef4444;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1.5px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.85rem 1rem;
  font-size: 0.925rem;
  color: #111827;
  background: #f9fafb;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.15);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

// Project Questions
const QuestionsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 850px;
  margin: 0 auto;
`;

const QuestionBox = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1.25rem;
  padding: 1.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  text-align: left;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const QuestionNumber = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: var(--gradient-primary);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const QuestionTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.2rem 0;
`;

const QuestionSubtitle = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1.5px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.85rem 1rem;
  font-size: 0.925rem;
  color: #111827;
  background: #f9fafb;
  font-family: inherit;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.15);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

// Assets Grid
const AssetsGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AssetCard = styled.button<{ $selected?: boolean }>`
  background: ${(props) =>
    props.$selected
      ? "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)"
      : "white"};
  border: 2px solid ${(props) => (props.$selected ? "#667eea" : "#e5e7eb")};
  border-radius: 1.25rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${(props) =>
    props.$selected
      ? "0 8px 24px rgba(102, 126, 234, 0.18)"
      : "0 4px 16px rgba(0, 0, 0, 0.04)"};

  &:hover {
    transform: translateY(-3px);
    border-color: #667eea;
  }
`;

const AssetIconWrapper = styled.div<{ $selected?: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 0.875rem;
  background: ${(props) => (props.$selected ? "var(--gradient-primary)" : "rgba(102, 126, 234, 0.1)")};
  color: ${(props) => (props.$selected ? "white" : "#667eea")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const AssetTextWrapper = styled.div`
  flex: 1;
`;

const AssetTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.2rem 0;
`;

const AssetDesc = styled.p`
  font-size: 0.775rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
`;

const CheckboxIndicator = styled.div<{ $selected?: boolean }>`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.$selected ? "#667eea" : "#d1d5db")};
  background: ${(props) => (props.$selected ? "var(--gradient-primary)" : "transparent")};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

// Features Grid
const FeaturesGrid = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const FeatureCard = styled.button<{ $selected?: boolean }>`
  background: ${(props) =>
    props.$selected
      ? "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)"
      : "white"};
  border: 1.5px solid ${(props) => (props.$selected ? "#667eea" : "#e5e7eb")};
  border-radius: 1rem;
  padding: 1.25rem 0.85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: all 0.25s ease;
  box-shadow: ${(props) =>
    props.$selected
      ? "0 6px 20px rgba(102, 126, 234, 0.16)"
      : "0 2px 10px rgba(0, 0, 0, 0.03)"};

  &:hover {
    transform: translateY(-3px);
    border-color: #667eea;
  }
`;

const FeatureIconWrapper = styled.div<{ $selected?: boolean }>`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: ${(props) => (props.$selected ? "var(--gradient-primary)" : "rgba(102, 126, 234, 0.1)")};
  color: ${(props) => (props.$selected ? "white" : "#667eea")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
`;

const FeatureName = styled.span`
  font-size: 0.825rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.35;
`;

const FeatureCheckBadge = styled.span<{ $selected?: boolean }>`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 50%;
  background: ${(props) => (props.$selected ? "#667eea" : "#f3f4f6")};
  color: ${(props) => (props.$selected ? "white" : "#9ca3af")};
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Budget & Timeline
const BudgetGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const BudgetCard = styled.button<{ $selected?: boolean }>`
  background: ${(props) =>
    props.$selected
      ? "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)"
      : "white"};
  border: 2px solid ${(props) => (props.$selected ? "#667eea" : "#e5e7eb")};
  border-radius: 1.25rem;
  padding: 1.75rem 1.35rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${(props) =>
    props.$selected
      ? "0 10px 28px rgba(102, 126, 234, 0.2)"
      : "0 4px 16px rgba(0, 0, 0, 0.04)"};

  &:hover {
    transform: translateY(-4px);
    border-color: #667eea;
  }
`;

const BudgetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const BudgetPrice = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.4rem;
`;

const BudgetDesc = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
  line-height: 1.45;
  margin: 0;
`;

const TimelineGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TimelineCard = styled.button<{ $selected?: boolean }>`
  background: ${(props) =>
    props.$selected
      ? "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)"
      : "white"};
  border: 2px solid ${(props) => (props.$selected ? "#667eea" : "#e5e7eb")};
  border-radius: 1.25rem;
  padding: 1.75rem 1.35rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${(props) =>
    props.$selected
      ? "0 10px 28px rgba(102, 126, 234, 0.2)"
      : "0 4px 16px rgba(0, 0, 0, 0.04)"};

  &:hover {
    transform: translateY(-4px);
    border-color: #667eea;
  }
`;

const TimelineHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.4rem;
`;

const TimelineDesc = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
  line-height: 1.45;
  margin: 0;
`;

// Bottom Submit CTA
const SubmitCTAWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SubmitCTACard = styled.div`
  background: var(--gradient-primary);
  border-radius: 1.75rem;
  padding: 3.5rem 2.5rem;
  color: white;
  text-align: center;
  box-shadow: 0 20px 48px rgba(102, 126, 234, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    padding: 2.5rem 1.5rem;
  }
`;

const SubmitCTAIcon = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SubmitCTATitle = styled.h2`
  font-size: 1.85rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.85rem;

  @media (min-width: 640px) {
    font-size: 2.35rem;
  }
`;

const SubmitCTADesc = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 32rem;
  margin: 0 auto 2rem;
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 1rem 2.25rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
