import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-6 w-80 bg-primary pt-11 text-base-content">
                        <li className='text-center font-bold'>Admin Dashboard</li>
                        <li className='mt-8 bg-slate-400'>
                            <Link to='dashboard/productList'>Product List</Link>
                        </li>
                        <li className='mt-8 bg-slate-400'>
                            <Link to='dashboard/addProduct'>Add Product </Link>
                        </li>
                        <li className='mt-auto'>
                            <Link to='/'> Back to Home </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;