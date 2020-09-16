import React, { useEffect, useState }from 'react';

import ProdoctForm from '../components/ProdoctForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
        });
            
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res=>{
                setProducts([...products, res.data]);
            })

    }

    return(
        <div>
             <ProdoctForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
             <hr />
             {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}

        </div>
       
    )
}
