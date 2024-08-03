import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/Cart';
import toast, { Toaster } from 'react-hot-toast';

const ListItems = () => {
  const { items, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState(items.map(item => ({ ...item, selected: false })));

  const handleCheckboxChange = (itemName) => {
    setSelectedItems(
      selectedItems.map(item =>
        item.name === itemName ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleCheckout = () => {
    const checkedItems = selectedItems.filter(item => item.selected);
    const totalBill = checkedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    toast.success(`Checkout - Total Bill: $${totalBill}`);
  };

  const totalPrice = selectedItems.reduce((total, item) => total + (item.selected ? item.price * item.quantity : 0), 0);

  return (
    <div className="listCart bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        My Cart
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="88px" height="88px" viewBox="0 0 902.86 902.86" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
      </h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.name} className="flex justify-between items-center border-b pb-2">
            <input 
              type="checkbox" 
              checked={selectedItems.find(selectedItem => selectedItem.name === item.name)?.selected || false} 
              onChange={() => handleCheckboxChange(item.name)} 
              className="mr-2"
            />
            <span className="text-lg font-medium text-gray-700">
              (x{item.quantity}) {item.name}
            </span>
            <div className="flex items-center">
              <button
                onClick={() => decreaseQuantity(item.name)}
                className="text-red-500 hover:text-red-700 mx-2"
              >
                -
              </button>
              <span className="text-lg font-medium text-gray-700 mx-2">${item.price * item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.name)}
                className="text-green-500 hover:text-green-700 mx-2"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center">
        <h5 className="text-lg font-bold text-gray-800">Total Bill</h5>
        <span className="text-lg font-bold text-gray-800">${totalPrice}</span>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleCheckout}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ListItems;
