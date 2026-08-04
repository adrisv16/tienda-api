const { cart, products } = require('../db');

function addToCart({ productId, quantity }) {
const product = products.find(p => p.id === productId);
if (!product) throw new Error('Producto no encontrado');

const existing = cart.find(item => item.productId === productId);

if (existing) {
    existing.quantity += quantity;  
} else {
    cart.push({ productId, quantity });
}

return cart;
}

function getCart() {
return cart;
}

module.exports = { addToCart, getCart };

    

