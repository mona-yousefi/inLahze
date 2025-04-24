'use client'
import React, { useEffect, useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking any link
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setHasBackground(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`z-50 ${hasBackground ? 'bg-white shadow-md' : 'bg-transparent'} navbar flex fixed w-full justify-around items-center gap-0 md:flex-row scroll-smooth p-3`}>
      {/* Cart Icon (unchanged) */}
      <div className='order-last flex justify-center md:order-first bg-none'>
        <Link href="/cart">
          <div className='relative flex items-center justify-center w-10 h-10 md:w-15 h-15'>
            <IoCartOutline className='text-xl text-center mt-3 mx-auto bg-white p-1 sm:text-2xl md:bg-transparent md:text-3xl'/>
            <span className='absolute flex items-center justify-center p-0.5 top-5 right-2 w-3 h-3 bg-red-500 rounded-[50%] text-center text-sm text-white font-bold'>
              {cartItems?.length}
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className='order-first relative mx-0 md:order-2 lg:mr-40'>
        <GiHamburgerMenu onClick={showMenu} className='mt-2 bg-white p-1 md:hidden relative'/>
        
        {isOpen && (
          <ul className="ml-10 flex flex-col absolute z-1000 bg-gray-300 top-0 right-5 w-36">
            <li onClick={closeMenu}><Link href="/" className="font-bold text-2xl p-3 block">صفحه اصلی</Link></li>
            <li onClick={closeMenu}><Link href="/products" className="font-bold text-2xl p-3 block">محصولات</Link></li>
            <li onClick={closeMenu}><Link href="/offers" className="font-bold text-2xl p-3 block">خدمات</Link></li>
            <li onClick={closeMenu}><Link href="/about-us" className="font-bold text-2xl p-3 block">درباره ما</Link></li>
            <li onClick={closeMenu}><Link href="/support" className="font-bold text-2xl p-3 block">حمایت مالی</Link></li>
            <li onClick={closeMenu}><Link href="/sign-in" className="font-bold text-2xl p-3 block">ورود</Link></li>
            <li onClick={closeMenu}><Link href="/sign-up" className="font-bold text-2xl p-3 block">ثبت نام</Link></li>
          </ul>
        )}

        {/* Desktop Menu (unchanged) */}
        <ul className='hidden md:flex justify-center gap-1 ml-20 lg:gap-3'>
          <Link href="/"><li className="font-bold text-base p-1 md:text-2xl">صفحه اصلی</li></Link>
          <Link href="/products"><li className="font-bold text-base p-1 md:text-2xl">محصولات</li></Link>
          <Link href="/offers"><li className="font-bold text-base p-1 md:text-2xl">خدمات</li></Link>
          <Link href="/about-us"><li className="font-bold text-base p-1 md:text-2xl">درباره ما</li></Link>
          <Link href="/support"><li className="font-bold text-base p-1 md:text-2xl">حمایت مالی</li></Link>
        </ul>
      </div>

      {/* Search and Auth Buttons (unchanged) */}
      <div className='order-3 flex gap-2 items-center justify-center sm:flex-row ml-5'>
        <Link href="/sign-up"><button className='hidden md:block font-bold text-xl bg-productCard px-2 rounded'>ثبت نام</button></Link>
        <Link href="/sign-in"><button className='hidden md:block font-bold text-xl  bg-productCard rounded px-2'>ورود</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
  