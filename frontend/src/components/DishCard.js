import React from 'react';

const DishCard = ({ restaurant }) => {
    return (
        <div>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
        </div>
    );
};

export default DishCard;
