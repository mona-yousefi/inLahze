import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Galaxy from '../../public/6560073.jpg';

const SignIn = () => {
  return (
    <div>
      <div className='mt-2 flex justify-evenly items-center'>
        <div className='w-[50vw] h-screen -z-50 flex justify-center'>
          <Image src={Galaxy} className='mt-10'></Image>
        </div>
        <div className='bg-gray-200 flex flex-col gap-5 p-7 justify-center backdrop-blur-sm z-20 w-[40vw]'>
          <h1 className='text-2xl text-center'>ورود به حساب کاربری</h1>
          <div className='w-full'>
            <label htmlFor="email" className='text-xl'>ایمیل</label>
            <input id="email" type="text" className='block w-full' />
          </div>
          <div className='w-full'>
            <label htmlFor="password" className='text-xl'>رمز عبور</label>
            <input id='password' type="password" className='block w-full'/>
          </div>
          <div className='flex gap-1'>
            <input type="checkbox" className='inline-block' />
            <p className='inline'>مرا به خاطر بسپار</p>
          </div>
          <div>
            <Link href="/">رمز عبور خود را فراموش کرده اید؟
            </Link>
          </div>
          <div>
            <button className='w-full bg-green-300 rounded text-lg font-bold'>ثبت نام</button>
          </div>
          <div className='flex gap-1'>
            <p>حساب کاربری ندارید؟</p>
            <Link href="/sign-up" className='inline-block underline underline-offset-4'>ثبت نام کنید</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn