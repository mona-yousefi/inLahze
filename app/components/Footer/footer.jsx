import Link from 'next/link';
import React from 'react'
import { IoLogoInstagram,IoLogoYoutube } from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";
const Footer  = () => {
  return (
    <div className=' z-50 bg-slate-700 flex gap-3 p-3 mt-10 bottom-0 justify-evenly fixed w-full'>
        <div className='flex gap-3'>
            <Link href='/'><IoLogoInstagram className='text-white text-2xl' /></Link>
            <Link href='/'><LuTwitter className='text-white text-2xl'/></Link>
            <Link href='/'><IoLogoYoutube className='text-white text-2xl' /></Link>
        </div>
        <h1 className='text-white'>تمامی حقوق محفوظ است</h1>
    </div>
  )
}

export default Footer 