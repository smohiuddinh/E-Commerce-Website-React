import React from 'react';

export default function Bar({ p1, color, tcolor }) {
  return (
    <div>
      <h1 className={`text-center flex items-center justify-center ${tcolor} ${color} h-12 transition duration-500 ease-in-out`}>
        {p1}
      </h1>
    </div>
  );
}
