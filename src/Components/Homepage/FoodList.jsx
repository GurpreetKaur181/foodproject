import React from 'react';
import { foodItems } from './Data';
import FoodCard from './FoodCard';


const FoodList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {foodItems.map(item => (
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
}

export default FoodList;
