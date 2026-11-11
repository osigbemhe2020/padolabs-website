import { createGlobalStyle } from "styled-components";

/**
 * Solution Factory design tokens.
 * Single source of truth for the visual system; every styled component
 * reads from these CSS variables.
 */
export const GlobalStyle = createGlobalStyle`
  :root {
    --sf-primary: #773bdb;
    --sf-primary-rgb: 119, 59, 219;
    --sf-primary-dark: #5f2bb4;
    --sf-primary-soft: #f1e9fd;
    --sf-ink: #111114;
    --sf-body: #55555f;
    --sf-muted: #6e6e78;
    --sf-lavender: #ede7f8;
    --sf-lavender-soft: #f5f2fb;
    --sf-border: #e7e2f0;
    --sf-white: #ffffff;
    --sf-hero-overlay: linear-gradient(135deg, rgba(237, 231, 248, 0.4) 0%, rgba(245, 242, 251, 0.7) 100%);
    --sf-hero-overlay-opacity: 0.35;
    --gradient-primary: linear-gradient(135deg, #773bdb 0%, #5f2bb4 100%);

    --background: 0 0% 100%;
    --foreground: 240 3% 7%;
    --primary: 265 68% 54%;
    --primary-foreground: 0 0% 100%;
    --muted: 264 43% 97%;
    --muted-foreground: 240 5% 45%;
    --accent: 264 43% 95%;
    --accent-foreground: 265 68% 54%;
    --border: 264 28% 91%;
    --card: 0 0% 100%;
    --card-foreground: 240 3% 7%;
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

  [data-sf-theme] {
    min-height: 100vh;
    color: var(--sf-ink);
    background: var(--sf-white);
  }

  [data-sf-theme] button,
  [data-sf-theme] input,
  [data-sf-theme] select,
  [data-sf-theme] textarea {
    font-family: inherit;
  }

  h1, h2, h3, h4, p { margin: 0; }

  a { color: inherit; text-decoration: none; }

  img { max-width: 100%; display: block; }
`;
