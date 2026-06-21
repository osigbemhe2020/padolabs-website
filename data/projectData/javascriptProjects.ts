import { Project } from "../project";

export const javascriptProjects: Project[] = [
  {
    slug: { current: "javascript-projects" },
    category: {
      _type: "reference",
      _ref: "category-web-early",
    },
    meta: {
      title: "JavaScript Algorithms & Data Structures Projects",
      description:
        "A collection of JavaScript projects including a Phone Number Validator, Cash Register, and Creature Search App that strengthened my problem-solving skills, algorithmic thinking, regular expressions knowledge, and API integration experience.",
      keywords: [
        "JavaScript",
        "Algorithms",
        "Data Structures",
        "Regex",
        "API Integration",
        "Problem Solving",
        "DOM Manipulation",
        "freeCodeCamp",
      ],
      year: "2025",
      phase: "JavaScript Fundamentals",
      featured: true,
    },

    hero: {
      title: "JavaScript Algorithms & Data Structures Projects",
      subtitle: "Where JavaScript Became A Problem-Solving Tool",
      description:
        "A collection of three JavaScript projects built as part of the freeCodeCamp JavaScript Algorithms and Data Structures certification. The projects focused less on UI design and more on algorithmic thinking, input validation, edge case handling, and working with external data sources.",
      stack: [
        "JavaScript",
        "HTML",
        "CSS",
        "Regex",
        "Fetch API",
        "DOM Manipulation",
      ],
      role: "Frontend Developer",
      timeline: "January - March 2025",
      projectType: "Learning Project",
      origin: "freeCodeCamp JavaScript Algorithms & Data Structures Certification",
      liveUrl: " https://osigbemhe2020.github.io/javascript_projects/",
      githubUrl: "https://github.com/osigbemhe2020/javascript_projects.git",
    },

    context: {
      title: "From Learning Syntax To Solving Problems",
      body:
        "After spending months learning JavaScript concepts such as arrays, functions, DOM manipulation, APIs, local storage, and event handling, I reached a point where understanding syntax was no longer enough. These projects became an opportunity to apply everything together and focus on solving real problems. Rather than building interfaces, the emphasis shifted toward algorithmic thinking, handling edge cases, validating user input, and working with external data. This was the stage where JavaScript stopped feeling like a checklist of concepts and started feeling like a practical problem-solving tool.",
      highlightQuote:
        "This was the point where I stopped thinking about JavaScript features and started thinking about solutions.",
      milestone:
        "Transitioned from learning JavaScript concepts individually to applying them through real-world problem solving.",
    },

    goals: {
      title: "Project Goals",
      items: [
        {
          title: "Strengthen Problem-Solving Skills",
          desc:
            "Apply JavaScript concepts to solve practical programming challenges rather than isolated exercises.",
        },
        {
          title: "Learn Algorithmic Thinking",
          desc:
            "Break larger problems into smaller logical steps and implement structured solutions.",
        },
        {
          title: "Work With External Data",
          desc: "Fetch, process, and display information from APIs.",
        },
        {
          title: "Handle Edge Cases",
          desc:
            "Build more reliable applications by accounting for uncommon user inputs and system states.",
        },
      ],
    },

    challenges: {
      title: "Challenges & Obstacles",
      intro:
        "These projects required a different mindset compared to previous frontend projects because the difficulty came from logic and problem solving rather than UI implementation.",
      items: [
        {
          title: "Learning Regular Expressions",
          description:
            "The phone number validator introduced regular expressions, which initially felt difficult because of their compact syntax and pattern-matching rules.",
        },
        {
          title: "Cash Register Logic",
          description:
            "Determining the correct change while accounting for available denominations and insufficient funds required careful algorithm design.",
        },
        {
          title: "API Data Handling",
          description:
            "Fetching creature data and rendering it dynamically required understanding asynchronous JavaScript and response handling.",
        },
        {
          title: "Edge Case Management",
          description:
            "Each project required handling invalid inputs, unexpected states, and user errors gracefully.",
        },
      ],
    },

    process: {
      title: "Development Process",
      steps: [
        {
          step: "01",
          title: "Analyzed Each Problem",
          description:
            "Broke each challenge into smaller logical tasks before writing implementation code.",
        },
        {
          step: "02",
          title: "Implemented Core Logic",
          description:
            "Focused on creating reliable algorithms for validation, calculations, and data processing.",
        },
        {
          step: "03",
          title: "Integrated User Interaction",
          description:
            "Connected JavaScript logic to forms, buttons, DOM updates, and application feedback.",
        },
        {
          step: "04",
          title: "Tested Edge Cases",
          description:
            "Verified behavior across valid inputs, invalid inputs, and uncommon scenarios.",
        },
      ],
    },

    technicalLearnings: {
      title: "Technical Learnings",
      items: [
        {
          title: "Algorithm Design",
          body:
            "Learned how to decompose larger problems into smaller logical steps before implementation.",
          progress: 85,
        },
        {
          title: "Regular Expressions",
          body:
            "Developed a stronger understanding of pattern matching and input validation using regex.",
          progress: 75,
        },
        {
          title: "Asynchronous JavaScript",
          body:
            "Learned how to fetch external data and update interfaces using API responses.",
          progress: 80,
        },
        {
          title: "Edge Case Thinking",
          body:
            "Improved at anticipating unusual scenarios and building more reliable application logic.",
          progress: 90,
        },
      ],
    },

    reflection: {
      title: "Reflection",
      intro:
        "This collection of projects marked an important shift in how I approached development. Instead of focusing on learning individual JavaScript concepts, I began focusing on how those concepts worked together to solve problems.",

      then: {
        title: "Learning Concepts One By One",
        thenbody:
          "At the time, I viewed JavaScript primarily as a collection of topics to learn—arrays, loops, DOM manipulation, APIs, and local storage. My focus was on understanding each concept individually, and I often approached development as a checklist of features and syntax to memorize.",
      },

      now: {
        title: "Thinking In Problems And Systems",
        nowbody:
          "Looking back, I now see that programming is less about individual concepts and more about problem decomposition. Today, I focus on understanding requirements, identifying smaller tasks, designing solutions, and then selecting the appropriate tools and techniques to implement them.",
      },

      improvements: [
        "Convert projects to TypeScript",
        "Improve testing coverage",
        "Enhance accessibility support",
        "Add stronger error handling",
        "Improve UI presentation",
      ],
    },

    growth: {
      title: "Growth & Evolution",
      description:
        "These projects marked the transition from learning JavaScript syntax to developing problem-solving skills. They helped establish the foundation that later supported React, Next.js, TypeScript, and larger frontend applications.",
      milestones: [
        {
          title: "First Major Algorithm Challenges",
          status: "Completed",
        },
        {
          title: "First Use Of Regular Expressions",
          status: "Completed",
        },
        {
          title: "First API-Driven Application",
          status: "Completed",
        },
        {
          title: "Developed Structured Problem-Solving Approach",
          status: "Completed",
        },
      ],
    },

    features: {
      title: "Key Features",
      items: [
        {
          title: "Phone Number Validation",
          description:
            "Validate multiple phone number formats using regular expressions.",
        },
        {
          title: "Cash Register Simulation",
          description:
            "Calculate change accurately while accounting for available denominations and drawer balances.",
        },
        {
          title: "Creature Search",
          description:
            "Fetch and display creature information dynamically from an external API.",
        },
        {
          title: "Input Validation",
          description:
            "Handle invalid user inputs and provide appropriate feedback.",
        },
        {
          title: "Dynamic DOM Updates",
          description:
            "Update application state and interface content without page reloads.",
        },
      ],
    },

    engineeringDecisions: {
      title: "Engineering Decisions",
      items: [
        {
          title: "Validation Strategy",
          choice: "Regular Expressions",
          rejected: "Manual Character Checking",
          rationale:
            "Regex provided a more concise and scalable way to validate phone number formats.",
        },
        {
          title: "Change Calculation",
          choice: "Greedy Algorithm Approach",
          rejected: "Hardcoded Conditional Logic",
          rationale:
            "A denomination-based algorithm was easier to maintain and adapt.",
        },
        {
          title: "API Integration",
          choice: "Fetch API",
          rejected: "Static JSON Data",
          rationale:
            "Fetching live data provided practical experience with asynchronous JavaScript.",
        },
      ],
    },

    retrospective: {
      title: "Retrospective",
      items: [
        {
          text:
            "The most valuable lesson from these projects was learning how to break larger problems into manageable pieces.",
        },
        {
          text:
            "The cash register project significantly improved my algorithmic thinking and edge-case handling.",
        },
        {
          text:
            "Working with APIs helped bridge the gap between isolated exercises and real-world applications.",
        },
        {
          text:
            "These projects laid the foundation for everything I later built with React and Next.js.",
        },
      ],
    },

    cta: {
      title: "Explore The Projects",
      description:
        "View the projects and see how algorithmic thinking, problem decomposition, regex validation, and API integration came together through practical JavaScript challenges.",
      buttons: [
        {
          label: "Live Demo",
          url: "",
        },
        {
          label: "View Source Code",
          url: "",
        },
      ],
    },
  },
];