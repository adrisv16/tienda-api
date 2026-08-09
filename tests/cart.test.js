import request from 'supertest';
import app from '../src/app.js';

describe('Cart API', () => {
test('POST /cart agrega producto', async () => {
    await request(app)
    .post('/products')
    .send({ name: 'Camiseta', price: 10 });

    const res = await request(app)
    .post('/cart')
    .send({ productId: 1, quantity: 2 });

    expect(res.status).toBe(201);
    expect(res.body[0].productId).toBe(1);
});
});
