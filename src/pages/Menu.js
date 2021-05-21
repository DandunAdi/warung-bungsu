import styles from "./Menu.module.css";

const meals = [
  {
    id: 1,
    name: "Ayam Goreng",
    image: "/ayam.png",
  },
  {
    id: 2,
    name: "Ayam Bakar",
    image: "/ayam.png",
  },
  {
    id: 3,
    name: "Ayam Bakar Madu",
    image: "/ayam.png",
  },
  {
    id: 4,
    name: "Bebek Goreng",
    image: "/bebek.png",
  },
  {
    id: 5,
    name: "Bebek Bakar",
    image: "/bebek.png",
  },
  {
    id: 6,
    name: "Bebek Bakar Madu",
    image: "/bebek.png",
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
        <div className={styles.card}>
          <img src="/ayam.png" alt="ayam-goreng" />
          <h3 className={styles.cardTitle + " lead text-center"}>
            Ayam Goreng
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Menu;
