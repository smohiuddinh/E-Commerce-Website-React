import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/Cart';

export default function Checkout() {
    const { items } = useContext(CartContext);
    const navigate = useNavigate();

    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className='font-serif flex flex-col items-center justify-center bg-red-100'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="min-h-screen p-6">
                    <header className="text-2xl font-bold mb-6">Checkout</header>
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="Shipping Address"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="1234 5678 9012 3456"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        name="expiryDate"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="MM/YY"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="123"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                            >
                                Complete Checkout
                            </button>
                        </form>
                    </div>
                </div>

                <div className="min-h-screen p-6">
                    <header className="text-2xl font-bold mb-6">Current Cart</header>
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <button
                            type="button"
                            className="w-full bg-white text-blue-500 py-2 px-4 rounded-lg hover:font-bold hover:underline"
                            onClick={() => navigate('/mycart')}
                        >
                            Return To Cart
                        </button>
                        <div className="mb-4">
                            <label htmlFor="Your Items" className="block text-sm font-medium text-gray-700">Your Items</label>
                            <ul>
                                {items.map((item) => (
                                    <li key={item.name} className="flex justify-between items-center border-b pb-2">
                                        <span className="text-lg font-medium text-gray-700">
                                            [{item.quantity}] {item.name}
                                        </span>
                                        <span>
                                            {item.price * item.quantity}
                                        </span>
                                    </li>
                                ))}
                                <li className="flex justify-between items-center border-t pt-2">
                                    <span className="text-lg font-medium text-gray-700">Total</span>
                                    <span>{calculateTotal()}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
