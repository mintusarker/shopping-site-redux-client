import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../features/products/ProductSlice';
import ProductCart from './ProductCart';

const Products = () => {

    const dispatch = useDispatch()
    const { products, count } = useSelector((state) => state.products.products)
    console.log(products, count);

    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)

    const pages = Math.ceil(count / size)
    console.log(pages);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <div className='mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-16 mx-auto'>
                {
                    products?.map(product => <ProductCart
                        key={product._id}
                        product={product}
                    ></ProductCart>)
                }
            </div>

            {/* <div className='pagination'>
                { count &&
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                    >
                        {number}
                    </button>)
                }
            </div> */}
        </div>
    );
};

export default Products;