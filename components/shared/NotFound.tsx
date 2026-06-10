
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <Page>
      <Content>
        <Title>404</Title>
        <Message>Oops! Page not found</Message>
        <HomeLink href="/">Return to Home</HomeLink>
      </Content>
    </Page>
  );
};

export default NotFound;

const Page = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #171717;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
`;

const Message = styled.p`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #6b7280;
`;

const HomeLink = styled(Link)`
  color: #667eea;
  text-decoration: underline;

  &:hover {
    color: #5a6fd6;
  }
`;
