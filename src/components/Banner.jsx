import React from 'react';

export default function Banner(props) {
  return (
    <div>
      <div className="font-serif text-center" id={props.id}>
        <p className="text-blue-600 text-xl font-bold">{props.p1}</p>
        <h1 className="h-14 text-4xl font-bold">{props.h1}</h1>
      </div>
    </div>
  );
}
