import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import auth from '../firebase/Firebase.config';

const Navbar = () => {
    const {email} = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(logout())
                
            })
    };


    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Blogs</Link></li>

        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link>Dashboard</Link></li>
        {
            email ? <li><button onClick={handleSignOut}>Logout</button></li> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
    </React.Fragment>




    return (
        <div className="navbar bg-base-100 px-5 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h3 className='text-green-600 font-semibold font-sans text-3xl'>Shopping Site</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};
export default Navbar;

