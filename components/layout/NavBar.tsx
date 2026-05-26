
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import styled from "styled-components";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Stories", href: "/stories" },
  //{ label: "Tutorials", href: "/tutorials" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <NavContainer>
        <Logo href="/home">
          &lt;Padolabs /&gt;
        </Logo>

        {/* Desktop */}
        <DesktopNav>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
            >
              {link.label}
            </NavLink>
          ))}
          {/* <HireButton>
            Business Page
          </HireButton> */}
        </DesktopNav>

        {/* Mobile toggle */}
        <MobileToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </MobileToggle>
      </NavContainer>

      {/* Mobile menu */}
      <MobileMenu className={isOpen ? 'mobile-menu-open' : ''}>
        {navLinks.map((link) => (
          <MobileNavLink
            key={link.label}
            href={link.href}
          >
            {link.label}
          </MobileNavLink>
        ))}
        {/* <MobileHireButton>
           Business Page
        </MobileHireButton> */}
      </MobileMenu>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  position: sticky;
  padding:0rem 1rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid #e5e7eb;
`;

const NavContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1rem;
`;

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
`;

const DesktopNav = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
  }
`;

// const HireButton = styled.button`
//   padding: 0.5rem 1rem;
//   background: var(--gradient-primary);
//   color: white;
//   border: none;
//   border-radius: 0.375rem;
//   font-size: 0.875rem;
//   font-weight: 500;
//   cursor: pointer;
//   transition: transform 0.2s ease, box-shadow 0.2s ease;

//   &:hover {
//     transform: translateY(-1px);
//     box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
//   }
// `;

const MobileToggle = styled.button`
  display: block;
  color: #111827;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem;
  animation: fadeIn 0.3s ease-in-out;

  &.mobile-menu-open {
    display: block;
  }

  @media (min-width: 768px) {
    display: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
  }
`;

// const MobileHireButton = styled(HireButton)`
//   margin-top: 0.5rem;
//   width: 100%;
// `;