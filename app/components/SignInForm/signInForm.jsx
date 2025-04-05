'use client'
import Link from 'next/link';
import React, { use, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignInForm = () => {
  const [isLogging,setIsLogging]=useState(false)
  const [success,setSuccess]=useState(false)
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
      setIsLogging(true)
      setError(null);
      console.log('Values', values);
      try {
        const response=await fetch('https://tlb.pythonanywhere.com/api/account/login/',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
          },
          body: JSON.stringify({
            email_or_phone_or_username: values.email || values.phone || values.userName,
            password: values.password,
          })
        })
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Server error: ${text.substring(0, 100)}...`);
      }
      const data = await response.json();
      if (!response.ok) {
        const errorMessages = [];
        if (data.username) errorMessages.push(...data.username);
        if (data.email) errorMessages.push(...data.email);
        if (data.password) errorMessages.push(...data.password);
        if (data.non_field_errors) errorMessages.push(...data.non_field_errors);
        
        throw new Error(errorMessages.join(' ') || 'Registration failed');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
      console.error('Registration error:', err);
    } finally {
      setIsLogging(false);
    }
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .required("وارد کردن ایمیل یا شماره تماس و یا نام کاربری الزامی است."),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required("وارد کردن رمز عبور الزامی است."),
    checkbox:Yup.bool(),
  });

  if(success){
    return (
      <div>
          <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">ورود موفقیت آمیز بود!</h2>
          <Link href="/" className="text-blue-500 hover:underline">
            ورود به صفحه اصلی
          </Link>
        </div>
        </div>
      </div>
    );
  }
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
          {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {error}
              </div>
            )}
          <div className='w-full'>
            <label htmlFor="email" className='text-xl text-black font-bold'>ایمیل/شماره تماس/نام کاربری</label>
           <Field name="email" className={`w-full p-2 border rounded ${errors.name && touched.name ? 'border-red-500' : ''}`} id="email"/>
           <ErrorMessage name="email" component="div" className="text-red-700 font-bold" />
           </div>
          <div>
            <label htmlFor="password" className='text-xl text-black font-bold'>رمز ورود</label>
            <Field name="password" className={`w-full p-2 border rounded ${errors.name && touched.name ? 'border-red-500' : ''}`} id="password" type="password" />
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
           <button type="submit" disabled={isLogging} className={`w-full bg-green-300 rounded text-lg font-bold p-2 ${isLogging ? 'opacity-50' : ''}`}>{isLogging ? "در حال ورود": "ورود به حساب کاربری"}</button>
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