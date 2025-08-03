import React from 'react';

const Card = ({ product }) => {
  const { _id, title, description, price, image, category } = product;
  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow border border-gray-300 text-sm max-w-96">
        <div>
          <img className="rounded-md max-h-48 w-full object-cover" src={image} alt="officeImage" />
        </div>
        <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">{title}</p>
        <p className="text-gray-500 mt-3 ml-2">{description}</p>
        <p className='text-gray-500 mt-3 ml-2'>{category}</p>
        <p className='text-gray-500 mt-3 ml-2'>{price}</p>
        <button type="button" className="bg-indigo-600 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white">Add to Card</button>
      </div>
    </div>
  );
};

export default Card;