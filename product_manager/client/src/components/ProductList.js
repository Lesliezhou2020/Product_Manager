import React from 'react';
import { Link }from '@reach/router';

export default props => {
    return(
        <div>
            {props.products.map((product, index) => (
                <p key={index}>
                    <Link to={"/products/"+product._id}>{product.title}, {product.price}, {product.description}</Link>
                </p>
            ))}
        </div>
    )
}