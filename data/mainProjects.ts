

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

interface Project {
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
export const projects: Project[] = [
  {
    slug: "ecommerce-homepage-ui",
    category: "web-early",
    meta: {
      title: "E-Commerce Homepage UI",
      description: "My first frontend UI build focused on translating a Dribbble-inspired design into a responsive product interface using HTML and CSS.",
      keywords: [
        "Frontend Development",
        "HTML",
        "CSS",
        "Responsive Design",
        "Portfolio Project",
        "UI Development"
      ],
      category: "Frontend Development",
      year: 2024,
      phase: "Early Frontend Journey",
      featured: true
    },


    hero: {
      title: "E-Commerce Homepage UI",
      subtitle: "My first attempt at transforming a UI concept into a real product interface.",
      description: "Built after completing HTML and CSS fundamentals, this project marked the beginning of my frontend development journey and introduced me to responsive layouts, visual hierarchy, and structured UI development.",
      stack: [
        "HTML",
        "CSS"
      ],
      role: "Frontend Development",
      timeline: "May 2024",
      projectType: "Training Project",
      origin: "First project recreated from Dribbble inspiration",
      liveUrl: "https://osigbemhe2020.github.io/e-commerce/",
      githubUrl: "https://github.com/osigbemhe2020/e-commerce.git",
      heroImage: "/assets/e-commerce-hero.png",
      thumbnail: "/assets/e-commerce-hero.png"
    },

    screenshots: [
      "/assets/screen1.png",
      "/assets/screen2.png",
      "/assets/screen3.png",
    ],

    context: {
      title: "The Context",
      intro: "After finishing my HTML and CSS fundamentals, I wanted to test whether I could recreate a real-world product interface from scratch.",
      body: [
        "Before this project, most of my practice consisted of small exercises and isolated components. This was the first time I attempted to structure an entire homepage like a real e-commerce product.",
        "The project was inspired by a Dribbble design and became my first serious attempt at building a polished frontend interface.",
        "Although simple by today's standards, this project laid the foundation for how I think about frontend structure, responsiveness, and UI implementation."
      ],
      highlightQuote: "This project was the point where frontend development started feeling real to me."
    },

    goals: {
      title: "Project Goals",
      items: [
        {
          title: "Translate UI Into Code",
          description: "Practice converting a visual design into structured frontend code.",
        },
        {
          title: "Improve Layout Skills",
          description: "Learn how to structure responsive layouts using HTML and CSS.",
         
        },
        {
          title: "Understand Visual Hierarchy",
          description: "Experiment with spacing, alignment, and section organization.",    
          },
          {
          title: "Build a Full Interface",
          description: "Move beyond small exercises and create a complete product-style homepage.",
          }
      ]
    },

    features: {
      title: "Key Features",
    items: [
      {
        title: "Energy Consumption Dashboard",
        description: "Integrated Chart.js to visualize historical smart home energy usage using mock analytics data."
      },
      {
        title: "Responsive Dashboard Layout",
        description: "Built a responsive multi-section dashboard using CSS Grid, Flexbox, and Bootstrap utilities."
      },
      {
        title: "Custom Thermostat UI",
        description: "Created an interactive thermostat control using JavaScript and CSS-based circular progress indicators."
      },
      {
        title: "Custom Toggle Switches",
        description: "Designed reusable toggle switch components for simulated smart device controls."
      },
      {
        title: "Adaptive Mobile Experience",
        description: "Implemented multiple responsive breakpoints to restructure dashboard sections for smaller devices."
      }
    ]
    },

    challenges: {
      title: "Challenges",
      intro: "At this stage, I was still very early in my frontend journey, so even basic layout decisions required experimentation and iteration.",
      imageUrl:"/assets/challenge.png",
      items: [
        {
          title: "Responsive Layouts",
          description: "Making sections adapt properly across screen sizes without breaking the layout."
        },
        {
          title: "Spacing Consistency",
          description: "Learning how padding, margins, and alignment affect overall visual quality."
        },
        {
          title: "Component Structuring",
          description: "Understanding how to break the page into reusable UI sections."
        },
        {
          title: "Pure HTML & CSS",
          description: "Building the entire interface without JavaScript functionality."
        }
      ]
    },

    process: {
      title: "Development Process",
      steps: [
        {
          step: "01",
          image: "/assets/process1.png",
          title: "Analyzed the Design",
          description: "Studied the Dribbble inspiration and identified reusable sections."
        },
        {
          step: "02",
          image: "/assets/process2.png",
          title: "Structured the Layout",
          description: "Built the page section-by-section using semantic HTML."
        },
        {
          step: "03",
          image: "/assets/process3.png",
          title: "Styled the Interface",
          description: "Used CSS to recreate spacing, typography, and layout behavior."
        },
        {
          step: "04",
          image: "/assets/process4.png",
          title: "Improved Responsiveness",
          description: "Adjusted layouts and alignment for smaller screen sizes."
        }
      ]
    },

    technicalLearnings: {
      title: "Key Learnings",
      items: [
        {
          title: "UI Translation",
          body: "Learned how to convert visual layouts into structured frontend code.",
          progress: 85
        },
        {
          title: "Layout Systems",
          body: "Improved understanding of positioning, spacing, and responsive alignment.",
          progress: 75
        },
        {
          title: "Frontend Structure",
          body: "Began understanding the importance of clean and organized HTML structure.",
          progress: 70
        },
        {
          title: "Visual Consistency",
          body: "Learned how consistent spacing and hierarchy improve design quality.",
          progress: 80
        }
      ]
    },

    reflection: {
      title: "Looking Back",
      intro: "Compared to my recent projects, this interface feels visually simple and structurally limited — but it represents a major turning point in my learning journey.",
      then: {
        title: "Then",
        points: [
          "Focused mainly on recreating visuals",
          "Limited understanding of scalability",
          "Minimal responsiveness knowledge",
          "Basic frontend structure"
        ],
        image: "/mock/projects/ecommerce/then.png"
      },
      now: {
        title: "Now",
        points: [
          "Better understanding of responsive systems",
          "More intentional component architecture",
          "Stronger UI/UX awareness",
          "Cleaner frontend organization"
        ],
        image: "/mock/projects/ecommerce/now.png"
      },
      improvements: [
        "Rebuild using React and Next.js",
        "Improve accessibility and semantic structure",
        "Add reusable component architecture",
        "Optimize responsiveness more professionally",
        "Implement modern design systems"
      ]
    },

    growth: {
      title: "Growth & Evolution",
      description: "This project marked the beginning of my transition from following tutorials to thinking like a frontend developer building real interfaces.",
      milestones: [
        {
          title: "HTML & CSS Fundamentals",
          status: "Completed"
        },
        {
          title: "First Dribbble Recreation",
          status: "This Project"
        },
        {
          title: "Responsive Design Confidence",
          status: "Developing"
        },
        {
          title: "Component-Based Development",
          status: "Future Growth"
        }
      ]
    },

    showcase: {
      title: "Project Showcase",
      description: "A collection of interface previews and responsive layouts from the project.",
      images: [
        {
          src: "/mock/projects/ecommerce/showcase-1.png",
          alt: "Homepage Hero Section"
        },
        {
          src: "/mock/projects/ecommerce/showcase-2.png",
          alt: "Product Grid Layout"
        },
        {
          src: "/mock/projects/ecommerce/showcase-3.png",
          alt: "Mobile Responsive View"
        }
      ],
      metrics: [
        {
          label: "Responsive Layout",
          value: "Yes"
        },
        {
          label: "Frontend Stack",
          value: "HTML/CSS"
        },
        {
          label: "Project Type",
          value: "Learning Project"
        },
        {
          label: "Milestone",
          value: "First Full UI Build"
        }
      ]
    },

    cta: {
      title: "Explore The Project",
      description: "View the live demo and source code for this project.",
      buttons: [
        {
          label: "Live Demo",
          url: "https://osigbemhe2020.github.io/e-commerce/"
        },
        {
          label: "View Source Code",
          url: "https://github.com/osigbemhe2020/e-commerce.git"
        }
      ]
    }
  },
  {
  slug: "smart-home-dashboard",
   category: "web-early",
  meta: {
    title: "Smart Home Dashboard",
    description: "An interactive smart home dashboard inspired by a Dribbble concept, built to explore responsive dashboard architecture, energy visualization, and dynamic UI behavior using JavaScript and Chart.js.",
    keywords: [
      "Frontend Development",
      "Dashboard UI",
      "JavaScript",
      "Chart.js",
      "CSS Grid",
      "Bootstrap",
      "Responsive Design",
      "Smart Home UI",
      "Data Visualization"
    ],
    category: "Frontend Development",
    year: 2024,
    phase: "Interactive Frontend Journey",
    featured: true
  },

  hero: {
    title: "Smart Home Dashboard",
    subtitle: "My transition from static layouts to interactive frontend systems.",
    description: "Built as a personal challenge after my first UI project, this dashboard helped me move beyond static page design into interactive interfaces, responsive dashboard architecture, and visual data representation using JavaScript and Chart.js.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Chart.js"
    ],
    role: "Frontend Development",
    timeline: "June 2024",
    projectType: "Personal Challenge / Dribbble Recreation",
    origin: "Built after recreating a smart home dashboard concept from Dribbble",
    liveUrl: "YOUR_LIVE_URL",
    githubUrl: "YOUR_GITHUB_URL",
    heroImage: "/mock/projects/smart-dashboard/hero.png",
    thumbnail: "/mock/projects/smart-dashboard/thumbnail.png"
  },

  screenshots: [
    "/mock/projects/smart-dashboard/screenshot-1.png",
    "/mock/projects/smart-dashboard/screenshot-2.png",
    "/mock/projects/smart-dashboard/screenshot-3.png"
  ],

  context: {
    title: "The Context",
    intro: "After completing my first static UI project, I wanted to challenge myself with something more interactive and structurally complex.",
    body: [
      "I discovered a smart home dashboard concept on Dribbble and decided to recreate it as a way to push beyond basic landing pages and experiment with more advanced frontend layouts.",
      "Unlike my previous project, this interface introduced dashboard architecture, data visualization, reusable UI patterns, and interactive JavaScript behavior.",
      "This project became one of the first times I started feeling confident in my HTML and CSS skills while also beginning to explore JavaScript-driven interfaces."
    ],
    highlightQuote: "This was the project where frontend development started feeling interactive instead of static."
  },

  goals: {
    title: "Project Goals",
    items: [
      {
        title: "Build an Interactive Interface",
        description: "Move beyond static layouts and introduce dynamic frontend behavior using JavaScript.",
       }, 
       {
        title: "Explore Dashboard Architecture",
        description: "Learn how to structure dense dashboard layouts while maintaining visual clarity and responsiveness.",
        
      },
      {
        title: "Visualize Data",
        description: "Integrate charts and UI indicators to represent smart home energy consumption data.",
        },
      {
        title: "Improve Responsive Design Skills",
        description: "Handle more complex layouts across desktop, tablet, and mobile screen sizes.",
         }
    ]
  },

  // features: {
  //   title: "Key Features",
  //   items: [
  //     {
  //       title: "Energy Consumption Dashboard",
  //       description: "Integrated Chart.js to visualize historical smart home energy usage using mock analytics data."
  //     },
  //     {
  //       title: "Responsive Dashboard Layout",
  //       description: "Built a responsive multi-section dashboard using CSS Grid, Flexbox, and Bootstrap utilities."
  //     },
  //     {
  //       title: "Custom Thermostat UI",
  //       description: "Created an interactive thermostat control using JavaScript and CSS-based circular progress indicators."
  //     },
  //     {
  //       title: "Custom Toggle Switches",
  //       description: "Designed reusable toggle switch components for simulated smart device controls."
  //     },
  //     {
  //       title: "Adaptive Mobile Experience",
  //       description: "Implemented multiple responsive breakpoints to restructure dashboard sections for smaller devices."
  //     }
  //   ]
  // },

  challenges: {
    title: "Challenges",
    intro: "This project introduced significantly more complexity than my earlier UI builds, especially around dashboard organization and responsiveness.",
    items: [
      {
        title: "Dashboard Layout Architecture",
        description: "Organizing multiple dashboard sections while maintaining clean spacing, hierarchy, and usability across screen sizes."
      },
      {
        title: "Responsive Grid Systems",
        description: "Using CSS Grid and Flexbox together to adapt dense dashboard layouts for tablets and mobile devices."
      },
      {
        title: "Chart.js Integration",
        description: "Learning how to configure and customize Chart.js to display energy consumption analytics."
      },
      {
        title: "Custom Interactive Components",
        description: "Building reusable UI elements like toggle switches and circular progress indicators using pure CSS and JavaScript."
      },
      {
        title: "Code Organization",
        description: "Beginning to understand how frontend code structure impacts maintainability as project complexity increases."
      }
    ]
  },

  // engineeringDecisions: {
  //   title: "Engineering Decisions",
  //   items: [
  //     {
  //       decision: "Used CSS Grid for dashboard structure",
  //       reason: "The dashboard contained multiple content-heavy sections that required flexible two-dimensional layout control."
  //     },
  //     {
  //       decision: "Combined Bootstrap utilities with custom CSS",
  //       reason: "Bootstrap accelerated spacing and responsiveness while custom CSS handled unique dashboard components and styling."
  //     },
  //     {
  //       decision: "Used mock analytics data",
  //       reason: "The focus of the project was frontend visualization and UI architecture rather than backend integration."
  //     },
  //     {
  //       decision: "Built custom UI controls manually",
  //       reason: "Creating components like toggle switches and progress indicators helped deepen my understanding of CSS-driven interactivity."
  //     }
  //   ]
  // },

  process: {
    title: "Development Process",
    steps: [
      {
        step: "01",
        title: "Studied the Dashboard Design",
        description: "Analyzed the Dribbble inspiration and identified the major dashboard sections and reusable UI patterns."
      },
      {
        step: "02",
        title: "Structured the Layout System",
        description: "Used CSS Grid and Flexbox to organize the dashboard into responsive content regions."
      },
      {
        step: "03",
        title: "Integrated Interactive Features",
        description: "Added JavaScript-powered thermostat controls and data visualization using Chart.js."
      },
      {
        step: "04",
        title: "Optimized Responsiveness",
        description: "Created multiple responsive breakpoints to adapt the dashboard across desktop, tablet, and mobile layouts."
      }
    ]
  },

  technicalLearnings: {
    title: "Key Learnings",
    items: [
      {
        title: "Dashboard Architecture",
        body: "Learned how to structure information-dense interfaces while maintaining visual hierarchy and usability.",
        progress: 85
      },
      {
        title: "Responsive Systems",
        body: "Improved understanding of how responsive layouts behave across different screen sizes and viewport constraints.",
        progress: 88
      },
      {
        title: "JavaScript Interactivity",
        body: "Began integrating JavaScript-driven UI behavior into frontend interfaces for more dynamic user experiences.",
        progress: 72
      },
      {
        title: "Data Visualization",
        body: "Learned how charts and visual indicators improve dashboard communication and user understanding.",
        progress: 78
      }
    ]
  },

  // productThinking: {
  //   title: "Product Thinking",
  //   body: "Although this project used mock data, it introduced me to how dashboard interfaces communicate system information, device states, and analytics in a way that feels intuitive and actionable to users."
  // },

  reflection: {
    title: "Looking Back",
    intro: "Compared to my earlier projects, this dashboard marked a major shift in both complexity and frontend thinking.",
    
    then: {
      title: "Then",
      points: [
        "Focused heavily on visual recreation",
        "Just beginning to learn JavaScript",
        "Limited understanding of scalable frontend structure",
        "Experimenting with responsive dashboard layouts"
      ],
      image: "/mock/projects/smart-dashboard/then.png"
    },

    now: {
      title: "Now",
      points: [
        "Better understanding of component-driven architecture",
        "Stronger frontend organization and maintainability",
        "Improved responsive systems thinking",
        "More intentional approach to interactive UI design"
      ],
      image: "/mock/projects/smart-dashboard/now.png"
    },

    improvements: [
      "Rebuild using React and reusable component architecture",
      "Add backend integration for real device data",
      "Implement dark/light theme switching",
      "Introduce real-time updates and device state management",
      "Improve accessibility and semantic structure",
      "Add animations and smoother UI transitions"
    ]
  },

  // retrospective: {
  //   title: "Retrospective",
  //   items: [
  //     "This project was one of the first times I started thinking about frontend interfaces as systems instead of standalone pages.",
  //     "I began understanding how layout structure, responsiveness, and component reuse affect long-term scalability.",
  //     "The project also helped build my confidence with HTML and CSS while introducing me to interactive JavaScript concepts."
  //   ]
  // },

  growth: {
    title: "Growth & Evolution",
    description: "This project marked an important transition point in my frontend journey — from building static interfaces to creating interactive dashboard experiences with dynamic UI behavior.",
    
    milestones: [
      {
        title: "Static UI Development",
        status: "Completed"
      },
      {
        title: "First Interactive Dashboard",
        status: "This Project"
      },
      {
        title: "JavaScript UI Confidence",
        status: "Developing"
      },
      {
        title: "Component-Based Architecture",
        status: "Future Growth"
      }
    ]
  },

  showcase: {
    title: "Project Showcase",
    description: "A collection of responsive dashboard layouts, custom UI components, and data visualization sections from the project.",

    images: [
      {
        src: "/mock/projects/smart-dashboard/showcase-1.png",
        alt: "Desktop Dashboard Layout"
      },
      {
        src: "/mock/projects/smart-dashboard/showcase-2.png",
        alt: "Energy Consumption Chart"
      },
      {
        src: "/mock/projects/smart-dashboard/showcase-3.png",
        alt: "Mobile Responsive Dashboard"
      }
    ],

    metrics: [
      {
        label: "Responsive Layout",
        value: "Desktop + Mobile"
      },
      {
        label: "Data Visualization",
        value: "Chart.js"
      },
      {
        label: "Frontend Stack",
        value: "HTML/CSS/JS"
      },
      {
        label: "UI Complexity",
        value: "Intermediate"
      }
    ]
  },

  cta: {
    title: "Explore The Project",
    description: "View the live dashboard demo and source code for this interactive frontend project.",

    buttons: [
      {
        label: "Live Demo",
        url: "YOUR_LIVE_URL"
      },
      {
        label: "View Source Code",
        url: "YOUR_GITHUB_URL"
      }
    ]
  }
},
{
  slug: "javascript-converter-toolkit",
category: "web-early",
  meta: {
    title: "JavaScript Converter Toolkit",
    description: "A collection of interactive JavaScript mini tools built to understand DOM manipulation, event handling, API integration, and real-time interface updates.",
    keywords: [
      "JavaScript",
      "DOM Manipulation",
      "Frontend Development",
      "Currency Converter",
      "Roman Numeral Converter",
      "Unit Converter",
      "API Integration",
      "Interactive UI",
      "Event Handling"
    ],
    category: "Frontend Development",
    year: 2024,
    phase: "JavaScript Foundations",
    featured: true
  },

  hero: {
    title: "JavaScript Converter Toolkit",
    subtitle: "The project where JavaScript finally started making sense to me.",
    description: "Built while learning JavaScript fundamentals, this collection of interactive conversion tools helped me understand DOM manipulation, event-driven programming, dynamic UI updates, and how frontend applications respond to user interactions.",
    
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    role: "Frontend Development",

    timeline: "June – December 2024",

    projectType: "Learning Project / JavaScript Exploration",

    origin: "Built as a personal challenge to understand how JavaScript powers interactive user interfaces.",

    liveUrl: "https://osigbemhe2020.github.io/converter/",

    githubUrl: "YOUR_GITHUB_URL",

    heroImage: "/mock/projects/converter-toolkit/hero.png",

    thumbnail: "/mock/projects/converter-toolkit/thumbnail.png"
  },

  screenshots: [
    "/mock/projects/converter-toolkit/screenshot-1.png",
    "/mock/projects/converter-toolkit/screenshot-2.png",
    "/mock/projects/converter-toolkit/screenshot-3.png"
  ],

  context: {
    title: "The Context",

    intro: "After building static interfaces and dashboard layouts, I reached a point where I wanted to understand how websites actually respond to user actions.",

    body: [
      "At the time, JavaScript still felt abstract to me. I understood the syntax, but I struggled to connect it to real frontend behavior and interactivity.",
      
      "To bridge that gap, I started building small interactive utilities that forced me to work directly with user input, DOM updates, event listeners, and application logic.",
      
      "What started as a simple unit converter eventually evolved into a small collection of tools, including a currency converter connected to an external API and a Roman numeral converter.",
      
      "This project became one of the turning points where JavaScript started feeling practical instead of theoretical."
    ],

    highlightQuote: "This was the project where I stopped just styling pages and started understanding how interfaces behave."
  },

  goals: {
    title: "Project Goals",

    items: [
      {
        title: "Understand DOM Manipulation",
        description: "Learn how JavaScript dynamically updates interface elements in response to user interactions.",
            },

      {
        title: "Practice Event-Driven Programming",
        description: "Explore how events and event listeners control frontend interactivity.",
        },  
        {
        title: "Build Multiple Interactive Features",
        description: "Structure JavaScript logic across several mini applications within one project ecosystem.",
        
        },
        {
        title: "Learn API Integration",
        description: "Experiment with fetching and displaying external data inside a frontend application.",
  }]
  },

  // features: {
  //   title: "Key Features",

  //   items: [
  //     {
  //       title: "Unit Conversion Tool",
  //       description: "Built a utility for converting measurement values like kilograms to pounds and vice versa."
  //     },

  //     {
  //       title: "Currency Exchange Converter",
  //       description: "Integrated an external exchange-rate API to dynamically calculate and display currency conversions."
  //     },

  //     {
  //       title: "Roman Numeral Converter",
  //       description: "Implemented logic for converting numerical values into Roman numeral representations."
  //     },

  //     {
  //       title: "Dynamic DOM Updates",
  //       description: "Updated interface content in real time based on user interactions and input values."
  //     },

  //     {
  //       title: "Multi-Page Structure",
  //       description: "Organized the project into separate tools and files to improve maintainability and code separation."
  //     }
  //   ]
  // },

  challenges: {
    title: "Challenges",

    intro: "This project introduced me to some of the most important frontend concepts I had encountered at the time.",

    items: [
      {
        title: "Understanding the DOM",
        description: "Learning how to select, update, and manipulate HTML elements dynamically using JavaScript."
      },

      {
        title: "Event Listeners",
        description: "Understanding how events trigger functionality and connect user actions to interface behavior."
      },

      {
        title: "Structuring JavaScript Logic",
        description: "Organizing multiple features and conversion systems without creating confusing or repetitive code."
      },

      {
        title: "API Integration",
        description: "Connecting to an external exchange-rate API for the first time and handling asynchronous data flow."
      },

      {
        title: "Problem Decomposition",
        description: "Breaking larger problems into smaller logical functions that were easier to debug and maintain."
      }
    ]
  },

  // engineeringDecisions: {
  //   title: "Engineering Decisions",

  //   items: [
  //     {
  //       decision: "Separated each converter into its own page and file structure",
  //       reason: "This improved code organization and helped isolate functionality as the project grew."
  //     },

  //     {
  //       decision: "Used vanilla JavaScript instead of frameworks",
  //       reason: "The goal was to deeply understand core JavaScript concepts before moving into libraries like React."
  //     },

  //     {
  //       decision: "Integrated a real exchange-rate API",
  //       reason: "Adding external data made the project feel closer to a real-world frontend application."
  //     },

  //     {
  //       decision: "Focused on functional interactivity over visual complexity",
  //       reason: "The primary objective was understanding JavaScript behavior and DOM updates rather than advanced UI design."
  //     }
  //   ]
  // },

  process: {
    title: "Development Process",

    steps: [
      {
        step: "01",
        title: "Started With a Basic Unit Converter",
        description: "Built the first conversion utility to practice handling user input and updating the DOM dynamically."
      },

      {
        step: "02",
        title: "Expanded Into Multiple Tools",
        description: "Added additional converters to explore more complex JavaScript logic and feature organization."
      },

      {
        step: "03",
        title: "Integrated External API Data",
        description: "Connected the currency converter to a live exchange-rate API to experiment with real-time data fetching."
      },

      {
        step: "04",
        title: "Refined User Interaction",
        description: "Improved event handling, form behavior, and interface feedback across all conversion tools."
      }
    ]
  },

  technicalLearnings: {
    title: "Key Learnings",

    items: [
      {
        title: "DOM Manipulation",
        body: "Developed a stronger understanding of how JavaScript dynamically controls and updates frontend interfaces.",
        progress: 90
      },

      {
        title: "Event-Driven Logic",
        body: "Learned how user interactions trigger application behavior through event listeners and handlers.",
        progress: 88
      },

      {
        title: "JavaScript Problem Solving",
        body: "Improved my ability to break complex logic into smaller reusable functions and workflows.",
        progress: 82
      },

      {
        title: "API Integration",
        body: "Learned the fundamentals of fetching and displaying external data inside frontend applications.",
        progress: 72
      }
    ]
  },

  // productThinking: {
  //   title: "Product Thinking",

  //   body: "Although these tools were built primarily for learning JavaScript, the project introduced me to how utility-based interfaces prioritize simplicity, clarity, and immediate user feedback."
  // },

  reflection: {
    title: "Looking Back",

    intro: "Compared to my earlier frontend projects, this toolkit represented a major shift from visual implementation into interactive application behavior.",

    then: {
      title: "Then",

      points: [
        "Still learning JavaScript fundamentals",
        "Confused about how websites respond to user actions",
        "Limited understanding of event-driven programming",
        "Beginning to connect logic with UI behavior"
      ],

      image: "/mock/projects/converter-toolkit/then.png"
    },

    now: {
      title: "Now",

      points: [
        "Better understanding of frontend application flow",
        "More confident working with state and interactivity",
        "Stronger approach to organizing frontend logic",
        "Improved understanding of asynchronous data handling"
      ],

      image: "/mock/projects/converter-toolkit/now.png"
    },

    improvements: [
      "Rebuild using React and reusable components",
      "Improve visual design and UI consistency",
      "Add validation and error handling",
      "Introduce better accessibility support",
      "Implement shared state management",
      "Improve API handling and loading states"
    ]
  },

  // retrospective: {
  //   title: "Retrospective",

  //   items: [
  //     "This project was one of the first times JavaScript started feeling practical instead of abstract.",
  //     "I began understanding how interfaces react to user behavior through events and DOM updates.",
  //     "The project also introduced me to structuring frontend logic in a more organized and maintainable way."
  //   ]
  // },

  growth: {
    title: "Growth & Evolution",

    description: "This project marked an important transition in my learning journey — from designing interfaces to building interactive frontend applications powered by JavaScript logic.",

    milestones: [
      {
        title: "Static UI Development",
        status: "Completed"
      },

      {
        title: "First Interactive JavaScript Project",
        status: "This Project"
      },

      {
        title: "First API Integration",
        status: "Currency Converter"
      },

      {
        title: "Frontend Application Thinking",
        status: "Developing"
      }
    ]
  },

  showcase: {
    title: "Project Showcase",

    description: "A collection of interactive utility tools focused on JavaScript fundamentals, DOM updates, and event-driven frontend behavior.",

    images: [
      {
        src: "/mock/projects/converter-toolkit/showcase-1.png",
        alt: "Unit Converter Interface"
      },

      {
        src: "/mock/projects/converter-toolkit/showcase-2.png",
        alt: "Currency Exchange Tool"
      },

      {
        src: "/mock/projects/converter-toolkit/showcase-3.png",
        alt: "Roman Numeral Converter"
      }
    ],

    metrics: [
      {
        label: "Frontend Stack",
        value: "HTML/CSS/JS"
      },

      {
        label: "API Integration",
        value: "Exchange Rates API"
      },

      {
        label: "Project Structure",
        value: "Multi-Page"
      },

      {
        label: "Core Focus",
        value: "JavaScript Interactivity"
      }
    ]
  },

  cta: {
    title: "Explore The Project",

    description: "View the live demo and source code for this JavaScript-focused frontend project.",

    buttons: [
      {
        label: "Live Demo",
        url: "https://osigbemhe2020.github.io/converter/"
      },

      {
        label: "View Source Code",
        url: "YOUR_GITHUB_URL"
      }
    ]
  }
},
{
  slug: "allgates-training-website",
  category: "web-early",
  meta: {
    title: "All Gates Training Website",
    description: "A multi-page educational training website built during my internship, where I explored frontend development, layout systems, Bootstrap integration, and early design thinking.",
    
    keywords: [
      "Frontend Development",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Responsive Design",
      "Multi-Page Website",
      "EdTech Website",
      "Internship Project",
      "UI Development"
    ],

    category: "Frontend Development",

    year: 2024,

    phase: "Frontend Exploration & Design Growth",

    featured: true
  },

  hero: {
    title: "All Gates Training Website",

    subtitle: "An early internship project that taught me more than I realized at the time.",

    description: "Built during my internship at an IT and networking training company, this project challenged me to think beyond isolated components and start building complete multi-page web experiences. It became one of my earliest lessons in responsive design, frontend architecture, UI decision-making, and the realities of translating ideas into usable interfaces.",

    stack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript"
    ],

    role: "Researcher, Designer & Frontend Developer",

    timeline: "October2024",

    projectType: "Internship Project / Website Template",

    origin: "Built as a training company website concept during my internship at All Gates.",

    liveUrl: "YOUR_LIVE_URL",

    githubUrl: "YOUR_GITHUB_URL",

    heroImage: "/mock/projects/allgates/hero.png",

    thumbnail: "/mock/projects/allgates/thumbnail.png"
  },

