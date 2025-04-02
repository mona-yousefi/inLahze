import { cartActions } from '@/app/redux/slices/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product, onAddToCart }) => {
  const dispatch = useDispatch();
  return (
    <div className={`flex flex-col justify-center py-2 px-4 bg-productCard border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full`}>
      <Image src={product.image} alt={product.title} width={1000} height={1000} className='rounded' layout='responsive' />
      <div>
        <h3 className="text-lg text-center font-semibold mb-2">{product.title}</h3>
        <div className='flex h-fit justify-between px-3 md:h-48 flex-col items-center lg:h-48'>
          <p className="text-black mb-4 text-lg text-justify self-center">{product.description}</p>
          <p className="text-black mb-4 font-bold border-2 border-black p-1 rounded text-lg text-justify mr-4 self-end md:self-end">{product.price + " تومان"}</p>
        </div>
        <div className='w-full flex justify-between gap-2 py-2 px-3 items-center'>
          <button className="bg-blue-500 w-[50%] rounded hover:bg-blue-700 transition-colors block text-center text-white text-base py-2 px-1">
            <Link href={`../../products/${product.id}`} >
            مشاهده محصول
            </Link>
        </button>
        <button
          onClick={() => dispatch(cartActions.addToCart(product))}
          className="w-[50%] bg-green-600 hover:bg-green-800 text-white py-2 px-1 rounded transition-colors duration-300 text-base"
        >
          افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;