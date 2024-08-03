import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import MyCart from './components/MyCart';
import About from './components/About';
import Men from './components/Men';
import Women from './components/Women';
import LoginForm from './components/LoginForm'; // Import the LoginForm component

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
          path: '/About',
          element: <About />,
        },
        {
          path: '/MyCart',
          element: <MyCart />,
        },
        {
          path: '/Men',
          element: <Men />,
        },
        {
          path: '/Women',
          element: <Women />,
        },
        {
          path: '/LoginForm', 
          element: <LoginForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
