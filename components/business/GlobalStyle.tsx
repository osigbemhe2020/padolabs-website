import { createGlobalStyle } from "styled-components";

/**
 * Solution Factory design tokens.
 * Single source of truth for the visual system; every styled component
 * reads from these CSS variables.
 */
export const GlobalStyle = createGlobalStyle`
  :root {
    --sf-primary: #773bdb;
    --sf-primary-dark: #5f2bb4;
    --sf-primary-soft: #f1e9fd;
    --sf-ink: #111114;
    --sf-body: #55555f;
    --sf-muted: #6e6e78;
    --sf-lavender: #ede7f8;
    --sf-lavender-soft: #f5f2fb;
    --sf-border: #e7e2f0;
    --sf-white: #ffffff;
  }

  *, *::before, *::after { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: var(--sf-ink);
    background: var(--sf-white);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, p { margin: 0; }

  a { color: inherit; text-decoration: none; }

  img { max-width: 100%; display: block; }
`;
