import React from 'react';
import GeneralBanner from './GaneralBanner';
import Banner from './Banner';
import Cart from './Cart';
import ProductCarousel from './ProductCarousel';

export default function Men() {
  const Products = [
    { name: "Nike Air Max", price: "449" },
    { name: "Nike Jordan", price: "899" },
    { name: "Air Pro", price: "1000" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <GeneralBanner
        btnid="#men"
        image="src/Image/Men.png"
        btnname="Shop Men Shoes"
        h1="Lex Louning"
        p1="Relax in style with our sophisticated selection"
      />

      <Banner id="men" h1="Men's Collection" p1="Most Popular products for men" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center">
        {Products.map((product, key) => (
          <Cart key={key} name={product.name} price={product.price} />
        ))}
      </div>
      
      <ProductCarousel />
    </div>
  );
}
