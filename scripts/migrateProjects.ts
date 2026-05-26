import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@sanity/client";
import { projects } from "../data/mainProjects"; // ✅ use relative path not @/
//import { writeClient } from "../sanity/lib/writeClient"; // ✅ use relative path not @/

const writeClient = createClient({
  projectId: "htuor14k", // ✅ hardcoded directly
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "sko560h3qwaf483WA9fmk6r1TdolMZzyr3jn5ucAY8KbEwoUi9Ad8qCT0VNG5tbYgRHMmEEVa2g7gFqPFvbt7TWe4BSafC6G10xcdDAf05BGhTk2BrrJmMo45KMc5P1yfA8RagcxIvcEtizWXWYdlQyxOSmQNMSTg33tOgGW3k7bPcDFw9Vk", // ✅ paste your token directly
});

const categories = [
  { id: "web-early", name: "Early Web", slug: "web-early" },
  { id: "web-recent", name: "Recent Web", slug: "web-recent" },
  { id: "embedded-early", name: "Early Embedded", slug: "embedded-early" },
  { id: "embedded-recent", name: "Recent Embedded", slug: "embedded-recent" },
];

async function uploadCategories() {
  for (const category of categories) {
    await writeClient.createIfNotExists({
      _id: `category-${category.id}`,
      _type: "category",
      name: category.name,
      slug: { _type: "slug", current: category.slug },
    });
    console.log("✅ Created category:", category.name);
  }
}

async function uploadProjects() {
  for (const project of projects) {
   const categoryId = `category-${project.category}`;

    const doc = {
      _type: "project",
      slug: { _type: "slug", current: project.slug },
      category: { _type: "reference", _ref: categoryId },
      meta: {
        title: project.meta.title,
        description: project.meta.description,
        keywords: project.meta.keywords,
        category: project.meta.category,
        year: project.meta.year,
        phase: project.meta.phase,
        featured: project.meta.featured,
      },
      hero: {
        title: project.hero.title,
        subtitle: project.hero.subtitle,
        description: project.hero.description,
        stack: project.hero.stack,
        role: project.hero.role,
        timeline: project.hero.timeline,
        projectType: project.hero.projectType,
        origin: project.hero.origin,
        liveUrl: project.hero.liveUrl,
        githubUrl: project.hero.githubUrl,
      },
      context: {
        title: project.context.title,
        intro: project.context.intro,
        body: project.context.body,
        highlightQuote: project.context.highlightQuote,
      },
      goals: {
        title: project.goals.title,
        items: project.goals.items.map((item) => ({
          _key: item.title.toLowerCase().replace(/\s+/g, "-"),
          title: item.title,
          desc: item.desc,
          icon: item.icon,
        })),
      },
      challenges: {
        title: project.challenges.title,
        intro: project.challenges.intro,
        items: project.challenges.items.map((item) => ({
          _key: item.title.toLowerCase().replace(/\s+/g, "-"),
          title: item.title,
          description: item.description,
        })),
      },
      process: {
        title: project.process.title,
        steps: project.process.steps.map((step) => ({
          _key: step.step,
          step: step.step,
          title: step.title,
          description: step.description,
        })),
      },
      technicalLearnings: {
        title: project.technicalLearnings.title,
        items: project.technicalLearnings.items.map((item) => ({
          _key: item.title.toLowerCase().replace(/\s+/g, "-"),
          title: item.title,
          body: item.body,
          progress: item.progress,
        })),
      },
      reflection: {
        title: project.reflection.title,
        intro: project.reflection.intro,
        then: {
          title: project.reflection.then.title,
          points: project.reflection.then.points,
        },
        now: {
          title: project.reflection.now.title,
          points: project.reflection.now.points,
        },
        improvements: project.reflection.improvements,
      },
      growth: {
        title: project.growth.title,
        description: project.growth.description,
        milestones: project.growth.milestones.map((m) => ({
          _key: m.title.toLowerCase().replace(/\s+/g, "-"),
          title: m.title,
          status: m.status,
        })),
      },
      showcase: {
        title: project.showcase.title,
        description: project.showcase.description,
        metrics: project.showcase.metrics?.map((m) => ({
          _key: m.label.toLowerCase().replace(/\s+/g, "-"),
          label: m.label,
          value: m.value,
        })),
      },
      cta: {
        title: project.cta.title,
        description: project.cta.description,
        buttons: project.cta.buttons.map((btn) => ({
          _key: btn.label.toLowerCase().replace(/\s+/g, "-"),
          label: btn.label,
          url: btn.url,
        })),
      },
    };

    await writeClient.createIfNotExists({
      _id: `project-${project.slug}`,
      ...doc,
    });

    console.log("✅ Created project:", project.meta.title);
  }
}

async function migrate() {
  console.log("🚀 Starting migration...");
  await uploadCategories();
  await uploadProjects();
  console.log("🎉 Migration complete!");
}

migrate().catch(console.error);