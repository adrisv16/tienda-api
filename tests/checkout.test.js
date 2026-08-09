import request from 'supertest';
import app from '../src/app.js';

describe('Checkout API', () => {
test('POST /checkout procesa compra', async () => {
    await request(app)
    .post('/products')
    .send({ name: 'Camiseta', price: 10 });

    await request(app)
    .post('/cart')
    .send({ productId: 1, quantity: 2 });

    const res = await request(app).post('/checkout');

    expect(res.status).toBe(200);
    expect(res.body.total).toBe(20);
    expect(res.body.status).toBe('pagado');
});
});

