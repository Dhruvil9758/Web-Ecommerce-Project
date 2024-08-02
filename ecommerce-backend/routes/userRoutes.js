const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/cart/add', userController.addToCart);
router.post('/cart/remove', userController.removeFromCart);
router.get('/:id/cart', userController.getUserCart);

module.exports = router;
