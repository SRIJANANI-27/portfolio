import project1 from "../assets/project-giffy.png"
import project2 from "../assets/invoice.jpeg"
import project3 from "../assets/project-balancebuddy.png"
import project4 from "../assets/project-book.png"
import project5 from "../assets/project-taskify.png"


export const HERO_CONTENT = `Crafting Seamless Digital Experiences`;

export const ABOUT_TEXT = `I am a passionate Frontend Developer with hands-on experience gained through internships, specializing in crafting intuitive user interfaces using HTML, CSS, JavaScript, Typescript, Bootstrap, React, Angular, Nodejs, Mongodb. 
My journey in web development has equipped me with the skills to create responsive and dynamic web applications that enhance user experiences. Additionally, I am enthusiastic about Web3 technologies and have started projects that transition from Web2 to Web3, exploring decentralized applications. I am committed to continuous learning and innovation, aiming to contribute to projects that push the boundaries of technology and deliver exceptional value.`;


export const PROJECTS = [
    {
      title: "Taskify",
       image: project5,
       link:"https://github.com/SRIJANANI-27/angular-taskify",
      description:
        "Task Management System project, leveraging Angular, HTML, CSS/Sass, and TypeScript. This project aimed to develop a feature-rich solution for efficient task organization and collaboration.",
      technologies: ["Angular", "Typescript","Api-calls"],
    },
    {
      title: "Giffy-API",
       image: project1,
       link:"https://github.com/SRIJANANI-27/giffy",
      description:
        "Giffy-API is a powerful tool for searching and retrieving GIFs from a large collection of animated images. It allows developers to integrate GIFs into their applications using easy API calls. With high-speed retrieval and a user-friendly interface, it enhances user engagement through visual content.",
      technologies: [ "Angular", "Typescript","Api","Bootstrap"],
    },
    {
      title: "Invoice Bill",
       image: project2,
       link:"https://srija-billinginvoice.netlify.app/",
      description:
        "I developed a real-time invoice billing application tailored for my cousin's business. It simplifies the creation and management of invoices, with automatic tax calculations and real-time updates. The app features easy client management and generates downloadable PDF invoices. It's designed to streamline the billing process efficiently.",
      technologies: ["Html","Css","Bootsrap", "Javascript"],
    },
    {
      title: "Balance Buddy",
       image: project3,
       link:"https://expense-three-mu.vercel.app/login",
      description:
        "Developed Balance Buddy, a real-time personal finance management web app using React.js and Node.js. It allows users to track income, expenses, and net balances with an intuitive interface and real-time updates. Integrated secure backend with MongoDB for managing transactions efficiently. Focused on creating a user-friendly experience with dynamic data visualization and easy transaction management.",
      technologies: ["HTML5", "CSS3", "Javascript","Nodejs","Mongodb","MERN Stack"],
    },
    {
      title: "My Book Store",
       image: project4,
       link:"https://github.com/SRIJANANI-27/Book-store",
      description:
        "Developed a dynamic Book Store Application using the MERN stack, enabling users to seamlessly manage their book collections through intuitive CRUD operations. Utilized React.js for a responsive user interface and Node.js with Express.js for a secure backend. Leveraged MongoDB for efficient data storage and management, allowing effortless book addition, editing, and deletion.",
      technologies: ["HTML5", "CSS3", "Javascript","Nodejs","Mongodb","MERN Stack"],
    },
  ];

  export const ACHEIEVEMENTS = [
    {
      year:"Mar 2024",
      title:"Best Student In Co-curricular Activities",
      description:`Awarded the Best Co-curricular Student for outstanding involvement in co-curricular activities, demonstrating excellence in leadership, creativity, and teamwork. This honor reflects my ability to balance academics with active participation and contribution to various events and initiatives.`,
      location:"KIOT, Salem",
    },
    {
      year:"May 2023",
      title:"Achievers Day Award for Excellence",
      description:`Awarded on Achievers Day in recognition of outstanding academic and extracurricular achievements. This honor reflects my commitment to excellence, dedication to growth, and ability to excel in multiple domains, showcasing a strong work ethic and a passion for success.`,
      location:"KIOT, Salem",
    },
    {
      year:"Feb 2023",
      title:"National Level Tech Symposium Winner- Web Designing",
      description:`Secured the top prize in web designing at the National Level Tech Symposium, demonstrating my strong technical skills, creativity, and innovation in crafting user-friendly and visually engaging websites.`,
      location:"GCE, Salem",
    },
    {
      year:"May 2022",
      title:"Most Book Borrower",
      description:`Recognized as the most frequent book borrower, reflecting my deep passion for reading and learning. This achievement highlights my commitment to exploring diverse genres and gaining knowledge, demonstrating my curiosity and love for continuous personal and intellectual growth.`,
      location:"KIOT, Salem",
    },
  ]