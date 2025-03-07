"use client"
import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const showMenu=()=>{
   setIsOpen(!isOpen)
  }
  return (
    <nav className='flex justify-around sm:flex mt-2'>
      <div className='relative'>
        <GiHamburgerMenu onClick={showMenu} className='mt-2 sm:hidden relative'/>
        {isOpen ? <ul  className='flex flex-col absolute z-10 bg-gray-400 top-0 right-10 w-30 transition' >
        <Link href="./products"><li className="font-bold text-2xl p-3">محصولات</li></Link>
        <Link href="./offers"><li className="font-bold text-2xl p-3">خدمات</li></Link>
        <Link href="./about-us"><li className="font-bold text-2xl p-3">درباره ما</li></Link>
        <Link href="./support"><li className="font-bold text-2xl p-3">حمایت مالی</li></Link>
      </ul> : <ul  className=' hidden sm:flex justify-center' >
        <Link href="./products"><li className="font-bold text-2xl p-3">محصولات</li></Link>
        <Link href="./offers"><li className="font-bold text-2xl p-3">خدمات</li></Link>
        <Link href="./about-us"><li className="font-bold text-2xl p-3">درباره ما</li></Link>
        <Link href="./support"><li className="font-bold text-2xl p-3">حمایت مالی</li></Link>
      </ul>} </div>
      
      
     <div className='flex gap-5'>
        <button className='font-bold text-xl bg-green-100 px-2 rounded'>ثبت نام</button>
        <button className='font-bold text-xl'>ورود</button>
        <Link href="/"><IoCartOutline className='text-2xl mt-3'/></Link>
     </div>
    </nav>
  )
}

export default Navbar
