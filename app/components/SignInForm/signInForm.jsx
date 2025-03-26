'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignInForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Remember Me:', rememberMe);
    };
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("invalid email")
      .required("وارد کردن ایمیل الزامی است."),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required("وارد کردن رمز عبور الزامی است."),
    checkbox:Yup.bool(),
  });
  return (
    <div className='flex justify-end items-center px-20 py-10' >
      <Formik initialValues={{
        email:'',
        password:'',
        checkbox:''
      }}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
         <Form className='w-full sm:w-[30vw] bg-signIn bg-opacity-70 rounded-md flex flex-col gap-5 p-7 backdrop-blur-sm mt-40'>
          <h1 className='text-2xl text-center text-sl font-bold text-black'>ورود به حساب کاربری</h1>
          <div className='w-full'>
            <label htmlFor="email" className='text-xl text-black font-bold'>ایمیل</label>
           <Field name="email" className="w-full" id="email"/>
           <ErrorMessage name="email" component="div" className="text-red-700 font-bold" />
           </div>
          <div>
            <label htmlFor="password" className='text-xl text-black font-bold'>رمز ورود</label>
            <Field name="password" className="w-full" id="password" type="password" />
            <ErrorMessage name="password" component="div" className="text-red-700 font-bold" />
           </div>

           <div>
            <Field name="checkbox" type="checkbox"/>
            <p className='inline text-black text-lg'>مرا به خاطر بسپار</p>
           </div>
           <div>
            <Link href="/" className='text-black text-lg'>رمز عبور خود را فراموش کرده اید؟
            </Link>
          </div>
           <button type="submit" className='w-full bg-green-300 rounded text-lg font-bold'>ورود به حساب کاربری</button>
           <div className='flex gap-1'>
            <p className='text-black'>حساب کاربری ندارید؟</p>
            <Link href="/sign-up" className='inline-block underline underline-offset-4 text-black'>ثبت نام کنید</Link>
          </div>
         </Form>
       )}
      </Formik>
    </div>
  )
}

export default SignInForm