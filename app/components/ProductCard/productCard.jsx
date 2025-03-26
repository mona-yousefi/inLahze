import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image src={product.image} alt={product.title} width={300} height={200} className='rounded' />
      <div className="p-4">
        <h3 className="text-lg text-center font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 text-center mb-4">{product.price + " تومان"}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
        >
          اضافه کردن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductCard;