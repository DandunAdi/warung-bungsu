import styles from "./MobileNavbar.module.css";

const MobileNavbar = () => {
  return (
    <div className={styles.mobileNavbar}>
      <div className={styles.link + " flex"}>
        <i className="fa fa-bars text-primary"></i>
      </div>
      <div className={styles.link + " flex"}>
        <i className="fa fa-home text-primary"></i>
      </div>
      <div className={styles.link + " flex"}>
        <i className="fa fa-utensils text-primary"></i>
      </div>
      <div className={styles.link + " flex"}>
        <i className="fa fa-phone-alt text-primary"></i>
      </div>
    </div>
  );
};

export default MobileNavbar;
