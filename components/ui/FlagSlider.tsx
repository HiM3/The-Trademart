'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import us from "./../../pubilc/images/country/United States.jpg"
import uk from "./../../pubilc/images/country/United Kingdom.jpg"
import germany from "./../../pubilc/images/country/Germany.jpg"
import japan from "./../../pubilc/images/country/Japan.jpg"
import australia from "./../../pubilc/images/country/Australia.jpeg"
import canada from "./../../pubilc/images/country/Canada.jpg"
import uae from "./../../pubilc/images/country/UnitedArabEmirates.jpg"

import 'swiper/css';
import 'swiper/css/free-mode';

interface LogoSliderProps {
  logos?: { name: string; flag: any }[]; // Use 'any' or 'StaticImageData' for imported images
}

const countries = [
    {
      name: 'United States',
      flag: us,
    },
    {
      name: 'United Kingdom',
      flag: uk,
    },
    {
      name: 'Germany',
      flag: germany,
    },
    {
      name: 'Japan',
      flag: japan,
    },
    {
      name: 'Australia',
      flag: australia,
    },
    {
      name: 'Canada',
      flag: canada,
    },
    {
      name: 'United Arab Emirates',
      flag: uae,
    }
  ]

const FlagSlider: React.FC<LogoSliderProps> = ({ logos = countries }) => {
  return (
    <div className="py-6 bg-gray-100">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {logos.map((country, i) => (
          <SwiperSlide key={i}>
            <div className="h-20 w-auto flex justify-center items-center">
              <Image
                src={country.flag}
                alt={country.name}
                height={80}
                style={{ width: 'auto', height: '80px' }}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlagSlider;
