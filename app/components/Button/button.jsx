'use client'
import { cartActions } from '@/app/redux/slices/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux'

const Button = ({product,image,title,price,description}) => {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(cartActions.addToCart(product))} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                    افزودن به سبد خرید
        </button>
    </div>
  )
}

export default Button