import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import CoreFeaturesSection from "../components/home/CoreFeatures";
import Testimonial from "../components/home/Testimonial";
import RecentProjects from "../components/home/RecentProjects";
import WhatWeOfferSection from "../components/home/WhatWeOffer";
import LatestNews from "@/components/home/LatestNews";
import CompanyAwards from "@/components/home/CompanyAwards";
import OurExperts from "@/components/home/OurExperts";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AnimatedSection animation="slide-up" delay={200}>
        <AboutUs />
      </AnimatedSection>
      <AnimatedSection animation="slide-up" delay={400}>
        <WhatWeOfferSection />
      </AnimatedSection>
      <AnimatedSection animation="slide-left" delay={600}>
        <RecentProjects />
      </AnimatedSection>
      <AnimatedSection animation="slide-right" delay={800}>
        <CoreFeaturesSection />
      </AnimatedSection>
      <AnimatedSection animation="scale-in" delay={1000}>
        <Testimonial />
      </AnimatedSection>
      <AnimatedSection animation="fade-in" delay={1200}>
        <OurExperts/>
      </AnimatedSection>
      <AnimatedSection animation="slide-up" delay={1400}>
        <CompanyAwards />
      </AnimatedSection>
      <AnimatedSection animation="fade-in" delay={1600}>
        <LatestNews />
      </AnimatedSection>
    </div>
  );
}
