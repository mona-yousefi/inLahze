'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from '../Modal/page';

const SignUpForm = () => {
    const handleSubmit = (values) => {
      console.log("Values", values);
    };
    const SignUpSchema = Yup.object().shape({
        name: Yup.string().required("وارد کردن نام الزامی است."),
        familyName: Yup.string().required("وارد کردن نام خانوادگی الزامی است."),
        userName: Yup.string().required("وارد کردن نام کاربری الزامی است."),
        email: Yup.string().email("invalid email")
        .required("وارد کردن ایمیل الزامی است."),
        phone: Yup.number().required("وارد کردن شماره تماس الزامی است."),
        password: Yup.string()
          .min(8, 'Too Short!')
          .max(50, 'Too Long!')
          .required("وارد کردن رمز عبور الزامی است."),
        passwordAgain: Yup.string()
        .oneOf([Yup.ref('password'), null], 'رمزهای عبور باید یکسان باشند')
        .required("تکرار رمز عبور الزامی است"),
        checkbox:Yup.bool().oneOf([true], 'لازم است تا با شرایط موافقت کنید'),
      });
  return (
    <div className='flex justify-end px-20 py-10'>
      <Formik initialValues={{
        name:'',
        familyName:'',
        userName:'',
        phone:'',
        email:'',
        password:'',
        passwordAgain:'',
        checkbox:''
      }}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
         <Form className='w-full sm:w-[30vw] bg-signIn bg-opacity-70 rounded-md flex flex-col gap-5 p-7 backdrop-blur-sm mt-40'>
          <h1 className='text-2xl text-center text-sl font-bold text-black'>ورود به حساب کاربری</h1>
          <div className='w-full'>
            <label htmlFor="name" className='text-xl text-black font-bold'>نام</label>
           <Field name="name" className="w-full" id="name"/>
           <ErrorMessage name="name" component="div" className="text-red-400 font-bold" />
           </div>
          <div>
            <label htmlFor="familyName" className='text-xl text-black font-bold'>نام خانوادگی</label>
            <Field name="familyName" className="w-full" id="familyName" type="text" />
            <ErrorMessage name="familyName" component="div" className="text-red-400 font-bold" />
           </div>
          <div>
            <label htmlFor="userName" className='text-xl text-black font-bold'>نام کاربری</label>
            <Field name="userName" className="w-full" id="userName" type="text"/>
            <ErrorMessage name="userName" component="div" className="text-red-400 font-bold" />
          </div>
          <div>
            <label htmlFor="email" className='text-xl text-black font-bold'>ایمیل</label>
            <Field name="email" className="w-full" id="email" type="text"/>
            <ErrorMessage name="email" component="div" className="text-red-400 font-bold" />
          </div>
          <div>
            <label htmlFor="phone" className='text-xl text-black font-bold'>شماره تماس</label>
            <Field name="phone" className="w-full" id="phone" type="number"/>
            <ErrorMessage name="phone" component="div" className="text-red-400 font-bold" />
          </div>
          <div>
            <label htmlFor="password" className='text-xl text-black font-bold'>رمز عبور</label>
            <Field name="password" className="w-full" id="password" type="password" />
            <ErrorMessage name="password" value="password" component="div" className="text-red-400 font-bold" />
          </div>
          <div>
            <label htmlFor="passwordAgain" className='text-xl text-black font-bold'>تکرار رمز عبور</label>
            <Field name="passwordAgain" className="w-full" id="passwordAgain" type="password"  />
            <ErrorMessage name="passwordAgain" value="password" component="div" className="text-red-400 font-bold" />
          </div>
           <div>
            <Field name="checkbox" type="checkbox"/>
            <p className='inline text-black text-lg'> پذیرش <Link href="/">شرایط و ضوابط</Link></p>
            {errors.checkbox && <p>{errors.checkbox}</p>}
           </div>
           <button type="submit" className='w-full bg-green-300 rounded text-lg font-bold'>ثبت نام</button>
           <div className='flex gap-1'>
            <p className='text-black'>حساب کاربری دارید؟</p>
            <Link href="/sign-in" className='inline-block underline underline-offset-4 text-black'>وارد شوید</Link>
          </div>
         </Form>
       )}
      </Formik>
    </div>
  )
}

export default SignUpForm