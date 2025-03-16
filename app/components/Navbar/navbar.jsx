'use client'
import React, { useEffect, useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const showMenu=()=>{
   setIsOpen(!isOpen)
  }
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav 
    className={` ${hasBackground ? 'bg-white shadow-md' : 'bg-transparent'} navbar flex fixed w-full justify-around items-center gap-0 md:flex-row scroll-smooth p-3 `}>
      <div className='order-last flex justify-center ml-10 md:order-first'>
        <Link href="/"><IoCartOutline className='text-xl text-center mt-3 mx-auto sm:text-2xl'/></Link>
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
        <input type="text" placeholder='محصولات را جست و جو کنید...' className='w-56 mr-12 sm:w-30 text-sm p-2 border-2 h-10 border-neutral-950 md:w-44 lg:w-48'/>
        <Link href="../sign-up"><button className='hidden sm:block font-bold text-base bg-green-100 px-2 rounded md:text-xl'>ثبت نام</button></Link>
        <Link href="../sign-in"><button className='hidden sm:block font-bold text-base md:text-xl'>ورود</button></Link>
      </div>
    </nav>
  )
  
}
  export default Navbar
  