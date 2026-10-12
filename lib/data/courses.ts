export interface CourseModule {
  title: string;
  description: string;
  lessons: string[];
}

export interface CourseResource {
  title: string;
  type: string;
  premium: boolean;
}

export interface Course {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  duration: string;
  delivery: string;
  price: string;
  level: string;
  prerequisites: string;
  support: string;
  modules: CourseModule[];
  resources: CourseResource[];
  capstone: {
    title: string;
    description: string;
    highlights: string[];
  };
}

export const courses: Course[] = [
  {
    slug: "intro-to-web-development",
    title: "Introduction to Web Development",
    tagline: "Start your journey into the web platform.",
    overview:
      "A hands-on introduction to how the web works. You'll learn HTML, CSS, and the fundamentals of building accessible, responsive websites from scratch.",
    duration: "6 weeks",
    delivery: "Live online",
    price: "₦96,000",
    level: "Beginner",
    prerequisites: "None — just curiosity and a laptop.",
    support: "Weekly Q&A sessions and community access.",
    modules: [
      { title: "The Web Platform", description: "How the browser, HTTP, and the DOM work together.", lessons: ["Browsers & rendering", "HTTP basics", "Dev tools"] },
      { title: "HTML Foundations", description: "Semantic markup and document structure.", lessons: ["Semantic tags", "Forms", "Accessibility"] },
      { title: "CSS & Layout", description: "Styling, flexbox, and grid.", lessons: ["Selectors", "Flexbox", "Grid & responsive"] },
      { title: "Responsive Design", description: "Design for every screen size.", lessons: ["Media queries", "Mobile-first", "Fluid typography"] },
      { title: "Deployment", description: "Ship your first website to the world.", lessons: ["Git basics", "Netlify/Vercel", "Custom domains"] },
    ],
    resources: [
      { title: "HTML Cheatsheet", type: "PDF Notes", premium: false },
      { title: "CSS Layout Guide", type: "PDF Notes", premium: false },
      { title: "Starter Templates", type: "Code Bundle", premium: true },
    ],
    capstone: {
      title: "Build a Personal Portfolio Site",
      description: "Design and deploy a responsive personal portfolio that showcases your work and story.",
      highlights: ["Semantic HTML", "Responsive CSS", "Live deployment"],
    },
  },
  {
    slug: "javascript-frontend-developer",
    title: "JavaScript Frontend Developer",
    tagline: "Master modern JavaScript and build interactive UIs.",
    overview:
      "Go deep into modern JavaScript, the DOM, and component thinking. By the end you'll be able to build interactive, production-quality frontend applications with React and Next.js.",
    duration: "10 weeks",
    delivery: "Live online",
    price: "₦224,000",
    level: "Intermediate",
    prerequisites: "Comfortable with HTML & CSS.",
    support: "1-on-1 mentorship and code reviews.",
    modules: [
      { title: "JavaScript Fundamentals", description: "Modern ES6+, closures, async, and the runtime.", lessons: ["Variables & scope", "Functions & closures", "Promises & async/await"] },
      { title: "React Fundamentals", description: "Components, state, and hooks.", lessons: ["JSX & props", "State & effects", "Custom hooks"] },
      { title: "Next.js", description: "Routing, SSR, and full-stack React.", lessons: ["App Router", "Server components", "API routes"] },
      { title: "Sanity CMS", description: "Structured content for real applications.", lessons: ["Schemas", "GROQ queries", "Studio customization"] },
      { title: "Supabase", description: "Auth, database, and storage in one platform.", lessons: ["Auth flows", "Postgres & RLS", "Realtime & storage"] },
    ],
    resources: [
      { title: "JavaScript Notes", type: "PDF Notes", premium: false },
      { title: "React Notes", type: "PDF Notes", premium: false },
      { title: "Next.js Notes", type: "PDF Notes", premium: true },
      { title: "Sanity Setup Guide", type: "Setup Guide", premium: true },
      { title: "Supabase Setup Guide", type: "Setup Guide", premium: true },
    ],
    capstone: {
      title: "Build a Service Booking Platform",
      description:
        "Design, build and deploy a complete service booking platform with authentication, a CMS-managed catalog, and real-time bookings.",
      highlights: ["Next.js App Router", "Sanity for content", "Supabase auth & database"],
    },
  },
  {
    slug: "javascript-backend-developer",
    title: "JavaScript Backend Developer",
    tagline: "Build APIs, databases, and production servers.",
    overview:
      "Learn server-side JavaScript from the ground up. Design REST APIs, model relational data, secure your endpoints and deploy real backend services.",
    duration: "10 weeks",
    delivery: "Live online",
    price: "₦224,000",
    level: "Intermediate",
    prerequisites: "Basic JavaScript knowledge.",
    support: "Weekly code reviews and office hours.",
    modules: [
      { title: "Node.js Fundamentals", description: "The runtime, modules and tooling.", lessons: ["Event loop", "Modules & npm", "File & network I/O"] },
      { title: "Express & REST APIs", description: "Design clean, versioned APIs.", lessons: ["Routing", "Middleware", "Validation & errors"] },
      { title: "Databases", description: "PostgreSQL and ORMs.", lessons: ["Schema design", "Prisma", "Migrations"] },
      { title: "Authentication & Security", description: "Auth patterns and best practices.", lessons: ["JWT & sessions", "OAuth", "Security hardening"] },
      { title: "Deployment", description: "Ship reliable services.", lessons: ["Docker basics", "CI/CD", "Monitoring"] },
    ],
    resources: [
      { title: "Node.js Notes", type: "PDF Notes", premium: false },
      { title: "REST API Cheatsheet", type: "PDF Notes", premium: false },
      { title: "Prisma Starter Kit", type: "Code Bundle", premium: true },
    ],
    capstone: {
      title: "Build a Booking API Backend",
      description: "Design and deploy a full REST API powering a booking platform, complete with auth and admin routes.",
      highlights: ["Express + Prisma", "JWT auth", "Deployed on Render"],
    },
  },
  {
    slug: "fullstack-javascript-development",
    title: "Fullstack JavaScript Development",
    tagline: "End-to-end training — from idea to production.",
    overview:
      "Combine frontend and backend into complete products. You'll design, build, test and deploy a fullstack application while learning how senior teams operate.",
    duration: "16 weeks",
    delivery: "Live online + mentorship",
    price: "₦384,000",
    level: "Advanced",
    prerequisites: "Some frontend or backend experience.",
    support: "Dedicated mentor and weekly 1-on-1s.",
    modules: [
      { title: "JavaScript Fundamentals", description: "Level up your JS from the runtime up.", lessons: ["Advanced patterns", "TypeScript", "Testing"] },
      { title: "React Fundamentals", description: "Build robust UIs with modern React.", lessons: ["State management", "Performance", "Design systems"] },
      { title: "Next.js", description: "Full-stack React in production.", lessons: ["App Router", "Server actions", "Deployment"] },
      { title: "Sanity CMS", description: "Structured, scalable content.", lessons: ["Schemas", "Previews", "Editorial workflows"] },
      { title: "Supabase", description: "Backend-as-a-service on Postgres.", lessons: ["Auth", "RLS policies", "Edge functions"] },
    ],
    resources: [
      { title: "JavaScript Notes", type: "PDF Notes", premium: false },
      { title: "React Notes", type: "PDF Notes", premium: false },
      { title: "Next.js Notes", type: "PDF Notes", premium: true },
      { title: "Sanity Setup Guide", type: "Setup Guide", premium: true },
      { title: "Supabase Setup Guide", type: "Setup Guide", premium: true },
    ],
    capstone: {
      title: "Build a Service Booking Platform",
      description:
        "Ship a complete fullstack product: marketing site, admin dashboard, authentication, payments and CMS-managed content.",
      highlights: ["Next.js + Supabase", "Sanity CMS", "Stripe payments"],
    },
  },
  {
    slug: "mobile-app-development-react-native",
    title: "Mobile App Development with React Native",
    tagline: "Ship cross-platform mobile apps.",
    overview:
      "Build production-ready iOS and Android apps with React Native. Learn navigation, native modules, offline storage and how to publish to the app stores.",
    duration: "12 weeks",
    delivery: "Live online",
    price: "₦280,000",
    level: "Intermediate",
    prerequisites: "React experience recommended.",
    support: "Weekly reviews and store-submission help.",
    modules: [
      { title: "React Native Foundations", description: "Components, styling and layout.", lessons: ["Core components", "Flexbox in RN", "Platform APIs"] },
      { title: "Navigation & State", description: "Multi-screen apps and data flow.", lessons: ["React Navigation", "Global state", "Deep linking"] },
      { title: "Native Modules", description: "Camera, notifications and more.", lessons: ["Expo modules", "Permissions", "Background tasks"] },
      { title: "Offline & Sync", description: "Reliable mobile UX.", lessons: ["Local storage", "Sync patterns", "Error handling"] },
      { title: "Publishing", description: "Ship to the App Store & Play Store.", lessons: ["EAS builds", "Store assets", "Release management"] },
    ],
    resources: [
      { title: "React Native Notes", type: "PDF Notes", premium: false },
      { title: "Navigation Cheatsheet", type: "PDF Notes", premium: false },
      { title: "Store Submission Kit", type: "Guide", premium: true },
    ],
    capstone: {
      title: "Build a Booking Mobile App",
      description: "Design and publish a cross-platform booking app with auth, notifications and offline support.",
      highlights: ["React Native + Expo", "Push notifications", "App store release"],
    },
  },
];

export const getCourseBySlug = (slug: string) => courses.find((c) => c.slug === slug);
