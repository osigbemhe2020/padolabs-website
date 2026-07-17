// components/layout/HeroSection.tsx
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowLeft,Sparkles } from "lucide-react";
import styled from "styled-components";
import { Title, Description,GradientText, } from "../shared/Text.styled";
import {
  HeroContainer,
  GradientOverlay,
  HeroContentWrapper,
  HeroGrid,
  TextContent,
} from "../shared/Wrappers.styled";

export interface HeroSectionProps {
  // Required
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description: React.ReactNode;
  image: StaticImageData | string;
  imageAlt: string;

  // Optional badge or tags, but not both
  badge?: string;
  badgeIcon?: React.ReactNode;
  tags?: string[];

  // Optional extras
  highlightText?: string;
  backLink?: { href: string; label: string };
  buttons?: React.ReactNode;
  timeline?: string;
  task?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  badge,
  tags,
  highlightText,
  backLink,
  buttons,
  timeline,
  task,
}: HeroSectionProps) => {
  return (
    <HeroContainer>
      <GradientOverlay />

      {backLink && (
        <BackLinkWrapper>
          <BackLink href={backLink.href}>
            <ArrowLeft size={16} /> {backLink.label}
          </BackLink>
        </BackLinkWrapper>
      )}

      <HeroContentWrapper>
        <HeroGrid>
          <TextContent>
            {/* Badge (home page style) */}

            {badge && (
              <Badge>
                <Sparkles size={14} />
                {badge}
              </Badge>
            )}

            {timeline && (
              <TimelineWrapper>
                <TimelineBadge>{task}</TimelineBadge>
                <TimelineSeparator>•</TimelineSeparator>
                <TimelineText>Timeline: {timeline}</TimelineText>
              </TimelineWrapper>
            )}
            
            <Title>{title}</Title>
            {subtitle && <HighlightText>{subtitle}</HighlightText>}
            <Description>{description}</Description>

            {tags && tags.length > 0 && (
              <>
              <TagsWrapper>
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsWrapper>
              </>
            )}

            {highlightText && <HighlightText>{highlightText}</HighlightText>}

            {buttons && <ButtonGroup>{buttons}</ButtonGroup>}
          </TextContent>

          <ImageWrapper>
            <HeroImage src={image} alt={imageAlt} fill />
          </ImageWrapper>
        </HeroGrid>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export const HeroSectionNoImage = () => {
    return (
      <HeroContainer>
        <HeroBackground>
          <HeroBlob style={{ top: "5rem", left: "25%", width: "18rem", height: "18rem" }} />
          <HeroBlobAccent style={{ top: "10rem", right: "20%", width: "24rem", height: "24rem" }} />
        </HeroBackground>

        <HeroContentWrapper>
          <Badge>
            <Sparkles size={14} /> Open for new opportunities
          </Badge>
          
          <HeroHeading>
            Let&apos;s Build <GradientText>Something Real</GradientText>
          </HeroHeading>
          <HeroCopy>
            Whether it&apos;s a web application, a product idea, or a technical challenge, I&apos;d love to hear about it.
          </HeroCopy>
          <HeroSubtext>
            Available for freelance, collaboration, and development opportunities.
          </HeroSubtext>
        </HeroContentWrapper>
      </HeroContainer>
    )
};

export default HeroSection;

// ─── Styled Components ────────────────────────────────────────────────────────

const BackLinkWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 20;
  @media (max-width: 768px) {
   top: 1.2rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(107, 114, 128, 1);
  font-weight: 500;
  transition: color 0.2s ease;
  &:hover { color: #667eea; }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  font-size: 0.75rem;
  font-weight: 500;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: var(--gradient-primary);
  color: white;
  font-weight: 500;
`;

const TimelineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: hsl(var(--muted-foreground));
`;

const TimelineBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
`;

const TimelineSeparator = styled.span``;

const TimelineText = styled.span``;

const HighlightText = styled.p`
  font-size: 1rem;
  color: #8b5cf6;
  font-weight: 500;
  max-width: 30rem;
  line-height: 1.4;
  margin-top: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 0.5rem;
`;

// In HeroSection.tsx, update ImageWrapper and HeroImage

const ImageWrapper = styled.div`
  position: relative;        /* required for fill mode */
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: none;
  animation: slideInRight 0.8s ease-out;
  height: 360px;             /* fill mode needs a defined height on the parent */

  @media (min-width: 1024px) {
    display: block;
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(50px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  border-radius: 1rem;
`;



const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const HeroBlob = styled.div`
  position: absolute;
  border-radius: 9999px;
  background: rgba(59, 130, 246, 0.18);
  filter: blur(4rem);
`;

const HeroBlobAccent = styled(HeroBlob)`
  background: rgba(168, 85, 247, 0.35);
`;





const HeroHeading = styled.h1`
  font-size: clamp(2.75rem, 4vw, 4.75rem);
  line-height: 1.02;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;

`;

const HeroCopy = styled.p`
  max-width: 48rem;
  margin: 0 auto 0.75rem;
  font-size: 1.125rem;
  color: rgba(15, 23, 42, 0.8);
  line-height: 1.8;
`;

const HeroSubtext = styled(Description)`
  margin: 0 auto;
  color: rgba(15, 23, 42, 0.72);
`;