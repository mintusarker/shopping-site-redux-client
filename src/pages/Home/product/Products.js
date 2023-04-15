import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../features/products/ProductSlice';
import ProductCart from './ProductCart';

const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    console.log(products);
 
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-16 mx-auto'>
            {
                products?.map(product => <ProductCart
                    key={product._id}
                    product={product}
                ></ProductCart>)
            }
        </div>
    );
};

export default Products;