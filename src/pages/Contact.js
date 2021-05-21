import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>

      <div className={styles.attribution}>
        <p>
          Coded by{" "}
          <a
            href="https://www.dandun.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.attributionLink}
          >
            DDD
          </a>{" "}
        </p>
        <p>All Right Reserved - Warung Bungsu &copy;2021</p>
      </div>
    </div>
  );
};

export default Contact;
