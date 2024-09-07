import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Bar from './Bar';
import Footer from './Footer';
import ScrollTopBtn from './ScrollTopBtn';

const Layout = () => {
  return (
    <>
      <Bar p1="Free Shipping All Over Pakistan" color="bg-mycolor" tcolor="text-black" />
      <Navbar />
      <Bar p1="Discover our trend-led and timeless collection" color="bg-barcolor" tcolor="text-white" />
      <Outlet />
      <ScrollTopBtn />
      <div className="mt-8">
      <Footer />
      </div>

    
    </>
  );
};

export default Layout;
