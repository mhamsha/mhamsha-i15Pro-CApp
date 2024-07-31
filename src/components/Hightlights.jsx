import React from "react";
import { rightImg, watchImg } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoCarousel from "./VideoCarousel";

const Hightlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section className="w-screen h-full overflow-hidden common-padding bg-zinc ">
      <div className="screen-max-width ">
        <div className="mb-12 w-full items-end md:flex justify-between ">
          <h1 id="title" className="section-heading">
            Get the hightlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Hightlights;
