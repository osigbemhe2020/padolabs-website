

// TypeScript interfaces for project data structure
interface ProjectMeta {
  title: string;
  description: string;
  keywords: string[];
  category: string;
  year: number;
  phase: string;
  featured: boolean;
}

interface Hero {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  timeline: string;
  projectType: string;
  origin: string;
  liveUrl: string;
  githubUrl: string;
  heroImage: string;
  thumbnail: string;
}

interface Context {
  title: string;
  intro: string;
  body: string[];
  highlightQuote: string;
}

interface Goal {
  title: string;
  description: string;
  
}

interface Challenge {
  title: string;
  description: string;

}

interface ProcessStep {
  step: string;
  title: string;
  image?: string;
  description: string;
}

interface TechnicalLearning {
  title: string;
  body: string;
  progress: number;
}

interface Reflection {
  title: string;
  intro: string;
  then: {
    title: string;
    points: string[];
    image: string;
  };
  now: {
    title: string;
    points: string[];
    image: string;
  };
  improvements: string[];
}

interface Growth {
  title: string;
  description: string;
  milestones: {
    title: string;
    status: string;
  }[];
}

interface Showcase {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  slug: string;
  category: string;
  meta: ProjectMeta;
  hero: Hero;
  context: Context;
  goals: {
    title: string;
    items: Goal[];
  };
  challenges: {
    title: string;
    intro: string;
    imageUrl?: string;
    items: Challenge[];
  };
  features?: {
    title: string;
    items:Goal[];
  };
  
  process: {
    title: string;
    steps: ProcessStep[];
  };
  technicalLearnings: {
    title: string;
    items: TechnicalLearning[];
  };
  reflection: Reflection;
  growth: Growth;
  showcase: Showcase;
  cta: {
    title: string;
    description: string;
    buttons: {
      label: string;
      url: string;
    }[];
  };
  screenshots: string[];
}

// Projects array with proper TypeScript objects
