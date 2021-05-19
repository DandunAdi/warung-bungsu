import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className="container">
      <section className="grid">
        <div className={styles.title}>
          <p className={styles.logo}>WARUNG BUNGSU</p>
          <h1 className={styles.lead + " xl"}>
            Dari Bahan Segar Dengan Kualitas Terbaik
          </h1>
        </div>
      </section>
      <div className={styles.cream}></div>
      <div className={styles.featured}>
        <img className={styles.ayam} src="/IMG.png" alt="ayams" />
        <div className={styles.featuredOrange}></div>
        <div className={styles.featuredGreen}></div>
      </div>
      <div className={styles.open}>
        <span className={styles.openBtn}>
          <i class="far fa-clock"></i> BUKA SETIAP HARI
        </span>
      </div>
      <div className={styles.order + " sm"}>
        <i class="fa fa-utensils text-orange"></i> <span>TERIMA PESANAN</span>
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
    </main>
  );
};

export default Home;
