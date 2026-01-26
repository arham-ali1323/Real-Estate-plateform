import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import CoreFeaturesSection from "../components/home/CoreFeatures";
import Testimonial from "../components/home/Testimonial";
import RecentProjects from "../components/home/RecentProjects";
import WhatWeOfferSection from "../components/home/WhatWeOffer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <CoreFeaturesSection />
      <Testimonial />
      <RecentProjects />
      <WhatWeOfferSection />
    </div>
  );
}
