import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="grid">
        <div className={styles.title}>
          <img className={styles.logo} src="/logo.png" alt="logo" />
          <h1 className={styles.lead + " xl"}>
            Dari Bahan Segar Dengan Kualitas Terbaik
          </h1>
        </div>

        <div className={styles.action + " flex"}>
          <div className={styles.openBtn + " sm thin ls-2 flex"}>
            <i className="fa fa-utensils" style={{ marginRight: "0.5rem" }}></i>

            <span>BUKA SETIAP HARI</span>
          </div>

          <div className={styles.order + " sm thin text-orange ls-2 flex"}>
            <i
              className="fa fa-phone-alt"
              style={{ marginRight: "0.5rem" }}
            ></i>
            <span>MENERIMA PESANAN</span>
          </div>
        </div>
      </div>

      <div className={styles.cream}></div>

      <div className={styles.featured}>
        <img className={styles.ayam} src="/ayam.png" alt="ayams" />
        <div className={styles.featuredOrange}></div>
        <div className={styles.featuredGreen}></div>
      </div>

      <img className={styles.tea} src="/tea.png" alt="tea" />

      <img className={styles.bebek} src="/bebek.png" alt="bebek" />
    </div>
  );
};

export default Home;
