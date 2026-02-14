import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import bg from "../../assets/back2.png";
import event1 from "../../assets/event1.png";
import event2 from "../../assets/event2.png";
import event3 from "../../assets/event3.png";
import event4 from "../../assets/event4.png";
import event5 from "../../assets/event5.png";
import event6 from "../../assets/event6.png";
import event7 from "../../assets/event7.png";
import event8 from "../../assets/event8.png";
import event9 from "../../assets/event9.png";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { img: event1, title: "INAUGRATION CEREMONY", time: "9:00 AM - 10:00 AM" },
  { img: event2, title: "INTRODUCTORY SESSION", time: "10:00 AM - 1:30 PM" },
  { img: event3, title: "LUNCH BREAK", time: "1:30 PM - 2:15 PM" },
  { img: event4, title: "CULTURAL PERFORMANCES", time: "2:15 PM - 4:00 PM" },
  { img: event5, title: "MR & MRS. CROESO 7.0", time: "4:00 PM - 4:15 PM" },
  { img: event6, title: "SPECIAL PERFORMANCES", time: "4:15 PM - 4:30 PM" },
  { img: event7, title: "BAND PERFORMANCE", time: "4:30 PM - 5:30 PM" },
  { img: event8, title: "DJ PERFORMANCE", time: "5:30 PM - 7:00 PM" },
  { img: event9, title: "VOTE OF THANKS", time: "7:00 PM - 7:15 PM" },
];

const Eventio = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const headingWords = headingRef.current.querySelectorAll(".word");

    // HEADING WORD ANIMATION
    gsap.fromTo(
      headingWords,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    // PARAGRAPH ANIMATION
    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
        },
      }
    );

    // CARDS ANIMATION
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
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
    <div className=" min-h-screen w-full font-mono px-6 md:px-12 py-16 overflow-hidden  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>

      {/* HEADING */}
      <div className="text-center mb-16">
        <h1
          ref={headingRef}
          className="text-blue-200 font-bold text-4xl md:text-5xl mb-4"
        >
          {splitWords("DANCE. VIBE. CELEBRATE.")}
        </h1>

        <p
          ref={paraRef}
          className="text-gray-300 text-lg md:text-xl"
        >
          A spectacular night of rhythm, beats, and joy
        </p>
      </div>

      {/* EVENTS GRID */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12 justify-items-center mb-5">
        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white/5 backdrop-blur-md p-4 rounded-3xl shadow-lg hover:scale-105 transition duration-300 w-[300px]"
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-[200px] object-cover rounded-2xl"
            />
            <div className="mt-4 text-center">
              <h2 className="text-blue-200 font-bold text-xl mb-2">
                {event.title}
              </h2>
              <p className="text-gray-300 text-md">
                Time : {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventio;
