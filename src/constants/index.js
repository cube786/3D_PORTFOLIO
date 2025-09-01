import { meta, shopify, starbucks, tesla, trouvailler, ksa } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
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
    jquery,
    api,
    rubik,
    grid,
    phone
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: jquery,
        name: "jQuery",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Trouvailler Enterprises Pvt LTD",
        icon: trouvailler,
        iconBg: "#accbe1",
        date: "April 2023 - June 2024",
        points: [
            "Designed and developed responsive user interfaces using React.js and Tailwind CSS,ensuring compatibility and improved user engagement.",
            "Integrated RESTful APIs to streamline back-end communication, optimizing data retrieval and reducing loading times.",
            "Ensured full compatibility across devices, from mobile to desktop, providing a consistent and user-friendly interface, increasing mobile user engagement.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "System Admin ",
        company_name: "Star Link Information Technology",
        icon: ksa,
        iconBg: "#fbc3bc",
        date: "July 2024 - Jan 2025",
        points: [
            "Assisted in configuring and managing Windows Servers, ensuring optimal performance and system reliability.",
            "Supported Active Directory tasks, including user account updates and access management.",
            "Developed skills in using administrative tools and software, including Microsoft Office Suite and scheduling platforms.",
            "Followed team leader to understand workflow optimization, task delegation, and overall office management strategies.",
        ],
    },
];

export const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: '/contact',
    // },
    {
    name: 'Phone',
    iconUrl: phone, 
    link: 'tel:+971565916778',
    type: 'external', // treat like external <a>
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

export const projects = [
    {
        iconUrl: rubik,
        theme: 'btn-back-red',
        name: 'Cube Portfolio',
        description: 'A modern 3D portfolio website built with React and Three.js, showcasing interactive animations and my work as a developer.',
        link: 'https://cube-portfolio-iota.vercel.app/',
    },
    {
        iconUrl: grid,
        theme: 'btn-back-green',
        name: '3D Developer Portfolio',
        description: 'An immersive 3D portfolio experience designed with Three.js and React, featuring smooth animations, interactive UI, and project showcases.',
        link: 'https://three-dportfolio-psi.vercel.app/',
    },

];