import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

// Hero component definition
const Hero = () => {
  // GSAP animation hook to animate elements when the component mounts
  useGSAP(() => {
    gsap.to(".hero-title", { opacity: 1, delay: 2 }); // Fade in the hero title after 2 seconds
    gsap.to("#cta", { opacity: 1, delay: 2, translateY: -50 }); // Fade in and move the CTA button after 2 seconds
  }, []);

  // State to manage the video source based on window width
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 639 ? heroVideo : smallHeroVideo);

  // Function to update the video source based on window width
  const handleVideoSrcSet = () => {
    if (window.innerWidth > 639) {
      setVideoSrc(heroVideo); // Use the larger video for wider screens
    } else {
      setVideoSrc(smallHeroVideo); // Use the smaller video for narrower screens
    }
  };

  // Effect to add and clean up the resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <section className="nav-height relative w-full bg-black " data-testid="hero">
      <div className="flex-center h-5/6 w-full flex-col">
        <p className="hero-title" role="heading" aria-level="1">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none" // Disable pointer events to prevent interactions
            autoPlay
            muted
            playsInline
            key={videoSrc} // Re-render the video element when the source changes
            aria-label="Promotional video for iPhone 15 Pro"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
            controls={false} // Disable default video controls
            draggable={false} // Prevent the video from being dragged
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn" role="button">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
