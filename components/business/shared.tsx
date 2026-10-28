import Image from "next/image";
import styled from "styled-components";
import logo from "@/assests/logo.svg";
import logoText from "@/assests/logo-text.svg";

export const Container = styled.div`
  width: min(1200px, 100% - 48px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

export const Section = styled.section<{ $background?: string }>`
  padding: 96px 0;
  background: ${({ $background }) => $background ?? "#FFFFFF"};

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

export const Eyebrow = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #773BDB;
`;

export const SectionTitle = styled.h2`
  margin: 10px 0 0;
  font-size: clamp(26px, 3vw, 34px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #111114;
`;

export const SectionSub = styled.p`
  margin: 12px auto 0;
  max-width: 560px;
  font-size: 15px;
  color: #62616D;
`;

export const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

/* ---------- Buttons ---------- */

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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

export const GhostLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #773BDB;
  background: #FFFFFF;
  color: #773BDB;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: #EDE7F8;
    border-color: #773BDB;
  }
`;

/* ---------- Logo ---------- */

const LogoWrap = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

const LogoImage = styled(Image)<{ $light?: boolean }>`
  height: auto;
  filter: ${({ $light }) => ($light ? "brightness(0) invert(1)" : "none")};
`;

export const Logo = ({ light = false }: { light?: boolean }) => (
  <LogoWrap>
    <LogoImage src={logo} alt="" width={38} height={33} $light={light} />
    <LogoImage src={logoText} alt="Solution Factory" width={139} height={40} $light={light} />
  </LogoWrap>
);