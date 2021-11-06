import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.collaboration}>
        <h1 className={style.collabHeader}>Interested in collaboration?</h1>
        <button className={style.button}>
          <a href="mailto:dautoviceldar20@gmail.com">Let&apos;s talk.</a>
        </button>
      </div>
      <h1 className={style.header}>
        Made with <span className={style.heart}>❤</span> by Eldar Dautović
      </h1>
    </div>
  );
};

export default Footer;
