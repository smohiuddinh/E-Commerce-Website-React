import React from 'react';
import List from './List';

export default function Footer() {
  const items = [
    { text: 'Delivery', href: '#item1' },
    { text: 'Returns', href: '#item2' },
    { text: 'Help Line ', href: '#item3' },

    { text: 'Contact us ', href: '#item1' },
  ];

  const item2 = [
    { text: 'My Account', href: '#item1' },
    { text: 'WishList', href: '#item2' },
  ];
  const item3 = [
    { text: 'Find your local Codex  store', href: '#item1' },
   
  ];

  return (
    <footer className=" flex flex-col  bg-barcolor text-white   py-4 font-serif">
      <div className="container mx-auto px-4  ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h4 className="text-lg font-semibold">About Us</h4>
            <p>ALFA BUY NOW PAY LATER

</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">CUSTOMER CARE</h4>
            <ul>
              <List items={items} />
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">ACCOUNT</h4>
            <ul>
              <List items={item2} />
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">FIND A STORE</h4>
            <ul>
              <List items={item3} />
            </ul>
          </div>
          <div className='align-center '>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <address>
              Shar-e-Faisal, near Habit, Karachi, Pakistan<br />
              Phone: (+92) 33-7890<br />
              Email: <a href="mailto:smohiuddinh@gamil.com" className="text-blue-400 hover:text-blue">smohiuddinh@gamil.com</a>
            </address>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Developed By : Syed All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
