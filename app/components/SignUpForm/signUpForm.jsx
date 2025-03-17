'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [acceptTerms, setAcceptTerms] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Name:', name);
      console.log('FamilyName:', familyName);
      console.log('UserName', userName);
    };
  return (
    <div className='flex justify-end px-20 py-10'>
        <form onSubmit={handleSubmit} className='w-full sm:w-[35vw] mt-20 bg-secondary rounded-md flex flex-col gap-5 p-7 justify-center backdrop-blur-sm'>
          <h1 className='text-2xl text-center text-sl font-extrabold text-black'>ثبت نام</h1>
          <div className='w-full'>
            <label htmlFor="name" className='text-xl text-black font-bold'>نام</label>
            <input id="name" type="text" value={name} className="w-full text-xl" onChange={(e)=>setName(e.target.value)} required/>
          </div>
          <div className='w-full'>
            <label htmlFor="familyName" className='text-xl text-black font-bold'>نام خانوادگی</label>
            <input id="familyName" type="text" value={familyName} className="w-full text-xl" onChange={(e)=>setFamilyName(e.target.value)} required/>
          </div>
          <div className='w-full'>
            <label htmlFor="userName" className='text-xl text-black font-bold'>نام کاربری</label>
            <input id="userName" type="text" value={userName} className="w-full text-xl" onChange={(e)=>setUserName(e.target.value)} required/>
          </div>
          <div className='w-full'>
            <label htmlFor="email" className='text-xl text-black font-bold'>آدرس ایمیل</label>
            <input id="email" type="email" value={email} className="w-full text-xl" onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div className='w-full'>
            <label htmlFor="phone" className='text-xl text-black font-bold'>شماره تماس</label>
            <input id="phone" type="number" value={phone} className="w-full text-xl" onChange={(e)=>setPhone(e.target.value)} required/>
          </div>
          <div className='w-full'>
            <label htmlFor="password" className='text-xl text-black font-bold'>رمز عبور</label>
            <input id="password" type="password" value={password} className="w-full text-xl" onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <div className='w-full'>
            <label htmlFor="passwordAgain" className='text-xl text-black font-bold'>تکرار رمز عبور</label>
            <input id="passwordagain" type="password" value={passwordAgain} className="w-full text-xl" onChange={(e)=>setPasswordAgain(e.target.value)} required/>
          </div>
          <div className='flex gap-1'>
            <input id="checkbox" type="checkbox" onChange={(e)=>setAcceptTerms(!acceptTerms)}/>
            <p className='inline text-black text-lg'> پذیرش <Link href="/">شرایط و ضوابط</Link></p>
          </div>
          <div>
            <button className='w-full bg-green-300 rounded text-lg font-bold'>ثبت نام</button>
          </div>
          <div className='flex gap-1'>
            <p className='text-black text-lg'>حساب کاربری دارید؟</p>
            <Link href="/sign-in" className='inline-block underline underline-offset-4 text-black'>وارد شوید</Link>
          </div>
        </form>
    </div>
  )
}

export default SignUpForm