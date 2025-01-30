import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Rasmiranjan Parida, a creative fullstack developer, building end-to-end solutions and crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "https://drive.google.com/uc?export=download&id=1MkyT_415F2HWsuJCp0nF_J-fr-NgcAA2",
};

export const PROJECTS = [
  {
    name: "Naukrator",
    description: "Streamlines resume analysis for better visibility on Naukri.",
    image: projects1,
    link: "https://github.com/Rasmiranjanparida/Naurkri-Automated-Resume-Penetrator.git",
  },
  {
    name: "Examify",
    description: "Conducts exams online with automated grading and analytics.",
    image: projects2,
    link: "https://github.com/Rasmiranjanparida/OnlineExam.git",
  },
  {
    name: "TankBlast",
    description: "An artillery game where players control tanks and battle using strategy to defeat opponents.",
    image: projects3,
    link: "https://github.com/Rasmiranjanparida/Pocket-Tanks.git",
  },
  {
    name: "Mailysis",
    description:
      "Tool that analyzes emails for insights and key information.",
    image: projects4,
    link: "https://github.com/Rasmiranjanparida/Email-analyzer.git",
  },
  {
    name: "Hospitex",
    description: "A system for managing hospital operations, including patients, appointments, and billing.",
    image: projects5,
    link: "https://github.com/Rasmiranjanparida/Hospital-Management-System.git",
  },
  {
    name: "JobTrack",
    description: "A tool for managing and tracking job applications, including submission, status updates, and follow-ups.",
    image: projects6,
    link: "https://github.com/Rasmiranjanparida/JobApplicationManager.git",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated <strong>fullstack developer</strong> with a passion for building modern, scalable web applications that are both functional and aesthetically pleasing. With expertise in <strong>Core Java</strong>, I am skilled in <strong>OOP</strong>, data structures, algorithms, and advanced Java concepts such as <strong>multithreading</strong>, collections, <strong>JDBC</strong>, and serialization. I specialize in Java frameworks like <strong>Spring Boot</strong>, <strong>Spring Data JPA</strong>, and <strong>Microservices</strong>, and have strong experience in <strong>SQL</strong>, Oracle, <strong>MySQL</strong>, and NoSQL integration.",
    "On the frontend, I work with <strong>React.js</strong> and <strong>Tailwind CSS</strong> to create responsive user interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver high-performance, user-centric solutions. I am proficient in Agile methodologies and version control using <strong>Git</strong>, and I’m committed to continuous learning, staying up-to-date with emerging technologies to ensure the success of every project.",
  ],
};


export const EXPERIENCES = [
  {
    yearRange: "2022 — Now",
    title: "Associate Software Engineer",
    location: "Bengaluru, India",
    description: [
      "Leading the development of scalable backend architecture with Spring Boot and Microservices.",
      "Designing and implementing robust APIs and data models for seamless integration.",
      "Collaborating with teams to ensure smooth data flow between backend and frontend.",
      "Optimizing database queries for improved performance and scalability.",
      "Enhancing user experience with responsive React.js frontend.",
      "Continuously adopting emerging technologies for improved performance.",
    ],
  },
  
];

export const TESTIMONIALS = [
  {
    name: "Aravinda ",
    title: "data analyst",
    feedback:
      "Rasmiranjan, I sincerely appreciate your incredible support in developing the Naukri Updater and Job Application Tracker. Your coding skills and innovative problem-solving were essential in making these tools successful. Your dedication and expertise have been a true asset, and I’m grateful for your help in bringing these projects to life!",
    image: person1,
  },
  {
    name: "Santosh ",
    title: "cad designer",
    feedback:
      "Thank you so much for all the help with the Naukri Updater and Job Application Tracker! Your coding skills are incredible, and you made everything so much easier to understand. Your support has made a real difference, and I’m truly grateful!",
    image: person2,
  },
  {
    name: "Gyanaranjan",
    title: "Test Engineer",
    feedback:
      "I can't thank you enough for your awesome help with the Naukri Updater and Job Application Tracker. Your coding skills are just amazing, and you’ve made everything work so smoothly. I really appreciate all the time and effort you put in to make these projects successful!",
    image: person3,
  },
  {
    name: "Amulya",
    title: "Senior Developer",
    feedback:
      "Your exceptional coding abilities and dedication in assisting with the Naukri Updater and Job Application Tracker have been truly inspiring. Your contributions have not only enhanced the tools but also driven the entire project forward. Your hard work is deeply appreciated, and I look forward to more successful collaborations!",
    image: person4,
  },
  {
    name: "Milan",
    title: "Software Engineer",
    feedback:
      "Your incredible skills and commitment have been key in making the Naukri Updater and Job Application Tracker a success. Thank you for your hard work, creativity, and problem-solving that brought these projects to life!",
    image: person5,
  },
  {
    name: "Subhalaxmi",
    title: "Software Engineer",
    feedback:
      "Your efforts in building the Naukri Updater and Job Application Tracker have been incredibly impactful. The smooth functionality and design are a testament to your coding expertise. Thank you for your commitment to excellence!",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "rasmiranjanparida7777@gmail.com",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/rasmiranjanparida_/",
      ariaLabel: "Follow me on Instagram",
      icon: "RiInstagramFill",
    },
    
    {
      platform: "GitHub",
      url: "https://github.com/Rasmiranjanparida",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/rasmiranjan-parida-/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Rasmiranjan. All rights reserved.`,
};
