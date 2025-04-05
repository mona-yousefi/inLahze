'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    console.log(phone)
    console.log(confirm_password)
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('https://tlb.pythonanywhere.com/api/account/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username: values.userName, 
          email: values.email,
          password: values.password,
          confirm_password: values.confirm_password,
          first_name: values.name,
          last_name: values.familyName,
          phone_number: values.phone
        }),
      });

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
      setIsSubmitting(false);
    }
  };
    
  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("وارد کردن نام الزامی است."),
    familyName: Yup.string().required("وارد کردن نام خانوادگی الزامی است."),
    userName: Yup.string()
      .required("وارد کردن نام کاربری الزامی است.")
      .min(4, 'نام کاربری باید حداقل ۴ کاراکتر باشد'),
    email: Yup.string()
      .email("ایمیل نامعتبر است")
      .required("وارد کردن ایمیل الزامی است."),
    phone: Yup.string()
      .required("وارد کردن شماره تماس الزامی است.")
      .matches(/^[0-9]+$/, 'شماره تماس باید عدد باشد'),
    password: Yup.string()
      .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
      .required("وارد کردن رمز عبور الزامی است."),
      confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'رمزهای عبور باید یکسان باشند')
      .required("تکرار رمز عبور الزامی است"),
    checkbox: Yup.bool()
      .oneOf([true], 'لازم است تا با شرایط موافقت کنید')
      .required('لازم است تا با شرایط موافقت کنید'),
  });

  if (success) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">ثبت نام موفقیت آمیز بود!</h2>
          <p className="mb-4">حساب کاربری شما با موفقیت ایجاد شد.</p>
          <Link href="/sign-in" className="text-blue-500 hover:underline">
            ورود به حساب کاربری
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='flex justify-end px-20 py-10'>
      <Formik 
        initialValues={{
          name: '',
          familyName: '',
          userName: '',
          phone: '',
          email: '',
          password: '',
          confirm_password: '',
          checkbox: false
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form  method="POST" className='w-full mb-10 sm:w-[50vw] bg-signIn bg-opacity-70 rounded-md flex flex-col gap-3 p-7 backdrop-blur-sm mt-24 md:w-[50vw] lg:w-[30vw]'>
            <h1 className='text-2xl text-center text-sl font-bold text-black'>ثبت نام</h1>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {error}
              </div>
            )}

            <div className='w-full'>
              <label htmlFor="name" className='text-xl text-black font-bold'>نام</label>
              <Field 
                name="name" 
                className={`w-full p-2 border rounded ${errors.name && touched.name ? 'border-red-500' : ''}`} 
                id="name"
              />
              <ErrorMessage name="name" component="div" className="text-red-400 font-bold" />
            </div>
            <div>
             <label htmlFor="familyName" className='text-xl text-black font-bold'>نام خانوادگی</label>
             <Field name="familyName" className={`w-full p-2 border rounded ${errors.name && touched.name ? 'border-red-500' : ''}`} id="familyName" type="text" />
             <ErrorMessage name="familyName" component="div" className="text-red-400 font-bold" />
            </div>
           <div>
             <label htmlFor="userName" className='text-xl text-black font-bold'>نام کاربری</label>
             <Field name="userName" className={`w-full p-2 border rounded ${errors.name && touched.name ? 'border-red-500' : ''}`} id="userName" type="text"/>
            <ErrorMessage name="userName" component="div" className="text-red-400 font-bold" />
           </div>
           <div>
             <label htmlFor="email" className='text-xl text-black font-bold'>ایمیل</label>
             <Field name="email" className={`w-full p-2 border rounded ${errors.name && touched.name ? 'border-red-500' : ''}`} id="email" type="text"/>
            <ErrorMessage name="email" component="div" className="text-red-400 font-bold" />
           </div>
          <div>
             <label htmlFor="phone" className='text-xl text-black font-bold'>شماره تماس</label>
             <Field name="phone" className={`w-full p-2 border rounded ${errors.name && touched.name ? 'border-red-500' : ''}`} id="phone" type="tel"/>
             <ErrorMessage name="phone" component="div" className="text-red-400 font-bold" />
           </div>
            <div>
              <label htmlFor="password" className='text-xl text-black font-bold'>رمز عبور</label>
              <Field 
                name="password" 
                type="password"
                className={`w-full p-2 border rounded ${errors.password && touched.password ? 'border-red-500' : ''}`} 
                id="password" 
              />
              <ErrorMessage name="password" component="div" className="text-red-400 font-bold" />
            </div>

            <div>
              <label htmlFor="confirm_password" className='text-xl text-black font-bold'>تکرار رمز عبور</label>
              <Field 
                name="confirm_password" 
                type="password"
                className={`w-full p-2 border rounded ${errors.confirm_password && touched.confirm_password ? 'border-red-500' : ''}`} 
                id="confirm_password" 
              />
              <ErrorMessage name="confirm_password" component="div" className="text-red-400 font-bold" />
            </div>

            <div className="flex items-center">
              <Field 
                name="checkbox" 
                type="checkbox" 
                id="checkbox"
                className="mr-2"
              />
              <label htmlFor="checkbox" className='text-black text-lg'>
                پذیرش <Link href="/" className="underline">شرایط و ضوابط</Link>
              </label>
            </div>
            <ErrorMessage name="checkbox" component="div" className="text-red-400 font-bold" />

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-green-300 rounded text-lg font-bold p-2 ${isSubmitting ? 'opacity-50' : ''}`}
            >
              {isSubmitting ? 'در حال ثبت نام...' : 'ثبت نام'}
            </button>

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

export default SignUpForm;
