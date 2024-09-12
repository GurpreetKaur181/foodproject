
import React from 'react';

const FoodCard = ({ name, price, image, description }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default FoodCard;  
