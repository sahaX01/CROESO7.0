import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import banner from "../../assets/2k25banner.avif";
import Trailer from "../../assets/date.mp4";

const Home = () => {
  const [showControls, setShowControls] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const trailerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dateRef = useRef(null);
  const trailerTextRef = useRef(null);

  /* ================= INTERSECTION OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (trailerRef.current) observer.observe(trailerRef.current);
    return () => trailerRef.current && observer.unobserve(trailerRef.current);
  }, []);

  /* ================= GSAP WORD ANIMATION ================= */
  useEffect(() => {
    const titleWords = titleRef.current.querySelectorAll(".word");
    const subtitleWords = subtitleRef.current.querySelectorAll(".word");
    const dateWords = dateRef.current.querySelectorAll(".word");
    const trailerWords = trailerTextRef.current.querySelectorAll(".word");

    const tl = gsap.timeline();

    tl.fromTo(
      titleWords,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
      }
    )
      .fromTo(
        subtitleWords,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .fromTo(
        dateWords,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        trailerWords,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }, []);

  /* ================= COUNTDOWN LOGIC ================= */
  const calculateTimeLeft = () => {
    const diff = new Date("2026-02-17T09:00:00") - new Date();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* ================= WORD SPLIT FUNCTION ================= */
  const splitWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-2">
        {word}
      </span>
    ));
  };

  return (
    <section className="relative overflow-hidden">
      {/* ================= BANNER SECTION ================= */}
      <div className="md:h-[95vh] h-[35vh] relative">
        <img
          src={banner}
          alt=""
          className="absolute top-0 -z-10 w-full md:h-screen h-[40vh] brightness-50"
        />

        <div className="flex flex-col md:gap-4 justify-center items-center h-[20vh] md:h-[50vh] font-bold font-mono">

          {/* TITLE */}
          <h1
            ref={titleRef}
            className="md:text-7xl text-3xl text-blue-200"
          >
            
            {splitWords("CROESO    7.0")}

          </h1>

          {/* SUBTITLE */}
          <p
            ref={subtitleRef}
            className="md:text-5xl text-xl text-center text-white"
          >
            {splitWords("THE GRAND FRESHER'S WELCOME")}
          </p>
        </div>

        {/* DATE LINE */}
        <p
          ref={dateRef}
          className="text-sm sm:text-base md:text-lg text-white text-center -mt-15 font-mono"
        >
          {splitWords("17 FEB 2026, GET READY FOR THE SHOWDOWN")}
        </p>

        {/* COUNTDOWN */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-20 text-white">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="bg-black/60 backdrop-blur px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center shadow-md min-w-[70px]"
            >
              <p className="text-lg sm:text-xl md:text-3xl font-bold">
                {value}
              </p>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TRAILER SECTION ================= */}
      <div className="flex flex-col gap-5 justify-center items-center md:h-screen">

        <div
          ref={trailerTextRef}
          className="text-center md:text-6xl text-3xl text-blue-200 font-mono"
        >
          {splitWords("See Trailer")}
        </div>

        <video
          ref={trailerRef}
          src={Trailer}
          poster={banner}
          autoPlay
          controls={showControls}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          className={`md:w-[68vw] w-[90vw] md:h-[67vh]
            border-2 rounded-lg border-blue-300
            shadow-lg shadow-blue-500/50
            transition-all duration-1000
            ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        />
      </div>
    </section>
  );
};

export default Home;
