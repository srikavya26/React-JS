import React from 'react';
import React, { useRef } from 'react';

const ProductDetail = ({ match }) => {
    const { id } = match.params;



    return (
        <div>
            <h2>Product Detail</h2>
            <p>Product ID: {id}</p>
            { }
        </div>
    );
};

export default ProductDetail;
