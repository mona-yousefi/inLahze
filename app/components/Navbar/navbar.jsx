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
  window.onscroll = function() {
    var currentScrollPos = window.scrollY;
  
    if(currentScrollPos === 0) {
      document.getElementById("navbar").style.backgroundColor = 'transparent';
    } else {
      document.getElementById("navbar").style.backgroundColor = '#F3F4F6';
    }
  
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
  
    } else {
      document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  }
    return (
    <nav className='flex fixed w-full justify-around items-center gap-0 md:flex-row scroll-smooth' id='navbar'>
      <div className='order-last ml-10 md:order-first'>
        <Link href="/"><IoCartOutline className='text-xl text-center mt-3 sm:text-2xl'/></Link>
      </div>
      <div className='order-first relative mx-0 md:order-2 lg:mr-40'>
        <GiHamburgerMenu onClick={showMenu} className='mt-2 md:hidden relative'/>
        {isOpen ? <ul  className='ml-10 flex flex-col absolute z-10 bg-gray-400 top-0 right-5 w-30 transition' >
        <Link href="./products"><li className="font-bold text-2xl p-3">محصولات</li></Link>
        <Link href="./offers"><li className="sm:font-bold text-2xl p-3">خدمات</li></Link>
        <Link href="./about-us"><li className="font-bold text-2xl p-3">درباره ما</li></Link>
        <Link href="./support"><li className="font-bold text-2xl p-3">حمایت مالی</li></Link>
        </ul> : <ul  className=' hidden md:flex justify-center gap-1 lg:gap-3' >
        <Link href="./products"><li className="font-bold text-base p-1 md:text-2xl">محصولات</li></Link>
        <Link href="./offers"><li className="font-bold text-base p-1 md:text-2xl">خدمات</li></Link>
        <Link href="./about-us"><li className="font-bold text-base p-1 md:text-2xl">درباره ما</li></Link>
        <Link href="./support"><li className="font-bold text-base p-1 md:text-2xl">حمایت مالی</li></Link>
        </ul>}
      </div>
      <div className='order-3 flex gap-2 items-center justify-center sm:flex-row ml-10 md:mr-0'>
        <input type="text" placeholder='محصولات را جست و جو کنید...' className='w-60 mr-4 sm:w-30 text-sm p-2 border-2 h-10 border-neutral-950 lg:w-48'/>
        <Link href="../sign-up"><button className='hidden sm:block font-bold text-base bg-green-100 px-2 rounded md:text-xl'>ثبت نام</button></Link>
        <Link href="../sign-in"><button className='hidden sm:block font-bold text-base md:text-xl'>ورود</button></Link>
      </div>
    </nav>
  )
}

export default Navbar
