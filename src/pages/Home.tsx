import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "@/index.css";

import { FeatureSection } from "@/components/home/Features";
import { HeroSection } from "@/components/home/Hero";
import TestimonialSection from "@/components/home/Testimonial";
import ContentSection from "@/components/home/Content";
import UsecacesSection from "@/components/home/Usecaces";
import UnlimitedSection from "@/components/home/Unlimited";
import HeroVideoSection from "@/components/home/HeroVideo";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "center end"],
  });
  const [transformValues, setTransformValues] = useState(["50%", "105%"]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dNone = useTransform(scrollYProgress, [0.1, 1], ["none", "block"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 758) {
        setTransformValues(["5%", "30%"]);
      } else if (window.innerWidth < 1024) {
        setTransformValues(["50%", "105%"]);
      } else {
        setTransformValues(["60%", "110%"]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const widthBg = useTransform(scrollYProgress, [0, 0.8], transformValues);

  return (
    <div className="pt-[176px] text-white/95 pb-52">
      <HeroSection opacity={opacity} dNone={dNone} />
      <div
        className="max-w-[1200px] pt-[530px] mx-auto z-10 relative"
        ref={ref}
      >
        <HeroVideoSection widthBg={widthBg} />
        <TestimonialSection />
      </div>
      <div className="h-[0.5px] bg-white/20 w-full mt-[100px]"></div>
      <FeatureSection />
      <div className="pt-14 max-w-[1200px] mx-auto md:mx-5">
        <UnlimitedSection />
        <ContentSection />
        <UsecacesSection />
      </div>
    </div>
  );
};

export default Home;
