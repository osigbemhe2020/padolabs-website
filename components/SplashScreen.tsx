import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'

const SplashContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--gradient-primary);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(255,255,255,0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
`

const ContentWrapper = styled.div`
  text-align: center;
  z-index: 2;
  padding: 2rem;
  max-width: 800px;
`

const Title = styled.h1`
  color: white;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }
`

const Subtitle = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
  
  @media (max-width: 768px) {
    font-size: clamp(0.875rem, 2.5vw, 1rem);
  }
`

const TypingContainer = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const TypingText = styled.span`
  color: white;
  font-size: clamp(1.25rem, 4vw, 1.75rem);
  font-weight: 500;
  letter-spacing: 0.05em;
  position: relative;
  
  &::after {
    content: '|';
    display: inline-block;
    width: 3px;
    height: 1.2em;
    background: white;
    margin-left: 2px;
    animation: blink 1s infinite;
    vertical-align: text-bottom;
  }
`

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background: white;
  margin-left: 2px;
  animation: blink 1s infinite;
  vertical-align: text-bottom;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-top: 1rem;
  overflow: hidden;
  position: relative;
`

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
  width: 0;
  animation: progressGrow 2s ease-out forwards;
`

const GlobalStyles = styled.div`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  @keyframes progressGrow {
    from { width: 0; }
    to { width: 100%; }
  }
`

interface SplashScreenProps {
  onComplete?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const typedRef = useRef<Typed | null>(null)

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to PadoLabs",
        "Building Ideas into Systems",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      showCursor: true,
      cursorChar: '|',
      onComplete: () => {
        // Animate elements after typing completes
        if (titleRef.current) {
          titleRef.current.style.animation = 'fadeInUp 0.8s ease-out forwards'
        }
        if (subtitleRef.current) {
          subtitleRef.current.style.animation = 'fadeInUp 0.8s ease-out 0.2s forwards'
        }
        if (progressRef.current) {
          progressRef.current.style.animation = 'progressGrow 2s ease-out forwards'
        }
        
        // Call completion callback after animations
        setTimeout(() => {
          onComplete?.()
        }, 2000)
      }
    }

    const typed = new Typed("#typing-text", options)
    typedRef.current = typed

    return () => {
      typed.destroy()
    }
  }, [onComplete])

  return (
    <>
      <GlobalStyles />
      <SplashContainer>
        <ContentWrapper>
          <Subtitle ref={subtitleRef}>
            <TypingContainer>
              <TypingText id="typing-text" />
            </TypingContainer>
          </Subtitle>
          <ProgressBar ref={progressRef}>
            <ProgressFill />
          </ProgressBar>
        </ContentWrapper>
      </SplashContainer>
    </>
  )
}

export default SplashScreen