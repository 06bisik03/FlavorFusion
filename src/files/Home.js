import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topText}>
        <div className={styles.leftText}>
          <div>It's more than just food. It's a work of art.</div>
          <div>
            Order. Wait. And enjoy the true art created by our experienced
            chefs.
          </div>
          <div>
            <button>Foodfusion Menu</button>
            <button>Order Food</button>
          </div>
        </div>
        <div className={styles.rightImg} />
      </div>
      <div className={styles.bottomMenu}>
        <div className={styles.bottomContent}>
          <div className={styles.bottomItem}>
            <div>
              <img alt="x"src="/images/chefIcon.png"/>
            </div>
            <div>
              <div>Experienced</div>
              <div>Chefs From Around Globe</div>
            </div>
          </div>
          <div className={styles.bottomItem}>
            <div>
            <img alt="x"src="/images/fineDining.png"/>
            </div>
            <div>
              <div>State</div>
              <div>Of The Art Luxury Food</div>
            </div>
          </div>
          <div className={styles.bottomItem3}>
            <div>
            <img alt="x"src="/images/delivery.png"/>
            </div>
            <div>
              <div>Top</div>
              <div>Quality Luxury Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
