import { Router } from 'express';
import { addToCart, getCart } from '../services/cartService.js';

const router = Router();

router.post('/', (req, res) => {
try {
    const item = addToCart(req.body);
    res.status(201).json(item);
} catch (err) {
    res.status(400).json({ error: err.message });
}
});

router.get('/', (req, res) => {
res.json(getCart());
});

export default router;
