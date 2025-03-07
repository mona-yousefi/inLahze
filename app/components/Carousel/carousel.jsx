"use client";
import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  // declare each slide
    const slides = [
        { id: 1, title: "روی خط", image: "", desc: "توضیحات 1" },
        { id: 2, title: "Self Love", image: "https://admin.innoghte.com/storage//app/public/front/images/quick_access//original/5fea06be-31c5-4d1e-a4ec-3e8248984203.jpg", desc: "توضیحات 2" },
        { id: 3, title: "تواز نو", image: "https://admin.innoghte.com/storage//app/public/front/images/quick_access//original/db131fc1-102a-4b12-a0b9-2176968a364a.jpg", desc: "توضیحات 3" },
        { id: 4, title: "عبور از ترس", image: "https://admin.innoghte.com/storage//app/public/front/images/quick_access//original/3004586e-4eae-4c2f-b711-700f7228445b.jpg", desc: "توضیحات 4" },
        { id: 5, title: "شروع بیداری", image: "/images/slide5.jpg", desc: "توضیحات 5" },
      ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      breakpoints={{
        0:{slidesPerView:1},
        468: {slidesPerView:1},
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full max-w-6xl mx-auto"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className='mt-10 mb-10'>
          <div className="bg-white p-4 rounded-xl shadow-lg text-center">
            <img src={slide.image} alt={slide.title} className="rounded-lg w-full h-52 object-contain" />
            <h3 className="font-bold mt-3">{slide.title}</h3>
            <p className="text-gray-600 text-sm">{slide.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel