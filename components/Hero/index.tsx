"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { heroData } from "./heroData";
import Image from "next/image";
import "swiper/css";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-[850px] overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[100px] dark:bg-gray-dark"
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          speed={1300}
          loop={true}
          direction="horizontal"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {heroData.map((hero) => (
            <SwiperSlide key={hero.id}>
              <div className="relative flex min-h-[800px] w-full flex-col justify-start lg:min-h-[850px]">
                <div className="self-center px-5 pt-40">
                  <h2 className="text-center text-4xl font-medium text-white">
                    {hero.title}
                  </h2>
                  <p className="mt-5 text-center text-xl text-white">
                    {hero.text}
                  </p>
                </div>
                <div className="absolute left-0 top-0 -z-10 h-full w-full">
                  <Image
                    src={hero.img}
                    alt="Ana Sayfa Slider"
                    className="w-ful h-full object-cover object-center opacity-100 dark:opacity-60"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
