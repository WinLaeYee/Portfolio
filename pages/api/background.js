const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "M.C.Tech",
        degree: "Master of Computer Technology",
        detail: "University of Computer Studies, Mandalay, Myanmar",
        year: "2012-2016",
      },
      {
        id: 1,
        title: "B.C.Tech(Hons)",
        degree: "Bechalar of Computer Technology(Hons)",
        detail: "University of Computer Studies, Meikhtila, Myanmar",
        year: "2011-2012",
      },
      {
        id: 2,
        title: "B.C.Tech",
        degree: "Bechalar of Computer Technology",
        detail: "University of Computer Studies, Meikhtila, Myanmar",
        year: "2008-2011",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "ITVision Hub Co.,ltd",
        role: "Full Stack Developer",
        desc: "As a Full Stack Developer, I began my journey with a strong focus on backend technologies, and have since expanded my expertise to become proficient in Reactjs and frontend development. My specialization now spans the entire stack, leveraging Express.js, Prisma, and graphQL to craft robust and scalable applications. I excel at designing intuitive user interfaces with React and TypeScript, while seamlessly integrating them with dynamic server-side functionalities. My experience includes leading agile development teams, optimizing database performance, and ensuring data security. I also oversee project management, provide client training, and develop comprehensive user documentation. My rapid mastery of new technologies and adept problem-solving skills ensure the delivery of exceptional software solutions.",
        year: "2021 - Present",
        location: "Yangon, Myanmar",
      },
      {
        id: 2,
        title: "ITVision Hub Co.,ltd",
        role: "Junior Backend Developer",
        desc: "As a Junior Backend Developer specializing in Node.js, I built and optimized scalable, high-performance backend systems. I developed secure RESTful APIs and implemented JWT-based authentication to ensure seamless data handling and user protection. By managing complex databases with MongoDB, I streamlined data flows and improved application efficiency. My ability to integrate third-party APIs and collaborate closely with frontend teams allowed me to deliver cohesive, reliable web applications that exceeded client expectations.",
        year: "2/2021 - 8/2021",
        location: "Yangon, Myanmar",
      },
      {
        id: 3,
        title: "Kanbawza Bank Co.,ltd(KBZ)",
        role: "Senior Assistant",
        desc: "As a Senior Bank Staff, I led junior team members, efficiently managed administrative operations, and oversaw critical financial transactions. I actively promoted banking products, identified lucrative sales opportunities, and consistently exceeded sales targets. By leveraging strong problem-solving skills, I enhanced operational workflows and improved customer satisfaction, driving both business growth and client loyalty.",
        year: "2015-2021",
        location: "Mandalay, Myanmar",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
