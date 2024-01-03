"use client";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import safety from "../../public/images/icons/safety.png";
import expert from "../../public/images/icons/expert.png";
import soluiton from "../../public/images/icons/solution.png";
import quality from "../../public/images/icons/quality.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section id="features" className="pb-10 md:pb-20 lg:pb-28">
        <div className="container flex flex-col items-center py-10 md:py-20 lg:py-28">
          <h1 className="my-5 border-b border-primary pb-2 text-center text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
            Neden Biz?
          </h1>
          <div className="mb-12 text-center text-base !leading-relaxed text-black sm:text-lg md:text-xl dark:text-body-color-dark">
            Firmamız, 1600 metrekarelik bir alanda hizmet vermektedir ve ISO
            9001:2008 Kalite Standartları belgesine sahiptir. Yaklaşık 70 uzman
            personelimizle sizlere en kaliteli hizmeti sunmak için çalışıyoruz.
            Her aşamada titizlikle yaklaştığımız dizgi sürecimizle,
            müşterilerimizin beklentilerini karşılamak ve aşmak için çaba sarf
            ediyoruz.
          </div>
          <div className="flex flex-wrap items-center justify-between gap-5 py-10">
            <div className="h-full w-full space-y-7 rounded-sm p-4 md:h-60 md:w-80">
              <Image
                src={expert}
                alt="Uzman Kadro"
                className="rounded-full bg-white object-cover object-center p-1"
              />
              <div className="space-y-2">
                <h1 className="text-2xl font-medium">Uzman Kadro</h1>
                <p className="text-base !leading-relaxed text-black dark:text-body-color-dark">
                  ISO 9001:2008 belgesi ile kalitemizi kanıtlıyoruz.
                </p>
              </div>
            </div>
            <div className="h-full w-full space-y-7 rounded-sm p-4 md:h-60 md:w-80">
              <Image
                src={soluiton}
                alt="Çözüm Odaklı"
                className="rounded-full bg-white object-cover object-center p-1"
              />
              <div className="space-y-2">
                <h1 className="text-2xl font-medium">Çözüm Odaklı Yaklaşım</h1>
                <p className="text-base !leading-relaxed text-black dark:text-body-color-dark">
                  Tasarımdan üretime kadar kapsamlı çözümler sunuyoruz.
                </p>
              </div>
            </div>
            <div className="h-full w-full space-y-7 rounded-sm p-4 md:h-60 md:w-80">
              <Image
                src={quality}
                alt="Çözüm Odaklı"
                className="rounded-full bg-white object-cover object-center p-1"
              />
              <div className="space-y-2">
                <h1 className="text-2xl font-medium">Kalite Standartları</h1>
                <p className="text-base !leading-relaxed text-black dark:text-body-color-dark">
                  ISO 9001:2008 belgesi ile kalitemizi kanıtlıyoruz.
                </p>
              </div>
            </div>
            <div className="h-full w-full space-y-7 rounded-sm p-4 md:h-60 md:w-80">
              <Image
                src={safety}
                alt="Hızlı ve Güvenli"
                className="h-[60px] w-[60px] rounded-full bg-white p-2"
              />
              <div className="space-y-2">
                <h1 className="text-2xl font-medium">
                  Hızlı ve Güvenilir Üretim
                </h1>
                <p className="text-base !leading-relaxed text-black dark:text-body-color-dark">
                  Standartlara uygun malzemelerle hızlı ve güvenilir PCB üretimi
                  yapıyoruz.
                </p>
              </div>
            </div>
          </div>
          <h1 className="border-b border-primary pb-2 pt-20 text-center text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:-mb-20 dark:text-white">
            Neler Yapıyoruz?
          </h1>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          speed={1300}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          <div className="flex items-center justify-between gap-5">
            {featuresData.map((feature) => (
              <SwiperSlide key={feature.id}>
                <SingleFeature feature={feature} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Features;
