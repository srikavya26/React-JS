import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, likedItems }) => {
    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems && cartItems.length > 0 ? (
                <div>
                    <h3>Products in Cart:</h3>
                    {cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <p className="product-name">{item.name}</p>
                            <p className="product-price">₹{item.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products in cart</p>
            )}

            {likedItems && likedItems.length > 0 ? (
                <div>
                    <h3>Liked Items:</h3>
                    {likedItems.map(item => (
                        <div className="liked-item" key={item.id}>
                            <p className="product-name">{item.name}</p>
                            <p className="product-price">₹{item.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No liked items</p>
            )}

            {cartItems && cartItems.length > 0 && (
                <button>Checkout</button>
            )}
        </div>
    );
};

export default Cart;
