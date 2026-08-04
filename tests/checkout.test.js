const request = require('supertest');
const app = require('../src/app');
const { products, cart } = require('../src/db');

beforeEach(() => {
products.length = 0;
cart.length = 0;
});

test('el proceso de checkout se ejecuta correctamente', async () => {
await request(app)
    .post('/products')
    .send({ name: 'consola', price: 150 });

await request(app)
    .post('/cart')
    .send({ productId: 1, quantity: 2 });

const res = await request(app).post('/checkout');
expect(res.statusCode).toBe(200);
expect(res.body.status).toBe('pagado');
expect(res.body.total).toBe(300);

const cartRes = await request(app).get('/cart');
expect(cartRes.body).toHaveLength(0);
});
