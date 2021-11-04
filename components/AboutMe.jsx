import style from '../styles/AboutMe.module.css';

const AboutMe = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1 className={style.header}>
                    What is my story?
                </h1>
                <div className={style.line}></div>

                <p className={style.paragraph}>
                    I am a programmer which passion is Web Development. I've been drawn by IoT
                    since I was a child. Learning new things every day is my main drive to work
                    because everything in programming is a variable but only the learning aspect 
                    is constant. Working in a team has lead me to believe I depend on others very
                    much and I just love working in teams which makes me a great team player.
                    Everything I do is self taught due to my passion and love I have for programming.
                    I believe in the quote: "When you do something you love, it isn't a job it's fun."
                    and I try to live by it.
                </p>
                <div className={style.secondLine}></div>
                <ul className={style.informationList}>
                    <li className={style.informationItem}>
                        <h1><span>Name:</span> Eldar Dautovic</h1>
                        <h1><span>Email:</span> eldar.dautovic@edu.fit.ba</h1>
                    </li>
                    <li className={style.informationItem}>
                        <h1><span>Age:</span> 19</h1>
                        <h1><span>From:</span> Bosnia and Herzegovina</h1>
                    </li>
                </ul>
                <button className={style.button}>
                    <a href="/downloadables/resume.pdf" download="Eldar-Dautovic-CV">Download my resume</a>
                </button>
            </div>
            <ul className={style.rightSide}>
                <li className={style.listItem}>
                    <h1 className={style.itemHeader}>30+</h1>
                    <p className={style.itemParagraph}>Projects</p>
                </li>
                <li className={style.listItem}>
                    <h1 className={style.itemHeader}>1+</h1>
                    <p className={style.itemParagraph}>Years of experience</p>
                </li>
                <li className={style.listItem}>
                    <h1 className={style.itemHeader}>1+</h1>
                    <p className={style.itemParagraph}>Internships</p>
                </li>
                <li className={style.listItem}>
                    <h1 className={style.itemHeader}>3+</h1>
                    <p className={style.itemParagraph}>Awards</p>
                </li>
            </ul>

        </div>
    )
}

export default AboutMe
