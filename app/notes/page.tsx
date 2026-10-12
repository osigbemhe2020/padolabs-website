"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import styled from "styled-components";
import {
  Download,
  FileText,
  KeyRound,
  Lock,
  ShieldCheck,
  Sparkles,
  Unlock,
} from "lucide-react";
import { PageWrapper, HeroContainer, HeroContentWrapper, ContentWrapper, GradientOverlay } from "@/components/shared/Wrappers.styled";
import { TitleText, GradientText, NormalText } from "@/components/shared/Text.styled";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons.styled";

interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  premium: boolean;
  gradient: string;
  screenshots: string[];
}

const resources: Resource[] = [
  {
    id: "html",
    title: "HTML Notes",
    category: "Fundamentals",
    description:
      "A structured walkthrough of semantic HTML, forms, accessibility, and modern document structure — the foundation every developer needs.",
    premium: false,
    gradient: "from-primary/25 to-primary/5",
    screenshots: ["Semantic markup", "Forms & inputs", "Accessibility"],
  },
  {
    id: "css",
    title: "CSS Notes",
    category: "Fundamentals",
    description:
      "Learn layout, typography, and responsive design with practical CSS patterns used in real production apps.",
    premium: false,
    gradient: "from-purple-400/25 to-primary/5",
    screenshots: ["Flexbox & Grid", "Responsive design", "Modern layouts"],
  },
  {
    id: "sd-fundamentals",
    title: "Software Development Fundamentals",
    category: "Foundations",
    description:
      "Core concepts every developer should know: how the web works, version control basics, and the software delivery lifecycle.",
    premium: false,
    gradient: "from-fuchsia-400/25 to-primary/5",
    screenshots: ["How the web works", "Git essentials", "Dev workflow"],
  },
  {
    id: "react",
    title: "React Notes",
    category: "Frontend",
    description:
      "Deep dive into React components, hooks, state management, and building scalable UIs.",
    premium: true,
    gradient: "from-primary/30 to-purple-500/10",
    screenshots: ["Components & JSX", "Hooks in depth", "State patterns"],
  },
  {
    id: "nextjs",
    title: "Next.js Notes",
    category: "Frontend",
    description:
      "The App Router, server components, data fetching, and shipping production-ready Next.js applications.",
    premium: true,
    gradient: "from-purple-500/30 to-primary/10",
    screenshots: ["App Router", "Server actions", "Deployment"],
  },
  {
    id: "nodejs",
    title: "Node.js Notes",
    category: "Backend",
    description:
      "Server-side JavaScript, event loop, modules, and building REST APIs with Express.",
    premium: true,
    gradient: "from-primary/30 to-fuchsia-500/10",
    screenshots: ["Runtime & modules", "Express APIs", "Middleware"],
  },
  {
    id: "postgres",
    title: "PostgreSQL Notes",
    category: "Databases",
    description:
      "Relational data modeling, SQL patterns, indexes and performance for real applications.",
    premium: true,
    gradient: "from-fuchsia-500/30 to-primary/10",
    screenshots: ["Schema design", "Advanced SQL", "Indexing"],
  },
  {
    id: "docker",
    title: "Docker Guide",
    category: "DevOps",
    description:
      "Containerize applications, write clean Dockerfiles, and orchestrate services with docker-compose.",
    premium: true,
    gradient: "from-primary/25 to-purple-500/10",
    screenshots: ["Images & containers", "Dockerfile patterns", "Compose"],
  },
];

const ACCESS_CODE = "PADOLABS2026";

