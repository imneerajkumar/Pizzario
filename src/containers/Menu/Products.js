import React from 'react';

import ProductItem from './ProductItem';

import './Products.css';

const products = props => (
    <section className="products">
        {props.products.map(p => (
            <ProductItem
                key={p._id}
                id={p._id}
                title={p.name}
                text={p.description}
                price={p.price}
                imageUrl={p.image}
            />
        ))}
    </section>
);

export default products;