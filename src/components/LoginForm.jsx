import React from 'react';
import LoginPass from './LoginPass';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  }

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/Signup');
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen font-serif    ">
      <div className="bg-white p-8 max-w-lg mx-auto rounded-md shadow-lg mb-36   w-screen ">
        <h1 className="text-3xl font-bold mb-6 text-center">Login To Centrino</h1>
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">EMAIL</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
            />
          </div>
          <div>
            <LoginPass />
          </div>
          <button onClick={handleLogin} className="w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign In
          </button>
          <button onClick={handleSignup} className="w-full text-black py-2 px-4 rounded-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
