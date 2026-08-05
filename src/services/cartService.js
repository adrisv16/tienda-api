import { cart, products } from '../db.js';

export function addToCart({ productId, quantity }) {
if (!productId || !quantity) {
    throw new Error('Datos inválidos para carrito');
}

const product = products.find(p => p.id === productId);
if (!product) {
    throw new Error('Producto no encontrado');
}

const existing = cart.find(item => item.productId === productId);

if (existing) {
    existing.quantity += quantity;
} else {
    cart.push({ productId, quantity });
}

return cart;
}

export function getCart() {
return cart;
}

    

