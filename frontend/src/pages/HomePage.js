import React, { useEffect, useState } from 'react';
import RestaurantList from '../components/RestaurantList';
import api from '../services/api';

const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const { data } = await api.get('/restaurants');
            setRestaurants(data);
        };

        fetchRestaurants();
    }, []);

    return (
        <div>
            <h1>Restaurants</h1>
            <RestaurantList restaurants={restaurants} />
        </div>
    );
};

export default HomePage;
