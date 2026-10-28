import styled from "styled-components";
import { Container, Logo } from "./shared";
import { ArrowUpRightIcon } from "./icons";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const FooterWrapper = styled.footer`
  background: #FFFFFF;
  padding: 64px 0 32px;

  @media (max-width: 768px) {
    padding: 48px 0 24px;
  }
`;

const FooterInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 48px 96px;
  align-self: stretch;
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 0 1 384px;
  min-width: 260px;
`;

const CompanyDescription = styled.p`
  align-self: stretch;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #62616D;
`;

const Explore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 0 0 192px;
`;

const GroupTitle = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #111114;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;
  gap: 8px 24px;
`;

const NavItem = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #62616D;
  transition: color 0.2s ease;

  &:hover {
    color: #773BDB;
  }
`;

const Enquiries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 1 280px;
  max-width: 432px;
`;

const EnquiryDescription = styled.p`
  align-self: stretch;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #62616D;
`;

const TertiaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 12px 8px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #773BDB;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #EDE7F8;
  }
`;

const Divider = styled.div`
  align-self: stretch;
  height: 1px;
  background: #DEDAE6;
`;

const FooterDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
  gap: 8px 24px;
`;

const Caption = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #62616D;
`;

export const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      <FooterContent>
        <Company>
          <Logo />
          <CompanyDescription>
            A digital studio turning complex challenges into thoughtful websites,
            applications and products.
          </CompanyDescription>
        </Company>

        <Explore>
          <GroupTitle>Explore</GroupTitle>
          <FooterNav aria-label="Footer">
            {footerLinks.map((link) => (
              <NavItem key={link.label} href={link.href}>
                {link.label}
              </NavItem>
            ))}
          </FooterNav>
        </Explore>

        <Enquiries>
          <GroupTitle>Your next chapter starts with a conversation.</GroupTitle>
          <EnquiryDescription>
            Tell us what you’re working on. We’ll explore the possibilities together.
          </EnquiryDescription>
          <TertiaryButton href="#contact">
            Start a Project <ArrowUpRightIcon />
          </TertiaryButton>
        </Enquiries>
      </FooterContent>

      <Divider />

      <FooterDetails>
        <Caption>© {new Date().getFullYear()} Solution Factory. All rights reserved.</Caption>
        <Caption>Digital products. Real-world purpose.</Caption>
      </FooterDetails>
    </FooterInner>
  </FooterWrapper>
);