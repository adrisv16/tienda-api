import { products } from '../db.js';

export function addProduct({ id, name, price }) {
if (!id || !name || !price) {
    throw new Error('Datos inválidos para crear producto');
}

const exists = products.find(p => p.id === id);
if (exists) {
    throw new Error('El producto ya existe');
}

const newProduct = { id, name, price };
products.push(newProduct);
return newProduct;
}

export function getProducts() {
return products;
}
