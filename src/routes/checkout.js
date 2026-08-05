import { Router } from 'express';
import { checkout } from '../services/checkoutService.js';

const router = Router();

router.post('/', (req, res) => {
try {
    const result = checkout();
    res.status(200).json(result);
} catch (err) {
    res.status(400).json({ error: err.message });
}
});

export default router;

