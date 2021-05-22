import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header + " flex text-center"}>
      <div className={styles.container}>
        <div className={styles.navLink + " btn btn-primary flex"}>
          <i className="fa fa-home"></i>
        </div>

        <div className={styles.navLink + " btn btn-primary flex"}>
          <i className="fa fa-utensils "></i>
        </div>

        <div className={styles.navLink + " btn btn-primary flex"}>
          <i className="fa fa-phone-alt "></i>
        </div>

        <a
          href="https://www.instagram.com/warung_bungsu.tng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-primary"></i>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
