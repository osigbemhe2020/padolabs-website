import { Project } from "../project";

export const clientDashboardProjects: Project[] = [
{
  slug: {
    current: "konnectu-client-dashboard",
  },

  category: {
    _type: "reference",
    _ref: "category-web-early",
  },

  meta: {
    title: "KonnectU Client Dashboard",
    description:
      "A dashboard application built as a frontend internship assessment for Belsoft Systems Limited. This project marked my first experience with Next.js, Chart.js, Vercel deployment, and building under a real delivery deadline.",
    keywords: [
      "Next.js",
      "React",
      "Dashboard",
      "Chart.js",
      "Frontend Assessment",
      "Vercel",
      "JavaScript",
      "UI Development",
      "Responsive Design",
      "Build In Public"
    ],
    year: "2025",
    phase: "Frontend Development",
    featured: true,
  },

  hero: {
    title: "KonnectU Client Dashboard",
    subtitle:
      "My First Next.js Application Built For A Real Frontend Assessment",
    description:
      "A dashboard application created for a frontend internship assessment at Belsoft Systems Limited. The project introduced me to Next.js, Vercel deployment, Chart.js integration, and the realities of building under a fixed delivery deadline. It became my first experience applying React skills in a more professional and structured environment.",
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Chart.js",
      "react-chartjs-2",
      "CSS"
    ],
    role: "Frontend Developer",
    timeline: "May 2025",
    projectType: "Frontend Assessment Project",
    origin: "Belsoft Systems Limited Internship Assessment",
    liveUrl: "https://konnectu-next-app.vercel.app",
    githubUrl: "https://github.com/osigbemhe2020/konnectu-next-app.git",
  },

  context: {
    title: "From Learning Frameworks To Delivering Under Pressure",
    body:
      "After learning React through smaller projects, I received a frontend internship assessment from Belsoft Systems Limited that required building a dashboard using Next.js within four days. Although I had only recently started learning Next.js, I completed the application in approximately three days while simultaneously learning the framework. The project introduced chart visualizations, dashboard architecture, deployment workflows, and component organization under a real deadline. More than a dashboard project, it marked my transition from learning frameworks through tutorials to using them in a practical assessment environment.",
    highlightQuote:
      "This was the first project where learning and delivery had to happen at the same time.",
    milestone:
      "Built and deployed my first Next.js application to production using Vercel.",
  },

  goals: {
    title: "Project Goals",
    items: [
      {
        title: "Complete The Assessment Successfully",
        desc:
          "Deliver a fully functional dashboard application within the four-day assessment timeline."
      },
      {
        title: "Learn Next.js Through Practice",
        desc:
          "Apply newly learned Next.js concepts in a real project rather than relying solely on tutorials."
      },
      {
        title: "Implement Dashboard Analytics",
        desc:
          "Display data visually through charts, analytics cards, and management sections."
      },
      {
        title: "Gain Deployment Experience",
        desc:
          "Successfully deploy the project using Vercel and understand production build requirements."
      }
    ]
  },

  challenges: {
    title: "Challenges & Obstacles",
    intro:
      "Almost every aspect of the project introduced something unfamiliar. I was still learning React, had only recently started Next.js, and was simultaneously trying to meet an assessment deadline.",
    items: [
      {
        title: "Learning Next.js While Building",
        description:
          "The project required Next.js, but I had only recently started learning the framework and was still adjusting to its structure and conventions."
      },
      {
        title: "React To Next.js Migration",
        description:
          "To reduce risk, I initially built much of the interface using React before migrating the components into a Next.js application, which created additional complexity during deployment."
      },
      {
        title: "Chart Integration",
        description:
          "Integrating Chart.js and react-chartjs-2 introduced challenges related to configuration, rendering, and data visualization."
      },
      {
        title: "Vercel Deployment",
        description:
          "Understanding build logs, resolving deployment errors, and getting the application to build successfully in production proved more difficult than expected."
      }
    ]
  },

  process: {
    title: "Development Process",
    steps: [
      {
        step: "01",
        title: "Studied The Assessment Requirements",
        description:
          "Reviewed the provided design, identified major dashboard sections, and planned the implementation approach."
      },
      {
        step: "02",
        title: "Built The Initial React Version",
        description:
          "Started implementing the interface using familiar React patterns before gradually migrating components into Next.js."
      },
      {
        step: "03",
        title: "Integrated Dashboard Features",
        description:
          "Implemented charts, analytics cards, account management tables, job listings, and responsive dashboard layouts."
      },
      {
        step: "04",
        title: "Resolved Deployment Issues",
        description:
          "Debugged production build errors, fixed Next.js deployment issues, and successfully deployed the application using Vercel."
      }
    ]
  },

  technicalLearnings: {
    title: "Technical Learnings",
    items: [
      {
        title: "Next.js Fundamentals",
        body:
          "Learned the App Router structure, project organization, image optimization, and framework-specific development patterns.",
        progress: 75
      },
      {
        title: "Vercel Deployment",
        body:
          "Learned how production deployments differ from local development and how to troubleshoot build failures through deployment logs.",
        progress: 85
      },
      {
        title: "Reusable Component Architecture",
        body:
          "Improved my ability to split large interfaces into reusable React components with clear responsibilities.",
        progress: 82
      },
      {
        title: "Chart Integration",
        body:
          "Learned how to integrate Chart.js and react-chartjs-2 to visualize dashboard data effectively.",
        progress: 80
      },
      {
        title: "Working Under Deadlines",
        body:
          "Experienced the importance of prioritization, decision-making, and balancing quality with delivery speed.",
        progress: 90
      }
    ]
  },

  reflection: {
    title: "Reflection",

    intro:
      "This project represented my first real experience using a modern React framework under assessment conditions. It forced me to learn, build, troubleshoot, and deliver simultaneously.",

    then: {
      title: "Trying To Keep Up With The Deadline",
      thenbody:
        "At the time, I was still transitioning from traditional HTML, CSS, and JavaScript projects into framework-based development. React was still relatively new to me, and Next.js felt even more unfamiliar. My focus was primarily on getting everything functional, matching the design, and meeting the assessment deadline. Architecture, optimization, and scalability were secondary concerns compared to simply delivering a working solution."
    },

    now: {
      title: "Understanding Frameworks Beyond The UI",
      nowbody:
        "Looking back, I see this project as one of the key milestones in my frontend journey. Today, I understand concepts that were beyond my experience at the time, including deployment pipelines, application architecture, routing strategies, component boundaries, and maintainability. Rather than focusing only on building screens, I now think more carefully about scalability, developer experience, and long-term project evolution."
    },

    improvements: [
      "Rebuild using TypeScript",
      "Integrate real backend APIs",
      "Implement authentication",
      "Adopt Tailwind CSS",
      "Improve accessibility",
      "Refactor dashboard into feature modules"
    ]
  },

  growth: {
    title: "Growth & Evolution",
    description:
      "This project marked my transition from learning React concepts to working with a production framework. It introduced deployment workflows, dashboard architecture, and the realities of building under external expectations and deadlines.",

    milestones: [
      {
        title: "First Next.js Project",
        status: "Completed"
      },
      {
        title: "First Vercel Deployment",
        status: "Completed"
      },
      {
        title: "First Frontend Assessment",
        status: "Completed"
      },
      {
        title: "First Chart.js Dashboard",
        status: "Completed"
      }
    ]
  },

  features: {
    title: "Key Features",
    items: [
      {
        title: "Dashboard Analytics",
        description:
          "Visualize performance metrics and business statistics using charts and summary cards."
      },
      {
        title: "Job Oversight Module",
        description:
          "Display job listings, search functionality, and management interfaces."
      },
      {
        title: "Account Management",
        description:
          "Manage users, account status, and administrative controls through structured dashboard tables."
      },
      {
        title: "Responsive Layout",
        description:
          "Adapt the dashboard experience across desktop and smaller screen sizes."
      },
      {
        title: "Sidebar Navigation",
        description:
          "Navigate between dashboard sections through a structured sidebar interface."
      }
    ]
  },

  engineeringDecisions: {
    title: "Engineering Decisions",
    items: [
      {
        title: "Framework Selection",
        choice: "Next.js",
        rejected: "Standard React",
        rationale:
          "Next.js was a mandatory requirement for the assessment and provided an opportunity to learn a production-ready React framework."
      },
      {
        title: "Dashboard Structure",
        choice: "Component-Based Architecture",
        rejected: "Single Large Page Component",
        rationale:
          "Separating Revenue, Performance, Jobs, and Account sections improved maintainability and readability."
      },
      {
        title: "Chart Solution",
        choice: "Chart.js + react-chartjs-2",
        rejected: "Custom Visualization Logic",
        rationale:
          "The library provided professional charting capabilities while reducing development time."
      },
      {
        title: "Data Source",
        choice: "Mock Data",
        rejected: "Backend Integration",
        rationale:
          "The assessment focused on frontend implementation rather than API development."
      }
    ]
  },

  retrospective: {
    title: "Retrospective",
    items: [
      {
        text:
          "This project taught me that learning a framework becomes much easier when solving a real problem rather than following tutorials."
      },
      {
        text:
          "Deployment challenges provided some of the most valuable learning experiences of the entire project."
      },
      {
        text:
          "Component-based architecture helped keep a relatively large dashboard manageable despite my limited experience."
      },
      {
        text:
          "The project reinforced the importance of shipping working software under deadlines rather than endlessly refining details."
      }
    ]
  },

  cta: {
    title: "Explore The Project",
    description:
      "View the dashboard and explore the project that introduced me to Next.js, Vercel deployment, dashboard architecture, and building under a real frontend assessment deadline.",

    buttons: [
      {
        label: "Live Demo",
        url: "https://konnectu-next-app.vercel.app"
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/osigbemhe2020/konnectu-next-app.git"
      }
    ]
  }
}


];