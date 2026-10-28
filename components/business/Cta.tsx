import styled from "styled-components";
import { Container } from "./shared";
import { ArrowUpRightIcon } from "./icons";

const CtaSection = styled.section`
  background: #EDE7F8;
  padding: 0 0 96px;

  @media (max-width: 768px) {
    padding: 0 0 64px;
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  min-height: 246px;
  padding: 64px;
  background: #111114;
  border-radius: 16px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 32px;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 1 auto;
  max-width: 760px;
`;

const Eyebrow = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #EDE7F8;
`;

const BannerTitle = styled.h2`
  align-self: stretch;
  margin: 0;
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.222;
  color: #FFFFFF;
`;

const BannerBody = styled.p`
  align-self: stretch;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #C8C3D1;
`;

const BannerAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  gap: 8px;
  min-height: 48px;
  padding: 12px 24px;
  border-radius: 8px;
  background: #773BDB;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #6229C4;
    transform: translateY(-1px);
  }
`;

export const Cta = () => (
  <CtaSection id="contact">
    <Container>
      <Banner>
        <BannerContent>
          <Eyebrow>Let’s build what’s next</Eyebrow>
          <BannerTitle>Have an idea worth building?</BannerTitle>
          <BannerBody>
            Let&apos;s find the right digital solution for your business.
          </BannerBody>
        </BannerContent>
        <BannerAction href="mailto:hello@solutionfactory.io">
          Let&apos;s Talk About Your Project <ArrowUpRightIcon />
        </BannerAction>
      </Banner>
    </Container>
  </CtaSection>
);