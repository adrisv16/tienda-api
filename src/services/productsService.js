import { products } from '../db.js';

let nextId = 1;

export function addProduct({ name, price }) {
if (!name || !price) {
    throw new Error('Datos inválidos para producto');
}

const product = {
    id: nextId++,
    name,
    price
};

products.push(product);
return product;
}

export function getProducts() {
return products;
}

