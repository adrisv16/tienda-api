const express = require('express');
const router = express.Router();
const { createProduct, listProducts } = require('../services/productsService');

router.post('/', (req, res) => {
    const {name, price} = req.body;
    if (!name || typeof price !== 'number') {
        return res.status(400).json({ error: 'Nombre y precio son requeridos' });
    }
    const product = createProduct({name, price});
    res.status(201).json(product);
});

router.get('/', (req, res) => {
    res.json(listProducts());
});
module.exports = router;