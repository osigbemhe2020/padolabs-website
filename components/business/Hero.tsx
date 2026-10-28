import Image from "next/image";
import styled from "styled-components";
import { Container, GhostLink, PrimaryLink } from "./shared";
import { ArrowUpRightIcon } from "./icons";
import heroMockup from "@/assests/hero-mockup.svg";

const HeroWrapper = styled.section`
  height: calc(100vh - 80px);
  height: calc(100svh - 80px);
  background: #EDE7F8;
  overflow: hidden;
`;

const HeroInner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 48px;
  height: 100%;
  padding: 32px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 16px;
    padding: 16px 0;
  }

  @media (max-height: 650px) {
    gap: 8px;
    padding: 8px 0;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  flex: 1 1 400px;
  min-width: 400px;
  max-width: 576px;

  @media (max-width: 480px) {
    min-width: 0;
  }

  @media (max-width: 1024px) {
    flex: 0 1 auto;
    width: 100%;
    min-width: 0;
  }
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 8px;
  background: #EDE7F8;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #773BDB;
  text-transform: uppercase;
`;

const HeroIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(38px, 4vw, 56px);
  font-weight: 700;
  line-height: 1.143;
  color: #111114;

  .accent {
    display: block;
    color: #773BDB;
  }

  @media (max-height: 650px) and (max-width: 1024px) {
    font-size: clamp(30px, 4vw, 38px);
  }
`;

const HeroBody = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: #62616D;

  @media (max-height: 650px) and (max-width: 1024px) {
    font-size: 15px;
    line-height: 22px;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const HeroNote = styled.p`
  margin: 0;
  align-self: stretch;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #62616D;

  @media (max-height: 650px) and (max-width: 1024px) {
    display: none;
  }
`;

const HeroVisual = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 400px;
  max-width: 576px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

//   @media (max-width: 1024px) {
//     flex: 0 1 auto;
//     width: 100%;
//     min-height: 0;
//     gap: 8px;

//     img {
//       width: auto;
//       max-width: 100%;
//       max-height: 24svh;
//       object-fit: contain;
//     }
//   }

//   @media (max-width: 480px) {
//     img {
//       max-height: 14svh;
//     }
//   }

//   @media (max-height: 650px) {
//     img {
//       max-height: 12svh;
//     }
//   }
// `;

const HeroCaption = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #62616D;

  @media (max-height: 650px) {
    display: none;
  }
`;

export const Hero = () => (
  <HeroWrapper>
    <HeroInner>
      <HeroContent>
        <Tag>Digital products, built with purpose</Tag>
        <HeroIntro>
          <HeroTitle>
            We turn ideas into <span className="accent">digital solutions.</span>
          </HeroTitle>
          <HeroBody>
            We design and build websites, web applications, and mobile products
            that help businesses solve real problems and move forward.
          </HeroBody>
        </HeroIntro>
        <HeroActions>
          <PrimaryLink href="#contact">
            Start a Project <ArrowUpRightIcon />
          </PrimaryLink>
          <GhostLink href="#work">
            Explore Our Work <ArrowUpRightIcon />
          </GhostLink>
        </HeroActions>
        <HeroNote>Strategy-led. User-focused. Built to scale.</HeroNote>
      </HeroContent>

      <HeroVisual>
        <Image
          src={heroMockup}
          alt="Concept website, career platform, and wellness mobile app by Solution Factory"
          width={576}
          height={450}
          priority
        />
        <HeroCaption>Illustrative product concepts by Solution Factory</HeroCaption>
      </HeroVisual>
    </HeroInner>
  </HeroWrapper>
);