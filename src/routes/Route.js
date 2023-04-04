import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Main from "../layout/Main";
import Cart from "../pages/cart/Cart";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddProduct from "../stockProduct/AddProduct";
import ProductList from "../stockProduct/ProductList";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: 'dashboard/addProduct',
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: 'dashboard/productList',
                        element: <ProductList></ProductList>
                    }
                ]
            },
        ]
    }
])


export default router;