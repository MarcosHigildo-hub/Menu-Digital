'use client';
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/swiper-custom.css';
import { Promo } from "@/app/types/Promo";


interface SliderpromoProps {
    images: Promo[];
}

const Sliderpromo:React.FC<SliderpromoProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation 
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      
    >
      {images.map((promo, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gray-950 rounded-xl shadow-md p-3 flex flex-col items-center">
            <Image
              src={promo.src}
              alt={promo.alt}
              width={150}
              height={112}
              className="w-full h-28  rounded-lg object-contain"
            />
            <p className="mt-1 font-semibold text-red-500 text-xl">{promo.discount}</p>
            <p className="text-green-500 text-xl">{promo.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliderpromo;
