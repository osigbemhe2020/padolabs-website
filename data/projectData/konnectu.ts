
import { Project } from "../project";

export const konnectuProjects: Project[] = [
{
  slug: {
    current: "konnectu-professional-dashboard",
  },

  category: {
    _type: "reference",
    _ref: "category-web-early",
  },


  meta: {
    title: "KonnectU Professional Dashboard",
    description:
      "A role-based professional dashboard built as my first real task as a Frontend Developer Intern at Belsoft Systems Limited. The project introduced me to TypeScript, Tailwind CSS, Zustand, team collaboration, and large-scale application architecture.",
    keywords: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Dashboard",
      "Frontend Development",
      "Role-Based UI",
      "Professional Experience",
      "React",
      "State Management"
    ],
    year: "2025",
    phase: "Professional Development",
    featured: true
  },

  hero: {
    title: "My First Real Task As A Frontend Developer",
    subtitle:
      "Building the professional dashboard for a gig-matching platform while learning how modern software teams build products.",
    description:
      "After joining Belsoft Systems Limited as a Frontend Developer Intern, I was assigned ownership of the professional dashboard for KonnectU, a role-based gig-matching platform. This project introduced me to team collaboration, TypeScript, Tailwind CSS, Zustand, and large-scale frontend architecture. More importantly, it changed how I viewed software development—from building projects alone to contributing to a shared product alongside other developers.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React",
      "React Icons"
    ],
    role: "Frontend Developer Intern",
    timeline: "June 2025 - July 2025",
    projectType: "Professional Team Project",
    origin: "Belsoft Systems Limited",
    liveUrl: "https://form-demo-jxzycus3j-pauls-projects-565cfc95.vercel.app/",
    githubUrl: "https://github.com/osigbemhe2020/form-demo.git"
  },

  context: {
    title: "From Personal Projects To Professional Software Development",
    body:
      "After receiving the opportunity to join Belsoft Systems Limited, I was assigned my first real development task: building the professional dashboard for KonnectU, a gig-matching platform. Unlike previous personal projects, I had to work within an existing architecture, follow team conventions, collaborate with other developers, and think about how my work integrated into a larger system. The project exposed me to TypeScript, Tailwind CSS, Zustand, Git workflows, and professional frontend development practices. Although the product was eventually discontinued after the client contract was cancelled, the experience became one of the most important milestones in my growth as a developer.",
    highlightQuote:
      "This was the project where I stopped building alone and started learning how software teams build together.",
    milestone:
      "First contribution to a real product as part of a professional software development team."
  },

  goals: {
    title: "Project Goals",
    items: [
      {
        title: "Build The Professional Dashboard",
        desc:
          "Implement the complete professional user experience based on the provided Figma designs."
      },
      {
        title: "Learn Team-Based Development",
        desc:
          "Work within a shared codebase and understand how multiple developers contribute to the same application."
      },
      {
        title: "Improve Frontend Architecture Skills",
        desc:
          "Build reusable components and organize code in a scalable manner suitable for larger applications."
      },
      {
        title: "Learn Modern Frontend Technologies",
        desc:
          "Gain practical experience using TypeScript, Tailwind CSS, Zustand, and advanced React patterns."
      }
    ]
  },

  challenges: {
    title: "Challenges",
    intro:
      "This project introduced multiple technologies and development practices that were completely new to me. Beyond building features, I had to understand team workflows, large codebases, and shared development standards.",
    items: [
      {
        title: "Learning TypeScript In A Real Project",
        description:
          "I had to quickly understand TypeScript fundamentals while actively contributing to a production codebase."
      },
      {
        title: "Managing Complex Dashboard Navigation",
        description:
          "The professional dashboard contained numerous interconnected screens and onboarding steps that required careful navigation logic."
      },
      {
        title: "State Management Across Multiple Screens",
        description:
          "Managing screen transitions, profile setup progress, and dashboard interactions became increasingly difficult with local state alone."
      },
      {
        title: "Adapting To Team Development",
        description:
          "Working within an existing architecture, following established patterns, and understanding other developers' code required a different mindset from personal projects."
      }
    ]
  },

  process: {
    title: "Development Process",
    steps: [
      {
        step: "01",
        title: "Understanding The Existing Product",
        description:
          "Reviewed the Figma designs, studied the existing codebase, and learned how the professional dashboard fit into the larger KonnectU platform."
      },
      {
        step: "02",
        title: "Building The Professional Dashboard",
        description:
          "Implemented profile setup screens, onboarding flows, navigation systems, dashboard layouts, and user interaction patterns using Next.js and TypeScript."
      },
      {
        step: "03",
        title: "Managing State And User Flows",
        description:
          "Introduced Zustand to coordinate navigation, onboarding progress, and dashboard state without excessive prop drilling."
      },
      {
        step: "04",
        title: "Refining Team-Level Frontend Development",
        description:
          "Improved component organization, strengthened TypeScript usage, adopted Tailwind workflows, and learned from collaborating within a shared codebase."
      }
    ]
  },
 
technicalLearnings: {
  title: "Technical Learnings",
  items: [
    {
      title: "TypeScript In Real Applications",
      body:
        "Moved beyond JavaScript by learning how type safety improves maintainability, developer confidence, and application scalability. This project became my first practical exposure to working with interfaces, component props, and strongly typed state.",
      progress: 85
    },

    {
      title: "Global State Management With Zustand",
      body:
        "Learned when local component state becomes insufficient and how centralized state management simplifies complex application flows involving navigation, onboarding processes, and shared UI state.",
      progress: 90
    },

    {
      title: "Role-Based Application Architecture",
      body:
        "Developed a deeper understanding of how modern applications adapt interfaces, navigation structures, and user experiences based on different user roles and permissions.",
      progress: 88
    },

    {
      title: "Component Organization At Scale",
      body:
        "Improved my ability to break large features into reusable components with clear responsibilities, making applications easier to maintain and extend.",
      progress: 92
    },

    {
      title: "Professional Git Workflows",
      body:
        "Gained hands-on experience working within a shared repository, managing branches, pulling updates, and contributing to a collaborative development process.",
      progress: 85
    }
  ]
},

