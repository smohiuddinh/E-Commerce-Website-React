import React from 'react';

export default function GaneralBanner(props) {
  return (
    <div className='  font-serif w-full bg-custom-gradient text-black py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 items-center'>
          <div>
            <h1 className='text-4xl font-bold mb-4'>{props.h1}</h1>
            <h5 className='text-lg leading-relaxed mb-4'>{props.p1}</h5>
            <button className='bg-white text-gray-800 py-2 px-4 rounded-md shadow-lg hover:bg-black hover:text-white transition-colors duration-300'>   {props.btnname} </button>
          </div>
          <div>
            <img src={props.image} alt="Product Image" className='w-full h-auto rounded-md shadow-lg' />
          </div>
        </div>
      </div>
    </div>
  );
}
