import styles from "../../App.module.css";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Home from "../Home";
import Meals from "../Meals";
const IntroPage = () => {
  const [col, setCol] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setCol(true);
      } else {
        setCol(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <Navbar col={col} />
      </div>
      <div className={styles.detail}>
        <Home />
        <Meals />
      </div>
    </div>
  );
};
export default IntroPage;
