import style from "../styles/Project.module.css";

const Project = ({ content }) => {
  return (
    <div className={style.container} key={content.id}>
      <h1 className={style.header}>{content.name}</h1>
      <div className={style.line}></div>
      <p className={style.description}>{content.description}</p>
      <h1 className={style.stackHeader}>Tech stack: </h1>
      <div className={style.stack}>
        {content.techStack.map((el) => {
          return <h5>{el}</h5>;
        })}
      </div>
      <div className={style.buttons}>
        {content.demoUrl != null && (
          <a target="_blank" href={content.demoUrl} className={style.demo}>
            Demo
          </a>
        )}
        <a target="_blank" href={content.repoUrl} className={style.repo}>
          Repo
        </a>
      </div>
    </div>
  );
};

export default Project;