const Resources = () => {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [preview, setPreview] = useState<Resource | null>(null);

  const free = resources.filter((r) => !r.premium);
  const locked = resources.filter((r) => r.premium);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().toUpperCase() === ACCESS_CODE) {
      setUnlocked(true);
      alert("Resources unlocked - You now have full access to premium notes and guides.");
    } else {
      alert("Invalid access code - Double-check the code sent with your course welcome email.");
    }
  };

  const openPreview = (r: Resource) => {
    if (r.premium && !unlocked) {
      alert("Locked resource - Enter your course access code to unlock this resource.");
      return;
    }
    setPreview(r);
  };

  const handleDownload = (r: Resource) => {
    alert(`Preparing ${r.title} - Your download will begin shortly.`);
  };

  return (
    <PageWrapper>
      <Navbar />

      {/* Hero */}
      <HeroContainer>
        <GradientOverlay />
        <HeroContentWrapper>
          <Badge>
            <ShieldCheck size={14} /> Student portal
          </Badge>
          <TitleText>
            Course <GradientText>Resources</GradientText>
          </TitleText>
          <NormalText>
            Access your course materials, notes, and guides — everything you need to keep building after class.
          </NormalText>
        </HeroContentWrapper>
      </HeroContainer>

      {/* Access Code */}
      <AccessSection>
        <ContentWrapper>
          <AccessCard>
            <IconWrapper>
              {unlocked ? <Unlock size={22} /> : <KeyRound size={22} />}
            </IconWrapper>
            <AccessTitle>
              {unlocked ? "Access unlocked" : "Enter access code"}
            </AccessTitle>
            <AccessDescription>
              {unlocked
                ? "Premium resources are now available below."
                : "Use the code sent with your course welcome email to unlock premium notes."}
            </AccessDescription>

            <AccessForm onSubmit={handleUnlock}>
              <AccessInput
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                disabled={unlocked}
                placeholder="Enter Access Code"
                maxLength={40}
              />
              <AccessButton type="submit" disabled={unlocked}>
                {unlocked ? "Unlocked" : "Unlock Resources"}
              </AccessButton>
            </AccessForm>

            <PrivacyNote>
              <ShieldCheck size={13} />
              Your code stays private on this device.
            </PrivacyNote>
          </AccessCard>
        </ContentWrapper>
      </AccessSection>

      {/* Free Resources */}
      <ResourcesSection>
        <ContentWrapper>
          <SectionHeader>
            <SectionBadge>
              <Sparkles size={13} /> Free for everyone
            </SectionBadge>
            <SectionTitle>
              Free <GradientText>Resources</GradientText>
            </SectionTitle>
            <SectionDescription>
              Publicly available notes to help you get started with the fundamentals.
            </SectionDescription>
          </SectionHeader>

          <ResourcesGrid>
            {free.map((r) => (
              <ResourceCard key={r.id} resource={r} onClick={() => openPreview(r)} onDownload={() => handleDownload(r)} />
            ))}
          </ResourcesGrid>
        </ContentWrapper>
      </ResourcesSection>

      {/* Locked Resources */}
      <ResourcesSection>
        <ContentWrapper>
          <SectionHeader>
            <SectionBadge>
              <Lock size={13} /> Premium
            </SectionBadge>
            <SectionTitle>
              Course <GradientText>Materials</GradientText>
            </SectionTitle>
            <SectionDescription>
              {unlocked
                ? "Your access is active — dive into any resource below."
                : "Enrolled students get full access with their course code."}
            </SectionDescription>
          </SectionHeader>

          <ResourcesGrid>
            {locked.map((r) => (
              <ResourceCard
                key={r.id}
                resource={r}
                locked={!unlocked}
                onClick={() => openPreview(r)}
                onDownload={() => handleDownload(r)}
              />
            ))}
          </ResourcesGrid>
        </ContentWrapper>
      </ResourcesSection>

      {/* Preview modal */}
      {preview && (
        <ModalOverlay onClick={() => setPreview(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader $gradient={preview.gradient}>
              <ModalIcon>
                <FileText size={28} />
              </ModalIcon>
            </ModalHeader>
            <ModalBody>
              <ModalCategory>{preview.category}</ModalCategory>
              <ModalTitle>{preview.title}</ModalTitle>
              <ModalDescription>{preview.description}</ModalDescription>

              <ScreenshotsSection>
                <ScreenshotsTitle>Inside this resource</ScreenshotsTitle>
                <ScreenshotsGrid>
                  {preview.screenshots.map((s, i) => (
                    <Screenshot key={i} $gradient={preview.gradient}>
                      <ScreenshotText>{s}</ScreenshotText>
                    </Screenshot>
                  ))}
                </ScreenshotsGrid>
              </ScreenshotsSection>

              <ModalActions>
                <DownloadButton onClick={() => handleDownload(preview)}>
                  <Download size={16} />
                  Download PDF
                </DownloadButton>
                <CloseButton onClick={() => setPreview(null)}>
                  Close preview
                </CloseButton>
              </ModalActions>
              <DownloadNote>
                Full contents are provided as a downloadable PDF — not published on the site.
              </DownloadNote>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

      <Footer />
    </PageWrapper>
  );
};

interface ResourceCardProps {
  resource: Resource;
  locked?: boolean;
  onClick: () => void;
  onDownload: () => void;
}

const ResourceCard = ({ resource, locked, onClick, onDownload }: ResourceCardProps) => (
  <Card onClick={onClick}>
    <CardHeader $gradient={resource.gradient}>
      <CardIcon>
        {locked ? <Lock size={22} /> : <FileText size={22} />}
      </CardIcon>
      {locked && (
        <LockedBadge>
          <Lock size={10} /> Locked
        </LockedBadge>
      )}
    </CardHeader>
    <CardContent>
      <Category>{resource.category}</Category>
      <CardTitle>{resource.title}</CardTitle>
      <CardDescription>
        {locked ? "Unlock with course access." : resource.description}
      </CardDescription>
      <CardButton
        onClick={(e) => {
          e.stopPropagation();
          if (locked) {
            onClick();
            return;
          }
          onDownload();
        }}
        $locked={locked}
      >
        {locked ? (
          <>
            <Lock size={14} /> Locked
          </>
        ) : (
          <>
            <Download size={14} /> Download
          </>
        )}
      </CardButton>
    </CardContent>
  </Card>
);

export default Resources;

// Styled Components

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const AccessSection = styled.section`
  padding: 3rem 1rem;
  background: hsl(var(--background));
`;

const AccessCard = styled.div`
  max-width: 28rem;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  border-radius: 1.5rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: var(--gradient-primary);
  color: white;
  margin-bottom: 1.25rem;
`;

const AccessTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: hsl(var(--foreground));
`;

const AccessDescription = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  margin-bottom: 1.5rem;
`;

const AccessForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const AccessInput = styled.input`
  flex: 1;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  background: hsl(var(--background));
  border: 1px solid hsl(var(--input));
  color: hsl(var(--foreground));
  
  &::placeholder {
    color: hsl(var(--muted-foreground));
  }

  &:focus {
    outline: none;
    border-color: hsl(var(--primary));
    box-shadow: 0 0 0 2px hsl(var(--primary) / 0.2);
  }

  &:disabled {
    opacity: 0.6;
  }
`;

const AccessButton = styled(PrimaryButton)`
  height: 3rem;
  padding: 0 1.5rem;
`;

const PrivacyNote = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));

  svg {
    color: hsl(var(--primary));
  }
`;

const ResourcesSection = styled.section`
  padding: 3rem 1rem;
  background: hsl(var(--background));

  &:nth-child(even) {
    background: hsl(var(--secondary) / 0.3);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  text-align: left;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const SectionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: hsl(var(--primary));
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: hsl(var(--foreground));

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  max-width: 24rem;

  @media (min-width: 640px) {
    text-align: right;
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  cursor: pointer;
  border-radius: 1rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    border-color: hsl(var(--primary) / 0.3);
  }
`;

const CardHeader = styled.div<{ $gradient: string }>`
  position: relative;
  height: 9rem;
  background: linear-gradient(135deg, ${props => props.$gradient});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: hsl(var(--card) / 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid hsl(var(--border));
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(var(--primary));
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const LockedBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  background: hsl(var(--card) / 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid hsl(var(--border));
  font-size: 0.625rem;
  font-weight: 500;
  color: hsl(var(--primary));
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const Category = styled.div`
  font-size: 0.6875rem;
  font-weight: 500;
  color: hsl(var(--primary));
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: hsl(var(--foreground));
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardButton = styled.button<{ $locked?: boolean }>`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  ${props => props.$locked ? `
    background: transparent;
    border: 1px solid hsl(var(--border));
    color: hsl(var(--foreground));
  ` : `
    background: var(--gradient-primary);
    border: none;
    color: white;
  `}

  &:hover {
    ${props => props.$locked ? `
      background: hsl(var(--accent));
    ` : `
      opacity: 0.9;
    `}
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  max-width: 32rem;
  width: 100%;
  border-radius: 1.5rem;
  overflow: hidden;
  background: hsl(var(--background));
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalHeader = styled.div<{ $gradient: string }>`
  height: 10rem;
  background: linear-gradient(135deg, ${props => props.$gradient});
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: hsl(var(--background) / 0.4);
    backdrop-filter: blur(20px);
  }
`;

const ModalIcon = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const ModalCategory = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: hsl(var(--primary));
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: hsl(var(--foreground));
`;

const ModalDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: hsl(var(--muted-foreground));
  margin-bottom: 1.5rem;
`;

const ScreenshotsSection = styled.div`
  margin-top: 1.5rem;
`;

const ScreenshotsTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: hsl(var(--muted-foreground));
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
`;

const ScreenshotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;

const Screenshot = styled.div<{ $gradient: string }>`
  aspect-ratio: 4/3;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, ${props => props.$gradient});
  border: 1px solid hsl(var(--border));
  display: flex;
  align-items: flex-end;
  padding: 0.75rem;
`;

const ScreenshotText = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: hsl(var(--foreground) / 0.8);
`;

const ModalActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const DownloadButton = styled(PrimaryButton)`
  flex: 1;
`;

const CloseButton = styled(SecondaryButton)`
  flex: 1;
`;

const DownloadNote = styled.p`
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
  text-align: center;
  margin-top: 1rem;
`;
