import { Feature } from "@/types/feature";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, img, sub_desc, link } = feature;
  return (
    <div className="relative flex min-h-[600px] w-full flex-col justify-center pb-28 lg:min-h-[800px]">
      <div className="absolute left-0 top-0 -z-10 h-full w-full before:absolute before:inset-0 before:h-full before:w-full before:bg-black before:opacity-80 before:content-['']">
        <img
          src={img}
          alt="Slayt Görsel"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-1 mt-72 w-full px-2 sm:px-5 md:px-20 lg:mt-56 xl:w-2/4">
        <div className="flex items-center justify-between gap-5">
          <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
          <h3 className="mb-5 flex-1 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
        </div>
        <p className="text-lg font-medium leading-relaxed text-white">
          {paragraph}
        </p>
        {sub_desc &&
          sub_desc.map((sub: any, i: number) => (
            <div key={i} className="mt-4">
              <h4 className="mb-2 font-medium">{sub.title}</h4>
              <ol className="list-disc space-y-2">
                <li>{sub.text}</li>
                <li>{sub.text2}</li>
                <li>{sub.text3}</li>
                <li>{sub.text4}</li>
              </ol>
            </div>
          ))}
        <div className="mr-20 mt-8 flex items-center justify-center sm:justify-end">
          <Link
            href={`/services/${link}`}
            className="group relative inline-flex items-center justify-start overflow-hidden rounded-sm bg-primary px-5 py-2 font-medium transition-all sm:px-8 sm:py-4"
          >
            <span className="absolute bottom-0 left-0 mb-12 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-emerald-700 transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-lg text-white transition-colors duration-300 ease-in-out">
              Daha Fazla
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
