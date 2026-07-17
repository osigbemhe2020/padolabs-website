"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ContentWrapper, Container } from "../shared/Wrappers.styled";
import { TitleText, NormalText, GradientText } from "../shared/Text.styled";
import {  PrimaryButton } from "../shared/buttons.styled";
import mypic from "@/assests/paul.jpeg";
import Image from "next/image";

// Define outside component so they're stable across renders
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -60 },  // starts above
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // photo first, then text
  },
};

const AboutSection = () => {
  return (
    <Container $backgroundColor={"linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)"}>
      <ContentWrapper>
        <AboutGrid
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Photo fades up */}
            <motion.div variants={fadeUp}>
              <PhotoContainer>
                <Image 
                  src={mypic} 
                  alt="Profile picture" 
                  width={280}
                  height={380}
                  priority
                  style={{ height: '380px', width: 'auto' }}
                />
              </PhotoContainer>
            </motion.div>

            {/* Text content fades down */}
            <motion.div variants={fadeDown}>
              <Content>
                <TitleText>
                  About <GradientText>Me</GradientText>
                </TitleText>
                <NormalText>
                  I’m a fullstack developer and embedded systems engineer focused on building real-world solutions.
                  My work spans from interactive web applications to low-level firmware, bridging the gap between software and hardware.
                </NormalText>
                <NormalText>
                  I approach every project as a learning process, solving problems, refining ideas, and documenting the journey along the way.
                </NormalText>
                <a href="/Paul_Dirisu_Resume.pdf" download="Paul_Dirisu_Resume.pdf">
                  <PrimaryButton style={{ width: 'fit-content' ,margin: '1rem auto' }}>
                    Download CV
                  </PrimaryButton>
                </a>
              </Content>
            </motion.div>
        </AboutGrid>
      </ContentWrapper>
    </Container>
  );
};

const AboutGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 56rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 22rem;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;



export default AboutSection;
