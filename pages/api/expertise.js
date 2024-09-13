/* const expertise = [
  {
    id: 0,
    title: "Full Stack Development",
    desc: "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.",
  },
  {
    id: 1,
    title: "Nodejs",
    desc: "Node.js is the most popular tool for developing server applications in JavaScript, the world's most widely used programming language. Node.js is now regarded as a critical tool for all types of microservices-based development and delivery, as it has the capabilities of both a web server and an application server.In any web application, performance is critical. Faster performance in any web application improves the user experience and leads to increased revenue, which makes business owners pleased.",
  },
  {
    id: 2,
    title: "Reactjs",
    desc: "React is an open-source JavaScript library for building user interfaces. It was developed by Facebook and is widely used for creating interactive and dynamic web applications. React follows a component-based architecture, where the user interface is broken down into reusable and independent components. ",
  },
  {
    id: 3,
    title: "Nextjs",
    desc: "Next.js is a popular open-source framework for building server-rendered React applications. Developed by Vercel (formerly Zeit), Next.js simplifies the process of creating high-performance and SEO-friendly web applications by providing a set of conventions, tools, and features. ",
  },
  {
    id: 4,
    title: "SOLID Principle",
    desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
  },
  {
    id: 5,
    title: "SDLC",
    desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
  },
  {
    id: 4,
    title: "Git and GitHub",
    desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
  },
];

export default function handler(req, res) {
    res.status(200).json(expertise)
}
 */

const expertise = [
  {
    id: 0,
    title: "Full Stack Development",
    desc: "I am a highly experienced MERN stack developer, specializing in building comprehensive and scalable web applications using MongoDB, Express.js, React.js, and Node.js. I have implemented server-side rendering, robust API integration, and efficient database management in numerous projects, ensuring optimal performance and reliability. My proficiency ensures that I can deliver end-to-end web solutions tailored to meet complex client needs.",
  },
  {
    id: 1,
    title: "Node.js",
    desc: "My deep expertise in Node.js, one of the most powerful tools for server-side development, allows me to build high-performance and scalable applications. I have extensively used Node.js for creating microservices architectures, ensuring seamless backend functionality, faster performance, and improved user experience, which directly impacts business success.",
  },
  {
    id: 2,
    title: "React.js",
    desc: "With a strong command of React.js, I have developed multiple dynamic and interactive user interfaces. Utilizing its component-based architecture, I ensure reusability, scalability, and maintainability in all the projects I work on. My extensive knowledge of React Hooks and Redux helps create efficient and clean UIs.",
  },
  {
    id: 3,
    title: "Next.js",
    desc: "I leverage Next.js to build SEO-optimized, high-performance applications with server-side rendering. This framework has been instrumental in speeding up development while maintaining top-tier application performance and enhancing the user experience.",
  },
  {
    id: 4,
    title: "Docker",
    desc: "Proficient in Docker, I have utilized containerization to streamline development, deployment, and scaling processes across different environments. Docker ensures that my applications are portable, consistent, and easy to manage, regardless of the infrastructure, thereby enhancing operational efficiency and reducing time-to-market.",
  },
  {
    id: 5,
    title: "SOLID Principles",
    desc: "I apply SOLID design principles to create maintainable, scalable, and robust software systems. This ensures that the code I write is flexible and easy to modify, making it adaptable to evolving project requirements over time.",
  },
  {
    id: 6,
    title: "Software Development Life Cycle (SDLC)",
    desc: "My comprehensive understanding of the Software Development Life Cycle (SDLC) allows me to manage and execute projects efficiently from inception through delivery. I ensure timely project completion by integrating strategic planning, iterative development, and careful testing.",
  },
  {
    id: 7,
    title: "Git and GitHub",
    desc: "Proficient in version control systems like Git and GitHub, I ensure seamless collaboration, efficient code versioning, and project management. I follow best practices for branch management, code reviews, and continuous integration, allowing smooth teamwork in any project environment.",
  },
  {
    id: 8,
    title: "Open Source Contributor",
    desc: "I actively contribute to open-source projects, enhancing my learning and giving back to the community. This engagement helps me stay up-to-date with the latest development practices while fostering a collaborative spirit.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
