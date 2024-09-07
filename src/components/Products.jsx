import React from 'react';
import Cart from './Cart';

const products = [
  { name: "Nike Air Max", price: "449" },
  { name: "Nike Jordan", price: "899" },
  { name: "Air Pro", price: "1000" },
  { name: "Capelli", price: "1220" },
  { name: "Nina", price: "129" },
  { name: "Ladeda", price: "893" },
  { name: "Nike Air Max", price: "350" },
  { name: "Earth Jordan", price: "250" },
  { name: "Margeaux", price: "7896" },
  { name: "Nike Air Max", price: "234" },
  { name: "Vittadini", price: "29" },
  { name: "Air Klein", price: "456" },
  { name: "Nike Air Max", price: "300" },
  { name: "Nike Jordan", price: "1200" },
  { name: "Adrienne Pro", price: "9830" },
  { name: "Nike Air Max", price: "449" },
  { name: "Nike Vittadini", price: "470" },
  { name: "Adidas", price: "80" }
];

export default function Products() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center">
        {products.map((product, index) => (
          <Cart key={index} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
}
