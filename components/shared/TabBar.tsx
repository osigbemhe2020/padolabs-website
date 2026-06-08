'use client';
import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Tab {
  title: string;
  component: ReactNode; // Pass the rendered JSX, not a component class
}

interface SimpleTabBarProps {
  tabs: Tab[];
}

// ─── Component ────────────────────────────────────────────────────────────────

const SimpleTabBar: React.FC<SimpleTabBarProps> = ({ tabs }) => {
  // activeIndex tracks which tab is visible. Starts at 0 (first tab).
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Wrapper>
      {/* ── Tab Button Row ── */}
      <TabButtonRow>
        {tabs.map((tab, index) => (
          <TabBtn
            key={tab.title}
            $isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
            {/* The animated underline lives inside the button.
                It's always rendered but only visible when $isActive is true. */}
            <ActiveBar $isActive={activeIndex === index} />
          </TabBtn>
        ))}
      </TabButtonRow>

      <Divider />

      {/* ── Sliding Panel Container ──
          All tab panels sit side-by-side in a single flex row.
          The outer div is overflow:hidden so only one panel shows at a time.
          We slide the inner row left by (activeIndex * 100%) to bring the
          correct panel into view — this is the core trick from the codebase. */}
      <PanelOuter>
        <PanelInner $activeIndex={activeIndex} $totalTabs={tabs.length}>
          {tabs.map((tab) => (
            // Each panel is exactly 100% the width of the outer container.
            // flex-shrink: 0 ensures they don't collapse.
            <Panel key={tab.title}>
              {tab.component}
            </Panel>
          ))}
        </PanelInner>
      </PanelOuter>
    </Wrapper>
  );
};

export default SimpleTabBar;

// ─── Styled Components ────────────────────────────────────────────────────────

const Wrapper = styled.div`
  width: 100%;
  
`;

const TabButtonRow = styled.div`
  display: flex;
  gap: 0;
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 640px) {
    padding: 0;
  }
`;

const TabBtn = styled.button<{ $isActive: boolean }>`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '500')};

  /* Use your existing CSS variable pattern from the project */
  color: ${({ $isActive }) =>
    $isActive ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))'};

  transition: color 0.2s ease;

  &:hover {
    color: hsl(var(--foreground));
  }
`;

const ActiveBar = styled.span<{ $isActive: boolean }>`
  /* Animated underline. Sits at the bottom of the button.
     Width animates from 0 → 100% when the tab becomes active. */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  border-radius: 9999px;
  background: var(--gradient-primary);

  /* The gradient matches your existing CategoryAccent / PageAccent style */
  transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0)});
  transform-origin: left;
  transition: transform 0.25s ease;
`;

const Divider = styled.div`
  border-top: 1px solid hsl(var(--border));
  margin-bottom: 3rem;
`;

/* PanelOuter clips everything outside the visible area.
   overflow:hidden is the key — without it you'd see all panels at once. */
const PanelOuter = styled.div`
  overflow: hidden;
  width: 100%;
`;

/* PanelInner is the scrolling track.
   It's as wide as (number of tabs × 100%).
   translateX moves it left to reveal the active panel.
   transition gives the smooth slide animation. */
const PanelInner = styled.div<{ $activeIndex: number; $totalTabs: number }>`
  display: flex;
  width: ${({ $totalTabs }) => $totalTabs * 100}%;
  transform: translateX(
    ${({ $activeIndex, $totalTabs }) =>
      /* Each panel occupies (100% / totalTabs) of the track width.
         So to move to panel N we shift by: N * (100% / totalTabs).
         Example with 2 tabs: panel 1 = translateX(-50%) of the 200% wide track. */
      `${($activeIndex / $totalTabs) * -100}%`}
  );
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

/* Each Panel is 1/totalTabs of the PanelInner width,
   which equals exactly 100% of the PanelOuter.
   flex-shrink:0 stops panels from collapsing. */
const Panel = styled.div`
  flex: 1;
  flex-shrink: 0;
  min-width: 0; /* prevents overflow from long content */
`;