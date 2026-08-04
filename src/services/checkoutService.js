const { cart, products } = require('../db');

function checkout() {
if (cart.length === 0) throw new Error('Carrito vacío');

const items = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return {
    productId: item.productId,
    name: product.name,
    quantity: item.quantity,
    price: product.price,
      subtotal: product.price * item.quantity
    };
});

const total = items.reduce((acc, i) => acc + i.subtotal, 0);

cart.length = 0; 

return { items, total, status: 'pagado' };
}

module.exports = { checkout };
