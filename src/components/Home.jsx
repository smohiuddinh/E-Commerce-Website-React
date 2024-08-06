import React from 'react';
import Cart from './Cart';
import Banner from './Banner';
import Hero from './Hero';
import Products from './Products';

const Home = () => {
  return (
    <>
      <Hero />
      <br /><br />
      <br /><br />
      <Banner id='products' h1 = "Our Products" p1 = "Avaiable At Flat 39% Discount!"/>
      <br /><br />
      <br></br>
      {/* <ProductCarousel /> */}

     <Products/>
    </>
  );
};

export default Home;
