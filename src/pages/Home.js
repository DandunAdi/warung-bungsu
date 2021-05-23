import { motion, useTransform, useViewportScroll } from "framer-motion";
import styles from "./Home.module.css";

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const yPosFast = useTransform(scrollYProgress, [0, 0.3], [0, -380]);
  const yPosMedium = useTransform(scrollYProgress, [0, 0.3], [0, -300]);
  const yPosSlow = useTransform(scrollYProgress, [0, 0.3], [0, -150]);

  const rotFast = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const rotSlow = useTransform(scrollYProgress, [0, 0.3], [0, 30]);

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
        <motion.img
          className={styles.ayam}
          src="/menu/ayam_goreng.png"
          alt="ayams"
          style={{ y: yPosFast, rotateZ: rotFast }}
        />
        <motion.div
          className={styles.featuredOrange}
          style={{ y: yPosSlow }}
        ></motion.div>
        <motion.div
          className={styles.featuredGreen}
          style={{ y: yPosSlow, rotateZ: 30 }}
        ></motion.div>
      </div>

      <motion.img
        className={styles.kangkung}
        src="/menu/kangkung.png"
        alt="tea"
        style={{ y: yPosSlow }}
      />

      <motion.img
        className={styles.bebek}
        src="/menu/bebek_bakar.png"
        alt="bebek"
        style={{ y: yPosMedium, rotateZ: rotSlow }}
      />
    </div>
  );
};

export default Home;
