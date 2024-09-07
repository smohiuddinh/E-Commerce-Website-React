import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Context/Cart';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const ListItems = () => {
    const { items, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const [selectedItems, setSelectedItems] = useState(items.map(item => ({ ...item, selected: false })));
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedItems(items.map(item => ({ ...item, selected: false })));
    }, [items]);

    const handleCheckboxChange = (itemName) => {
        setSelectedItems(prevItems =>
            prevItems.map(item =>
                item.name === itemName ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const handleCheckout = () => navigate('/Checkout');

    const totalPrice = selectedItems.reduce((total, item) => 
        item.selected ? total + item.price * item.quantity : total, 0);

    return (
        <div className="listCart bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <Toaster position="top-right" reverseOrder={false} />
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
                My Cart
                <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" width="88px" height="88px" viewBox="0 0 902.86 902.86">
                    <g>
                        <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path>
                        <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path>
                    </g>
                </svg>
            </h1>
            <ul className="space-y-4">
                {selectedItems.map((item) => (
                    <li key={item.name} className="flex justify-between items-center border-b pb-2">
                        <input 
                            type="checkbox" 
                            checked={item.selected} 
                            onChange={() => handleCheckboxChange(item.name)} 
                            className="mr-2"
                            aria-label={`Select ${item.name}`}
                        />
                        <span className="text-lg font-medium text-gray-700">
                            (x{item.quantity}) {item.name}
                        </span>
                        <div className="flex items-center">
                            <button
                                onClick={() => decreaseQuantity(item.name)}
                                className="text-red-500 hover:text-red-700 mx-2"
                                aria-label={`Decrease quantity of ${item.name}`}
                            >
                                -
                            </button>
                            <span className="text-lg font-medium text-gray-700 mx-2">${item.price * item.quantity}</span>
                            <button
                                onClick={() => increaseQuantity(item.name)}
                                className="text-green-500 hover:text-green-700 mx-2"
                                aria-label={`Increase quantity of ${item.name}`}
                            >
                                +
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-6 text-right">
                <p className="text-xl font-semibold text-gray-800">Total: ${totalPrice}</p>
                <button
                    className="mt-4 bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    onClick={handleCheckout}
                    disabled={totalPrice === 0}
                    aria-label="Proceed to checkout"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default ListItems;
