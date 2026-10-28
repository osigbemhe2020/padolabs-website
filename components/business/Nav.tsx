"use client";

import { usePathname } from "next/navigation";
import styled from "styled-components";
import { Container, Logo, PrimaryLink } from "./shared";

const links = [
  { label: "Services", href: "/workWithMe" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
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

const NavActions = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 900px) {
    gap: 16px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 900px) {
    display: none;
  }
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

export const Nav = () => {
  const pathname = usePathname();

  return (
    <NavWrapper>
      <NavInner>
        <a href="/business-page" aria-label="Solution Factory — home">
          <Logo />
        </a>
        <NavActions>
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
      </NavInner>
    </NavWrapper>
  );
};
