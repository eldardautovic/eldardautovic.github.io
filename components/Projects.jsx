import style from "../styles/Projects.module.css";
import Project from "./Project";
const Projects = () => {
  const work = [
    {
      id: 1,
      name: "Random Puns",
      description:
        "A website made to fetch a random programmer pun from my API.",
      techStack: ["HTML", "CSS", "Vue.js"],
      repoUrl: "https://github.com/eldardautovic/randomPuns",
      demoUrl: "https://random-puns.netlify.app/",
    },
    {
      id: 2,
      name: "Random Puns API",
      description:
        "A RESTful API made for my Random Puns Frontend application.",
      techStack: ["Express.js", "Node.js", "MongoDB"],
      repoUrl: "https://github.com/eldardautovic/punsAPI",
      demoUrl: null,
    },
    {
      id: 3,
      name: "User Control Panel API",
      description: "RESTful API created for my latest Frontend project.",
      techStack: ["MySQL", "Express", "Node.js"],
      repoUrl: "https://github.com/eldardautovic/ucp-api",
      demoUrl: null,
    },
    {
      id: 4,
      name: "UCP Frontend",
      description: "Frontend part of my latest Fullstack project.",
      techStack: ["HTML", "CSS", "React.js"],
      repoUrl: "https://github.com/eldardautovic/ucp-front",
      demoUrl: null,
    },
    {
      id: 5,
      name: "ShowTrackr",
      description:
        "A website I made just to practice my CSS skills and responsive web design.",
      techStack: ["HTML", "CSS", "JavaScript"],
      repoUrl: "https://github.com/eldardautovic/showtrackr",
      demoUrl: "https://showtracker.netlify.app/",
    },
    {
      id: 6,
      name: "steper.css",
      description:
        "A little css framework I made for myself to make my workflow better.",
      techStack: ["CSS", "SCSS"],
      repoUrl: "https://github.com/eldardautovic/showtrackr",
      demoUrl: null,
    },
    {
      id: 7,
      name: "The Hub",
      description:
        "My first ever Fullstack project to display my latest projects.",
      techStack: ["HTML", "CSS", "Vue.js"],
      repoUrl: "https://github.com/eldardautovic/showtrackr",
      demoUrl: "https://eldarshub.netlify.app/",
    },
  ];

  return (
    <div className={style.container}>
      <h1 className={style.header}>My projects</h1>
      <div className={style.line}></div>
      <div className={style.projects}>
        {work.map((el) => {
          return <Project content={el} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
