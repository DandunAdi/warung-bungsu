import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className="container">
      <section className="grid">
        <div className={styles.title}>
          <img className={styles.logo} src="/logo.png" alt="logo" />
          <h1 className={styles.lead + " xl"}>
            Dari Bahan Segar Dengan Kualitas Terbaik
          </h1>
        </div>
        <div className={styles.action + " flex"}>
          <div className={styles.openBtn + " sm thin ls-2"}>
            <i className="fa fa-utensils"></i> BUKA SETIAP HARI
          </div>

          <div className={styles.order + " sm thin text-orange ls-2"}>
            <i className="fa fa-phone-alt"></i> <span>TERIMA PESANAN</span>
          </div>
        </div>
      </section>
      <div className={styles.cream}></div>
      <div className={styles.featured}>
        <img className={styles.ayam} src="/ayam.png" alt="ayams" />
        <div className={styles.featuredOrange}></div>
        <div className={styles.featuredGreen}></div>
      </div>
      <img className={styles.tea} src="/tea.png" alt="tea" />
      <img className={styles.bebek} src="/bebek.png" alt="bebek" />
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
    </main>
  );
};

export default Home;
