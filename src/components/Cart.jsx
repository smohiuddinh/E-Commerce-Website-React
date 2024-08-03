import React, { useContext } from 'react';
import { CartContext } from '../Context/Cart';
import toast, { Toaster } from 'react-hot-toast';
export default function Cart(props) {
    const { items, setItems } = useContext(CartContext);

    const handleAddToCart = () => {
        toast.success('Item added to cart')
        const existingItem = items.find(item => item.name === props.name);
        if (existingItem) {
            setItems(items.map(item =>
                item.name === props.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setItems([...items, { name: props.name, price: props.price, quantity: 1 }]);
        }
    };
    

    return (
        <div className=" group bg-mycolor  border-black flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border  shadow-md">
            <Toaster position='top-right' reverseOrder = {false} />
            <a className=" bg-black relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
                <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                <svg className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
            </a>
            <div className="mt-4 px-5 pb-5 bg-mycolor ">
                <a href="#">
                    <h5 className="text-xl tracking-tight text-black">{props.name}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold  text-black">${props.price}</span>
                        <span className="text-sm  text-black line-through">$699</span>
                    </p>
                </div>

             <button onClick={handleAddToCart} className="bg-white text-gray-800 py-2 px-4 rounded-md shadow-lg hover:bg-black hover:text-white transition-colors duration-300">
  Add To Cart
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
            </div>
        </div>
    );
}
