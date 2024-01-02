import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, img } = feature;
  return (
    <div className="relative flex min-h-[700px] w-full flex-col justify-center pb-28">
      <div className="fixed left-0 top-0 -z-10 h-full w-full before:absolute before:inset-0 before:h-full before:w-full before:bg-black before:opacity-80 before:content-['']">
        <Image
          src={img}
          alt="Slayt Görsel"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-10 w-2/4 px-20 pt-16">
        <div className="flex items-center justify-between gap-5">
          <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
          <h3 className="mb-5 flex-1 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-lg font-medium leading-relaxed text-white">
          {paragraph}
        </p>
        <div className="mr-20 mt-8 flex items-center justify-end">
          <button className="rounded-sm bg-primary px-8 py-3 text-lg font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
            Daha Fazla
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
