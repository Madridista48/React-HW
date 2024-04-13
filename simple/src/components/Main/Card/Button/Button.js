import React from 'react';

const Button = () => {
    return (
        <button className="add-to-cart-button button-primary js-add-button" data-product-id="${item.id}">
            Add to Cart
        </button>
    );
};

export default Button;