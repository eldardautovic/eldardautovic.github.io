import style from '../styles/Hero.module.css';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Hero = () => {
    return (
        <div className={style.container}>

            <div className={style.content}>
                <h1 className={style.header}>
                    Eldar Dautovic
                </h1>
                <p className={style.paragraph}>
                    A fullstack web developer with passion for
                    creating amazing solutions, based in Travnik,
                    Bosnia and Herzegovina.
                </p>
                <button className={style.button}>Contact me</button>

                <div className={style.social}>
                    <FaGithub className={style.github} />
                    <FaLinkedin className={style.linkedin} />
                </div>
            </div>

            <div className={style.image}>
            </div>

        </div>
    )
}

export default Hero
