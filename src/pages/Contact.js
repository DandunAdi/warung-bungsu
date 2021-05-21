import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <h2 className="lg">Kami Buka Setiap Hari</h2>
        <p className="md ls-2">
          Silahkan hubungi kami untuk informasi dan pemesanan.
        </p>
      </div>
      <div className={styles.map}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.85419293678484!2d106.6327652!3d-6.153042699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaecaf2e257153ea8!2sWARUNG%20BUNGSU!5e0!3m2!1sen!2sid!4v1621618736464!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

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
