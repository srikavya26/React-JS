// ProductSearch.js

import React, { useState } from 'react';

const ProductSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default ProductSearch;
