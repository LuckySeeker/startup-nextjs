import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Approach"
            paragraph="We work closely with our authors, and keep it small, personal, and intimate. From the time a project is commissioned till the time a book is published is usually six to nine months. With traditional publishing, that can be much longer. We’re not a mass production house. Think of us more as a boutique literary house that works closely with a few select clients and delivers very high-quality books."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="text-base !leading-relaxed text-body-color md:text-lg py-16 md:py-20 lg:py-28"><p>
          This means meetings over zoom, samples of your writing (maybe short-form on platforms like LinkedIn?) and a deep conversation about your vision for your book.
 
 If you’re writing a book based on a professional field these can be simpler and easier. If you’re writing something more intense and personal – like a memoir – this can be more involved.</p></div>
        </div>
      </section>
    </>
  );
};

export default Features;
