export interface Project {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  slug?: string;
}



export const embeddedEarly: Project[] = [
  {
    title: "Temperature Monitoring System",
    desc: "Built a basic temperature logger using Arduino and DHT11 sensors, storing readings on an SD card for later analysis.",
    tags: ["Arduino", "DHT11", "C", "SD Card"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    title: "Line-Following Robot",
    desc: "Designed a simple autonomous robot that follows a black line using IR sensors and a motor driver shield.",
    tags: ["Arduino", "IR Sensors", "L298N", "C++"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    title: "Home Alarm System",
    desc: "Created a PIR motion-detection alarm with buzzer alerts and basic LCD status display for home security.",
    tags: ["Arduino", "PIR Sensor", "LCD", "Buzzer"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
  },
];

export const embeddedRecent: Project[] = [
  {
    title: "Smart Home IoT Dashboard",
    desc: "Designed and built a real-time monitoring dashboard connecting 50+ IoT sensors for a smart home startup.",
    tags: ["ESP32", "MQTT", "Node.js", "React"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    slug: "smart-home-iot-dashboard",
  },
  {
    title: "Autonomous Drone Flight Controller",
    desc: "Developed firmware for an autonomous drone flight controller handling sensor fusion with Kalman filters in real-time.",
    tags: ["STM32", "C++", "Kalman Filter", "PID"],
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    slug: "autonomous-drone-flight-controller",
  },
  {
    title: "Industrial Sensor Network",
    desc: "Engineered a LoRa-based wireless sensor network for industrial monitoring with 99.9% uptime over 12 months.",
    tags: ["LoRa", "ESP32", "RTOS", "Grafana"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
];

export const webEarly: Project[] = [
  {
    title: "E-Commerce Homepage UI",
    desc: "My first frontend UI build focused on translating a Dribbble-inspired design into a responsive product interface using HTML and CSS.",
    tags: ["Frontend Development",
        "HTML",
        "CSS",
        "Responsive Design"],
    slug: "ecommerce-homepage-ui",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
  },
  {
    title: "Smart Home Dashboard",
    desc: "An interactive smart home dashboard inspired by a Dribbble concept, built to explore responsive dashboard architecture, energy visualization, and dynamic UI behavior using JavaScript and Chart.js.",
    tags: ["JavaScript", "CSS3", "LocalStorage"],
    slug: "smart-home-dashboard",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
  },
  {
    title: "Weather Dashboard",
    desc: "Developed a weather app consuming a public API with dynamic backgrounds based on current conditions.",
    tags: ["React", "REST API", "CSS Modules"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
  },
];

export const webRecent: Project[] = [
  {
    title: "E-Commerce Platform Rebuild",
    desc: "Re-architected a legacy e-commerce platform to a modern stack, improving load times by 70% and conversion by 25%.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    slug: "ecommerce-platform-rebuild",
  },
  {
    title: "Developer Portfolio CMS",
    desc: "Built a headless CMS tailored for developer portfolios with markdown support, analytics, and custom themes.",
    tags: ["React", "Supabase", "MDX", "Vercel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Real-Time Collaboration Tool",
    desc: "Created a multiplayer whiteboard app with WebSocket-powered real-time sync and conflict resolution.",
    tags: ["React", "WebSocket", "Node.js", "Redis"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    slug: "realtime-collaboration-tool",
  },
];
