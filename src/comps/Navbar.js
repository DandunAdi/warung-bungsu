import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className={styles.header + " flex text-center"}>
      <div className={styles.container}>
        <Link
          activeClass={styles.active}
          to="Home"
          spy={true}
          smooth={true}
          duration={1000}
          className={styles.navLink + " btn btn-primary flex"}
        >
          <i className="fa fa-home"></i>
        </Link>

        <Link
          activeClass={styles.active}
          to="Menu"
          spy={true}
          smooth={true}
          duration={1500}
          className={styles.navLink + " btn btn-primary flex"}
        >
          <i className="fa fa-utensils "></i>
        </Link>

        <Link
          activeClass={styles.active}
          to="Contact"
          spy={true}
          smooth={true}
          duration={2000}
          className={styles.navLink + " btn btn-primary flex"}
        >
          <i className="fa fa-phone-alt "></i>
        </Link>

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
