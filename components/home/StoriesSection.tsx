
"use client";

import { useEffect, useState } from "react";
import { Container, Header } from "../shared/Wrappers.styled";
import { TitleText, GradientText, NormalText } from "../shared/Text.styled";
import { ProjectCard, ProjectGrid } from "../shared/Cards";
import { motion } from "framer-motion";
import { allProjectsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import {
  //embeddedEarly,
  //embeddedRecent,
  //webEarly,
  //webRecent,
  type Project,
} from "@/lib/projects";


const StoriesSection = () => {
  const [sanityWebRecent, setSanityWebRecent] = useState<Project[]>([]);

  useEffect(() => {
    client.fetch(allProjectsQuery).then((sanityProjects) => {
      setSanityWebRecent(
        sanityProjects.filter((p: Project) => p.category?.categorySlug === "web-recent")
      );
    });
  }, []);

  console.log("Sanity Web Recent Projects:", sanityWebRecent);
  return (
    <Container >
      <div style={{
        maxWidth: "80rem",
        margin: "0 auto"
      }}>
        <Header>
          <TitleText>
            Stories Behind <GradientText>My Work</GradientText>
          </TitleText>
          <NormalText>
            Every project has a story—of challenges, breakthroughs, and real-world impact.
          </NormalText>
        </Header>

        <ProjectGrid>
          {sanityWebRecent.slice(0, 4).map((p: Project) => (
            <motion.div
              key={p._id ?? p.slug ?? p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </ProjectGrid>
        </div>
    </Container>
  );
};

export default StoriesSection;