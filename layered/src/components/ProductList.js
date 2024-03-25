import Product from './Product';

const ProductList = ({ products, onAddToCart, onAddToLikedItems, onRemoveFromCart, cartItems }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <Product
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    onAddToCart={onAddToCart}
                    onAddToLikedItems={onAddToLikedItems}
                    onRemoveFromCart={onRemoveFromCart}
                    cartItems={cartItems}
                />
            ))}
        </div>
    );
};

export default ProductList;