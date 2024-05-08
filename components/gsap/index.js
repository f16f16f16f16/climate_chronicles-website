import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const animateTextAreas = () => {
  const textAreas = gsap.utils.toArray(".fade-textarea");
  textAreas.forEach((textarea) => {
    gsap.fromTo(
      textarea,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: textarea,
          start: "center bottom-=150",
          end: "center bottom-=150",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  });
};

export const animateCCMan = () => {
  const ccmans = gsap.utils.toArray(".ccman-animation");
  ccmans.forEach((ccman) => {
    gsap.fromTo(
      ccman,
      { x: "-100%" },
      {
        x: "0%",
        scrollTrigger: {
          trigger: ccman,
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

export const ufoZigzag = () => {
  const ufoPath = [
    { x: -100, y: 0 }, // start outside the screen on the left
    { x: window.innerWidth * 0.25, y: 100 }, // move to 1/4 of the screen width and down
    { x: window.innerWidth * 0.5, y: -100 }, // move to 1/2 of the screen width and up
    { x: window.innerWidth * 0.75, y: 100 }, // move to 3/4 of the screen width and down
    { x: window.innerWidth, y: -100 }, // exit the screen on the right and up
  ];

  // Animate UFO separately as before
  gsap.to(".ufo", {
    duration: 3,
    ease: "power1.inOut",
    motionPath: {
      path: ufoPath,
      curviness: 1.5,
      autoRotate: true,
    },
    yoyo: true,
    repeat: -1,
  });
};

export const ccmanZigzag = (elementRef) => {
  const zigzagPath = [
    { x: 0, y: -window.innerHeight * 0.2 },
    { x: window.innerWidth * 0.3, y: window.innerHeight * 0.5 },
    { x: -window.innerWidth * 0.3, y: window.innerHeight * 1.0 },
    { x: window.innerWidth * 0.3, y: window.innerHeight * 1.5 },
    { x: -window.innerWidth * 0.3, y: window.innerHeight * 2.0 },
    { x: window.innerWidth * 0.3, y: window.innerHeight * 2.5 },
    { x: -window.innerWidth * 0.3, y: window.innerHeight * 3.0 },
    { x: window.innerWidth * 0.3, y: window.innerHeight * 3.5 },
    { x: -window.innerWidth * 0.3, y: window.innerHeight * 4.0 },
    { x: window.innerWidth * 0.3, y: window.innerHeight * 4.5 },
    { x: 0, y: window.innerHeight * 5.0 },
  ];

  ScrollTrigger.create({
    animation: gsap.to(elementRef.current, {
      ease: "none",
      motionPath: {
        path: zigzagPath,
        align: elementRef.current,
        autoRotate: true,
      },
    }),
    trigger: elementRef.current,
    start: "top bottom",
    end: "bottom top",
    scrub: 40,
    // markers: true,
  });
};

export const animateDekToLanding = (dekRef, landingRef) => {
  if (dekRef.current && landingRef.current) {
    const dekPosition = dekRef.current.getBoundingClientRect().top;
    const landingPosition = landingRef.current.getBoundingClientRect().top;
    const distanceToLanding = landingPosition - dekPosition;

    gsap.to(dekRef.current, {
      scrollTrigger: {
        trigger: dekRef.current,
        start: "bottom center",
        end: "bottom top",
        scrub: 5,
        // markers: true,
      },
      y: distanceToLanding + 60,
      ease: "none",
    });
  }
};

export const animateCcmanToLanding = (ccmanRef, landing2Ref) => {
  if (ccmanRef.current && landing2Ref.current) {
    const ccmanPosition = ccmanRef.current.getBoundingClientRect().top;
    const landingPosition = landing2Ref.current.getBoundingClientRect().top;
    const distanceToLanding = landingPosition - ccmanPosition;

    gsap.to(ccmanRef.current, {
      scrollTrigger: {
        trigger: ccmanRef.current,
        start: "bottom center",
        end: "bottom top",
        scrub: 18,
        // markers: true,
      },
      y: distanceToLanding + 800,
      ease: "none",
    });
  }
};

export const animateAstronaut = () => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: "power1.inOut" });
  tl.to("#astronaut", {
    motionPath: {
      path: [
        { x: 100, y: 0 },
        { x: 100, y: -100 },
        { x: 0, y: -100 },
        { x: 0, y: 0 },
      ],
      curviness: 1.5,
      autoRotate: true,
    },
    duration: 10,
    ease: "linear",
  });

  gsap.to("#astronaut", {
    rotation: "+=360",
    duration: 5,
    repeat: -1,
    ease: "none",
  });
};

export const animateAlien = () => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: "power1.inOut" });
  tl.to("#alien", {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: -100, y: 0 },
        { x: -100, y: -100 },
        { x: 0, y: -100 },
        { x: 0, y: 0 },
      ],
      curviness: 1.5,
      autoRotate: true,
    },
    duration: 10,
    ease: "linear",
  });

  gsap.to("#alien", {
    rotation: "+=360",
    duration: 5,
    repeat: -1,
    ease: "none",
  });
};
