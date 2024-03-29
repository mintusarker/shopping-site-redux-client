import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from "react-icons/hi2";
import './Cart.css'
import { addToCart, clearCart, decreaseCartItem, getTotal, removeFromCart } from '../../features/products/CartSlice';


const Cart = () => {
    const cart = useSelector(state => state.cart)
    // console.log(cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleDecreaseCartItem = (cartItem) => {
        dispatch(decreaseCartItem(cartItem))
    }

    const handleIncreaseCartItem = (cartItem) => {
        dispatch(addToCart(cartItem))
    }


    return (
        <div className='cart-container'>
            <h2 className='shop-cart'>Shopping Cart</h2>
            {
                cart.cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is currently empty</p>
                        <Link className='home' to='/'>
                            <div className="start-shopping">
                                <HiArrowLeft />

                                <span>Start shopping</span>
                            </div>
                        </Link>
                    </div>
                ) : (<div>
                    <div className='titles'>
                        <h3 className='product-title'>Product</h3>
                        <h3 className='price'>Price</h3>
                        <h3 className='quantity'>Quantity</h3>
                        <h3 className='total'>Total</h3>
                    </div>
                    <div className='cart-items'>
                        {
                            cart.cartItems.map(cartItem => (
                                <div className="cart-item" key={cartItem._id}>
                                    <div className='cart-product'>
                                        <img src={cartItem.img} alt={cartItem.name} />
                                        <div>
                                            <h3>{cartItem.name}</h3>
                                            <p>{cartItem.category}</p>
                                            <button className='remove' onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className='product-price'>${cartItem.price}</div>
                                    <div className='product-quantity'>
                                        <button onClick={() => handleDecreaseCartItem(cartItem)}>-</button>
                                        <div className='count'>{cartItem.cartQuantity}</div>
                                        <button onClick={() => handleIncreaseCartItem(cartItem)}>+</button>
                                    </div>
                                    <div className='total'>${cartItem.price * cartItem.cartQuantity} </div>
                                </div>
                            ))
                        }

                        <div className="cart-summary">
                            <button onClick={() => handleClearCart()} className='clear-btn'>Clear Cart</button>
                            <div className='checkout'>
                                <div className="sub-total">
                                    <spam>Subtotal</spam>
                                    <span className='amount'>${cart.cartTotalAmount}</span>
                                </div>
                                {/* <p>Tax and shipping calculated at checkout</p>
                                <button>Check Out</button> */}
                                <Link to='/'><div className='shopping'>
                                    <HiArrowLeft />
                                    <span className='border-2 bg-slate-400 p-1 m-3 hover:bg-red-400'>Continue shopping</span>
                                </div></Link>
                            </div>
                        </div>

                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Cart;