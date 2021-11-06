import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>
        Made with <span className={style.heart}>❤</span> by Eldar Dautović
      </h1>
    </div>
  );
};

export default Footer;
