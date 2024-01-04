"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import img from "../../public/images/ready-to-help/ready-to-help.jpg";

const ReadyToHelp = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Yardıma Hazırız"
          paragraph="İster bir fikir aşamasında olun, ister karmaşık bir projeyi hayata geçirmek istiyor olun, uzman ekibimiz size her adımda eşlik edecektir. Bize ulaşın, projenizin gereksinimlerini paylaşın ve sizin için en uygun çözümü birlikte bulalım."
          center
        />

        <div className="z-11 flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
          <Image
            src={img}
            alt="Yardıma Hazırız"
            className="h-full w-full object-contain object-center opacity-70 xl:w-[60%]"
          />
          <div>
            <h1 className="mb-4 text-xl font-bold !leading-tight text-black sm:text-3xl dark:text-white">
              Kendimize Güveniyoruz
            </h1>
            <ul className="[&_li]:text-md:lg mt-5 text-stroke-dark [&_b]:dark:text-white [&_li]:pt-10 [&_li]:text-base [&_li]:!leading-relaxed [&_li]:text-body-color">
              <li className="text-base !leading-relaxed text-black dark:text-body-color-dark">
                <b> Mükemmeliyet:</b> Tasarım ve üretimde mükemmeliyeti
                hedefliyoruz. Projelerinizde kalite ve güvenilirliği bir arada
                bulacaksınız.
              </li>
              <li className="text-base !leading-relaxed text-black dark:text-body-color-dark">
                <b>Hızlı Çözümler:</b> Zamanın öneminin farkındayız. Hızlı ve
                etkili çözümlerle projelerinizi zamana uygun bir şekilde teslim
                ediyoruz.
              </li>
              <li>
                <b>Teknolojik İnovasyon:</b> Sektördeki en son teknolojileri ve
                yenilikleri takip ederek, projelerinizi geleceğin
                gereksinimlerine uygun hale getiriyoruz.
              </li>
              <li>
                <b>Sizinle İşbirliği:</b> Her adımda sizinle işbirliği yaparak,
                projelerinizi anlamak ve beklentilerinizi aşmak için buradayız.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default ReadyToHelp;
