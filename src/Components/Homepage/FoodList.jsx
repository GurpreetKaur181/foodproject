// FoodList.jsx
import React from "react";
import FoodCard from "./FoodCard"; // Import the FoodCard component
import styles from "./FoodList.module.css"; // Import the module CSS for grid layout
import { foodItems } from "./Data";

const FoodList = () => {
  return (
    <div className={styles.cardContainer}>
      {foodItems.map((item) => (
        <FoodCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default FoodList;
