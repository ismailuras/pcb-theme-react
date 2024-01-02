import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="h-64 w-full rounded-md border border-primary p-5 lg:w-1/3">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex justify-between gap-5">
          <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
          <h3 className="mb-5 flex-1 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
            {title}
          </h3>
        </div>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
