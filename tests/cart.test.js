const request = require('supertest');
const app = require('../src/app');
const { products, cart } = require('../src/db');

beforeEach(() => {
    products.length = 0;
    cart.length = 0;
});

test('el carrito se gestiona correctamente', async () => {
await request(app)
.post('/products')
.send({ name: 'Consola', price: 150 });

await request(app)
.post('/cart')
.send({ productId: 1, quantity: 2 });

await request(app)
.post('/cart')
.send({ productId: 1, quantity: 3 });

const res = await request(app).get('/cart');
expect(res.status).toBe(200);
expect(res.body).toHaveLength(1);
expect(res.body[0].quantity).toBe(5);
});