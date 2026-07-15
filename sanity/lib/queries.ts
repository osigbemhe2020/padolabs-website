// sanity/lib/queries.ts
import { groq } from "next-sanity";

// ── All projects (card/listing view) ─────────────────────────────────────────
export const allProjectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    "slug": slug.current,
    category-> {
      _id,
      name,
      "categorySlug": slug.current,  // ← rename to avoid collision with project slug
    },

    meta {
      title,
      description,
      keywords,
      year,
      phase,
      featured,
    },
    hero {
      title,
      subtitle,
      liveUrl,
      githubUrl,
      heroImage {
        asset-> { url },
      },
      thumbnail {
        asset-> { url },
      },
    },
  }
`;

// ── Single project by slug ────────────────────────────────────────────────────
export const singleProjectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _createdAt,
    order,
    "slug": slug.current,
    category-> {
      _id,
      name,
      "categorySlug": slug.current,  // ← rename to avoid collision with project slug
    },
    meta {
      title,
      description,
      keywords,
      year,
      phase,
      featured,
    },
    hero {
      title,
      subtitle,
      description,
      stack,
      role,
      timeline,
      projectType,
      origin,
      liveUrl,
      githubUrl,
      heroImage {
        asset-> { _id, url },
        hotspot,
        alt,
      },
      
    },
    screenshots[] {
      asset-> { _id, url },
      hotspot,
      alt,
    },
    context {
      title,
      intro,
      body,
      highlightQuote,
      milestone,
    },
    goals {
      title,
      items[] {
        title,
       "description": desc, 
      },
    },
    challenges {
      title,
      intro,
      ChallengeImage {
        asset-> { _id, url },
        hotspot,
        alt,
      },
      items[] {
        title,
        description,
      },
    },
    process {
      title,
      steps[] {
        step,
        title,
        description,
        image {
        asset-> { _id, url },
        hotspot,
        alt,
      },
      },
    },
    technicalLearnings {
      title,
      items[] {
        title,
        body,
        progress,
      },
    },
    reflection {
      title,
      intro,
      then {
        title,
        thenbody,
        image { asset-> { _id, url }, hotspot, alt },
      },
      now {
        title,
        nowbody,
        image { asset-> { _id, url }, hotspot, alt },
      },
      improvements,
    },
    growth {
      title,
      description,
      milestones[] {
        title,
        status,
      },
    },
    features {
      title,
      items[] {
        title,
        description,
      },
    },
    engineeringDecisions {
      title,
      items[] {
        title,
        choice,
        rejected,
        rationale,
      },
    },
    retrospective {
      title,
      "items": items[].text,
    },
    cta {
      title,
      description,
      buttons[] {
        label,
        url,
      },
    },
  }
`;

// ── All slugs (for generateStaticParams) ──────────────────────────────────────
export const allProjectSlugsQuery = groq`
  *[_type == "project"] {
    "slug": slug.current,
  }
`;

export const nextProjectQuery = groq`
  *[_type == "project" && order > $order] | order(order asc, _createdAt asc)[0] {
    "slug": slug.current,
    hero { title, description },
  }
`;

export const prevProjectQuery = groq`
  *[_type == "project" && order < $order] | order(order desc, _createdAt desc)[0] {
    "slug": slug.current,
    hero { title, description },
  }
`;
