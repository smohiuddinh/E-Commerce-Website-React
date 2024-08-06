import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import Cookies from 'cookies-js';
import { useAuth } from '../Context/AuthContext';


export default function LoginForm() {
  const { setIsAuthenticated } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation(); // Get the location from which the user was redirected
  const [visible, setVisible] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    Cookies.set('email', data.email);
    Cookies.set('password', data.password, { expire: 5 });
    setIsAuthenticated(true);

    // Redirect to the intended route or default to '/'
    const from = location.state?.from?.pathname || '/';

    navigate(from);

    
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen font-serif">
      <div className="bg-white p-8 max-w-lg mx-auto rounded-md shadow-lg mb-36 w-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">Login To Centrino</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">EMAIL</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: "Please enter a valid Email"
                })}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">PASSWORD</label>
              <div className="relative">
                <input
                  id="password"
                  type={visible ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password required',
                    minLength: {
                      value: 8,
                      message: "The Password must be at least 8 characters"
                    },
                    pattern: {
                      value: /[!@#$%^&*(),.?":{}|<>]/,
                      message: 'Password must contain at least one special character'
                    }
                  })}
                  className="mt-1 block w-full px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </div>
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
              </div>
            </div>
            <button
              type='submit'
              className="w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/Signup')}
              className="w-full text-black py-2 px-4 rounded-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
