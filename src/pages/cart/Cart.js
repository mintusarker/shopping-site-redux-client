import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart);

    return (
        <div>
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
                    <div className='title'>
                        <h3>Product</h3>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Total</h3>
                    </div>
                    <div className='cart-item'>
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
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Cart;