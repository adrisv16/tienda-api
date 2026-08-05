import { Router } from 'express';
import { addProduct, getProducts } from '../services/productsService.js';

const router = Router();

router.post('/', (req, res) => {
try {
    const product = addProduct(req.body);
    res.status(201).json(product);
} catch (err) {
    res.status(400).json({ error: err.message });
}
});

router.get('/', (req, res) => {
res.json(getProducts());
});

export default router;