reflection: {
  title: "Reflection",

  intro:
    "This project marked one of the most significant transitions in my frontend journey. For the first time, I was contributing to a real product, collaborating with other developers, and working within an existing architecture instead of building everything independently.",

  then: {
    title: "Learning How Professional Software Is Built",
    thenbody:
      "At the time, most of my experience came from personal projects where I controlled every decision and every line of code. While I could build interfaces independently, I had limited exposure to large codebases, TypeScript, state management libraries, and collaborative development practices. Much of my focus was on understanding how professional teams organize projects, structure components, and build maintainable systems."
  },

  now: {
    title: "Building With Teams In Mind",
    nowbody:
      "Looking back, this project changed how I think about software development. Today, I pay closer attention to maintainability, scalability, code readability, and developer experience. Rather than writing code solely to solve immediate problems, I think about how future developers will understand, extend, and maintain the systems I contribute to."
  },

  improvements: [
    "Implement backend integration for profile management",
    "Add automated testing coverage",
    "Introduce role-based route protection",
    "Refactor dashboard state into feature-specific stores",
    "Improve accessibility compliance",
    "Add performance monitoring and analytics"
  ]
},

growth: {
  title: "Growth & Evolution",

  description:
    "This project transformed my perspective on frontend development. It introduced me to professional workflows, collaborative development, scalable architecture, and the realities of building software within a team environment. More than any specific feature, the experience helped me understand what it means to contribute to a product rather than simply build a project.",

  milestones: [
    {
      title: "First Professional Frontend Task",
      status: "Completed"
    },
    {
      title: "First TypeScript Project",
      status: "Completed"
    },
    {
      title: "First Zustand Implementation",
      status: "Completed"
    },
    {
      title: "First Team-Based Development Experience",
      status: "Completed"
    },
    {
      title: "First Role-Based Dashboard Architecture",
      status: "Completed"
    }
  ]
},

features: {
  title: "Key Features",

  items: [
    {
      title: "Role-Based Dashboard Experience",
      description:
        "Implemented dashboard behavior and navigation that adapts based on the active user role."
    },

    {
      title: "Multi-Step Profile Setup Flow",
      description:
        "Built a guided onboarding experience that walks professionals through profile creation, services, portfolio management, and payment setup."
    },

    {
      title: "Dynamic Screen Navigation",
      description:
        "Created a centralized navigation system that dynamically switches between dashboard sections without requiring page reloads."
    },

    {
      title: "Responsive Dashboard Layout",
      description:
        "Implemented desktop and mobile experiences with adaptive navigation and sidebar behavior."
    },

    {
      title: "Reusable Modal System",
      description:
        "Developed portal-based popup components that could be reused across multiple dashboard workflows."
    },

    {
      title: "Portfolio Management Flow",
      description:
        "Built screens allowing professionals to manage portfolio content as part of their profile setup process."
    }
  ]
},

engineeringDecisions: {
  title: "Engineering Decisions",

  items: [
    {
      title: "State Management Strategy",
      choice: "Zustand",
      rejected: "Prop Drilling With useState",
      rationale:
        "As dashboard complexity increased, passing state through multiple component layers became difficult to maintain. Zustand provided a centralized and predictable state management solution."
    },

    {
      title: "Role Detection Architecture",
      choice: "URL-Based Role Detection",
      rejected: "Hardcoded Role Views",
      rationale:
        "Using route-based role detection allowed dashboard behavior to adapt automatically based on the active section of the application."
    },

    {
      title: "Styling System",
      choice: "Tailwind CSS",
      rejected: "Traditional CSS Files",
      rationale:
        "Tailwind accelerated development while maintaining consistency across a large number of dashboard components."
    },

    {
      title: "Component Organization",
      choice: "Feature-Based Components",
      rejected: "Large Monolithic Dashboard Component",
      rationale:
        "Separating onboarding, portfolio, payment, profile, and navigation features into dedicated components improved maintainability and readability."
    },

    {
      title: "Dashboard Navigation",
      choice: "Single Dynamic Dashboard View",
      rejected: "Separate Route Per Dashboard Screen",
      rationale:
        "A centralized dashboard experience simplified onboarding flows and enabled smoother transitions between profile setup stages."
    }
  ]
},

retrospective: {
  title: "Retrospective",

  items: [
    {
      text:
        "This project taught me that understanding other developers' code is just as important as writing my own."
    },

    {
      text:
        "State management becomes increasingly important as application complexity grows beyond a few isolated components."
    },

    {
      text:
        "TypeScript initially felt challenging, but it quickly became one of the most valuable tools for maintaining larger applications."
    },

    {
      text:
        "Building software within a team requires consistency, communication, and maintainability rather than individual coding preferences."
    },

    {
      text:
        "This was the project where frontend development began to feel like software engineering rather than simply building interfaces."
    }
  ]
},

cta: {
  title: "A Turning Point In My Frontend Journey",

  description:
    "Although the original KonnectU platform was never launched due to the cancellation of the client contract, this project remains one of the most important milestones in my growth as a developer. It introduced me to professional collaboration, scalable frontend architecture, TypeScript, Zustand, and the realities of building software within a team.",

   buttons: [
      {
        label: "Live Demo",
        url: "https://form-demo-jxzycus3j-pauls-projects-565cfc95.vercel.app/"
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/osigbemhe2020/form-demo.git"
      }
    ]
    
}
}
];