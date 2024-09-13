const portfolio = [
  {
    id: 0,
    projectName: "Daily Fair Deal",
    url: "https://dailyfairdeal.com/",
    image: "projects/dailyfairdeal.png",
    projectDetail:
      "This project is a comprehensive multi-service platform for shopping, food delivery, and taxi booking,built with a full-stack architecture. I was responsible for the front-end design and development,while leveraging a Laravel backend and Node.js for real-time communication.",
    technologiesUsed: [
      {
        tech: "Nodejs",
      },
      {
        tech: "Reactjs",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Redux",
      },
      {
        tech: "TailwindCSS",
      },
      {
        tech: "Docker",
      },
      {
        tech: "Digital Ocean",
      },
      {
        tech: "Socket.io",
      },
      {
        tech: "Typescript",
      },
      {
        tech: "Jest Testing",
      },
    ],
  },
  {
    id: 0,
    projectName: "TRAVEL WORLD",
    url: "https://jmmerp.com/",
    image: "projects/travelworld.png",
    projectDetail:
      "Travel World is an online booking app for traveling other countries. Traveling opens the door to creating memories and can offer the best services. Our App is to provide the worldwide travel package and can get more memorable and wonderful trip experience.",
    technologiesUsed: [
      {
        tech: "Nodejs",
      },
      {
        tech: "Reactjs",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Redux",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "SHOPSHERE",
    url: "https://absco.sa/",
    image: "projects/ecommerce.png",
    projectDetail:
      "Shopsphere is an online shopping store for selling and buying products. It is an innovative online shopping platform developed with React and Node.js. Our goal is to provide a seamless and enjoyable shopping experience for users worldwide.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "TailwindCSS",
      },
      {
        tech: "Redux Toolkit",
      },
      {
        tech: "ANT Design",
      },
      {
        tech: "MongoDB",
      },
    ],
  },
  {
    id: 0,
    projectName: "LET'S TALK TOGETHER",
    url: "https://jmm.ltd/",
    image: "projects/socket.png",
    projectDetail:
      "This project is a real-time chat application built using Node.js, React, and Socket.io. The app allows users to engage in one-on-one conversations and participate in group chats seamlessly. It supports instant messaging with real-time updates, making communication efficient and interactive.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Nodejs",
      },
      {
        tech: "socket.io",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "TODO APP",
    url: "https://.app/",
    image: "projects/todotypescript.png",
    projectDetail:
      " ToDo App is a simple and intuitive task management application designed to help users organize and prioritize their daily activities. The app allows users to create, update, and delete tasks, set due dates, and track progress efficiently. With a clean interface, it helps users stay productive by keeping their tasks in one place.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Nodejs",
      },
      {
        tech: "Typescript",
      },

      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "DREAM NEST",
    url: "/domain-expired",
    image: "projects/dream nest.jpg",
    projectDetail:
      "Dream Nest is a user-friendly platform designed to simplify the process of finding and renting homes. The app allows property owners to list their rental properties, while users can browse, search, and book available rentals with ease. It includes features like user authentication, property management, and secure transactions, providing a seamless experience for both renters and landlords.This app not only enhances the user experience but also streamlines the rental process for property owners, making it a comprehensive solution for the home rental market.",
    technologiesUsed: [
      {
        tech: "NodeJS",
      },

      {
        tech: "Redux",
      },
      {
        tech: "ReactJS",
      },
      {
        tech: "Material UI",
      },
      {
        tech: "MongoDB",
      },
    ],
  },
  {
    id: 0,
    projectName: "SGINFO",
    url: "https://fatehtour.com/",
    image: "projects/sginfo.png",
    projectDetail:
      "SGInfo is an information-sharing platform designed to provide users with a comprehensive hub for accessing a variety of essential services, including job searching, news updates, and home rentals. The platform caters to a diverse audience by offering valuable resources in multiple categories, all accessible from a user-friendly interface.By combining these features into a single platform, SGInfo simplifies access to crucial services and information, making it a one-stop solution for users looking to stay informed, find jobs, or secure housing.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },

      {
        tech: "REST API's",
      },
      {
        tech: "Bootstrap",
      },
    ],
  },
  {
    id: 0,
    projectName: "COMFY HOUSE",
    url: "/domain-expired",
    image: "projects/comfyhouse.png",
    projectDetail:
      "Comfy House is ecommerce website,  where you can open your own store and sell products of different brands!",
    technologiesUsed: [
        {
        tech: "HTML",
      },
      {
        tech: "CSS",
      },
      {
        tech: "JavaScript",
      },
    ],
  },
 
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
