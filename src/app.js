import express from 'express';
import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js';
import checkoutRouter from './routes/checkout.js';

const app = express();
app.use(express.json());

app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);

app.get('/', (req, res) => {
res.json({
    message: 'API Tienda funcionando correctamente 🚀',
    endpoints: ['/products', '/cart', '/checkout']
});
});

export default app;




