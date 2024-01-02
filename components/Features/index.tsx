import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          {/* <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          /> */}

          <div className="flex items-center justify-between gap-5">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          <div className="py-24">
            {" "}
            <SectionTitle
              title="Neden Biz?"
              paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              center
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
