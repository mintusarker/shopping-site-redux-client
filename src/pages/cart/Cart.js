import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from "react-icons/hi2";
import './Cart.css'


const Cart = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart);

    return (
        <div className='cart-container'>
            <h2>Shopping Cart</h2>
            {
                cart.cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is currently empty</p>
                        <div className="start-shopping">
                            <Link to='/'>
                                <span>Start shopping</span>
                            </Link>
                        </div>
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
                                            <button>Remove</button>
                                        </div>
                                    </div>
                                    <div className='product-price'>${cartItem.price}</div>
                                    <div className='product-quantity'>
                                        <button>-</button>
                                        <div className='count'>{cartItem.cartQuantity}</div>
                                        <button>+</button>
                                    </div>
                                    <div className='total'>${cartItem.price * cartItem.cartQuantity} </div>
                                </div>
                            ))
                        }

                        <div className="cart-summary">
                            <button className='clear-btn'>Clear Cart</button>
                            <div className='checkout'>
                                <div className="sub-total">
                                    <spam>Subtotal</spam>
                                    <span className='amount'>${cart.cartTotalAmount}</span>
                                </div>
                                <p>Tax and shipping calculated at checkout</p>
                                <button>Check Out</button>
                                <Link to='/'><div className='shopping'>
                                    <HiArrowLeft/>
                                    <span>Continue shopping</span>
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