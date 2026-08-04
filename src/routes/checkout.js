const express = require('express');
const router = express.Router();
const { checkout } = require('../services/checkoutService');

router.post('/', (req, res) => {
try {
    const result = checkout();
    res.status(200).json(result);
} catch (e) {
    res.status(400).json({ error: e.message });
}
});

module.exports = router;
