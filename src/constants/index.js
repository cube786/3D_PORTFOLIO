import {  Trouvailler,ksa, uniq } from "../assets/images";
import {
    contact,
    css,
    
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    postgresql,
    python

} from "../assets/icons";

export const skills = [
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
  { imageUrl: react, name: "React.js", type: "Frontend" },
  { imageUrl: nodejs, name: "Node.js", type: "Backend" },
  { imageUrl: express, name: "Express.js", type: "Backend" },
  { imageUrl: postgresql, name: "Postgresql", type: "Database" },
  { imageUrl: git, name: "Git", type: "Version Control" },
  { imageUrl: github, name: "GitHub", type: "Version Control" },
  { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
  { imageUrl: python, name: "Python", type: "Backend" },
  { imageUrl: tailwindcss, name: "Tailwindcss", type: "Frontend" }
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Trouvailler Enterprises Pvt. Ltd, India",
    icon: Trouvailler, 
    iconBg: "#b7e4c7",
    date: "Apr 2023 – Jun 2024",
    points: [
      "Developed and maintained interactive web applications using React.js and Tailwind CSS.",
      "Integrated RESTful APIs for dynamic content updates and backend communication.",
      "Ensured responsive design for cross-device compatibility, improving user engagement.",
      "Optimized frontend performance, reducing load times and improving UX."
    ],
  },
  {
    title: "System Administrator (Trainee)",
    company_name: "Start Link Information Technology, KSA",
    icon: ksa,
    iconBg: "#a2d2ff",
    date: "Jul 2024 – Jan 2025",
    points: [
      "Assisted in configuring and managing Windows Servers for optimal performance.",
      "Supported Active Directory tasks including user management and access control.",
      "Monitored system health, performed updates, and applied security patches.",
      "Improved IT operations by assisting in troubleshooting and system administration."
    ],
  },
  {
    title: "Intern - Smart Home Automation",
    company_name: "Uniq Technologies, India",
    icon: uniq,
    iconBg: "#fbc3bc",
    date: "Jan 2021 – Feb 2021",
    points: [
      "Created a Smart Home Automation system using Arduino to reduce manual appliance control.",
      "Built circuits and Arduino code for lights and fans with 99% reliability via Bluetooth.",
      "Improved operational efficiency by 35% with automation integration."
    ],
  }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
  name: 'GitHub',
  iconUrl: github,
  link: 'https://github.com/cube786',
},
{
  name: 'LinkedIn',
  iconUrl: linkedin,
  link: 'https://www.linkedin.com/in/aneesh-abdul-rahman-2b67b1286/',
},
];

