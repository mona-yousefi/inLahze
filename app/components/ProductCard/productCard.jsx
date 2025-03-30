import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className={`grid justify-center p-2 bg-productCard border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300`}>
      <Image src={product.image} alt={product.title} width={800} height={800} className='rounded' layout='responsive' />
      <div className="p-4">
        <h3 className="text-lg text-center font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 text-center mb-4">{product.price + " تومان"}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded transition-colors duration-300"
        >
          اضافه کردن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductCard;