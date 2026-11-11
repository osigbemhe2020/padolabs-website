"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styled from "styled-components";
import { Container, Logo, PrimaryLink } from "./shared";

const links = [
  { label: "Home", href: "/business-page" },
  { label: "Our Work", href: "#work" },
  { label: "Our Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
];

const NavWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--sf-white);
  border-bottom: 1px solid transparent;
`;

const NavInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  gap: 24px;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavActions = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavLink = styled.a<{ $active?: boolean }>`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ $active }) => ($active ? "var(--sf-primary)" : "var(--sf-ink)")};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--sf-primary);
  }
`;

const MenuToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 0;
  border-radius: 8px;
  color: var(--sf-ink);
  background: transparent;
  cursor: pointer;

  &:hover {
    background: var(--sf-lavender-soft);
  }

  @media (max-width: 900px) {
    display: inline-flex;
  }
`;

const MobileMenu = styled.nav`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: min(1200px, 100% - 48px);
    margin: 0 auto;
    padding: 0 0 20px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

const MobileNavLink = styled.a<{ $active?: boolean }>`
  padding: 10px 0;
  color: ${({ $active }) => ($active ? "var(--sf-primary)" : "var(--sf-ink)")};
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: var(--sf-primary);
  }
`;

const MobilePrimaryLink = styled(PrimaryLink)`
  width: 100%;
  margin-top: 8px;
`;

export const Nav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavWrapper>
      <NavInner>
        <a href="/business-page" aria-label="Solution Factory — home">
          <Logo />
        </a>
        <HeaderActions>
          <NavActions aria-label="Main navigation">
            <NavLinks>
              {links.map((link) => {
                const isActive =
                  link.href.startsWith("/") && pathname === link.href;
                return (
                  <NavLink key={link.label} href={link.href} $active={isActive}>
                    {link.label}
                  </NavLink>
                );
              })}
            </NavLinks>
            <PrimaryLink href="/booking">Start a Project</PrimaryLink>
          </NavActions>
          <MenuToggle
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="business-mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MenuToggle>
        </HeaderActions>
      </NavInner>
      {isMenuOpen && (
        <MobileMenu id="business-mobile-menu" aria-label="Main navigation">
          {links.map((link) => {
            const isActive =
              link.href.startsWith("/") && pathname === link.href;
            return (
              <MobileNavLink
                key={link.label}
                href={link.href}
                $active={isActive}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </MobileNavLink>
            );
          })}
          <MobilePrimaryLink
            href="/booking"
            onClick={() => setIsMenuOpen(false)}
          >
            Start a Project
          </MobilePrimaryLink>
        </MobileMenu>
      )}
    </NavWrapper>
  );
};
