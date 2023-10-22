import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ col }) => {
  const [active, setActive] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Define a mapping between route paths and the corresponding link index
    const routeToIndex = {
      '/': 0,
      '/meals': 1,
      '/booking': 2,
    };

    // Determine the active link based on the current location
    setActive(routeToIndex[location.pathname] || 0);
  }, [location.pathname]);

  return (
    <div className={`${styles.container} ${col === true ? styles.scrolled : styles.fix}`}>
      <div className={styles.logo}>
        <Link to="/">FlavorFusion</Link>
      </div>
      <div className={styles.elements}>
        <Link to="/" className={active === 0 && styles.activeBtn} onClick={() => setActive(0)}>
          Home
        </Link>
        <Link to="/meals" className={active === 1 && styles.activeBtn} onClick={() => setActive(1)}>
          Meals
        </Link>
        <Link to="/booking" className={active === 2 && styles.activeBtn} onClick={() => setActive(2)}>
          Booking
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
