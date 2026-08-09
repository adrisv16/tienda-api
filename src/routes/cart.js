import { Router } from 'express';
import { addToCart, getCart } from '../services/cartService.js';

const router = Router();

router.get('/', (req, res) => {
res.json(getCart());
});

router.post('/', (req, res) => {
try {
    const cart = addToCart(req.body);
    res.status(201).json(cart);
} catch (err) {
    res.status(400).json({ error: err.message });
}
});

export default router;

