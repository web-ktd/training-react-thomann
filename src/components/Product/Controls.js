import React from 'react';
import './ProductControls.scss'

const ProductControls = () => {
    return (
        <div className="product-controls">
            <div class="product-similar">
                <div>
                    Voir les variations de ce produit
                </div>
                <ul class="flex">
                    <li><img src="/products/pocket-cinema-6k-pro/pocket-cinema-6k-pro.jpg" /></li>
                    <li><img src="/products/pocket-cinema-6k-pro/pocket-cinema-4k.jpg" /></li>
                    <li><img src="/products/pocket-cinema-6k-pro/pocket-cinema-6k.jpg" /></li>
                </ul>
            </div>
        </div>
    );
}

export default ProductControls;
