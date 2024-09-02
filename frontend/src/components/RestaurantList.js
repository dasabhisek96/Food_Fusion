import React from 'react';
import DishCard from './DishCard';

const RestaurantList = ({ restaurants }) => {
    return (
        <div>
            {restaurants.map(restaurant => (
                <DishCard key={restaurant._id} restaurant={restaurant} />
            ))}
        </div>
    );
};

export default RestaurantList;
