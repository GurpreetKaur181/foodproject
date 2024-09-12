import React from "react";
import FoodList from "../../Components/Homepage/FoodList.jsx";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Food Delivered{" "}
          <span className={styles.animatedSpan}>Hot & Delicious</span>
        </h1>
      </div>
      <div className={styles.items_head}>
        Explore the different types of Food Available to Us.
      </div>
      <FoodList />
    </>
  );
}

export default Homepage;
