const recommendationCard = [
  {
    id: 0,
    name: "Mr. Kyaw Swar Htet",
    image: "images/ksh.jpg",
    designation: "Senior Full Stack Developer at FINCLUTECH LTD-FZCO (Dubai)",
    view: "Hey everyone! I wanted to take a moment to recommend Win for any React.js opportunities. I had the pleasure of working with her on multiple projects where she showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. She consistently demonstrated a willingness to learn and grow, and her enthusiasm for tackling new challenges was contagious. Osama is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "http://linkedin.com/in/mr-kyaw-swar-htet-975b73221",
  },
  {
    id: 1,
    name: "Mr Ye Moe Lwin",
    image: "images/yml.jfif",
    designation: "Full Stack Developer | Nodejs Developer | Nestjs Developer",
    view: "I had the privilege of working alongside Win on multiple university projects, and I must say, her talent and work ethic truly stood out. Recently, we were both part of the dynamic team at ITVisionHub, where Win's professionalism and attention to detail shone brightly. I wholeheartedly endorse Win for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "http://linkedin.com/in/ye-moe-lwin-7589392a7",
  },
  {
    id: 2,
    name: "Mr Nyi Say Min",
    image: "images/nsm.jfif",
    designation: "Full Stack Developer | Nodejs | Reactjs ",
    view: "I wholeheartedly recommend Win as a talented  backend developer with an incredible flair for backend development. Her proficiency in Node.js further enhances her capabilities, allowing her to build robust and scalable applications. Win's attention to detail, problem-solving skills, and dedication to delivering exceptional results make her a valuable addition to any development team.",
    linkednURL: "http://linkedin.com/in/nyi-say-min-5938572b0",
  },
  {
    id: 3,
    name: "Ms Thandar Lin",
    image: "images/thandar.jpg",
    designation: "Reactjs Developer at ITVisionHub",
    view: "I highly recommend Win for web development positions. Their expertise in ReactJS and Node.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "http://linkedin.com/in/thandar-lin-a89b45233",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
