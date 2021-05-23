import styles from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <header className={styles.header + " flex text-center"}>
      <div className={styles.container}>
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <div className={styles.navLink + " btn btn-primary flex"}>
            <i className="fa fa-home"></i>
          </div>
        </Link>

        <Link
          activeClass="active"
          to="Menu"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
        >
          <div className={styles.navLink + " btn btn-primary flex"}>
            <i className="fa fa-utensils "></i>
          </div>
        </Link>

        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={3000}
        >
          <div className={styles.navLink + " btn btn-primary flex"}>
            <i className="fa fa-phone-alt "></i>
          </div>
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
