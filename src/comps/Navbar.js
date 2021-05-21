import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header + " flex text-center"}>
      <div className={styles.container}>
        <div className={styles.navLink + " btn btn-primary flex"}>
          <i className="fa fa-home lg"></i>
        </div>

        <div className={styles.navLink + " btn btn-primary flex"}>
          <i className="fa fa-utensils lg"></i>
        </div>

        <div className={styles.navLink + " btn btn-primary flex"}>
          <i className="fa fa-phone-alt lg"></i>
        </div>

        <i className="fab fa-instagram lg"></i>
      </div>
    </header>
  );
};

export default Navbar;
