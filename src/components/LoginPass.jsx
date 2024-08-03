import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

export default function LoginPass() {
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <form>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">PASSWORD</label>
        <div className="relative mt-1">
          <input
            id="password"
            type={visible ? 'text' : 'password'}
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
          />
          <div
            onClick={() => setVisible(!visible)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          >
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
      </form>
    </div>
  );
}
