// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's

import wideSoftLogo from "./assets/company_logo/wideSoftLogo.png";

// Education Section Logo's
import mhjlogo from "./assets/education_logo/mhjlogo.png";
import pandavlogo from "./assets/education_logo/pandavlogo.png";
import pcelogo from "./assets/education_logo/pcelogo.png";
import vmvlogo from "./assets/education_logo/vmvlogo.png"

// Project Section Logo's
import Eventcounterapp from "./assets/work_logo/Eventcounterapp.png";
import foodiesapp from "./assets/work_logo/foodiesapp.png";
import jobstackapp from "./assets/work_logo/jobstackapp.png";
import methauthapp from "./assets/work_logo/methauthapp.png";
import notekeeperapp from "./assets/work_logo/notekeeperapp.png";
import todolist from "./assets/work_logo/todolist.png"

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img:wideSoftLogo ,
      role: "Fullstack Developer",
      company: "WideSoftech.Pvt.Ltd",
      date: "july 2025 - Present",
      desc: "I have worked on building responsive and user-focused web interfaces using HTML, CSS, Bootstrap, and JavaScript. My experience includes creating interactive features and integrating backend functionalities to improve overall performance and usability. I also collaborate effectively using Git and GitHub for version control and team coordination. Additionally, I contribute to debugging and testing processes to ensure that web applications run smoothly and efficiently.",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: pcelogo,
      school: "Priyadarshini College of Enginnering , Nagpur",
      date: "Nov 2022 - July 2025",
      grade: "74.43 CGPA",
      desc: "I am currently pursuing my Bachelor’s degree (B.Tech) in Industrial Internet of Things (IIoT) from Priyadarshini College of Engineering. Throughout my academic journey, I have developed a strong foundation in both hardware and software development, allowing me to work effectively across embedded systems, IoT technologies, and full-stack applications.",
      degree: "B.Tech (Industrial IOT)",
    },
    {
      id: 1,
      img: pandavlogo,
      school: "Shri Krushnarao Pandav Polytechnic,Nagpur",
      date: "Sept 2020 - Aug 2022",
      grade: "72.06%",
      desc: "I completed my Diploma in Computer Engineering from Shri Krushnarao Pandav Polytechnic. During my studies, I explored a wide range of subjects that strengthened my understanding of computer systems and software development. From learning the fundamentals of Programming, Data Structures, and Computer Networks to diving into Web Development and Database Management, I gained both theoretical and practical knowledge in the field of computing.",
      degree: "Diploma in Computer Engineering",
    },
    {
      id: 2,
      img: mhjlogo,
      school: "Major Hemant Jakate Science Institute,Nagpur",
      date: "Apr 2017 - March 2018",
      grade: "59.23%",
      desc: "I completed my Class 12 in General Science from Major Hemant Jakate Science Institute, Nagpur, securing 59.23%. My studies focused on core subjects such as Physics, Chemistry, and Biology, which strengthened my scientific understanding and prepared me for higher education in the technical field.",
      degree: "MSBSHSE(XII) - General Science",
    },
    {
      id: 3,
      img: vmvlogo,
      school: "VMV High School, Nagpur",
      date: "Apr 2015 - March 2016",
      grade: "74.00%",
      desc: "I completed my class 10 education from VMV High School, Nagpur, under the MSBSHSE board .",
      degree: "MSBSHSE(X), Semi-English",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Foodies Resturant Application",
      description:
        "The Foodie Restaurant Website is a modern, interactive, and user-friendly platform designed to showcase the restaurant’s culinary offerings while providing visitors with a seamless browsing experience. The primary goal of this project is to create an engaging digital presence that reflects the brand identity, enhances customer interest, and simplifies the process of exploring the menu, services, and contact information.",
      image: foodiesapp,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/AniketDBhatkar/Foodies-_Hub_Application.git",
      webapp: "https://foodies-hub-application.vercel.app/",
    },
    {
      id: 1,
      title: "Notes Keeper App",
      description:
        "The Notes Keeper App is a simple, fast, and efficient digital tool designed to help users store, organize, and manage their personal or professional notes with ease. The main objective of this application is to provide a clutter-free space where users can quickly capture ideas, reminders, tasks, and important information without any complexity. Its clean user interface and intuitive features make the app ideal for students, working professionals, and anyone who needs a reliable note-taking solution.",
      image: notekeeperapp,
      tags: [ "HTML", "CSS", "JavaScript","Bootstrap"],
      github: "https://github.com/AniketDBhatkar/Notes_Keeper_Apps.git",
      webapp: "https://notes-keeper-apps.vercel.app/",
    },
    {
      id: 2,
      title: "TO-Do Lists App",
      description:
        "The To-Do Lists App is a productivity-focused application designed to help users efficiently manage their daily tasks, goals, and reminders in a simple and organized way. The primary purpose of this app is to offer a structured platform where users can list, prioritize, and track tasks to improve time management and overall productivity. With its clean user interface and intuitive features, the app provides a seamless experience for students, professionals, and anyone who wants to stay organized..",
      image: todolist,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AniketDBhatkar/To-Do-List.git",
      webapp: "https://to-do-list-gold-seven-47.vercel.app/",
     },
    {
      id: 3,
      title: "Event Counter ",
      description:
        "The Event Counter Project is a simple yet effective tool designed to track how many times a specific action or event occurs. It provides real-time counting with a clean and interactive interface, making it easy for users to monitor activities accurately. This project is useful for analyzing frequency, improving productivity, and automating tasks that require continuous event tracking.",
      image: Eventcounterapp,
      tags: ["HTML","CSS","Javascript"],
      github: "https://github.com/AniketDBhatkar/Event-Counter-App.git",
      webapp: "https://event-counter-app.vercel.app/",
    },
    {
      id: 4,
      title: "MERN Authentication Project ",
      description:
        "The MERN Authentication Project is a secure and user-friendly system built using MongoDB, Express.js, React.js, and Node.js to manage user login and registration. It provides essential features such as JWT-based authentication, password hashing, protected routes, and role-based access control to ensure data privacy and secure access. With a modern UI and smooth API integration, the project delivers a reliable authentication workflow that allows users to register, log in, and access authorized content safely and efficiently.",
      image: methauthapp,
      tags: ["JavaScript", "React.js", "HTML", "CSS","MongoDB","Node.js"],
      
     },
    {
      id: 5,
      title: " JOBSTACK (Job Application Management)",
      description:
        "JOBSTACK is a streamlined Job Application Management system designed to help users organize, track, and manage their job applications efficiently. It allows users to add job details, update application status, set reminders, and monitor progress through a clean and intuitive interface. By centralizing all job-related information in one place, JOBSTACK helps users stay organized, improve productivity, and manage their career search more effectively.",
      image: jobstackapp,
      tags: ["JavaScript", "React.js", "HTML", "CSS","MongoDB","Node.js"],
      
    },
  
  ];  