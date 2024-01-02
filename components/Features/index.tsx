"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";

const Features = () => {
  return (
    <>
      <section id="features" className="pb-16 md:pb-20 lg:pb-28">
        <div className="container flex flex-col items-center py-24">
          <h1 className="my-5 text-center text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
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
          <div className="flex items-center justify-between gap-5">
            <div className="h-60 w-72 space-y-7 rounded-sm border border-gray-50 p-4">
              <h1 className="text-2xl font-medium">Uzman Kadro</h1>
              <p className="text-base !leading-relaxed text-black dark:text-body-color-dark">
                ISO 9001:2008 belgesi ile kalitemizi kanıtlıyoruz.
              </p>
            </div>
            <div className="h-60 w-72 space-y-7 rounded-sm border border-gray-50 p-4">
              <h1 className="text-2xl font-medium">Çözüm Odaklı Yaklaşım</h1>
              <p>Tasarımdan üretime kadar kapsamlı çözümler sunuyoruz.</p>
            </div>
            <div className="h-60 w-72 space-y-7 rounded-sm border border-gray-50 p-4">
              <h1 className="text-2xl font-medium">Kalite Standartları</h1>
              <p>ISO 9001:2008 belgesi ile kalitemizi kanıtlıyoruz.</p>
            </div>
            <div className="h-60 w-72 space-y-7 rounded-sm border border-gray-50 p-4">
              <h1 className="text-2xl font-medium">
                Hızlı ve Güvenilir Üretim
              </h1>
              <p>
                Standartlara uygun malzemelerle hızlı ve güvenilir PCB üretimi
                yapıyoruz.
              </p>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          speed={1500}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
