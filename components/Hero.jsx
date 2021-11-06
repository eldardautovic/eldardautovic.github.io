import style from "../styles/Hero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.header}>Eldar Dautović</h1>
        <p className={style.paragraph}>
          A fullstack web developer with passion for creating amazing solutions,
          based in Travnik, Bosnia and Herzegovina.
        </p>
        <button className={style.button}>
          <a href="mailto:dautoviceldar20@gmail.com">Contact me</a>
        </button>

        <div className={style.social}>
          <a
            href="https://github.com/eldardautovic"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={style.github} />
          </a>
          <a
            href="https://www.linkedin.com/in/eldardautovic/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={style.linkedin} />
          </a>
        </div>
      </div>

      <div className={style.image}></div>
    </div>
  );
};

export default Hero;
