import styles from "../../App.module.css";
import Navbar from "../Navbar";

const MealsPage = () => {
  return (
    <div className={styles.meals_container}>
      <div>
        <Navbar />
      </div>
      <div className={styles.meals_details}>
        <div>
        <div className={styles.back}>Trending Meals at FlavorFusion</div>
        </div>
        
        <div className={styles.mealsDetails}>
          {meals.map((item, key) => {
            return (
              <div className={styles.meal} key={key}>
                <div>
                  <img alt="x" src={item.pic} />
                </div>
                <div className={styles.descp}>
                  <div className={styles.decor}>{item.type}</div>
                  <div className={styles.text}>
                    <div>{item.detail}</div>
                    <div>{item.price}</div>
                    <div>{item.ingredients}</div>
                  </div>
                  <div className={styles.btn}>
                  <button> Add To Cart</button>
                </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MealsPage;
const meals = [
  {
    pic: "/images/grill.jpg",
    detail: "Prime Aged Ribeye",
    price: "$59.99",
    ingredients: "Ribeye, Olive Oil, Thyme, Rosemary, Garlic",
    type: "Main Course",
  },
  {
    pic: "/images/cakeFine.jpg",
    detail: "Marquise Torte",
    price: "$39.99",
    ingredients: "Eggs, Almond Milk, Pure Vanilla Extract, Caramel, Cinnamon",
    type: "Dessert",
  },
  {
    pic: "/images/saladFine.jpg",
    detail: "Verdant Medley",
    price: "$29.99",
    ingredients: "Tulips, Salad, Vinegarette, Spinach Leaves, Edible Flowers",
    type: "Appetizer",
  },
];
