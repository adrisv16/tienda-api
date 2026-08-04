const express = require('express');
const router = express.Router();
const { addToCart, getCart } = require('../services/cartService');

router.post('/', (req, res) => {
const { productId, quantity } = req.body;
if (!productId || !quantity) {
    return res.status(400).json({ error: 'Producto y cantidad son requeridos' });
}
try {
    const cart = addToCart({ productId, quantity });
    res.status(201).json(cart);
} catch (e) {
    res.status(404).json({ error: e.message });
}
});

router.get('/', (req, res) => {
res.json(getCart());
});

module.exports = router;
