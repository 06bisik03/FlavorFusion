import styles from "./Meals.module.css";
const Meals = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
      <div className={styles.title}>
<div>FlavorFusion</div>
        <div>Our most preffered main courses and dishes</div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItems}>
          <div className={styles.menuPart}>
            <div className={styles.menuTitle}>Poultry Courses</div>
           
            {poultryDishes.map(item => {
                return (
                    <div className={styles.item}>
                    <div className={styles.itemImg}>
                      <img alt="x"src={item.img} />
                    </div>
                    <div className={styles.itemDetail}>
                        <div>{item.name}</div>
                        <div>{item.detail}</div>
                    </div>
                    <div className={styles.itemPrice}>
                        {item.price}
                    </div>
                  </div>
                )
            })}
         
          </div>
          <div className={styles.menuPart}>
            <div className={styles.menuTitle}>Seafood Courses</div>
            {seafoodDishes.map(item => {
                return (
                    <div className={styles.item}>
                    <div className={styles.itemImg}>
                      <img alt="x"src={item.img} />
                    </div>
                    <div className={styles.itemDetail}>
                        <div>{item.name}</div>
                        <div>{item.detail}</div>
                    </div>
                    <div className={styles.itemPrice}>
                        {item.price}
                    </div>
                  </div>
                )
            })}
          </div>
        </div>
        <div className={styles.menuFull}>
          <button>VIEW FULL MENU</button>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Meals;
const poultryDishes = [
    {
        name: 'Truffle-Glazed Cornish Hen',
        detail: 'Succulent Cornish hen, truffle sauce, mashed potatoes, and sautéed mushrooms.',
        price: '$39.99',
        img: '/images/poultry1.jpeg',
    },
    {
        name: 'Foie Gras-Stuffed Quail',
        detail: 'Roasted quail, foie gras, caramelized figs, and port wine reduction.',
        price: '$34.99',
        img: '/images/poultry2.jpeg',
    },
    {
        name: 'Sous Vide Pheasant Breast',
        detail: 'Sous vide pheasant, blackberry gastrique, wild rice, and braised carrots.',
        price: '$44.99',
        img: '/images/poultry3.webp',
    },
    {
        name: 'Lemon Herb Roasted Guinea Fowl',
        detail: 'Roasted guinea fowl, lemon-herb rub, parsnip purée, and haricot verts.',
        price: '$49.99',
        img: '/images/poultry4.jpeg',
    }
];
const seafoodDishes = [
    {
        name: 'Alaskan King Crab Royale',
        detail: 'Alaskan king crab legs, champagne butter sauce, caviar, and butter-poached asparagus.',
        price: '$59.99',
        img: '/images/seafood1.jpeg',
    },
 
    {
        name: 'Miso-Glazed Black Cod',
        detail: 'Miso-glazed black cod, shiitake mushroom risotto, and baby bok choy.',
        price: '$49.99',
        img: '/images/seafood2.jpg',
    },
    {
        name: 'Lobster Thermidor',
        detail: 'Lobster tail and claw meat, brandy-Dijon sauce, broiled, and served with fingerling potatoes.',
        price: '$64.99',
        img: '/images/seafood4.jpeg',
    },
    {
        name: 'Seared Ahi Tuna with Wasabi Pea Crust',
        detail: 'Seared ahi tuna with wasabi pea crust, ginger soy reduction, seaweed salad, and jasmine rice.',
        price: '$59.99',
        img: '/images/seafood5.webp',
    }
];