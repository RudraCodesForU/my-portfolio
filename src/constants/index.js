const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 18, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Maintainer",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Maintainer",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Rudrajyoti's contribution during the Infosys Internship, demonstrates strong technical and collaborative skills in delivering scalable solutions and exceeding performance benchmarks.",
    imgPath: "/images/infosys.webp",
    logoPath: "/images/infosys.webp",
    title: "Software Developer Intern",
    date: "April 2025 - Present",
    responsibilities: [
      "Participated in real-world projects on the Infosys Springboard platform, focusing on full-stack development and cloud integration.",
      "Collaborated with cross-functional teams to design and implement software modules, improving project delivery efficiency.",
      "Completed industry-oriented training modules and delivered a capstone project recognized for innovation and impact.",
    ],
  },
  {
    review: "Rudrajyoti's contributions to PGMPY's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/pgmpy-logo-banner.png",
    logoPath: "/images/pgmpy-logo.png",
    title: " Open Source Developer",
    date: "May 2025 - Present",
    responsibilities: [
      "Led the development of PGMPY's web application and causal-learning model forecasting, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to several repo's that were used with the PGMPY Packages",
    ],
  },
  {
    review: "Rudrajyoti's contributions to PGMPY's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/freelancing.jpeg",
    logoPath: "/images/free.png",
    title: " FreeLancing",
    date: "October 2023 - Present",
    responsibilities: [
      "Integrated and optimized API connections for multiple platforms, achieving seamless data flow and reducing response times by over 25%.",
      "Delivered custom business solutions for 10+ clients, including automation scripts and dashboard tools, resulting in improved operational efficiency.",
      "Enhanced application security and reliability by deploying industry-standard authentication and monitoring systems.",
    ],
  },
  {
    review: "Rudrajyoti consistently delivered robust solutions, driving significant improvements in system efficiency and user engagement. His technical depth and initiative were instrumental in multiple successful project deliveries.",
    imgPath: "/images/Coincent_logo.png",
    logoPath: "/images/coincent.webp",
    title: "Software Developer Intern",
    date: "March 2023 - August 2023",
    responsibilities: [
      "Developed and integrated a real-time chat support system at Coincent.AI, reducing customer query resolution time by 30% and enhancing user engagement.",
      "Built a Business Management System (BMS) to automate checkout tracking, improving internal dashboard efficiency by 40% and reducing manual operations.",
      "Created a modular review form module that boosted feedback collection by 60%; received formal appreciation from the CTO for timely, production-ready contributions.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Anirban Guho",
    mentions: "@anirbanguho",
    review:
      "I can’t say enough good things about Rudrajyoti. He was able to take my complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "S.K. Azharuddin",
    mentions: "@shaikazharuddin",
    review:
      "Working with Rudrajyoti was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Sneha Jaiswal",
    mentions: "@snehajaiswal",
    review:
    "Rudrajyoti's expertise in AI application development is truly impressive. He ensured the AI system was not only intelligent, but also robust, scalable, and aligned with real-world use cases—delivering results that exceeded expectations.",
    imgPath: "/images/client10.png",
  },
  {
    name: "Victor Frost",
    mentions: "@victorfrost",
    review:
      "Rudrajyoti's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client5.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Rudrajyoti was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
