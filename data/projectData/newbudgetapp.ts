import { Project } from "../project";   

export const newBudgetAppProject: Project[] = [
{
    slug: {
    current: "new-budget-app",
  },
  meta: {
    title: "Budget App",
    description:
      "A full-stack personal finance management application that helps users manage income, savings, expenses, debt tracking, and monthly budgeting through secure authentication and persistent cloud-based storage.",
    keywords: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "JWT Authentication",
      "Budget Management",
      "Finance Tracker",
      "Tailwind CSS",
      "Full Stack Development",
      "REST API"
    ],
    year: "2026",
    phase: "Version 1",
    featured: true
  },

  hero: {
    title: "Budget App",
    subtitle: "Rebuilding An Earlier Project As A Full-Stack Product",
    description:
      "A full-stack budgeting application that allows users to securely manage income, savings, expenses, debts, and monthly financial planning. Originally built as a localStorage project, it was rebuilt using modern backend architecture, authentication, relational databases, and production deployment practices.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "bcrypt",
      "Vercel",
      "Northflank"
    ],
    role: "Full Stack Developer",
    timeline: "3 Months",
    projectType: "Personal Project",
    origin: "Rebuild Of Project 5",
    liveUrl: "https://new-budget-app-self.vercel.app",
    githubUrl: "https://github.com/osigbemhe2020/new-budgetApp.git"
  },

  context: {
    title: "Project Context",
    body:
      "This project started as a complete rebuild of one of my earliest JavaScript applications. The original version relied entirely on localStorage and only supported a single user on a single browser. After gaining experience with backend development, databases, authentication, and deployment, I decided to revisit the concept and transform it into a true full-stack product. The rebuild introduced secure user authentication, relational database design, API development, and multi-user data isolation while preserving the original goal of helping users manage their finances.",
    highlightQuote:
      "The goal was no longer to store data in a browser. It was to build a system that could support real users.",
    milestone: "First Full-Stack Rebuild Of An Earlier Project"
  },

  goals: {
    title: "Project Goals",
    items: [
      {
        title: "Introduce Multi-User Support",
        desc:
          "Allow every user to securely manage their own financial records without access to other users' data."
      },
      {
        title: "Build A Production Backend",
        desc:
          "Develop a complete REST API using Express and MySQL to support persistent financial data management."
      },
      {
        title: "Implement Secure Authentication",
        desc:
          "Protect application resources using JWT authentication and password hashing."
      },
      {
        title: "Create Financial Automation",
        desc:
          "Automatically calculate savings allocations, spending limits, and debt generation."
      }
    ]
  },

  challenges: {
    title: "Challenges",
    intro:
      "Unlike the original localStorage version, this rebuild introduced backend architecture, database relationships, authentication workflows, and production deployment challenges.",
    items: [
      {
        title: "Financial Data Architecture",
        description:
          "Designing relationships between users, months, income sources, expenses, savings, debts, templates, and settings required careful planning to ensure scalability and maintainability."
      },
      {
        title: "Authentication Implementation",
        description:
          "Building JWT authentication, protecting routes, hashing passwords, and maintaining secure user sessions introduced new architectural challenges."
      },
      {
        title: "Business Logic Placement",
        description:
          "Determining which calculations should occur on the frontend versus the backend required balancing performance, consistency, and security."
      },
      {
        title: "Production Deployment",
        description:
          "Configuring frontend and backend deployments, handling environment variables, and resolving CORS-related issues exposed the differences between local and production environments."
      }
    ]
  },

  process: {
    title: "Development Process",
    steps: [
      {
        step: "01",
        title: "Designed The Database Architecture",
        description:
          "Created relational database structures for users, income, expenses, savings, debt tracking, monthly budgeting, templates, and application settings."
      },
      {
        step: "02",
        title: "Built Authentication & APIs",
        description:
          "Implemented JWT authentication, bcrypt password hashing, route protection, and REST API endpoints for financial management."
      },
      {
        step: "03",
        title: "Implemented Financial Logic",
        description:
          "Developed automatic savings allocation, debt generation, monthly calculations, and budgeting workflows that respond dynamically to user activity."
      },
      {
        step: "04",
        title: "Integrated Frontend & Backend",
        description:
          "Connected the React frontend to backend services while maintaining user-specific access control and state synchronization."
      },
      {
        step: "05",
        title: "Deployed To Production",
        description:
          "Configured deployment environments using Vercel and Northflank while troubleshooting CORS issues and production-specific bugs."
      }
    ]
  },

  technicalLearnings: {
    title: "Key Learnings",
    items: [
      {
        title: "Authentication & Authorization",
        body:
          "Learned how JWT authentication, password hashing, route protection, and user-specific authorization work together to secure modern web applications.",
        progress: 90
      },
      {
        title: "Relational Database Design",
        body:
          "Strengthened my understanding of schema design, table relationships, foreign keys, and modeling real-world business requirements using MySQL.",
        progress: 88
      },
      {
        title: "Backend API Development",
        body:
          "Improved my ability to design REST APIs, structure backend logic, and manage communication between frontend and backend systems.",
        progress: 90
      },
      {
        title: "Production Deployment",
        body:
          "Gained practical experience deploying full-stack applications, managing environments, configuring infrastructure, and debugging production issues.",
        progress: 85
      },
      {
        title: "Financial Business Logic",
        body:
          "Learned how to model financial rules such as savings allocation, debt tracking, monthly budgeting, and automated calculations.",
        progress: 92
      }
    ]
  },

  reflection: {
    title: "Reflection",
    intro:
      "Rebuilding this application highlighted how much my understanding of software development has evolved. What started as a simple localStorage project became an exercise in backend architecture, authentication, databases, deployment, and product thinking.",

    then: {
      title: "Managing Data In The Browser",
      thenbody:
        "At the time, my understanding of application architecture was largely limited to the browser. LocalStorage felt like persistence, and application state was something managed entirely through JavaScript. My focus was on DOM manipulation, user interactions, and making data survive page refreshes rather than thinking about databases, authentication, or multi-user systems."
    },

    now: {
      title: "Designing Systems For Real Users",
      nowbody:
        "Rebuilding the Budget App forced me to think beyond frontend development and consider complete systems. Instead of managing data in a browser, I had to design APIs, databases, authentication workflows, security boundaries, and deployment environments. Today I think more carefully about scalability, maintainability, data ownership, and how software behaves in production."
    },

    improvements: [
      "Recurring expenses",
      "Charts and analytics",
      "Multi-currency support",
      "Inflation tracking",
      "Credit score implementation",
      "Google Calendar integration",
      "AI-powered financial insights",
      "Profit and loss reporting",
      "Automated tax summaries",
      "Cron-based monthly automation"
    ]
  },

  growth: {
    title: "Growth & Evolution",
    description:
      "This project represented one of the clearest demonstrations of growth throughout my development journey. The transition from a localStorage-based application to a secure multi-user platform highlighted how much my understanding of software architecture, databases, security, and deployment had evolved.",
    milestones: [
      {
        title: "First Full-Stack Rebuild",
        status: "Completed"
      },
      {
        title: "JWT Authentication Implementation",
        status: "Completed"
      },
      {
        title: "Production MySQL Application",
        status: "Completed"
      },
      {
        title: "Production Deployment Experience",
        status: "Completed"
      }
    ]
  },

  features: {
    title: "Key Features",
    items: [
      {
        title: "User Authentication",
        description:
          "Secure JWT-based authentication with encrypted passwords and protected routes."
      },
      {
        title: "Income Management",
        description:
          "Add and manage multiple income sources while calculating total monthly earnings."
      },
      {
        title: "Savings Allocation",
        description:
          "Automatically reserve a configurable percentage of income as savings."
      },
      {
        title: "Expense Tracking",
        description:
          "Monitor expenses against available budgets and spending limits."
      },
      {
        title: "Debt Management",
        description:
          "Automatically track overspending and convert budget deficits into debt records."
      },
      {
        title: "Expense Templates",
        description:
          "Reuse common expense categories to simplify recurring financial entries."
      },
      {
        title: "Monthly Budget Organization",
        description:
          "Organize financial records by month to support long-term tracking and reporting."
      }
    ]
  },

  engineeringDecisions: {
    title: "Engineering Decisions",
    items: [
      {
        title: "Database Selection",
        choice: "MySQL",
        rejected: "MongoDB",
        rationale:
          "Financial data contains strong relationships between users, months, expenses, savings, and debts, making a relational database a better fit."
      },
      {
        title: "Authentication Strategy",
        choice: "JWT Authentication",
        rejected: "Session-Based Authentication",
        rationale:
          "JWT authentication provided a lightweight solution suitable for a decoupled frontend and backend architecture."
      },
      {
        title: "Password Security",
        choice: "bcrypt",
        rejected: "Plain Text Storage",
        rationale:
          "User credentials must be protected using secure hashing algorithms before database storage."
      },
      {
        title: "Savings Automation",
        choice: "Automatic Savings Allocation",
        rejected: "Manual Savings Tracking",
        rationale:
          "Automatically reserving savings improves consistency and reduces user effort."
      },
      {
        title: "Debt Tracking",
        choice: "Automatic Debt Generation",
        rejected: "Manual Debt Entry",
        rationale:
          "Overspending should immediately update a user's financial position without requiring additional actions."
      }
    ]
  },

  retrospective: {
    title: "Retrospective",
    items: [
      {
        text: "Building production applications requires a completely different mindset than building projects that only run locally."
      },
      {
        text: "Database design often influences application complexity more than frontend implementation."
      },
      {
        text: "Authentication is much easier to understand conceptually than to implement securely."
      },
      {
        text: "Deployment issues often reveal architectural assumptions that are invisible during development."
      }
    ]
  },

  cta: {
    title: "Explore The Project",
    description:
      "View the application, explore the codebase, and see how an early localStorage project evolved into a secure full-stack financial management platform.",
    buttons: [
      {
        label: "Live Demo",
        url: "https://new-budget-app-self.vercel.app"
      },
      {
        label: "Source Code",
        url: "https://github.com/padolabs/new-budget-app"
      }
    ]
  }
}

]

