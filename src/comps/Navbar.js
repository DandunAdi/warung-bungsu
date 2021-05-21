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

        <i className="fab fa-instagram "></i>
      </div>
    </header>
  );
};

export default Navbar;