  screenshots: [
    "/mock/projects/allgates/screenshot-1.png",
    "/mock/projects/allgates/screenshot-2.png",
    "/mock/projects/allgates/screenshot-3.png"
  ],

  context: {
    title: "The Context",

    intro: "At the time, I had recently learned HTML and CSS and was beginning to explore JavaScript and responsive design.",

    body: [
      "During my internship at All Gates, an IT and networking training company, I decided to build a full multi-page website template as both a learning exercise and a practical frontend challenge.",

      "I handled everything myself — researching the structure, experimenting with the layout direction, designing sections, and implementing the frontend using Bootstrap and custom CSS.",

      "At the time, I believed frontend development was mostly about building pages that looked visually complete. I had not yet learned concepts like scalable architecture, component reuse, or the software development lifecycle.",

      "Looking back now, the project is visually imperfect — but it represents one of the most important growth stages in my early frontend journey."
    ],

    highlightQuote: "This project taught me that growth comes from building — even when the result isn't perfect."
  },

  goals: {
    title: "Project Goals",

    items: [
      {
        title: "Build a Complete Website",
        description: "Move beyond single-page interfaces and create a functional multi-page web experience.",
        
      },
      {
        title: "Practice Responsive Design",
        description: "Learn how layouts adapt across desktop and mobile screen sizes.",
         },

      {
        title: "Explore Frontend Design",
        description: "Experiment with translating conceptual ideas into structured UI layouts.",
      },

      {
        title: "Work Faster With Bootstrap",
        description: "Use Bootstrap components and utilities to accelerate frontend development.",
   } ]
  },

