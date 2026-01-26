import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import CoreFeaturesSection from "../components/home/CoreFeatures";
import Testimonial from "../components/home/Testimonial";
import RecentProjects from "../components/home/RecentProjects";
import WhatWeOfferSection from "../components/home/WhatWeOffer";
import LatestNews from "@/components/home/LatestNews";
import CompanyAwards from "@/components/home/CompanyAwards";
import OurExperts from "@/components/home/OurExperts";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <WhatWeOfferSection />
      <RecentProjects />
      <CoreFeaturesSection />
      <Testimonial />
      <OurExperts/>
      <CompanyAwards />
      <LatestNews />
    </div>
  );
}
