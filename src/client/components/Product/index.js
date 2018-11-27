import React from 'react'
import './styles.css'

const Product = ({ product, compare }) =>
    <div key={product.id} className="col-md-3">
        <div className={"product " + (product.compare ? "compare" : "")} >
            <img src={product.image} alt={product.name} />
            <div className="compare_product" onClick={() => compare(product)}>
                {product.compare ? "Remove" : "Compare"}
            </div>
            <hr />
            <div className="product_information">
                <dl>
                    <dt>Name: {product.name}</dt>
                    <dt>Price: {product.price}</dt>
                    <dd>{product.description}</dd>
                </dl>
            </div>
        </div>
    </div>;

export default Product