  // features: {
  //   title: "Key Features",

  //   items: [
  //     {
  //       title: "Multi-Page Website Structure",
  //       description: "Built separate pages for home, about, programs, registration, and contact sections."
  //     },

  //     {
  //       title: "Responsive Navigation",
  //       description: "Implemented a Bootstrap-powered responsive navbar with mobile navigation support."
  //     },

  //     {
  //       title: "Training Program Listings",
  //       description: "Designed program overview sections for displaying educational cohorts and training tracks."
  //     },

  //     {
  //       title: "Interactive Contact Form",
  //       description: "Created a structured contact form with multiple input types and grouped user fields."
  //     },

  //     {
  //       title: "Custom CSS Layout Systems",
  //       description: "Used CSS Grid and Flexbox alongside Bootstrap utilities to structure responsive sections."
  //     },

  //     {
  //       title: "Carousel Integration",
  //       description: "Integrated Bootstrap carousel components to create dynamic hero sections."
  //     }
  //   ]
  // },

  challenges: {
    title: "Challenges",

    intro: "This project exposed me to several real frontend development problems for the first time.",

    items: [
      {
        title: "Bootstrap vs Custom CSS",
        description: "Balancing Bootstrap components with custom CSS layouts while trying to understand both systems simultaneously."
      },

      {
        title: "Responsive Design Complexity",
        description: "Learning that making a layout work on mobile requires far more than shrinking elements or adding a single media query."
      },

      {
        title: "Hover-Based UI Limitations",
        description: "Realizing that CSS-only hover interactions don't translate properly to touch devices like phones and tablets."
      },

      {
        title: "Multi-Page Maintenance",
        description: "Managing repeated navigation and footer code across multiple HTML files revealed the importance of reusable architecture."
      },

      {
        title: "Design Translation",
        description: "Struggling to transform conceptual layout ideas into visually cohesive user interfaces."
      },

      {
        title: "Debugging Frontend Issues",
        description: "Tracking layout bugs, broken file paths, and responsive inconsistencies across multiple pages taught patience and attention to detail."
      }
    ]
  },

