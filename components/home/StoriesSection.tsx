"use client";
import { Container, ContentWrapper, Header } from "../shared/Wrappers.styled";
import { TitleText, GradientText, NormalText } from "../shared/Text.styled";
import { ProjectCard } from "../shared/Cards";
import { webRecent } from "@/lib/projects";
import { motion } from "framer-motion";
import styled from 'styled-components';

// Define variants outside the component so they're not recreated on every render
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },  // starts 40px below
  show:   { opacity: 1, y: 0 },   // slides up to natural position
};

const StoriesGrid = styled(motion.section)`
  display: grid;
  gap: 2rem;
  justify-items: center;
  grid-template-columns: 1fr;
  margin: 0 auto;
  width: 100%;
  

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StoriesSection = () => {
  return (
    <Container id="stories">
      <ContentWrapper>
        <Header>
          <TitleText>
            Stories Behind <GradientText>My Work</GradientText>
          </TitleText>
          <NormalText>
            Every project has a story—of challenges, breakthroughs, and real-world impact.
          </NormalText>
        </Header>

        <StoriesGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {webRecent.slice(0, 4).map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              // ✅ Added: smooth spring transition per card
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </StoriesGrid>
      </ContentWrapper>
    </Container>
  );
};

export default StoriesSection;