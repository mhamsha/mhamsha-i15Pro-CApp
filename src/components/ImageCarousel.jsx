import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useState, useEffect } from "react";
import { animateWithGsap } from "../utils/animation";
import { imageCarouselSlides } from "../constants/index";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useGSAP(() => {
    animateWithGsap("to", "#image-carousel-para", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top center",
      },
    });
    gsap.to("#image-carousel-container", {
      duration: 0.5,
      transform: `translateX(${-103 * currentSlide}%)`,
      ease: "oiro.in",
    });
  }, [currentSlide]);

  const handleNextBtn = () => {
    if (currentSlide === imageCarouselSlides.length - 1) return;
    setCurrentSlide((prev) => prev + 1);
  };

  const handleBackBtn = () => {
    if (currentSlide === 0) return;
    setCurrentSlide((prev) => prev - 1);
  };
  useEffect(() => {
    gsap.fromTo(
      "#image-carousel-container .slide",
      { x: "140%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#image-carousel-container",
          start: "top center",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.to("#popup-action", {
      duration: 1,
      y: 0,
      opacity: 1,
      height: "7rem",
      width: "7rem",
      transition: "all",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#popup-action",
        start: "top center",
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    });
  }, []);

  return (
    <section className="common-padding overflow-hidden">
      <div className="screen-max-width">
        <div className="fixed top-0 left-1/2">
          <div
            id="popup-action"
            className="size-10 relative -translate-y-24 bg-cyan-600 rounded-full flex items-center justify-center m-auto opacity-0"
          >
            <div
              id="popup-action-inner"
              className="min-h-14 min-w-14  rounded-full bg-gray-600 absolute z-50 "
            ></div>
          </div>
        </div>

        <div className="flex flex-col  ">
          <p
            id="image-carousel-para"
            className="max-w-xs text-gray opacity-0 translate-y-20 text-md md:text-xl lg:text-2xl  font-normal  "
          >
            With iPhone 15 Pro, you have multiple focal lengths to work with. It's like having
            <strong className="text-white "> seven pro lenses in your pocket </strong>,<br />{" "}
            everywhere you go.
          </p>
          <div>
            <div
              id="image-carousel-container"
              className={` flex gap-5  relative sm:w-[70vw] w-[84vw] md:h-[70vh] sm:h-[50vh] h-[50vh]  mt-16 lg:ml-24 md:ml-16 ml-0 `}
            >
              {imageCarouselSlides.map((slide, index) => (
                <div
                  className={`min-w-full slide my-auto transition-all duration-1000 ${currentSlide + 1 == index ? "sm:h-4/5 h-full " : "h-full"} ${currentSlide === index ? "active" : "inactive"} ${
                    currentSlide > 3 ? "sm:-translate-x-[10%] -translate-x-[12%]" : ""
                  } `}
                  key={index}
                >
                  <img
                    id="image-carousel-slide"
                    src={slide.img}
                    alt={slide.alt}
                    className={`min-w-full h-full  object-cover  `}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex  justify-around  mt-8  ">
            <div className=""></div>
            <div className=" flex justify-around text-left text-gray leading-normal text-xl md:text-3xl">
              {imageCarouselSlides.map((slide, index) => (
                <p
                  className={`${currentSlide == index ? "image-text-show sm:min-w-96  sm:max-w-96  " : "opacity-0 "}`}
                  key={slide.id}
                >
                  <span className="text-white">{currentSlide == index ? slide.lensZoom : ""}</span>

                  {currentSlide == index ? slide.imgDescription : ""}
                </p>
              ))}
            </div>
            <div className="flex gap-3 max-sm:mt-14 max-sm:mr-6  ">
              <button
                onClick={handleBackBtn}
                className="bg-gray-800 rounded-full"
                disabled={currentSlide === 0}
                aria-label="Go to previous slide"
              >
                <svg
                  className={currentSlide === 0 ? "" : "svg-bold"}
                  fill={currentSlide === 0 ? "gray" : "white"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  width="36"
                  height="36"
                >
                  <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
                </svg>
              </button>
              <button
                onClick={handleNextBtn}
                className="bg-gray-800 rounded-full "
                disabled={currentSlide === imageCarouselSlides.length - 1}
                aria-label="Go to next slide"
              >
                <svg
                  className={currentSlide === imageCarouselSlides.length - 1 ? "" : "svg-bold"}
                  fill={currentSlide === imageCarouselSlides.length - 1 ? "gray" : "white"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  width="36"
                  height="36"
                >
                  <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
