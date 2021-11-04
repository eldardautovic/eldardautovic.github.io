import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';
import style from '../styles/Skills.module.css';
const Skills = () => {
    return (
        <div className={style.container}>
            <h1 className={style.header}>My acquired skills</h1>
            <div className={style.line}></div>
            <ul className={style.list}>
                <li className={style.listItem}><FaHtml5 /> <h1>HTML5</h1></li>
                <li className={style.listItem}><FaCss3Alt /> <h1>CSS</h1></li>
                <li className={style.listItem}><FaJs /> <h1>JavaScript</h1></li>
                <li className={style.listItem}><FaNodeJs /> <h1>Node.js</h1></li>
                <li className={style.listItem}><FaReact /> <h1>React.js</h1></li>
                <li className={style.listItem}><FaVuejs /> <h1>Vue.js</h1></li>
            </ul>
        </div>
    )
}

export default Skills
