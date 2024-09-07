// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from '../src/Context/AuthContext';
import Layout from './components/Layout';
import Home from './components/Home';
import MyCart from './components/MyCart';
import About from './components/About';
import Men from './components/Men';
import Women from './components/Women';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for ToastContainer
import Checkout from './components/Checkout';


function App() {
    
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/about',
                    element: <About />,
                },
                {
                    path: '/mycart',
                    element:<MyCart />,
                },
                {
                    path: '/men',
                    element: <Men />,
                },
                {
                    path: '/women',
                    element: <Women />,
                },
                {
                    path: '/loginform',
                    element: <LoginForm />,
                },
                {
                    path : '/Checkout',
                    element: <ProtectedRoute element={<Checkout />} />,
                }
            ],
        },
    ]);

    return (
        <AuthProvider>
            <RouterProvider router={router} />
            <ToastContainer /> {/* Add ToastContainer here */}
        </AuthProvider>
    );
}

export default App;
