import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header + " flex text-center"}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.navLink + " btn btn-primary flex"}>
            <i className="fa fa-home lg"></i>
          </div>
        </Link>
        <Link to="/menu">
          <div className={styles.navLink + " btn btn-primary flex"}>
            <i className="fa fa-utensils lg"></i>
          </div>
        </Link>
        <Link to="/contact">
          <div className={styles.navLink + " btn btn-primary flex"}>
            <i className="fa fa-phone-alt lg"></i>
          </div>
        </Link>
        <i className="fab fa-instagram lg"></i>
      </div>
    </header>
  );
};

export default Navbar;
