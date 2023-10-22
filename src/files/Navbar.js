import styles from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({col}) => {
    const [active, setActive] = useState(0)
  return (
    <div className={`${styles.container} ${col === true ? styles.scrolled: styles.fix}`}
    >
      <div className={styles.logo}>
        <Link to="/">FlavorFusion</Link>
      </div>
      <div className={styles.elements}>
        <Link to="/"className={active === 0 && styles.activeBtn} onClick={() => setActive(0)}>Home</Link>
        <Link to="/meals"className={active === 1 && styles.activeBtn} onClick={() => setActive(1)}>Meals</Link>
        <Link to='/booking'className={active === 2 && styles.activeBtn} onClick={() => setActive(2)}>Booking</Link>
      
      </div>
    </div>
  );
};
export default Navbar;