  // engineeringDecisions: {
  //   title: "Engineering Decisions",

  //   items: [
  //     {
  //       decision: "Used Bootstrap for foundational UI components",
  //       reason: "Bootstrap accelerated development and provided responsive utilities while I focused on learning layout structure."
  //     },

  //     {
  //       decision: "Combined CSS Grid and Flexbox",
  //       reason: "Different layout sections required different positioning strategies and responsiveness behavior."
  //     },

  //     {
  //       decision: "Built a multi-page architecture",
  //       reason: "Separating content into dedicated pages helped simulate a more realistic website structure."
  //     },

  //     {
  //       decision: "Created custom dropdown behavior with CSS",
  //       reason: "At the time, I was experimenting with how interactive UI patterns worked before fully understanding JavaScript-driven components."
  //     }
  //   ]
  // },

  process: {
    title: "Development Process",

    steps: [
      {
        step: "01",
        title: "Researched Website Structure",
        description: "Planned the core pages and content sections needed for a training company website."
      },

      {
        step: "02",
        title: "Built Core Layouts",
        description: "Created homepage sections, navigation systems, and service layouts using Bootstrap and custom CSS."
      },

      {
        step: "03",
        title: "Expanded Into Multiple Pages",
        description: "Structured separate pages for programs, registration, contact information, and company details."
      },

      {
        step: "04",
        title: "Improved Responsiveness",
        description: "Added media queries and layout adjustments to support smaller screen sizes and mobile navigation."
      }
    ]
  },

