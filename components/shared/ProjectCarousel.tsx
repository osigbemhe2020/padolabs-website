// ProjectCarousel.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./Cards";
import { Project } from "@/lib/projects";

const AUTOPLAY_INTERVAL = 2000;

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(3);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const total = projects.length;

  // Responsive: 1 phone / 2 tablet / 3 desktop
  useEffect(() => {
    const updateCardsVisible = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsVisible(1);
      else if (width < 1024) setCardsVisible(2);
      else setCardsVisible(3);
    };
    updateCardsVisible();
    window.addEventListener("resize", updateCardsVisible);
    return () => window.removeEventListener("resize", updateCardsVisible);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  useEffect(() => {
    // don't bother autoplaying if everything already fits on screen
    if (isPaused || total <= cardsVisible) return;

    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, cardsVisible, total]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const cardWidth = 100 / cardsVisible;

  if (total === 0) return null;

  return (
    <CarouselViewport
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CarouselTrack style={{ transform: `translateX(-${current * cardWidth}%)` }}>
        {[...projects, ...projects].map((p, idx) => (
          <CarouselSlide key={`${p._id ?? p.slug ?? p.title}-${idx}`} $cardWidth={cardWidth}>
            <ProjectCard project={p} />
          </CarouselSlide>
        ))}
      </CarouselTrack>

      {total > cardsVisible && (
        <>
          <NavButton $side="left" onClick={() => { prev(); setIsPaused(true); }} aria-label="Previous project">
            <ChevronLeft size={20} />
          </NavButton>
          <NavButton $side="right" onClick={() => { next(); setIsPaused(true); }} aria-label="Next project">
            <ChevronRight size={20} />
          </NavButton>

          <DotsContainer>
            {projects.map((_, idx) => (
              <Dot
                key={idx}
                $active={idx === current % total}
                onClick={() => { setCurrent(idx); setIsPaused(true); }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </DotsContainer>
        </>
      )}
    </CarouselViewport>
  );
};

export default ProjectCarousel;

// ---------- Styled components ----------

const CarouselViewport = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselSlide = styled.div<{ $cardWidth: number }>`
  flex-shrink: 0;
  width: ${({ $cardWidth }) => $cardWidth}%;
  box-sizing: border-box;
  padding: 0 0.75rem;
`;

const NavButton = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === "left" ? "left: -0.5rem;" : "right: -0.5rem;")}
  z-index: 10;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: #374151;
  transition: background 0.2s ease;

  &:hover {
    background: #fff;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "1rem" : "0.5rem")};
  height: 0.5rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#667eea" : "#d1d5db")};
  transition: all 0.3s ease;
`;