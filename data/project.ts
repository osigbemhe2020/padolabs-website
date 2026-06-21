// types/project.ts (or wherever you keep your types)

export interface ProjectMeta {
  title: string;
  description: string;
  keywords: string[];
  year: string;
  phase: string;
  featured: boolean;
}

export interface ProjectHero {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  timeline: string;
  liveUrl: string; // optional
  githubUrl: string; // optional
  projectType: string;
  origin: string;
}

export interface ProjectContext {
  title: string;
  body: string;
  highlightQuote: string;
  milestone: string;
}

export interface GoalItem {
  title: string;
  desc: string;
}

export interface ChallengeItem {
  title: string;
  description: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

export interface TechnicalLearningItem {
  title: string;
  body: string;
  progress: number; // 0-100
}

export interface ReflectionSectionThen {
  title: string;
  thenbody: string;
}

export interface ReflectionSectionNow {
  title: string;
  nowbody: string;
}

export interface ProjectReflection {
  title: string;
  intro: string;
  then: ReflectionSectionThen;
  now: ReflectionSectionNow;
  improvements: string[]; // array of suggestions
}

export interface GrowthMilestone {
  title: string;
  status: string;
}

export interface ProjectGrowth {
  title: string;
  description: string;
  milestones: GrowthMilestone[];
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface DecisionItem {
  title: string;
  choice: string;
  rejected: string;
  rationale: string;
}

export interface RetrospectiveItem {
  text: string;
}

export interface Cta {
  title: string;
  description: string;
  buttons: { label: string; url: string }[];
}

// Main Project interface
export interface Project {
  slug: { current: string };
  category?: {
    _type: "reference";
    _ref: string;
  };
  meta: ProjectMeta;
  hero: ProjectHero;
  context: ProjectContext;
  goals: {title: string; items: GoalItem[]};
  challenges: {title: string; intro: string; items: ChallengeItem[]};      // not used by mapper but present in data
  process: {title: string; steps: ProcessItem[]};           // not used
  technicalLearnings: {title: string; items: TechnicalLearningItem[]}; // not used
  reflection:ProjectReflection;
  growth: {title: string; description: string; milestones: GrowthMilestone[]};            // not used
  features:{title: string; items: FeatureItem[]};
  engineeringDecisions: {title: string; items: DecisionItem[]};
  retrospective: {title: string; items: RetrospectiveItem[]};          // array of strings
  cta: Cta;                         // not used
}
