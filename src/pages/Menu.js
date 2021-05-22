import styles from "./Menu.module.css";

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

const Menu = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.title + "  text-center text-primary"}>
        <h2 className={styles.mainTitle + " lg"}>
          Aneka Sajian Dengan Rasa Mantap Harga Hemat
        </h2>
        <p className={styles.subtitle + " md ls-2"}>
          Tersedia menu utama Ayam dan Bebek. Dengan teknik masak presto dan
          bumbu oles spesial, dijamin tekstur daging lunak dan bumbu meresap.
        </p>
      </div>

      <div className={styles.content}>
        {meals.map((meal) => (
          <div className={styles.card} key={meal.id}>
            <img src={meal.image} alt={meal.name} />
            <h3 className={styles.cardTitle + " lead text-center"}>
              {meal.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
