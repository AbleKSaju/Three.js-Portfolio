import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  sql,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  stepz,
  cube,
  jobit,
  tripguide,
  threejs,
  kafka,
  firebase,
  python,
  express,
  rabbitmq,
  vue,
  socket,
  metamedia,
  brototype,
  wahni,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Typescript Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "Three.js Developer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "kafka",
    icon: kafka,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Sql",
  //   icon: sql,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "socket",
    icon: socket,
  },
  // {
  //   name: "rabbitmq",
  //   icon: rabbitmq,
  // },
];

const experiences = [
  {
    title: "Mern Stack Developer",
    company_name: "Brototype",
    icon: brototype,
    iconBg: "#383E56",
    date: "April 2022 - july 2023",
    points: [
      "A learning platform where we undertake projects under the guidance of industry experts.",
      "Tasks are divided into manageable steps, prioritizing key features, and progress is reviewed by experts who provide feedback and learning opportunities.",
      "Meeting deadlines is crucial; failure to complete tasks on time may result in termination from the program.",
      "Brototype offers practical experience akin to working in a real company, enhancing skills and staying updated with industry technologies.",
    ],
  },
  {
    title: "Typescript Developer",
    company_name: "Wahni",
    icon: wahni,
    iconBg: "#E6DEDD",
    date: "july 2023 - Present",
    points: [
      "Developing and maintaining ERP software solutions. They offer a variety of services including Business Consulting, E-Commerce, ERP Implementation, and Workflow Automation.",
      "Working with a team of professionals at Wahni IT Solutions to deliver tailored ERP solutions that improve efficiency and productivity for various industries.",
      "Equip users with the skills to navigate the new ERP ecosystem confidently through interactive sessions and a 'train-the-trainer' approach, ensuring self-sustainability.",
      " Facilitate a seamless transition to the live environment, enabling teams to unlock the full potential of the ERP system and drive operational efficiency",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shoe Shop",
    description:
      "Built an e-commerce site using Node.js, MongoDB, Express, and EJS. Implemented secure OTP login via Node-mailer. Features include user profiles, cart, wishlist, invoices, orders, tracking, and sales reports for an enhanced shopping experience.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: stepz,
    source_code_link: "https://github.com/AbleKSaju/E-commerse",
  },
  {
    name: "Cube Game",
    description:
      "Immersive 3D Game with dynamic cube controlled via keyboard inputs. Cube responds to gravity and jumps on spacebar press. Scene features with ambient and directional light. Randomly spawning enemy cubes move toward player's cube.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: cube,
    source_code_link: "https://github.com/AbleKSaju/3js-Cube-game",
  },
  {
    name: "Meta Media",
    description:
      "Meta Media is a dynamic platform for users to connect and share experiences, featuring microservices for efficient functionality. It supports social interactions like posting, status, highlights, live streaming, and real-time chatting, audio, video calls via Socket.IO.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "microservice",
        color: "pink-text-gradient",
      },
      {
        name: "kafka",
        color: "yellow-text-gradient",
      },
    ],
    image: metamedia,
    source_code_link: "https://github.com/AbleKSaju/meta-media-production",
  },
];

export { services, technologies, experiences, testimonials, projects };
