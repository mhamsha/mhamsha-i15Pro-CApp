import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
const Hero = () => {
  useGSAP(() => {
    gsap.to(".hero-title", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, delay: 2, translateY: -50 });
  }, []);
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth > 768) {
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(smallHeroVideo);
    }

    useEffect(() => {
      window.addEventListener("resize", handleVideoSrcSet);

      return (
        () => {
          window.removeEventListener("resize", handleVideoSrcSet);
        },
        []
      );
    });
  };
  return (
    <section className="nav-height relative w-full bg-black">
      <div className=" flex-center h-5/6 w-full flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12  w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col  items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
