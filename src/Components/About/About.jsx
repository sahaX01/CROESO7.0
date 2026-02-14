import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bg from "../../assets/deepblue.png";
import stage from "../../assets/stage.png";
import light from "../../assets/light.png";
import crowd from "../../assets/crowd.png";
import croeso from "../../../public/croeso-icon.png";
import confession from "../../../public/confession.png";
import mankibat from "../../../public/mankibat.png";

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imagesRef = useRef([]);
  const socialRef = useRef(null); // ✅ NEW

  useEffect(() => {
    const headingWords = headingRef.current.querySelectorAll(".word");
    const paraWords = paragraphRef.current.querySelectorAll(".word");

    const mm = gsap.matchMedia();

    // WORD ANIMATION
    gsap.fromTo(
      headingWords,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
      },
    );

    gsap.fromTo(
      paraWords,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.03,
        delay: 0.8,
        ease: "power2.out",
      },
    );

    // MOBILE IMAGE ANIMATION
    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.4,
          ease: "power3.out",
        },
      );
    });

    // DESKTOP IMAGE ANIMATION
    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        },
      );
    });

    // ✅ SOCIAL SECTION ANIMATION
    const socialItems = socialRef.current.querySelectorAll(".social-item");

    gsap.fromTo(
      socialRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1.2,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      socialItems,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        delay: 1.3,
        ease: "back.out(1.7)",
      },
    );
  }, []);

  const splitWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-2">
        {word}
      </span>
    ));
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col lg:flex-row flex-wrap gap-10 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* TEXT SECTION */}
      <div className="font-mono text-center w-full lg:max-w-xl mt-10 lg:mt-32 ml-0 lg:ml-20 px-4 lg:px-0">
        <h1 ref={headingRef} className="text-blue-200 font-bold mb-5 text-5xl">
          {splitWords("ABOUT US")}
        </h1>

        <p
          ref={paragraphRef}
          className="lg:text-lg sm:text-2xl text-gray-300 leading-relaxed"
        >
          {splitWords(
            `CROESO 7.0 is the official cultural welcome organized to celebrate the arrival of first-year students at Coochbehar Government Engineering College. The event introduces freshers to the vibrant cultural spirit of the campus and provides a platform for music, dance, drama, art, and creative performances. It serves as a bridge between seniors and newcomers, fostering interaction, friendship, and a sense of belonging within the college community. Through its energetic atmosphere and diverse showcases of talent, CROESO 7.0 marks the beginning of an exciting and memorable journey for every new student.`,
          )}
        </p>

        {/* SOCIAL MEDIA */}
        <div ref={socialRef} className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-blue-200 mb-4">
            Connect With Us
          </h2>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/_u/cgec_croeso_2k25/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <img
                src={croeso}
                alt="croeso"
                className="w-[50px] h-[50px] rounded-full object-cover hover:scale-110 transition duration-300"
              />
            </a>

            <a
              href="https://www.instagram.com/_u/cgec_confessions/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
          
            >
              <img
                src={confession}
                alt="confession"
                className="w-[50px] h-[50px] rounded-full object-cover hover:scale-110 transition duration-300"
              />
            </a>

            <a
              href="https://www.instagram.com/_u/cgesee_maankibaat/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
             
            >
              <img
                src={mankibat}
                alt="mankibat"
                className="w-[50px] h-[50px] rounded-full object-cover hover:scale-110 transition duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION (UNCHANGED) */}
      <div className="lg:mt-32 lg:ml-20 flex flex-col lg:block items-center">
        <img
          ref={(el) => (imagesRef.current[0] = el)}
          src={stage}
          className="w-[200px] h-[200px]  mb-6 shadow-xl"
          alt="stage"
        />

        <img
          ref={(el) => (imagesRef.current[1] = el)}
          src={light}
          className="w-[200px] h-[200px] relative lg:left-60 lg:-top-20 mb-6 shadow-xl"
          alt="light"
        />

        <img
          ref={(el) => (imagesRef.current[2] = el)}
          src={crowd}
          className="w-[200px] h-[200px] relative lg:-top-40 shadow-xl mb-25"
          alt="crowd"
        />
      </div>
    </div>
  );
};

export default About;
