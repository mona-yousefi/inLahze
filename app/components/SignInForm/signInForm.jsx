'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Remember Me:', rememberMe);
    };
  return (
    <div className='flex justify-end items-center px-20 py-10' >
        <form onSubmit={handleSubmit} className='w-full sm:w-[30vw] bg-signIn bg-opacity-70 rounded-md flex flex-col gap-5 p-7 backdrop-blur-sm mt-40'>
          <h1 className='text-2xl text-center text-sl font-bold text-black'>ورود به حساب کاربری</h1>
          <div className='w-full'>
            <label htmlFor="email" className='text-xl text-black font-bold'>ایمیل</label>
            <input id="email" type="text" value={email} className="w-full text-xl" onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div className='w-full'>
            <label htmlFor="password" className='text-xl text-black font-bold'>رمز عبور</label>
            <input id="password" type="password" value={password} className="w-full text-xl" onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <div className='flex gap-1'>
            <input id="checkbox" type="checkbox" onChange={(e)=>setRememberMe(!rememberMe)}/>
            <p className='inline text-black text-lg'>مرا به خاطر بسپار</p>
          </div>
          <div>
            <Link href="/" className='text-black text-lg'>رمز عبور خود را فراموش کرده اید؟
            </Link>
          </div>
          <div>
            <button className='w-full bg-green-300 rounded text-lg font-bold'>ورود به حساب کاربری</button>
          </div>
          <div className='flex gap-1'>
            <p className='text-black'>حساب کاربری ندارید؟</p>
            <Link href="/sign-up" className='inline-block underline underline-offset-4 text-black'>ثبت نام کنید</Link>
          </div>
        </form>
    </div>
  )
}

export default SignInForm