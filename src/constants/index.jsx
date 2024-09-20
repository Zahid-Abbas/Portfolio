import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
    FaEnvelope,
  } from "react-icons/fa6";
  
  import img from "../assets/img.jpg"
  import projectImage1 from "../assets/project1.jpeg";
  import projectImage2 from "../assets/project2.png";
  import projectImage3 from "../assets/project3.png";
  import projectImage4 from "../assets/project4.png";
  import projectImage5 from "../assets/project5.png";
  import projectImage6 from "../assets/project6.png";
  
  import { RiReactjsLine } from "react-icons/ri";
  import { TbBrandNextjs } from "react-icons/tb";
  import { SiMongodb } from "react-icons/si";
  import { DiRedis } from "react-icons/di";
  import { FaNodeJs } from "react-icons/fa";
  import { SiExpress } from "react-icons/si";
  import { BiLogoPostgresql } from "react-icons/bi";
  import { DiMysql } from "react-icons/di";
  import { FaJs } from "react-icons/fa6";
  import { FaJsSquare } from "react-icons/fa";
  
  export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    // { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];
  
  export const HERO = {
    name: "SYED ZAHID ABBAS",
    greet: "Hello there! 👋🏻",
    description:
      "I am a passionate Full Stack developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences.",
      // "I am a passionate FullStack developer with a strong foundation in both frontend and backend technologies. I excel at transforming ideas into functional and engaging web applications, seamlessly combining my design and development skills to create exceptional user experiences.",
  };
  
  export const PROJECTS = [
    {
      id: 1,
      name: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
      image: projectImage1,
      text: "text-white",
      githubLink: "https://github.com/zahid-abbas",
    },
    {
      id: 2,
      name: "PassKey",
      description:
        // "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
        "A password management web application developed using React.js, Tailwind CSS, Express.js, and MongoDB. This application securely saves user credentials and provide easy access",// including usernames, passwords, and associated URLs, providing users with easy access and management of their sensitive information.",
      image: projectImage2,
      text: "text-black",
      githubLink: "https://github.com/zahid-abbas",
    },
    {
      id: 3,
      name: "Fitness App",
      description:
        // "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
        "A Fitness web application built using React.js and RapidAPI, offering user access to comprehrensive fitness information, instructional videos, and a BMI Calculator. It aims to promote health and wellness to the user.",
      image: projectImage3,
      text: "text-black",
      githubLink: "https://github.com/zahid-abbas",
    },
    {
      id: 4,
      name: "Weather App",
      description:
        "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
      image: projectImage4,
      text: "text-white",
      githubLink: "https://github.com/zahid-abbas/weather-Website",
    },
    {
      id: 5,
      name: "Tune-Box",
      description:
        // "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
        "A music player app built with React.js and the Spotify API, enabling users to search and stream their favorite songs, albums, and playlists. It features a user-friendly interface for discovering new music.",
      image: projectImage5,
      text: "text-black",
      githubLink: "https://github.com/zahid-abbas/Tune-Box",
    },
    {
      id: 6,
      name: "News Mag",
      description:
        // "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
        "A news aggregator app built with React.js, Bootstrap, and the News API, offering users easy access to the latest articles from various sources. It features a clean, responsive design for browsing and reading articles based on user interests.",
      image: projectImage6,
      text: "text-white",
          // image: projectImage1,
      githubLink: "https://github.com/zahid-abbas/NewsMag",
    },
  ];
  
  export const BIO = [
    // "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
    // "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
    // "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
    "I'm Syed Zahid Abbas, a recent graduate with a Bachelor of Technology in Computer Science and Engineering, from Intergal University. As I begin my professional journey, I brings a strong foundation in both frontend and backend development, showcasing a versatile skill set that covers the full spectrum of web development.",
    "During my academic career, I developed a robust understanding of web technologies through various projects and coursework. I gained expertise in frontend development with HTML, CSS, and JavaScript, and I have hands-on experience with modern framework like React.js. On the backend, I became proficient in Node.js and Express.js, with a solid grasp of database management using MongoDB and MySQL.",
    "My commitment to creating engaging and efficient web solutions shines through my passion for integrating creative design with functional technology. As I step into the professional world, I am enthusiastic about applying my comprehensive skill set to develop impactful and innovative web applications.",
  ];
  
  export const SKILLS = [
    {
      icon: <FaJsSquare className="text-4xl text-red-600 lg:text-5xl" />,
      name: "JavaScript",
      experience: "1+ year",
    },
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React.js",
      experience: "2+ years",
    },
    {
      icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
      name: "Express.js",
      experience: "1+ year",
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Node.js",
      experience: "2+ years",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
      name: "MongoDB",
      experience: "1.5+ years",
    },
    {
      icon: <DiMysql className="text-4xl text-sky-600 lg:text-5xl" />,
      name: "MySQL",
      experience: "1+ year",
    },
  ];
  
  export const EXPERIENCES = [
    {
      title: "Lead Frontend Developer",
      company: "Innovative Tech Solutions",
      duration: "July 2020 - Present",
      description:
        "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
    },
    {
      title: "Frontend Engineer",
      company: "Digital Creations",
      duration: "February 2016 - June 2020",
      description:
        "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
    },
    {
      title: "Junior Web Developer",
      company: "Bright Future Technologies",
      duration: "August 2014 - January 2016",
      description:
        "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
    },
  ];
  
  export const EDUCATION = [
    {
      degree: "Bachelor of Technology in Computer Science and Engeneering",
      institution: "Integral University",
      duration: "August 2020 - June 2024",
      description:
        "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and React. Completed a project on developing an Fitness platform. Graduated with a high CGPA.",
    },
    {
      degree: "Intermediate",
      institution: "Exon Montessori School",
      duration: "May 2019 - June 2020",
      description:
        "Developed foundational skills in core academic subjects including mathematics, science, computer, and Technology.Cultivated effective communication skills through oral presentations and written assignments, contributing to improved public speaking and writing proficiency.",
    },
  ];
  
  export const SOCIAL_MEDIA_LINKS = [
    // {
    //   href: "https://x.com/",
    //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    // },
    // {
    //   href: "https://x.com/",
    //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    // },
    // {
    //   href: "https://x.com/",
    //   icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    // },
    {
      href: "https://x.com/@zahid_jafri7",
      icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/zahid-abbas",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/in/syed-zahid-abbas",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "mailto:szahidabbas5@gmail.com",
      icon: <FaEnvelope fontSize={25} className="hover:opacity-80" />,
    },
  ];