/** Hand-drawn inline SVG icon set (stroke-based, inherits currentColor). */
type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const GlobeIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" />
  </svg>
);

export const CodeIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <path d="m9 8-4 4 4 4" />
    <path d="m15 8 4 4-4 4" />
  </svg>
);

export const PhoneIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="7" y="2" width="10" height="20" rx="2.5" />
    <path d="M11 18.5h2" />
  </svg>
);

export const PenToolIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M15 5l4 4" />
    <path d="M3 21l1.5-5L16 4.5a2.12 2.12 0 0 1 3 3L7.5 19.5L3 21z" />
    <path d="M14.5 6l3.5 3.5" />
  </svg>
);

export const SearchIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.5-4.5" />
  </svg>
);

export const ListIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M9 6h12" />
    <path d="M9 12h12" />
    <path d="M9 18h12" />
    <path d="M4 6h.01" />
    <path d="M4 12h.01" />
    <path d="M4 18h.01" />
  </svg>
);

export const RocketIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 2.5c2.8 2.3 4.2 5.5 4.2 8.8L13.8 14h-3.6l-2.4-2.7c0-3.3 1.4-6.5 4.2-8.8z" />
    <circle cx="12" cy="8.5" r="1.4" />
    <path d="M8 12.5c-2.2 1-3.2 3.2-3.2 5.7l2.9-1" />
    <path d="M16 12.5c2.2 1 3.2 3.2 3.2 5.7l-2.9-1" />
    <path d="M9.8 15.5 9 21l3-1.8L15 21l-.8-5.5" />
  </svg>
);

export const TargetIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const UsersIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M17.5 15.2c2 .4 3.5 2 3.5 4.3" />
  </svg>
);

export const GemIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M7 3h10l4 5-9 13L3 8l4-5z" />
    <path d="M3 8h18" />
    <path d="M12 21 8.5 8l3.5-5 3.5 5L12 21z" />
  </svg>
);

export const ArrowRightIcon = ({ size = 16 }: IconProps) => (
  <svg {...base(size)} strokeWidth={2.2}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

/* Social icons — solid glyphs */
const solid = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
});

export const LinkedInIcon = ({ size = 18 }: IconProps) => (
  <svg {...solid(size)}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15.5h-4V8zm7.5 0h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1v9.4h-4v-8.3c0-2-.04-4.6-2.8-4.6-2.8 0-3.23 2.2-3.23 4.45v8.45H8V8z" />
  </svg>
);

export const XIcon = ({ size = 18 }: IconProps) => (
  <svg {...solid(size)}>
    <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.6 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.9L6.4 3.9H4.3L17.7 20z" />
  </svg>
);

export const InstagramIcon = ({ size = 18 }: IconProps) => (
  <svg {...solid(size)}>
    <path d="M12 2c2.7 0 3.1 0 4.2.06 1.1.05 1.8.22 2.5.47.7.27 1.2.63 1.8 1.17.54.54.9 1.06 1.17 1.77.25.66.42 1.4.47 2.5C22.2 9 22.2 9.4 22.2 12s0 3.1-.06 4.2c-.05 1.1-.22 1.8-.47 2.5a4.9 4.9 0 0 1-1.17 1.77 4.9 4.9 0 0 1-1.77 1.17c-.66.25-1.4.42-2.5.47-1.1.06-1.5.06-4.2.06s-3.1 0-4.2-.06c-1.1-.05-1.8-.22-2.5-.47a4.9 4.9 0 0 1-1.77-1.17 4.9 4.9 0 0 1-1.17-1.77c-.25-.66-.42-1.4-.47-2.5C2 15.1 2 14.7 2 12s0-3.1.06-4.2c.05-1.1.22-1.8.47-2.5A4.9 4.9 0 0 1 3.7 3.7a4.9 4.9 0 0 1 1.77-1.17c.66-.25 1.4-.42 2.5-.47C9 2 9.4 2 12 2zm0 2c-2.6 0-3 0-4 .06-.9.04-1.4.2-1.75.32-.43.17-.74.37-1.06.7-.33.32-.53.63-.7 1.06-.13.33-.28.83-.32 1.75C4.1 9 4.1 9.4 4.1 12s0 3 .06 4c.04.9.2 1.4.32 1.75.17.43.37.74.7 1.06.32.33.63.53 1.06.7.33.13.83.28 1.75.32 1 .06 1.4.06 4 .06s3 0 4-.06c.9-.04 1.4-.2 1.75-.32.43-.17.74-.37 1.06-.7.33-.32.53-.63.7-1.06.13-.33.28-.83.32-1.75.06-1 .06-1.4.06-4s0-3-.06-4c-.04-.9-.2-1.4-.32-1.75a2.8 2.8 0 0 0-.7-1.06 2.8 2.8 0 0 0-1.06-.7c-.33-.13-.83-.28-1.75-.32C15 4 14.6 4 12 4zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.3-3.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
  </svg>
);

export const YouTubeIcon = ({ size = 18 }: IconProps) => (
  <svg {...solid(size)}>
    <path d="M23 12s0-3.4-.4-5a2.6 2.6 0 0 0-1.8-1.8C19 4.8 12 4.8 12 4.8s-7 0-8.8.4A2.6 2.6 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a2.6 2.6 0 0 0 1.8 1.8c1.8.4 8.8.4 8.8.4s7 0 8.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-5 .4-5zM9.8 8.8l5.9 3.2-5.9 3.2V8.8z" />
  </svg>
);

/** Abstract geometric emblem used in the logo. */
export const Emblem = ({ color = "var(--sf-ink)", size = 38 }: { color?: string; size?: number }) => (
  <svg
    width={size}
    height={Math.round((size * 33) / 38)}
    viewBox="0 0 38 33"
    fill="none"
    aria-hidden
  >
    <path fill={color} d="M21 0H4l9.2 11L4 22h17l-9.2-11L21 0z" />
    <path fill={color} d="M25.5 5.5H38v17H25.5l7-8.5-7-8.5z" opacity="0.55" />
  </svg>
);

export const ArrowUpRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4.67 11.33L11.33 4.67M5.5 4.67h5.83v5.83"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const lucide = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const ProcessSearchIcon = ({ size = 24 }: IconProps) => (
  <svg {...lucide(size)}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const ListChecksIcon = ({ size = 24 }: IconProps) => (
  <svg {...lucide(size)}>
    <path d="m3 17 2 2 4-4" />
    <path d="m3 7 2 2 4-4" />
    <path d="M13 6h8" />
    <path d="M13 12h8" />
    <path d="M13 18h8" />
  </svg>
);

export const PencilRulerIcon = ({ size = 24 }: IconProps) => (
  <svg {...lucide(size)}>
    <path d="m15 5 4 4" />
    <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
    <path d="m8 6 2-2" />
    <path d="m18 16 2-2" />
    <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  </svg>
);

export const ProcessRocketIcon = ({ size = 24 }: IconProps) => (
  <svg {...lucide(size)}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export const ScanSearchIcon = ({ size = 24 }: IconProps) => (
  <svg {...lucide(size)}>
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <circle cx="12" cy="12" r="3" />
    <path d="m16 16-1.9-1.9" />
  </svg>
);

export const UsersRoundIcon = ({ size = 24 }: IconProps) => (
  <svg {...lucide(size)}>
    <path d="M18 21a8 8 0 0 0-16 0" />
    <circle cx="10" cy="8" r="5" />
    <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
  </svg>
);

export const LayersIcon = ({ size = 24 }: IconProps) => (
  <svg {...lucide(size)}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);