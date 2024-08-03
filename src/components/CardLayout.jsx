import React from 'react';
import { Outlet } from 'react-router-dom';
import CartNav from './CartNav'; 
export default function CardLayout() {
  return (
    <div>
      <CartNav />
      <Outlet />
    </div>
  );
}