  technicalLearnings: {
    title: "Key Learnings",

    items: [
      {
        title: "Responsive Web Design",
        body: "Learned how layouts behave differently across desktop and mobile environments.",
        progress: 82
      },

      {
        title: "Frontend Layout Systems",
        body: "Developed stronger understanding of CSS Grid, Flexbox, and Bootstrap structure.",
        progress: 85
      },

      {
        title: "Frontend Architecture Awareness",
        body: "Began understanding why reusable components and DRY principles matter in scalable applications.",
        progress: 72
      },

      {
        title: "Design Translation",
        body: "Improved my ability to transform abstract concepts into structured browser-rendered layouts.",
        progress: 78
      }
    ]
  },

  // productThinking: {
  //   title: "Product Thinking",

  //   body: "Although the visual execution was still developing, this project introduced me to thinking about websites as complete user experiences rather than isolated sections or tutorial exercises."
  // },

  reflection: {
    title: "Looking Back",

    intro: "This project represents one of the clearest snapshots of my early frontend learning phase — ambitious, experimental, imperfect, and extremely important for my growth.",

    then: {
      title: "Then",

      points: [
        "Focused mostly on making pages visually complete",
        "Limited understanding of scalable frontend systems",
        "Still exploring UI and design principles",
        "Unaware of concepts like DRY architecture and SDLC"
      ],

      image: "/mock/projects/allgates/then.png"
    },

    now: {
      title: "Now",

      points: [
        "Better understanding of reusable component architecture",
        "More intentional responsive design thinking",
        "Stronger frontend organization and scalability awareness",
        "Improved ability to evaluate UI and UX critically"
      ],

      image: "/mock/projects/allgates/now.png"
    },

    improvements: [
      "Rebuild using React and reusable layout components",
      "Replace repeated sections with shared architecture",
      "Improve accessibility and semantic structure",
      "Refine mobile responsiveness more systematically",
      "Introduce cleaner visual hierarchy and UI consistency",
      "Implement modern design systems and component libraries"
    ]
  },

