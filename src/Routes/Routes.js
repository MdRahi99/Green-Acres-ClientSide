import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Components/Home/Home';
import Services from '../Components/Services/Services';
import Blogs from '../Components/Blogs/Blogs';
import Signup from '../Components/Registration/Signup/Signup';
import Login from '../Components/Registration/Login/Login';
import Contact from '../Components/Contact/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
        ]
    },
    {
        path: "*",
        element: <div className='p-40 bg-slate-900 my-20'>
            <h1 className='p-10 bg-slate-300 text-black lg:text-5xl text-center'>404 Not Found</h1>
            </div>
    }
])

export default router;