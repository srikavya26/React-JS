import React, { useState } from 'react';
import './Product.css';
import { FaHeart, FaPlus } from 'react-icons/fa';

const Product = ({ imageUrl, name, description, price, onAddToCart, onAddToLikedItems, onRemoveFromCart, cartItems }) => {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
        if (!liked) {
            onAddToLikedItems({ id: Math.random(), name, price });
        }
    };

    const handleAddToCartClick = () => {
        onAddToCart({ id: Math.random(), name, price });
    };

    const handleRemoveFromCart = () => {
        const cartItem = cartItems.find(item => item.name === name);
        if (cartItem) {
            onRemoveFromCart(cartItem.id);
        }
    };

    return (
        <div className="product">
            <img src={imageUrl} alt={name} />
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">₹{price}</p>
            </div>
            <div className="product-actions">
                <button className="like-button" onClick={handleLikeClick}>
                    <FaHeart color={liked ? 'red' : 'black'} />
                </button>
                <button className="add-to-cart-button" onClick={handleAddToCartClick}>
                    <FaPlus />
                </button>
                {liked && (
                    <button className="remove-from-cart-button" onClick={handleRemoveFromCart}>
                        Remove from Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default Product;
