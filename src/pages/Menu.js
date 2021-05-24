import styles from "./Menu.module.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Menu = () => {
  const { scrollYProgress } = useViewportScroll();

  const yPosFast = useTransform(scrollYProgress, [0.1, 0.9], [0, -450]);
  const yPosStay = useTransform(scrollYProgress, [0.1, 0.8], [0, 400]);
  const rotSlow = useTransform(scrollYProgress, [0.1, 0.6], [20, 60]);

  return (
    <section className={styles.menu} id="Menu">
      <div className={styles.title + "  text-center text-primary"}>
        <h2 className={styles.mainTitle + " lg"}>
          Aneka Sajian Dengan Rasa Mantap Harga Hemat
        </h2>
        <p className={styles.subtitle + " md ls-2"}>
          Tersedia menu utama Ayam dan Bebek. Dengan teknik masak presto dan
          bumbu oles spesial, dijamin tekstur daging lunak dan bumbu meresap.
        </p>
      </div>

      <motion.div className={styles.content}>
        {meals.map((meal) => (
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={styles.card}
            key={meal.id}
          >
            <motion.img
              variants={scaleMotion}
              src={meal.image}
              alt={meal.name}
            />
            <h3 className={styles.cardTitle + " lead text-center"}>
              {meal.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.background}>
        <motion.div
          className={styles.pink}
          style={{ rotateZ: rotSlow, y: yPosStay }}
        ></motion.div>
        <motion.div
          className={styles.green}
          style={{ y: yPosFast }}
        ></motion.div>
        <motion.div
          className={styles.blue}
          style={{ y: yPosFast }}
        ></motion.div>
      </div>
    </section>
  );
};

const scaleMotion = {
  rest: {
    color: "grey",
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    color: "blue",
    y: -30,
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const meals = [
  {
    id: 1,
    name: "Ayam Goreng",
    image: "/menu/ayam_goreng.png",
  },
  {
    id: 2,
    name: "Ayam Bakar",
    image: "/menu/ayam_bakar.png",
  },
  {
    id: 3,
    name: "Ayam Bakar Madu",
    image: "/menu/ayam_bakar_madu.png",
  },
  {
    id: 4,
    name: "Bebek Goreng",
    image: "/menu/bebek_goreng.png",
  },
  {
    id: 5,
    name: "Bebek Bakar",
    image: "/menu/bebek_bakar.png",
  },
  {
    id: 6,
    name: "Bebek Bakar Madu",
    image: "/menu/bebek_bakar_madu.png",
  },
  {
    id: 7,
    name: "Pecel Lele",
    image: "/menu/pecel_lele.png",
  },
  {
    id: 8,
    name: "Tumis Buncis",
    image: "/menu/buncis.png",
  },
  {
    id: 9,
    name: "Tumis Kangkung",
    image: "/menu/kangkung.png",
  },
];

export default Menu;
