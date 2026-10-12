"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  BookOpen,
  Clock,
  GraduationCap,
  Layers,
  Monitor,
  Send,
  Wrench,
} from "lucide-react";
import styled from "styled-components";
import { TitleText, GradientText, NormalText } from "@/components/shared/Text.styled";
import { PageWrapper, PageHeader } from "@/components/shared/Wrappers.styled";
import { courses } from "@/lib/data/courses";

const whyLearn = [
  {
    icon: Layers,
    title: "Practical Learning",
    description:
      "Every lesson is tied to a real-world task. You write code, solve problems, and build confidence through practice.",
  },
  {
    icon: Monitor,
    title: "Real Projects",
    description:
      "Work on projects that resemble production applications so your portfolio is ready by the time you finish.",
  },
  {
    icon: Wrench,
    title: "Industry Tools",
    description:
      "Use the same tools modern teams rely on: Git, VS Code, terminal workflows, and cloud deployment platforms.",
  },
];

const TutorialPage = () => {
  const [email, setEmail] = useState("");

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    alert("You're on the list! I'll reach out with course updates and schedules.");
    setEmail("");
  };

  return (
    <PageWrapper>
      <Navbar />

      {/* Hero */}
      <PageHeader>
        <TitleText>
          <GradientText>Courses</GradientText>
        </TitleText>
        <NormalText>Learn practical software development by building real-world projects</NormalText>
        <br />
        <PageAccent />
      </PageHeader>

      {/* Course Grid */}
      <Section>
        <SectionHeader>
          <TitleText>
            Available <GradientText>Programs</GradientText>
          </TitleText>
          <NormalText>
            Choose a path that fits your goals. Each program includes live sessions, assignments, and project reviews.
          </NormalText>
        </SectionHeader>

        <CourseGrid>
          {courses.map((course) => (
            <CourseCard key={course.title}>
              <CourseIcon>
                <BookOpen size={22} />
              </CourseIcon>
              <CourseMeta>
                <CourseLevel>{course.level}</CourseLevel>
                <CourseMetaDivider>•</CourseMetaDivider>
                <CourseDuration>{course.duration}</CourseDuration>
              </CourseMeta>
              <CourseTitle>{course.title}</CourseTitle>
              <CourseTagline>{course.tagline}</CourseTagline>
              <CourseDescription>{course.overview}</CourseDescription>
              <CourseDelivery>
                <Clock size={12} /> {course.delivery}
              </CourseDelivery>
              <CourseFooter>
                <CoursePrice>{course.price}</CoursePrice>
                <Link href={`/tutorial/${course.slug}`}>
                  <EnrollButton>
                    Enroll <ArrowRight size={14} className="ml-1" />
                  </EnrollButton>
                </Link>
              </CourseFooter>
            </CourseCard>
          ))}
        </CourseGrid>
      </Section>

      {/* Why Learn With Me */}
      <Section $backgroundColor="rgba(102, 126, 234, 0.05)">
        <SectionHeader>
          <TitleText>
            Why Learn <GradientText>With Me</GradientText>
          </TitleText>
          <NormalText>
            A learning experience built around doing, not just watching.
          </NormalText>
        </SectionHeader>

        <FeatureGrid>
          {whyLearn.map((item) => (
            <FeatureCard key={item.title}>
              <FeatureIcon>
                <item.icon size={26} />
              </FeatureIcon>
              <FeatureTitle>{item.title}</FeatureTitle>
              <FeatureDescription>{item.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Section>

      {/* CTA */}
      <CTASection>
        <CTAContent>
          <CTABackground />
          <CTAIcon>
            <GraduationCap size={28} />
          </CTAIcon>
          <CTATitle>Ready to start building?</CTATitle>
          <CTADescription>
            Join the next cohort and turn your learning into shipped projects.
          </CTADescription>
          <CTAButtons>
            <CTAButton href="#programs">
              View Course Details <ArrowRight size={16} className="ml-1" />
            </CTAButton>
            <ContactButton href="/contact">
              <Send size={16} className="mr-1" /> Contact Me
            </ContactButton>
          </CTAButtons>
          <NotifyForm onSubmit={handleNotify}>
            <EmailInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for updates"
            />
            <NotifyButton type="submit">Notify Me</NotifyButton>
          </NotifyForm>
        </CTAContent>
      </CTASection>

      <Footer />
    </PageWrapper>
  );
};

export default TutorialPage;

// ─── Styled Components ─────────────────────────────────────────────────────

const PageAccent = styled.div`
  width: 4rem;
  height: 0.25rem;
  margin: 0 auto;
  border-radius: 9999px;
  background: var(--gradient-primary);
`;

const Section = styled.section<{ $backgroundColor?: string }>`
  padding: 3rem 0;
  background: ${props => props.$backgroundColor || 'white'};

  @media (min-width: 1024px) {
    padding: 4rem 0;
  }
`;

const SectionHeader = styled.div`
  max-width: 42rem;
  margin: 0 auto 3.5rem;
  text-align: center;
`;

const CourseGrid = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CourseCard = styled.div`
  padding: 1.5rem;
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: hsl(var(--primary) / 0.3);
  }
`;

const CourseIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: hsl(var(--accent));
  color: hsl(var(--primary));
  margin-bottom: 1.25rem;
`;

const CourseMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const CourseLevel = styled.span`
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(var(--primary));
`;

const CourseMetaDivider = styled.span`
  color: hsl(var(--muted-foreground));
`;

const CourseDuration = styled.span`
  font-size: 0.6875rem;
  color: hsl(var(--muted-foreground));
`;

const CourseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: hsl(var(--foreground));
`;

const CourseTagline = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--primary));
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

const CourseDescription = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const CourseDelivery = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
  margin-bottom: 1.25rem;
`;

const CourseFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

const CoursePrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(var(--primary));
`;

const EnrollButton = styled.button`
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

const FeatureGrid = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  padding: 2rem;
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: hsl(var(--primary) / 0.3);
  }
`;

const FeatureIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: var(--gradient-primary);
  color: white;
  margin-bottom: 1.25rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: hsl(var(--foreground));
`;

const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  line-height: 1.625;
`;

const CTASection = styled.section`
  padding: 4rem 1.25rem;
`;

const CTAContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  border-radius: 1.5rem;
  background: var(--gradient-primary);
  padding: 3rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  @media (max-width: 640px) {
    padding: 2rem 1.5rem;
  }
`;

const CTABackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 25%;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    filter: blur(3rem);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 25%;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    filter: blur(3rem);
  }
`;

const CTAIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  margin-bottom: 1.5rem;
`;

const CTATitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const CTADescription = styled.p`
  max-width: 40rem;
  margin: 0 auto 2rem;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const CTAButton = styled.a`
  background: white;
  color: hsl(var(--foreground));
  border: none;
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const ContactButton = styled.a`
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const NotifyForm = styled.form`
  max-width: 28rem;
  margin: 0 auto;
  display: flex;
  gap: 0.5rem;
`;

const EmailInput = styled.input`
  flex: 1;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.875rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    ring: 2px solid rgba(255, 255, 255, 0.3);
  }
`;

const NotifyButton = styled.button`
  background: white;
  color: hsl(var(--primary));
  border: none;
  border-radius: 0.75rem;
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;
