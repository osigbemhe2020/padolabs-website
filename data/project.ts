export interface ProjectStory {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "embedded" | "web";
  problem: string;
  solution: string;
  process: string;
  challenges: string;
  result: string;
  screenshots: string[];
}

export const projects: ProjectStory[] = [
  {
    slug: "smart-home-iot-dashboard",
    title: "Smart Home IoT Dashboard",
    description: "A real-time monitoring dashboard connecting 50+ IoT sensors for a smart home startup, delivering live insights and device control.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=600&fit=crop",
    tags: ["ESP32", "MQTT", "Node.js", "React"],
    liveUrl: "#",
    githubUrl: "#",
    category: "embedded",
    problem: "A smart home startup needed a unified dashboard to monitor and control over 50 IoT sensors spread across multiple rooms. Existing solutions were fragmented—each sensor brand had its own app, creating a poor user experience. Homeowners couldn't get a single, coherent view of their environment, and there was no way to set cross-device automations or alerts.",
    solution: "I designed a centralized real-time dashboard that communicates with all sensors through an MQTT broker. The frontend, built in React, displays live data streams with interactive charts and room-by-room views. An ESP32-based gateway bridges legacy sensors to the MQTT network, while a Node.js backend handles data persistence, alert rules, and device command routing.",
    process: "The architecture started with choosing MQTT over HTTP for its lightweight, pub/sub model—ideal for constrained IoT devices. I built a custom ESP32 firmware in C++ to handle sensor polling and MQTT publishing. On the backend, Node.js with Socket.IO pushes real-time updates to the React frontend. I used Recharts for data visualization and implemented a room-layout editor so users can map sensors to physical spaces. The entire system was containerized with Docker for easy deployment.",
    challenges: "The biggest challenge was handling unreliable WiFi connections. Sensors would drop offline and reconnect, causing data gaps. I implemented a local buffering system on the ESP32 that stores readings in flash memory during disconnections and syncs them once connectivity is restored. Another lesson was the importance of rate-limiting dashboard updates—pushing every sensor reading to the UI caused performance issues, so I introduced a 500ms debounce on the frontend.",
    result: "The dashboard now monitors 50+ sensors with sub-second latency. The startup reported a 40% reduction in customer support tickets related to device management. The system handles 10,000+ messages per minute with 99.9% uptime over 12 months. The project also earned recognition at a local IoT meetup and led to two additional consulting contracts.",
    screenshots: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "autonomous-drone-flight-controller",
    title: "Autonomous Drone Flight Controller",
    description: "Custom firmware for an autonomous drone flight controller handling sensor fusion with Kalman filters in real-time.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&h=600&fit=crop",
    tags: ["STM32", "C++", "Kalman Filter", "PID"],
    githubUrl: "#",
    category: "embedded",
    problem: "Commercial drone flight controllers were either too expensive for research use or too limited in customization. Our university robotics lab needed a flight controller that could be modified for experimental control algorithms while remaining stable enough for outdoor flight tests.",
    solution: "I developed custom firmware for an STM32F4 microcontroller that implements a full flight control stack: IMU sensor fusion using extended Kalman filters, PID-based attitude control, GPS waypoint navigation, and a MAVLink-compatible telemetry system. The modular architecture allows researchers to swap in experimental controllers without touching the core stabilization code.",
    process: "I started by prototyping sensor fusion on a breadboard with an MPU6050 IMU, validating the Kalman filter against known orientations. The firmware was structured using FreeRTOS to ensure deterministic timing for the control loop (running at 400Hz). I implemented a hardware abstraction layer so the same code could run on different STM32 variants. Testing involved weeks of bench testing on a gimbal rig before moving to tethered outdoor flights.",
    challenges: "Tuning PID gains for stable flight was incredibly iterative. Wind gusts would expose instabilities that didn't appear in bench tests. I learned to implement gain scheduling—adjusting PID parameters based on flight conditions. Another challenge was managing the computational budget: the Kalman filter, PID loops, and telemetry all competed for CPU cycles. Profiling and optimizing matrix operations reduced the fusion step from 800μs to 200μs.",
    result: "The flight controller achieved stable autonomous flight with position hold accuracy within 1.5 meters. Three research papers were published using data collected through the platform. The firmware is now used by two other university labs and has been forked 40+ times on GitHub.",
    screenshots: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "ecommerce-platform-rebuild",
    title: "E-Commerce Platform Rebuild",
    description: "Re-architected a legacy e-commerce platform to a modern stack, improving load times by 70% and conversion by 25%.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web",
    problem: "A mid-size retailer was losing customers due to a slow, outdated e-commerce site built on a monolithic PHP platform. Page load times exceeded 6 seconds on mobile, the checkout flow had a 73% abandonment rate, and adding new product categories required developer intervention. The business was losing an estimated $50K/month in potential revenue.",
    solution: "I proposed a complete rebuild using Next.js for server-side rendering and static generation, PostgreSQL for the product catalog, and Stripe for payments. The new architecture uses incremental static regeneration so product pages load in under 1 second while staying up-to-date. A headless CMS gives the marketing team full control over content without developer involvement.",
    process: "The migration was planned in phases to avoid business disruption. Phase 1 rebuilt the product browsing experience with SSG. Phase 2 tackled the checkout flow with Stripe Elements and optimistic UI updates. Phase 3 added a custom admin dashboard for inventory management. I used Tailwind CSS for rapid UI development and implemented a component library that the client's team could extend. Database migration from MySQL to PostgreSQL was handled with custom ETL scripts.",
    challenges: "The hardest part was migrating 50,000+ products with their SEO history intact. I built a URL redirect map and validated every product page's meta tags post-migration. Another challenge was Stripe integration for the client's complex pricing model (bulk discounts, subscription boxes, gift cards). I learned that abstracting payment logic into a dedicated service layer made testing and iteration much faster.",
    result: "Post-launch metrics showed a 70% improvement in page load times (6.2s → 1.8s), a 25% increase in conversion rate, and a 60% reduction in bounce rate. The marketing team now publishes content independently, and the platform handles 3x the traffic of the old system. The client estimated $180K in additional annual revenue attributable to the rebuild.",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "realtime-collaboration-tool",
    title: "Real-Time Collaboration Tool",
    description: "A multiplayer whiteboard app with WebSocket-powered real-time sync and conflict resolution.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    tags: ["React", "WebSocket", "Node.js", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web",
    problem: "A remote-first design agency needed a collaborative whiteboard tool that could handle real-time drawing, sticky notes, and shape manipulation without the lag and sync issues they experienced with existing tools. They also needed self-hosted deployment for client confidentiality reasons.",
    solution: "I built a custom whiteboard application using React with an HTML Canvas rendering layer, WebSocket connections for real-time sync, and a CRDT-based conflict resolution system. The backend uses Node.js with Redis pub/sub for horizontal scaling across multiple server instances. All data stays on the client's infrastructure.",
    process: "The core challenge was choosing the right sync strategy. I evaluated OT (Operational Transform) and CRDT (Conflict-free Replicated Data Types) and chose CRDTs for their simpler conflict resolution. The canvas rendering uses a custom scene graph that batches draw calls for performance. I implemented cursor presence (showing other users' cursors in real-time) using a separate lightweight WebSocket channel to avoid blocking the main sync channel. Redis stores session state and enables horizontal scaling.",
    challenges: "Canvas performance with many objects was the primary challenge. Drawing 500+ shapes with real-time updates from multiple users caused frame drops. I implemented spatial indexing (quadtree) to only render visible objects and used OffscreenCanvas for background rendering. Another lesson was that WebSocket reconnection handling is critical—I built an exponential backoff system with state reconciliation on reconnect.",
    result: "The tool supports 20+ concurrent users per board with smooth 60fps rendering. The agency replaced their previous tool, saving $2,400/year in SaaS costs while gaining full data sovereignty. Average latency for sync operations is under 50ms. The project was later open-sourced and gained 200+ GitHub stars in its first month.",
    screenshots: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    ],
  },
];

export const getProjectBySlug = (slug: string): ProjectStory | undefined =>
  projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string): ProjectStory | undefined => {
  const idx = projects.findIndex((p) => p.slug === slug);
  return idx >= 0 ? projects[(idx + 1) % projects.length] : undefined;
};
