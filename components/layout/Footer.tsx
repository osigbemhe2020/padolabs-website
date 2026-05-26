import { Github, Linkedin, Twitter } from "lucide-react";
import styled from "styled-components";

const socialIcons = [
  { Icon: Github, href: "https://github.com/osigbemhe2020" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/paul-dirisu-61303019a" },
  { Icon: Twitter, href: "#" },
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentWrapper>
        <Copyright>
          © {new Date().getFullYear()} Padolabs. All rights reserved.
        </Copyright>
        <SocialLinks>
          {socialIcons.map((social) => (
            <SocialLink
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.Icon size={18} />
            </SocialLink>
          ))}
        </SocialLinks>
      </FooterContentWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 2.5rem 0;
  border-top: 1px solid #e5e7eb;
`;

const FooterContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #667eea;
  }
`;

export default Footer;
