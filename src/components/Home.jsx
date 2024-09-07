import React from 'react';
import Cart from './Cart';
import Banner from './Banner';
import Hero from './Hero';
import Products from './Products';

const Home = () => {
  return (
    <div className='flex flex-col gap-3' >
      <Hero />
      
      <Banner id='products' h1 = "Our Products" p1 = "Avaiable At Flat 39% Discount!"/>

     <Products/>
    </div>
  );
};

export default Home;
