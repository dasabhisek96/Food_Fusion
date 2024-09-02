const express = require('express');
const { createRestaurant, getRestaurants, updateRestaurant, deleteRestaurant } = require('../controllers/restaurantController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, createRestaurant)
    .get(getRestaurants);

router.route('/:id')
    .put(protect, updateRestaurant)
    .delete(protect, deleteRestaurant);

module.exports = router;
