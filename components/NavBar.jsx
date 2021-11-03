import style from '../styles/NavBar.module.css';

const Navbar = () => {


    return (
        <div className={style.container}>
            <h1 className={style.logo}>ED</h1>
            <ul className={style.list}>
                <li className={style.listItem}><a href="">About me</a></li>
                <li className={style.listItem}><a href="">My work</a></li>
                <li className={style.listItem}><a href="">Contact me</a></li>
            </ul>
        </div>
    )
}

export default Navbar
