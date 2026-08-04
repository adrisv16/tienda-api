const request = require('supertest');
const app = require('../src/app');
const { products} = require ('../src/db');

beforeEach (() => {
products.length = 0; 
});

test ('Puedes agregar un producto sin problemas', async () => {
    const res = await request(app)
    .post ('/products')
    .send ({name: 'Consola', price: 150});
    expect(res.status).toBe(201);
    expect (res.body.id).toBe (1);

    const listRes = await request(app).get('/products');
    expect (listRes.body). toHaveLength(1);
});