import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CartContext } from '../Context/Cart';
import toast, { Toaster } from 'react-hot-toast';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: '100',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: '200',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: '300',
  },
  {
    id: 10,
    name: 'Product 10',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: '300',
  },
];

const ProductCarousel = () => {
  const { items, setItems } = useContext(CartContext);

  const handleAddToCart = (product) => {
    toast.success('Item Added to Cart' )
    
    const existingItem = items.find((item) => item.name === product.name);
    if (existingItem) {
      setItems(items.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setItems([...items, { name: product.name, price: product.price, quantity: 1 }]);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mb-10 mt-11 bg-mycolor mx-auto py-8">
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="text-2xl font-bold mb-4 ml-5">Product Carousel</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover object-center mb-6"
              />
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-white text-gray-800 py-2 px-4 rounded-md shadow-lg hover:bg-black hover:text-white transition-colors duration-300"
              >
                Add To Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
