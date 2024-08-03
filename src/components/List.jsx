import React from 'react';

export default function List({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.href} className="text-#06b6d4-400 hover:text-blue-200">{item.text}</a>
        </li>
      ))}
    </>
  );
}
