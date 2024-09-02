const Restaurant = require('../models/Restaurant');

exports.createRestaurant = async (req, res) => {
    const { name, address, cuisine } = req.body;
    const restaurant = new Restaurant({ name, address, cuisine });
    await restaurant.save();
    res.status(201).json(restaurant);
};

exports.getRestaurants = async (req, res) => {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
};

exports.updateRestaurant = async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant) {
        restaurant.name = req.body.name || restaurant.name;
        restaurant.address = req.body.address || restaurant.address;
        restaurant.cuisine = req.body.cuisine || restaurant.cuisine;
        const updatedRestaurant = await restaurant.save();
        res.json(updatedRestaurant);
    } else {
        res.status(404).json({ message: 'Restaurant not found' });
    }
};

exports.deleteRestaurant = async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant) {
        await restaurant.remove();
        res.json({ message: 'Restaurant removed' });
    } else {
        res.status(404).json({ message: 'Restaurant not found' });
    }
};
