export interface Project {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  slug?: string;
  _id?: string;
  category?: {
    _id?: string;
    name?: string;
    categorySlug?: string;
    slug?: {
      current: string;
    };
    description?: string;
  };
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
    year?: string;
    phase?: string;
    featured?: boolean;
  };
  hero?: {
    heroImage?: {
      asset?: {
        url?: string;
      };
    };
    thumbnail?: {
      asset?: {
        url?: string;
      };
    };
  };
  screenshots?: Array<{
    asset?: {
      url?: string;
    };
  }>;
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
    image: "assets/ecommerce-hero.png",
  },
  {
    title: "Smart Home Dashboard",
    desc: "An interactive smart home dashboard inspired by a Dribbble concept, built to explore responsive dashboard architecture, energy visualization, and dynamic UI behavior using JavaScript and Chart.js.",
    tags: ["JavaScript", "CSS3", "LocalStorage"],
    slug: "smart-home-dashboard",
    image: "assets/screen1.png",
  },
  {
    title: "JavaScript Converter Toolkit",
    desc: "A collection of interactive JavaScript mini tools built to understand DOM manipulation, event handling, API integration, and real-time interface updates.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "assets/screen2.png",
    slug: "javascript-converter-toolkit"
  },
];

export const webRecent: Project[] = [
  {
    title: "React Quiz Application",
    desc: "My first React application focused on component architecture, state management, props, hooks, and declarative UI development.",
    tags: [
      "React",
      "JavaScript",
      "Vanila CSS",
    ],
    image: "/assets/screen5.png",
    slug: "react-quiz-app",
  },
  {
    title: "Budget Management App",
    desc: "A personal finance dashboard built with Vanilla JavaScript focused on state management, DOM manipulation, CRUD operations, and localStorage persistence.",
    tags: [ "HTML","JavaScript", "Vanilla CSS", "LocalStorage"],
    image: "/assets/screen4.png",
    slug: "budget-app",
  },
  {
    title: "All Gates Training Website",
    desc: "A multi-page educational training website built in my early days a, where I explored frontend development, layout systems, Bootstrap integration, and early design thinking.",
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript"
    ],
    image: "/assets/screen3.png",
    slug: "allgates-training-website",
  },
];
