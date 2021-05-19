import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header + " flex text-center"}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.home + " flex"}>
            <i className="fa fa-home lg"></i>
          </div>
        </Link>
        <nav
          className={styles.linkContainer + " flex flex-column flex-between"}
        >
          <Link to="/menu" className={styles.link}>
            <span className="text-primary">MENU</span>
          </Link>
          <Link to="/contact" className={styles.link}>
            <span className="text-primary">CONTACT</span>
          </Link>
        </nav>
        <i className="fab fa-instagram lg"></i>
      </div>
    </header>
  );
};

export default Navbar;
