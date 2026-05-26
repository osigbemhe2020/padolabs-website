"use client"

import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Star, Award, Briefcase, Coffee } from 'lucide-react'

interface CountdownBoxProps {
  end: number
  text: string
  icon: React.ReactNode
  duration?: number
}

const CountdownBox: React.FC<CountdownBoxProps> = ({ end, text, icon, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (boxRef.current) {
      observer.observe(boxRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <Box ref={boxRef}>
      <IconWrapper>{icon}</IconWrapper>
      <Number>{count.toLocaleString()}</Number>
      <Text>{text}</Text>
    </Box>
  )
}

const CountdownSection = () => {
  return (
    <Container>
      <CountdownBox 
        end={400} 
        text="Notes Completed" 
        icon={<Coffee />} 
        duration={2000}
      />
      <CountdownBox 
        end={2} 
        text="Years of Experience" 
        icon={<Award />} 
        duration={1500}
      />
      <CountdownBox 
        end={40} 
        text="Projects Deployed" 
        icon={<Briefcase />} 
        duration={2500}
      />
    </Container>
  )
}

export default CountdownSection

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    gap: 1rem;
  }
`

const Box = styled.div`
  background: var(--gradient-primary);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const IconWrapper = styled.div`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
`

const Number = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const Text = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`