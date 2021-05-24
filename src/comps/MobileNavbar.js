import { useState } from "react";
import styles from "./MobileNavbar.module.css";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

const MobileNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.mobileNavbar}>
      <div
        className={styles.link + " flex"}
        onClick={() => setIsActive(!isActive)}
      >
        <i
          className={
            "fa text-primary lead " +
            (isActive ? "fa-times text-orange" : "fa-bars")
          }
        ></i>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div variants={item}>
              <Link
                activeClass={styles.active}
                to="Home"
                spy={true}
                smooth={true}
                duration={1000}
                className={styles.link + " flex"}
              >
                <i className="fa fa-home"></i>
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                activeClass={styles.active}
                to="Menu"
                spy={true}
                smooth={true}
                duration={1000}
                className={styles.link + " flex"}
              >
                <i className="fa fa-utensils"></i>
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                activeClass={styles.active}
                to="Contact"
                spy={true}
                smooth={true}
                duration={1000}
                className={styles.link + " flex"}
              >
                <i className="fa fa-phone-alt"></i>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { x: "100vw", opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, type: "spring" } },
  exit: { x: "100vw", transition: { duration: 0.5 } },
};

export default MobileNavbar;
