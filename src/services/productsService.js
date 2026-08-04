const { products } = require('../db');

function createProduct ({name, price, description}) {
    const id = products.length + 1;
    const product = { id, name, price};
    products.push (product);
    return product;
} 

function listProducts () {
    return products;
}

module.exports = { createProduct, listProducts };