  // retrospective: {
  //   title: "Retrospective",

  //   items: [
  //     "This project taught me that frontend development is far more than simply arranging sections on a page.",
  //     "I began understanding the gap between building something functional and building something scalable and maintainable.",
  //     "The experience also helped me develop a more critical eye for design quality, responsiveness, and frontend architecture."
  //   ]
  // },

 growth: {
    title: "Growth & Evolution",

    description: "This project marked one of my first attempts at building a complete multi-page web experience while balancing design experimentation, responsiveness, and frontend implementation.",

    milestones: [
      {
        title: "Single Component Layouts",
        status: "Completed"
      },

      {
        title: "First Multi-Page Website",
        status: "This Project"
      },

      {
        title: "Responsive Design Awareness",
        status: "Developing"
      },

      {
        title: "Scalable Frontend Architecture",
        status: "Future Growth"
      }
    ]
  },

  showcase: {
    title: "Project Showcase",

    description: "A collection of responsive layouts, Bootstrap integrations, and multi-page frontend structures from the project.",

    images: [
      {
        src: "/mock/projects/allgates/showcase-1.png",
        alt: "Homepage Layout"
      },

      {
        src: "/mock/projects/allgates/showcase-2.png",
        alt: "Programs Page"
      },

      {
        src: "/mock/projects/allgates/showcase-3.png",
        alt: "Responsive Mobile View"
      }
    ],

    metrics: [
      {
        label: "Project Type",
        value: "Multi-Page Website"
      },

      {
        label: "Frontend Stack",
        value: "HTML/CSS/Bootstrap"
      },

      {
        label: "Core Focus",
        value: "Responsive Layouts"
      },

      {
        label: "Learning Milestone",
        value: "Frontend Architecture Awareness"
      }
    ]
  },

