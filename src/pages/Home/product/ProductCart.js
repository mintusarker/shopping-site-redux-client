import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../features/products/CartSlice';


const ProductCart = ({ product }) => {
    const { img, price, category, name, seller, stock, shipping, status } = product;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    

    const handleAddToCart =()=> {
          dispatch(addToCart(product));
        //   navigate('/cart')
    }
    return (
        <div>
            <div className="border-2 card h-full bg-base-100 shadow-xl hover:border-slate-300">
                <p className='text-center'>{category}</p>
                <figure><img className='h-48 w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Brand: {seller}</p>
                    <div className='flex justify-between'>
                        <div><p className='text-lg text-rose-400'>Price: Tk.{price}</p></div>
                        <div className="rating rating-sm mt-1">
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" checked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handleAddToCart(product)} className="btn btn-success hover:bg-green-600 w-full btn-sm">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart; 