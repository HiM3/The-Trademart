'use client';

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
import spain from "./../../pubilc/images/country/Spain.png"
import newZealand from "./../../pubilc/images/country/New Zealand.jpg"
import southAfrica from "./../../pubilc/images/country/South Africa.jpg"
import sweden from "./../../pubilc/images/country/Sweden.webp"
import southKorea from "./../../pubilc/images/country/South Korea.webp"
import malaysia from "./../../pubilc/images/country/Malaysia.jpg" 
import singapore from "./../../pubilc/images/country/Singapore.webp"
import belgium from "./../../pubilc/images/country/Belgium (Brussels).jpg"
import hongKong from "./../../pubilc/images/country/Hong Kong.webp"
import qatar from "./../../pubilc/images/country/Qatar.png"
import norway from "./../../pubilc/images/country/Norway.webp"
import maldives from "./../../pubilc/images/country/Maldives.jpg"
import netherlands from "./../../pubilc/images/country/Netherlands.jpg"
import oman from "./../../pubilc/images/country/Oman.jpg" 


import 'swiper/css';
import 'swiper/css/free-mode';

const countries = [
  { name: 'United States', flag: us },
  { name: 'United Kingdom', flag: uk },
  { name: 'Germany', flag: germany },
  { name: 'Japan', flag: japan },
  { name: 'Canada', flag: canada },
  { name: 'United Arab Emirates', flag: uae },
  { name: 'Australia', flag: australia },
  { name: 'Spain', flag: spain },
  { name: 'New Zealand', flag: newZealand },
  { name: 'South Africa', flag: southAfrica },
  { name: 'Sweden', flag: sweden },
  { name: 'South Korea', flag: southKorea },
  { name: 'Malaysia', flag: malaysia },
  { name: 'Singapore', flag: singapore },
  { name: 'Belgium (Brussels)', flag: belgium },
  { name: 'Hong Kong', flag: hongKong },
  { name: 'Qatar', flag: qatar },
  { name: 'Norway', flag: norway },
  { name: 'Maldives', flag: maldives },
  { name: 'Netherlands', flag: netherlands },
  { name: 'Oman', flag: oman }
];


const CountryFlags = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Global Reach</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We proudly export our premium agricultural products to these countries and many more around the world, maintaining the highest standards of quality.
          </p>
        </div>

        <Swiper
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
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
          {countries.map((country, i) => (
            <SwiperSlide key={i}>
              <div className="h-20 flex justify-center items-center">
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={120}
                  height={80}
                  className="object-contain rounded shadow"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CountryFlags;
