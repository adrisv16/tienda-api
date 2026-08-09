import request from 'supertest';
import app from '../src/app.js';

describe('Products API', () => {
test('POST /products crea un producto', async () => {
    const res = await request(app)
    .post('/products')
    .send({ name: 'Camiseta', price: 10 });

    expect(res.status).toBe(201);
    expect(res.body.id).toBe(1);
});
});
