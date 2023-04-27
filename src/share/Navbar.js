import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import auth from '../firebase/Firebase.config';
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
    const { email } = useSelector((state) => state.auth);
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    console.log(cartTotalQuantity);

    const dispatch = useDispatch();


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(logout())

            })
    };


    const menuItems = <React.Fragment>
        <li className=''><Link to='/'>Home</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>

        <li htmlFor="my-drawer"><Link to='/dashboard'>Dashboard</Link></li>
        {
            email ? <li><button onClick={handleSignOut}>Logout</button></li> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
        <li><Link to='/cart'><div className='flex'>
            <FaShoppingCart className='h-10 w-auto -m-2 text-red-400' />
            <span className='font-semibold -ml-3 -mt-1 rounded-full content-center items-center'>{cartTotalQuantity}</span>
        </div>
        </Link></li>
    </React.Fragment>

    return (
        <div className="sticky top-0 z-50 navbar bg-black text-white px-16 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
                        {menuItems}
                    </ul>
                </div>
                <h3 className='text-green-600 font-semibold font-sans text-2xl '>Shopping Site</h3>
            </div>
            <div className="navbar-center hidden md:flex lg:flex">
                <ul className="flex gap-8 pt-3 px-1">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost first-letter:drawer-button md:hidden lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};
export default Navbar;

