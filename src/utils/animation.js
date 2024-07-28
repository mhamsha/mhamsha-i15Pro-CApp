import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (name, target, animationProps, scrollProps) => {
  // * play pause resume reset restart complete reverse none
  // * onEnter onLeave onEnterBack onLeaveBack
  switch (name) {
    case "from":
      gsap.from(target, {
        ...animationProps,
        scrollTrigger: {
          trigger: target,
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
          ...scrollProps,
        },
      });
      break;
    case "to":
      gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
          trigger: target,
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
          ...scrollProps,
        },
      });
      break;
  }
};
export const animateWithGsapTimeline = (
  timeline,
  rotaionRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotaionRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });
  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