  cta: {
    title: "Explore The Project",

    description: "View the project walkthrough and source code for this internship-based frontend website project.",

    buttons: [
      {
        label: "Live Demo",
        url: "YOUR_LIVE_URL"
      },

      {
        label: "View Source Code",
        url: "YOUR_GITHUB_URL"
      }
    ]
  }
},
{
  slug: "budget-app",
  category: "web-early",
  meta: {
    title: "Budget Management App",
    description:
      "A personal finance dashboard built with Vanilla JavaScript focused on state management, DOM manipulation, CRUD operations, and localStorage persistence.",
    keywords: [
      "JavaScript",
      "DOM Manipulation",
      "Budget App",
      "LocalStorage",
      "CRUD Operations",
      "Frontend Development",
      "Vanilla JavaScript",
      "State Management"
    ],
    category: "Frontend Development",
    year: 2024,
    phase: "JavaScript Logic & State Management",
    featured: true
  },

  hero: {
    title: "Budget Management App",
    subtitle:
      "The project where I stopped thinking like a website builder and started thinking like a software developer.",
    description:
      "Built after completing my early JavaScript learning phase, this project became my first real attempt at creating a practical application with logic, persistence, and dynamic state management. It pushed me beyond layouts into application architecture, data flow, and user interaction handling.",
    stack: [
      "HTML",
      "CSS",
      "Vanilla JavaScript",
      "localStorage"
    ],
    role: "Frontend Developer",
    timeline: "Late 2024",
    projectType: "Personal Challenge Project",
    origin:
      "Inspired by a simple budgeting tutorial but expanded into a much larger financial management system.",
    liveUrl: "YOUR_LIVE_URL",
    githubUrl: "YOUR_GITHUB_URL",
    heroImage: "/mock/projects/allgates/hero.png",

    thumbnail: "/mock/projects/allgates/thumbnail.png"
  },

  screenshots: [
    "/mock/projects/allgates/screenshot-1.png",
    "/mock/projects/allgates/screenshot-2.png",
    "/mock/projects/allgates/screenshot-3.png"
  ],

  context: {
    title: "The Context",
    intro:
      "At this stage, I had just completed introductory JavaScript courses and was trying to truly understand how JavaScript powers real applications.",
    body: [
      "My previous projects focused mostly on UI and interactivity, but this was the first project where I had to manage real application logic and interconnected data.",
      "I initially discovered a simple budget app tutorial online, but instead of recreating it directly, I expanded the concept significantly by adding income tracking, savings management, debt calculations, and reusable expense templates.",
      "This project became a turning point because it forced me to think about how data changes affect an entire application, not just isolated UI components.",
      "Looking back, this was the project where frontend development started feeling like software engineering instead of webpage building."
    ],
    highlightQuote:
      "This was the first project where I felt like I was building software instead of webpages."
  },

  goals: {
    title: "Project Goals",
    items: [
      {
        title: "Build Something Useful",
        description:
          "Move beyond static interfaces and create an application capable of solving a practical real-world problem.",
        },
      {
        title: "Master DOM Manipulation",
        description:
          "Improve my ability to dynamically update interfaces based on user actions and application state.",
      },
      {
        title: "Understand Application Logic",
        description:
          "Learn how different pieces of application data interact and update together.",
       }, {
        title: "Persist User Data",
        description:
          "Use localStorage to maintain application state even after page reloads.",
       }
    ]
  },

  challenges: {
    title: "Challenges",
    intro:
      "This project introduced an entirely new level of complexity compared to my earlier frontend projects.",
    items: [
      {
        title: "State Synchronization",
        description:
          "Managing income, savings, expenses, debt, and balances simultaneously while ensuring every UI section updated correctly."
      },
      {
        title: "Complex Edit Workflows",
        description:
          "Handling multi-step editing logic for dynamically created items without breaking application state."
      },
      {
        title: "localStorage Consistency",
        description:
          "Keeping the in-memory JavaScript data structures synchronized with persisted localStorage data."
      },
      {
        title: "Dynamic DOM Rendering",
        description:
          "Updating multiple sections of the interface in real-time whenever financial data changed."
      }
    ]
  },

  process: {
    title: "Development Process",
    steps: [
      {
        step: "01",
        title: "Designed The Financial Flow",
        description:
          "Mapped out how income, savings, expenses, debt, and balances should interact mathematically."
      },
      {
        step: "02",
        title: "Built CRUD Functionality",
        description:
          "Implemented create, edit, update, and delete operations for financial transactions."
      },
      {
        step: "03",
        title: "Integrated localStorage",
        description:
          "Added persistent storage to maintain application data across browser refreshes."
      },
      {
        step: "04",
        title: "Refined State Updates",
        description:
          "Improved synchronization between JavaScript logic and the rendered UI."
      }
    ]
  },

  // architecture: {
  //   title: "Application Architecture",
  //   description:
  //     "Although I did not fully understand software architecture patterns at the time, this project organically introduced me to concepts similar to state management and MVC design.",
  //   items: [
  //     {
  //       title: "Data Layer",
  //       body:
  //         "Used JavaScript Map objects and localStorage as the application's source of truth."
  //     },
  //     {
  //       title: "UI Layer",
  //       body:
  //         "Created dynamic dashboard sections that reflected application state changes in real-time."
  //     },
  //     {
  //       title: "Logic Layer",
  //       body:
  //         "Built modular JavaScript functions to handle calculations, rendering, validation, and persistence."
  //     }
  //   ]
  // },

  // technicalHighlights: {
  //   title: "Technical Highlights",
  //   items: [
  //     {
  //       title: "State Management",
  //       description:
  //         "Managed interconnected financial states including income, savings, expenses, debt, and balances."
  //     },
  //     {
  //       title: "CRUD Operations",
  //       description:
  //         "Implemented full create, read, update, and delete functionality for financial entries."
  //     },
  //     {
  //       title: "Event Delegation",
  //       description:
  //         "Used delegated event listeners for dynamically generated UI elements."
  //     },
  //     {
  //       title: "Persistent Storage",
  //       description:
  //         "Integrated localStorage for maintaining user data across sessions."
  //     },
  //     {
  //       title: "Custom Financial Logic",
  //       description:
  //         "Built automatic debt detection and budget recalculation workflows."
  //     },
  //     {
  //       title: "Reusable Expense Templates",
  //       description:
  //         "Added predefined expense categories for faster financial tracking."
  //     }
  //   ]
  // },

  technicalLearnings: {
    title: "Key Learnings",
    items: [
      {
        title: "Application State",
        body:
          "Learned how difficult state synchronization becomes as application complexity increases.",
        progress: 92
      },
      {
        title: "DOM Manipulation",
        body:
          "Improved confidence in dynamically rendering and updating interfaces using JavaScript.",
        progress: 90
      },
      {
        title: "Data Persistence",
        body:
          "Learned how browser storage can maintain application continuity between sessions.",
        progress: 85
      },
      {
        title: "Frontend Architecture",
        body:
          "Began understanding why scalable applications require better state management systems.",
        progress: 80
      }
    ]
  },

  reflection: {
    title: "Looking Back",
    intro:
      "Compared to how I build applications today, the architecture was tightly coupled and difficult to scale — but this project fundamentally changed how I thought about frontend development.",
    then: {
      title: "Then",
      points: [
        "Direct DOM manipulation everywhere",
        "State updates manually chained together",
        "Logic tightly coupled to UI",
        "No centralized application state",
        "Minimal architectural awareness"
      ],
      image: "/mock/projects/budget-app/then.png"
    },
    now: {
      title: "Now",
      points: [
        "Better understanding of scalable frontend architecture",
        "More awareness of state management patterns",
        "Improved component-driven thinking",
        "Cleaner separation of logic and UI",
        "More focus on maintainability and scalability"
      ],
      image: "/mock/projects/budget-app/now.png"
    },
    improvements: [
      "Rebuild using React and Node.js",
      "Add authentication and multi-user support",
      "Integrate a real database backend",
      "Implement centralized state management",
      "Add AI-powered financial analysis",
      "Generate tax reports and balance sheets",
      "Introduce credit score tracking",
      "Improve overall UI/UX and accessibility"
    ]
  },

  growth: {
    title: "Growth & Evolution",
    description:
      "This project marked the transition from learning JavaScript syntax to understanding how applications actually work internally.",
    milestones: [
      {
        title: "Basic DOM Manipulation",
        status: "Completed"
      },
      {
        title: "Full CRUD Operations",
        status: "Achieved"
      },
      {
        title: "Application State Awareness",
        status: "Major Breakthrough"
      },
      {
        title: "Scalable Frontend Architecture",
        status: "Future Growth"
      }
    ]
  },

  showcase: {
    title: "Project Showcase",
    description:
      "Dashboard views and financial tracking systems built during the project.",
    images: [
      {
        src: "/mock/projects/budget-app/showcase-1.png",
        alt: "Budget Dashboard Overview"
      },
      {
        src: "/mock/projects/budget-app/showcase-2.png",
        alt: "Expense Tracking Section"
      },
      {
        src: "/mock/projects/budget-app/showcase-3.png",
        alt: "Savings and Debt Management"
      }
    ],
    metrics: [
      {
        label: "Application Type",
        value: "Finance Dashboard"
      },
      {
        label: "Persistence",
        value: "localStorage"
      },
      {
        label: "Architecture",
        value: "Vanilla JavaScript SPA"
      },
      {
        label: "Major Milestone",
        value: "First Functional App"
      }
    ]
  },

  cta: {
    title: "Explore The Project",
    description:
      "View the live demo and source code for this project.",
    buttons: [
      {
        label: "Live Demo",
        url: "YOUR_LIVE_URL"
      },
      {
        label: "View Source Code",
        url: "YOUR_GITHUB_URL"
      }
    ]
  }
},
{
  slug: "react-quiz-app",
  category: "web-early",
  meta: {
    title: "React Quiz Application",
    description:
      "My first React application focused on component architecture, state management, props, hooks, and declarative UI development.",
    keywords: [
      "React",
      "useState",
      "useEffect",
      "Frontend Development",
      "Quiz App",
      "React Hooks",
      "Component Architecture",
      "JavaScript"
    ],
    category: "Frontend Development",
    year: 2025,
    phase: "React & Modern Frontend Thinking",
    featured: true
  },

  hero: {
    title: "React Quiz Application",
    subtitle:
      "The project that introduced me to state-driven frontend architecture.",
    description:
      "After getting comfortable with HTML, CSS, and JavaScript, I wanted to understand how modern frontend applications are structured. This project became my first deep dive into React, component-based architecture, hooks, and declarative UI development.",
    stack: [
      "React",
      "JavaScript",
      "Vanila CSS",
    ],
    role: "Frontend Developer",
    timeline: "February 2025",
    projectType: "React Learning Project",
    origin:
      "Built as my first serious attempt at understanding how React applications work internally.",
    liveUrl: "YOUR_LIVE_URL",
    githubUrl: "YOUR_GITHUB_URL",
   heroImage: "/mock/projects/allgates/hero.png",

    thumbnail: "/mock/projects/allgates/thumbnail.png"
  },

  screenshots: [
    "/mock/projects/allgates/screenshot-1.png",
    "/mock/projects/allgates/screenshot-2.png",
    "/mock/projects/allgates/screenshot-3.png"
  ],

  context: {
    title: "The Context",
    intro:
      "At this point in my learning journey, I had become comfortable building interactive applications with Vanilla JavaScript, but I wanted to understand how modern frontend systems scale beyond direct DOM manipulation.",
    body: [
      "I kept hearing that modern frontend development revolves around frameworks, so I decided to intentionally learn React and understand why developers preferred it over manual DOM updates.",
      "Coming from Vanilla JavaScript, concepts like props, hooks, re-rendering, and component architecture initially felt completely different from the way I previously built interfaces.",
      "This project became my first real experience with declarative frontend development — where the UI becomes a reflection of state instead of something updated manually.",
      "Looking back, this was the project where I started understanding the architectural mindset behind modern frontend applications."
    ],
    highlightQuote:
      "Instead of manually updating the DOM, I focused on state — and React handled the UI updates automatically."
  },

  goals: {
    title: "Project Goals",
    items: [
      {
        title: "Learn React Fundamentals",
        description:
          "Understand hooks, state management, props, and component architecture.",
       }, {
        title: "Build A Multi-Screen App",
        description:
          "Create a complete user flow from start screen to quiz completion.",
       },{
        title: "Understand Declarative UI",
        description:
          "Move away from manual DOM manipulation toward state-driven rendering.",
         },
      {
        title: "Practice Component Reusability",
        description:
          "Break the interface into reusable, isolated UI components.",
      }
    ]
  },

  challenges: {
    title: "Challenges",
    intro:
      "React introduced an entirely different way of thinking compared to Vanilla JavaScript.",
    items: [
      {
        title: "Understanding useState",
        description:
          "Learning how React state works and how re-renders are triggered after state updates."
      },
      {
        title: "Understanding useEffect",
        description:
          "Managing timers, dependencies, cleanup functions, and side effects without causing bugs."
      },
      {
        title: "Component Communication",
        description:
          "Learning how to pass data between parent and child components using props."
      },
      {
        title: "State Synchronization",
        description:
          "Managing quiz progress, score updates, timers, and screen transitions simultaneously."
      }
    ]
  },

  process: {
    title: "Development Process",
    steps: [
      {
        step: "01",
        title: "Structured The Application",
        description:
          "Split the interface into reusable components including Start, Quiz, Header, Options, and Restart."
      },
      {
        step: "02",
        title: "Implemented State Management",
        description:
          "Used React hooks to manage score tracking, screen flow, and user information."
      },
      {
        step: "03",
        title: "Built Timer Logic",
        description:
          "Integrated a countdown system using useEffect and interval cleanup logic."
      },
      {
        step: "04",
        title: "Connected Component Flow",
        description:
          "Passed state and update functions through props to coordinate application behavior."
      }
    ]
  },

  // architecture: {
  //   title: "Component Architecture",
  //   description:
  //     "This project introduced me to component-driven frontend architecture and unidirectional data flow.",
  //   items: [
  //     {
  //       title: "Top-Level State Management",
  //       body:
  //         "Stored global application state including score, user data, and screen navigation in the App component."
  //     },
  //     {
  //       title: "Reusable Components",
  //       body:
  //         "Separated the UI into isolated components with specific responsibilities."
  //     },
  //     {
  //       title: "Controlled Screen Flow",
  //       body:
  //         "Used conditional rendering to transition between Start, Quiz, and Result screens."
  //     }
  //   ]
  // },

  // technicalHighlights: {
  //   title: "Technical Highlights",
  //   items: [
  //     {
  //       title: "React Hooks",
  //       description:
  //         "Used useState and useEffect for managing application state and side effects."
  //     },
  //     {
  //       title: "Countdown Timer",
  //       description:
  //         "Built a 20-second countdown timer with interval cleanup and automatic question progression."
  //     },
  //     {
  //       title: "Conditional Rendering",
  //       description:
  //         "Implemented dynamic screen rendering based on application state."
  //     },
  //     {
  //       title: "Dynamic Quiz Logic",
  //       description:
  //         "Created score calculation, answer validation, and pass/fail evaluation logic."
  //     },
  //     {
  //       title: "Controlled Inputs",
  //       description:
  //         "Managed form inputs through React state instead of direct DOM access."
  //     },
  //     {
  //       title: "Component Communication",
  //       description:
  //         "Passed state and callback functions through props to synchronize application behavior."
  //     }
  //   ]
  // },

  technicalLearnings: {
    title: "Key Learnings",
    items: [
      {
        title: "State-Driven UI",
        body:
          "Learned how frontend interfaces can automatically react to state changes.",
        progress: 90
      },
      {
        title: "React Hooks",
        body:
          "Improved understanding of useState and useEffect for handling application logic.",
        progress: 85
      },
      {
        title: "Component Architecture",
        body:
          "Began thinking about frontend systems as reusable component trees.",
        progress: 88
      },
      {
        title: "Declarative Development",
        body:
          "Shifted away from manually manipulating the DOM toward declarative rendering.",
        progress: 92
      }
    ]
  },

  reflection: {
    title: "Looking Back",
    intro:
      "Compared to how I build React applications today, this project was still relatively simple — but it introduced me to the architectural mindset behind modern frontend development.",
    then: {
      title: "Then",
      points: [
        "Still adjusting to React's mental model",
        "Learning hooks for the first time",
        "Heavy prop passing between components",
        "Limited state management knowledge",
        "Minimal architectural optimization"
      ],
      image: "/mock/projects/react-quiz/then.png"
    },

    now: {
      title: "Now",
      points: [
        "Better understanding of React architecture",
        "More awareness of scalable state management",
        "Cleaner component composition",
        "Improved hook usage patterns",
        "Stronger frontend engineering mindset"
      ],
      image: "/mock/projects/react-quiz/now.png"
    },

    improvements: [
      "Implement centralized state management",
      "Add React Router for navigation",
      "Use Context API or Zustand",
      "Fetch quiz questions from an API",
      "Add authentication and score persistence",
      "Improve accessibility and UX",
      "Introduce animations and transitions",
      "Convert the project to TypeScript"
    ]
  },

  growth: {
    title: "Growth & Evolution",
    description:
      "This project marked the transition from imperative DOM manipulation to declarative, component-driven frontend development.",
    milestones: [
      {
        title: "Vanilla JavaScript DOM Manipulation",
        status: "Completed"
      },
      {
        title: "First React Application",
        status: "This Project"
      },
      {
        title: "Component-Based Thinking",
        status: "Developing"
      },
      {
        title: "Scalable Frontend Architecture",
        status: "Future Growth"
      }
    ]
  },

  showcase: {
    title: "Project Showcase",
    description:
      "Screens and interactive flows from the React Quiz Application.",
    images: [
      {
        src: "/mock/projects/react-quiz/showcase-1.png",
        alt: "Quiz Start Screen"
      },
      {
        src: "/mock/projects/react-quiz/showcase-2.png",
        alt: "Question and Timer Interface"
      },
      {
        src: "/mock/projects/react-quiz/showcase-3.png",
        alt: "Quiz Result Screen"
      }
    ],

    metrics: [
      {
        label: "Framework",
        value: "React"
      },
      {
        label: "Architecture",
        value: "Component-Based SPA"
      },
      {
        label: "State Management",
        value: "React Hooks"
      },
      {
        label: "Major Milestone",
        value: "First React Project"
      }
    ]
  },

  cta: {
    title: "Explore The Project",
    description:
      "View the live demo and source code for this project.",
    buttons: [
      {
        label: "Live Demo",
        url: "YOUR_LIVE_URL"
      },
      {
        label: "View Source Code",
        url: "YOUR_GITHUB_URL"
      }
    ]
  }
}
]

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string): Project | undefined => {
  const idx = projects.findIndex((p) => p.slug === slug);
  return idx >= 0 ? projects[(idx + 1) % projects.length] : undefined;
};