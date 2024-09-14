// FoodCard.jsx
import React from "react";
import styles from "./FoodCard.module.css"; // Import the module CSS

const FoodCard = ({ name, price, image, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.price}>{price}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default FoodCard;
