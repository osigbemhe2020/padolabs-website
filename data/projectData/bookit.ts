import { Project } from "../project";   

export const bookItProject: Project[] = [
{
    slug: {
    current: "bookIt-website",
  },
  meta: {
    title: "Book It Service Marketplace",
    description:
      "A two-sided service marketplace that enables service providers to list services and customers to browse, book, and pay for appointments. Built with Next.js, TypeScript, Supabase, and Paystack.",

    keywords: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Paystack",
      "Marketplace",
      "Booking System",
      "Service Marketplace",
      "Authentication",
      "PostgreSQL",
      "Tailwind CSS"
    ],

    year: "2025 - 2026",

    phase: "Full Stack",

    featured: true
  },

  hero: {
    title: "Book It",

    subtitle:
      "Building a Complete Service Marketplace with Supabase",

    description:
      "Book It is a service marketplace platform that allows providers to create and manage services while enabling customers to discover, book, and pay for appointments through a secure end-to-end workflow. Originally built as a frontend-only team project, it later evolved into a fully functional product powered by Supabase and Paystack.",

    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Paystack"
    ],

    role: "Frontend Developer / Product Builder",

    timeline: "1 Month",

    projectType: "Service Marketplace",

    origin:
      "Originally developed as a frontend-only KodNerds team project before being expanded into a full-stack application using Supabase.",

    liveUrl:
      "https://service-booking-app-chi.vercel.app/dashboard",

    githubUrl:
      "https://github.com/osigbemhe2020/service-booking-app.git"
  },

  context: {
    title: "From Static Marketplace To Real Product",

    body:
      "Book It began as a frontend-only group project created by my KodNerds team. At the time, the platform relied on hardcoded data and simulated user interactions. After discovering Backend-as-a-Service platforms, particularly Supabase, I revisited the project with the goal of transforming it into a realistic service marketplace. This evolution required integrating authentication, database persistence, file storage, security policies, and payment processing while preserving the user experience we had already built.",

    highlightQuote:
      "This project taught me that building products involves much more than building interfaces.",

    milestone:
      "First Full Product Built Using Backend-as-a-Service"
  },

  goals: {
    title: "Project Goals",

    items: [
      {
        title: "Transform A Frontend Prototype Into A Real Product",

        desc:
          "Convert the original frontend-only version into a fully functional marketplace backed by real authentication, storage, and database infrastructure."
      },

      {
        title: "Learn Backend-as-a-Service Development",

        desc:
          "Explore how Supabase can simplify authentication, storage, databases, and security while maintaining professional development practices."
      },

      {
        title: "Implement Real Booking Workflows",

        desc:
          "Create a realistic booking experience that includes service discovery, appointment scheduling, payment processing, and booking history."
      },

      {
        title: "Improve Security Awareness",

        desc:
          "Learn how database-level authorization and Row-Level Security can be used to protect user data."
      }
    ]
  },
challenges: {
  title: "Challenges",

  intro:
    "Transforming a frontend-only marketplace into a fully functional product introduced challenges beyond user interface development. Authentication, payment workflows, security policies, and database design all required new ways of thinking.",

  items: [
    {
      title: "Authentication Configuration",

      description:
        "Although Supabase simplified many backend concerns, configuring authentication exactly as intended proved more challenging than expected. I wanted more control over the user onboarding experience rather than relying entirely on the default email confirmation flow."
    },

    {
      title: "Booking & Payment Workflow",

      description:
        "Designing a booking flow that required successful payment before creating bookings involved coordinating Paystack transactions, payment verification, and booking persistence while maintaining a smooth user experience."
    },

    {
      title: "Paystack Callback Integration",

      description:
        "One of the most difficult technical challenges was handling payment callbacks correctly and ensuring bookings were only created after successful payment confirmation."
    },

    {
      title: "Database Security",

      description:
        "Learning how to secure data ownership using Row-Level Security policies required understanding authorization beyond frontend route protection and implementing access controls directly at the database layer."
    }
  ]
},

process: {
  title: "Development Process",

  steps: [
    {
      step: "01",

      title: "Transforming The Prototype",

      description:
        "Started with the original frontend-only KodNerds marketplace prototype and identified the areas that required real backend functionality including authentication, storage, and booking persistence."
    },

    {
      step: "02",

      title: "Designing The Marketplace Data Model",

      description:
        "Created the database structure for profiles, services, and bookings while defining relationships between users, providers, and marketplace activities."
    },

    {
      step: "03",

      title: "Integrating Supabase Infrastructure",

      description:
        "Implemented authentication, PostgreSQL data storage, image uploads through Supabase Storage, database triggers, and Row-Level Security policies."
    },

    {
      step: "04",

      title: "Building The Booking Workflow",

      description:
        "Developed the complete booking journey from service discovery to appointment scheduling, payment processing, booking confirmation, and booking history tracking."
    },

    {
      step: "05",

      title: "Payment Integration",

      description:
        "Integrated Paystack into the booking process and ensured bookings could only be created after successful payment confirmation."
    },

    {
      step: "06",

      title: "Refinement & Deployment",

      description:
        "Improved responsiveness, polished user interactions, tested booking flows, and deployed the completed application to production."
    }
  ]
},

technicalLearnings: {
  title: "Key Learnings",

  items: [
    {
      title: "Supabase Ecosystem",

      body:
        "Learned how authentication, PostgreSQL databases, storage buckets, Row-Level Security policies, and triggers can work together to support a complete application without managing traditional backend infrastructure.",

      progress: 92
    },

    {
      title: "Marketplace Architecture",

      body:
        "Developed a deeper understanding of how marketplace products manage users, service ownership, bookings, and business workflows across multiple user interactions.",

      progress: 90
    },

    {
      title: "Payment Integrations",

      body:
        "Improved my understanding of payment workflows, transaction verification, and handling external payment providers through Paystack integration.",

      progress: 85
    },

    {
      title: "Database Security",

      body:
        "Learned how database-level authorization provides stronger protection than frontend-only security by enforcing ownership rules where the data resides.",

      progress: 88
    },

    {
      title: "Product Development Thinking",

      body:
        "Began thinking beyond screens and interfaces by considering authentication, storage, security, payments, and business logic as interconnected parts of a complete product.",

      progress: 95
    }
  ]
},

reflection: {
  title: "Reflection",

  intro:
    "This project represented a major shift in how I approached application development. Rather than focusing primarily on interfaces, I had to think about the systems required to support a real product including authentication, payments, storage, databases, and security.",

  then: {
    title: "Thinking Like A Frontend Developer",

    thenbody:
      "At the time, I was primarily focused on building user interfaces and frontend experiences. While I understood concepts such as authentication and databases at a high level, most of my attention was centered on components, layouts, responsiveness, and user interactions. The systems behind applications felt separate from the interfaces users interacted with."
  },

  now: {
    title: "Thinking Like A Product Builder",

    nowbody:
      "Looking back, this project changed how I view application development. Building a marketplace required me to think beyond interfaces and consider authentication, databases, storage, payments, security, and business workflows as interconnected parts of a complete product. Today, I focus not only on what users see but also on how systems operate behind the scenes."
  },

  improvements: [
    "Provider booking management dashboard",
    "Reviews and ratings system",
    "Google Calendar integration",
    "Booking notifications",
    "Availability scheduling",
    "Provider verification workflow",
    "Email confirmations",
    "Booking cancellation and rescheduling"
  ]
},

growth: {
  title: "Growth & Evolution",

  description:
    "Book It marked a transition from application development toward product development. It reinforced the importance of authentication, security, storage, payments, and data ownership while demonstrating how modern Backend-as-a-Service platforms can accelerate development without sacrificing architectural quality.",

  milestones: [
    {
      title: "First Backend-as-a-Service Project",

      status: "Completed"
    },

    {
      title: "First Supabase Production Application",

      status: "Completed"
    },

    {
      title: "First Marketplace Platform",

      status: "Completed"
    },

    {
      title: "First Paystack Integration",

      status: "Completed"
    },

    {
      title: "First Database-Level Security Implementation",

      status: "Completed"
    }
  ]
},

features: {
  title: "Key Features",

  items: [
    {
      title: "Service Marketplace",

      description:
        "Browse and discover services offered by independent service providers."
    },

    {
      title: "Authentication",

      description:
        "Secure email and password authentication powered by Supabase."
    },

    {
      title: "Provider Dashboard",

      description:
        "Manage services, track bookings, monitor revenue, ratings, and platform activity."
    },

    {
      title: "Service Management",

      description:
        "Create, update, delete, and manage service listings with image uploads."
    },

    {
      title: "Booking System",

      description:
        "Book appointments through a guided multi-step workflow."
    },

    {
      title: "Payment Processing",

      description:
        "Integrated Paystack payment flow before booking confirmation."
    },

    {
      title: "Booking History",

      description:
        "Track previous bookings and appointment activity."
    }
  ]
},

engineeringDecisions: {
  title: "Engineering Decisions",

  items: [
    {
      title: "Backend Architecture",

      choice: "Supabase",

      rejected: "Custom Express Backend",

      rationale:
        "Supabase allowed rapid development by providing authentication, storage, database management, and security within a single platform."
    },

    {
      title: "Authentication Strategy",

      choice: "Supabase Auth",

      rejected: "Custom JWT Authentication",

      rationale:
        "Authentication infrastructure was not the core problem being solved, making Supabase Auth the fastest and most secure solution."
    },

    {
      title: "Image Storage",

      choice: "Supabase Storage",

      rejected: "Database File Storage",

      rationale:
        "Keeping images in storage buckets reduces database overhead and provides a more scalable file management solution."
    },

    {
      title: "Data Security",

      choice: "Row-Level Security",

      rejected: "Frontend-Only Authorization",

      rationale:
        "Database-level authorization provides stronger protection by enforcing ownership rules where the data resides."
    },

    {
      title: "Booking Lifecycle",

      choice: "Pay Before Booking Creation",

      rejected: "Booking Before Payment",

      rationale:
        "Creating bookings only after successful payment prevents invalid reservations and simplifies booking management."
    }
  ]
},

retrospective: {
  title: "Retrospective",

  items: [
    {
      text:
        "Building products requires much more than building interfaces."
    },

    {
      text:
        "Modern Backend-as-a-Service platforms can significantly accelerate development while maintaining professional architecture."
    },

    {
      text:
        "Database-level security is just as important as frontend route protection."
    },

    {
      text:
        "Payment workflows introduce business rules that must be carefully considered during application design."
    },

    {
      text:
        "Marketplace applications involve balancing the needs of multiple user types and workflows."
    }
  ]
},

cta: {
  title: "Explore The Project",

  description:
    "View the live application, explore the source code, and see how authentication, storage, payments, security, and marketplace workflows were combined to create a complete service booking platform.",

  buttons: [
    {
      label: "Live Demo",

      url: "https://service-booking-app-chi.vercel.app/dashboard"
    },

    {
      label: "GitHub Repository",

      url: "https://github.com/osigbemhe2020/service-booking-app.git"
    }
  ]
}

}
]

