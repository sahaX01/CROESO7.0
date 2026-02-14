import React, { useEffect, useRef } from "react";
import { FaInstagram} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Images
import subham from "../../assets/members/subhamsaha.png";
import soham from "../../assets/members/soham.png";
import rupanjan from "../../assets/members/rupanjan.png";
import pritam from "../../assets/members/pritam.png";
import shabnur from "../../assets/members/shabnur.png";
import koyel from "../../assets/members/koyel.png";
import pritish from "../../assets/members/pritish.png";
import driti from "../../assets/members/driti.png";
import nayak from "../../assets/members/nayak.png";
import nilesh from "../../assets/members/nilesh.png";
import archisman from "../../assets/members/archisman.png";
import papiya from "../../assets/members/papiya.png";
import arkadip from "../../assets/members/arkadip.png";
import sayan from "../../assets/members/sayan.png";
import anirban from "../../assets/members/anirban.png";
import biswajit from "../../assets/members/biswajit.png";
import nahid from "../../assets/members/nahid.png";
import sampritiy from "../../assets/members/sampritiy.png";
import shanti from "../../assets/members/shanti.png";
import rimpa from "../../assets/members/rimpa.png";
import pial from "../../assets/members/pial.png";
import mahaja from "../../assets/members/mahaja.png";
import anusana from "../../assets/members/anusana.png";
import minali from "../../assets/members/minali.png";
import farhat from "../../assets/members/farhat.png";
import bidisha from "../../assets/members/bidisha.png";
import umang from "../../assets/members/umang.png";
import rishita from "../../assets/members/rishita.png";
import ayan from "../../assets/members/ayan.png";
import tathagatha from "../../assets/members/tathagata.png";
import dipayan from "../../assets/members/dipayan.png";
import anurag from "../../assets/members/anurag.png";
import kumar from "../../assets/members/kumar.png";
import taukir from "../../assets/members/taukir.png";
import rupak from "../../assets/members/rupak.png";
import harasundar from "../../assets/members/harasundar.png";
import arnab from "../../assets/members/arnab.png";
import niroj from "../../assets/members/niroj.png";
import arindam from "../../assets/members/arindam.png";
import mamun from "../../assets/members/mamun.png";
import mainak from "../../assets/members/mainak.png";
import ayush from "../../assets/members/ayush.png";
import suman from "../../assets/members/suman.png";
import somesh from "../../assets/members/somesh.png";
import karan from "../../assets/members/karan.png";
import rikta from "../../assets/members/rikta.png";
import mandira from "../../assets/members/mandira.png";
import barik from "../../assets/members/barik.png";
import archak from "../../assets/members/archak.png";
import diya from "../../assets/members/diya.png";
import prasenjit from "../../assets/members/prasenjit.png";
import snehasish from "../../assets/members/snehasish.png";
import annwesha from "../../assets/members/annwesha.png";
import rishiraj from "../../assets/members/rishiraj.png";
import aditya from "../../assets/members/aditya.png";
import adhikari from "../../assets/members/adhikari.png";
import yashee from "../../assets/members/yashee.png";



const members = [
  {
    name: "Subham Saha",
    dept: "2nd Yr, CSE",
    image: subham,
    instagram: "https://www.instagram.com/_u/subhsa__/",
  },
  {
    name: "Soham Goon",
    dept: "2nd Yr, ECE",
    image: soham,
    instagram: "https://www.instagram.com/_u/nomad_v.x/",
  },
  {
    name: "Pritam Das",
    dept: "2nd Yr, CSE",
    image: pritam,
    instagram: "https://www.instagram.com/_u/mine_pritam/",
  },
  {
    name: "Rupanjan Roy",
    dept: "2nd Yr, EE",
    image: rupanjan,
    instagram: "https://www.instagram.com/_u/roy_rupanjan005",
  },
  {
    name: "Ayan Kulodhyay",
    dept: "2nd Yr, ME",
    image: ayan,
    instagram: "https://www.instagram.com/_u/_aayan_.7._",
  },
  {
    name: "Tothagoto Kalsar",
    dept: "2nd Yr, ME",
    image: tathagatha,
    instagram: "https://www.instagram.com/_u/tkalsar",
  },
  {
    name: "Shabnur Mallick",
    dept: "2nd Yr, EE",
    image: shabnur,
    instagram: "https://www.instagram.com/_u/shabnur_mallick_/",
  },
  {
    name: "Koyel Bhui",
    dept: "2nd Yr, CE",
    image: koyel,
    instagram: "https://www.instagram.com/_u/bhui_koyel_02/",
  },
  {
    name: "Driti Ghosh",
    dept: "2nd Yr, EE",
    image: driti,
    instagram: "https://www.instagram.com/_u/dritz.seno/",
  },
  {
    name: "Sampritee Adhikari",
    dept: "2nd Yr, ECE",
    image: adhikari,
    instagram: "https://www.instagram.com/_u/sampriti.__________",
  },
     {
    name: "Rishiraj Das Ghosh",
    dept: "2nd Yr, ECE",
    image: rishiraj,
    instagram: "https://www.instagram.com/_u/__.r.d.g.__/",
  },
  {
    name: "Aditya Dey",
    dept: "2nd Yr, ME",
    image: aditya,
    instagram: "https://www.instagram.com/_u/adityax141/",
  },
  
  {
    name: "Papiya Banik",
    dept: "2nd Yr, CSE",
    image: papiya,
    instagram: "https://www.instagram.com/_u/papiyabanik_22/",
  },
  {
    name: "Biswajit Sarkar",
    dept: "2nd Yr, EE",
    image: biswajit,
    instagram: "https://www.instagram.com/_u/biswajit_sarkar170904/",
  },
  {
    name: "MD NAHIDUZZAMAN",
    dept: "2nd Yr, CSE",
    image: nahid,
    instagram: "https://www.instagram.com/_u/nah.id9046/",
  },
  {
    name: "Suman Mondal",
    dept: "2nd Yr, CSE",
    image: suman,
    instagram: "https://www.instagram.com/_u/sumanmondal4135/",
  },
  {
    name: "Sampreety Swarnakar ",
    dept: "2nd Yr, ECE",
    image: sampritiy,
    instagram: "https://www.instagram.com/_u/koli.forever/",
  },
  {
    name: "Shanti Gopal Mondal ",
    dept: "2nd Yr, ME",
    image: shanti,
    instagram: "https://www.instagram.com/_u/shanti_gopal_mondal_103/",
  },
  {
    name: "Rimpa Koley",
    dept: "2nd Yr, ME",
    image: rimpa,
    instagram: "https://www.instagram.com/_u/rimpakoley3030/",
  },
  {
    name: "Pial Saha",
    dept: "2nd Yr, ECE",
    image: pial,
    instagram: "https://www.instagram.com/_u/sppial17/",
  },
  {
    name: "Kumar Abhijit Bag ",
    dept: "2nd Yr, ME",
    image: kumar,
    instagram: "https://www.instagram.com/_u/kumar_abhijit.9/",
  },
  {
    name: "Md Mahja Karim",
    dept: "2nd Yr, CE",
    image: mahaja,
    instagram: "https://www.instagram.com/_u/lucky.exist/",
  },
  {
    name: "Anusua Neogi",
    dept: "2nd Yr, CSE",
    image: anusana,
    instagram: "https://www.instagram.com/_u/alluring_silence_8646/",
  },
  {
    name: "Pritismay Halder",
    dept: "2nd Yr ,CSE",
    image: pritish,
    instagram: "https://www.instagram.com/_u/_pritish_2005_",
  },
   {
    name: "Niroj Mahatha",
    dept: "2nd Yr, ECE",
    image: niroj,
    instagram: "https://www.instagram.com/_u/mahatha____sidhan/",
  },
  {
    name: "Minali Singh",
    dept: "2nd Yr, EE",
    image: minali,
    instagram: "https://www.instagram.com/_u/minali__singh/",
  },
  {
    name: "Farhat Rahaman",
    dept: "2nd Yr, CE",
    image: farhat,
    instagram: "https://www.instagram.com/_u/farhat_rahaman/",
  },
  {
    name: "Somyajit Nayak",
    dept: "2nd Yr, ECE",
    image: nayak,
    instagram: "https://www.instagram.com/_u/somyajit698",
  },
  {
    name: "Bidisha Mondal",
    dept: "2nd Yr, EE",
    image: bidisha,
    instagram: "https://www.instagram.com/_u/bidisha6786/",
  },
  {
    name: "Umang Burnwal",
    dept: "2nd Yr, ECE",
    image: umang,
    instagram: "https://www.instagram.com/_u/_umang_2024/",
  },
  {
    name: "Rishita Das",
    dept: "2nd Yr, EE",
    image: rishita,
    instagram: "https://www.instagram.com/_u/twilight_aura___/",
  },
  {
    name: "Dipayan Das",
    dept: "2nd Yr, ECE",
    image: dipayan,
    instagram:"https://www.instagram.com/_u/itsdipayanhere/",
  },
  {
    name: "Anurag Mukherjee",
    dept: "2nd Yr, ECE",
    image: anurag,
    instagram: "https://www.instagram.com/_u/an1rag/",
  },
  
  {
    name: "Rupak Dey",
    dept: "2nd Yr, ME",
    image: rupak,
    instagram: "https://www.instagram.com/_u/clapton_rupak/",
  },
  {
    name: "Arkadip Debnath",
    dept: "2nd Yr, ME",
    image: arkadip,
    instagram: "https://www.instagram.com/_u/a_non_ymo_us_/",
  },
  {
    name: "Anirban Biswas",
    dept: "2nd Yr, ME",
    image: anirban,
    instagram: "https://www.instagram.com/_u/anirban_biswas06/",
  },
  {
    name: "Snehashis Ghosh ",
    dept: "2nd Yr, EE",
    image: snehasish,
    instagram: "https://www.instagram.com/_u/mr_shinchan_editzs/",
  },
  {
    name: "Harasundar Patra",
    dept: "2nd Yr ,ME",
    image: harasundar,
    instagram: "https://www.instagram.com/_u/harasundar_/",
  },
  
  {
    name: "Arnab Bar",
    dept: "2nd Yr, CE",
    image: arnab,
    instagram: "https://www.instagram.com/_u/arnab_ar5/",
  },
 
  {
    name: "Taukir Reja",
    dept: "2nd Yr, CSE",
    image: taukir,
    instagram: "https://www.instagram.com/_u/abd_reja123/",
  },
  {
    name: "Arindam Sen",
    dept: "2nd Yr, ME",
    image: arindam,
    instagram: "https://www.instagram.com/_u/arindamsen2024/",
  },
  {
    name: "Mamun Sk",
    dept: "2nd Yr, CSE",
    image: mamun,
    instagram: "https://www.instagram.com/_u/mamun_sk_/",
  },
  {
    name: "Mainak Paul",
    dept: "2nd Yr, ME",
    image: mainak,
    instagram: "https://www.instagram.com/_u/zen.x_mainak/",
  },
 
  
  {
    name: "AYUSH  PATWA",
    dept: "2nd Yr, CE",
    image: ayush,
    instagram: "https://www.instagram.com/_u/shades.of.ayu_/",
  },
  {
    name: "Somesh Sen",
    dept: "2nd Yr, ME",
    image: somesh,
    instagram: "https://www.instagram.com/_u/senchronizing/",
  },
  {
    name: "Karan Das",
    dept: "2nd Yr, ECE",
    image: karan,
    instagram: "https://www.instagram.com/_u/k_a_r_a_n_apd/",
  },
  {
    name: "Rikta Mandal",
    dept: "2nd Yr, CSE",
    image: rikta,
    instagram: "https://www.instagram.com/_u/_rikta____/",
  },
  {
    name: "Mandira Seal",
    dept: "2nd Yr, CSE",
    image: mandira,
    instagram: "https://www.instagram.com/_u/diraslays/",
  },
  {
    name: "Barik Alam",
    dept: "2nd Yr, EE",
    image: barik,
    instagram: "https://www.instagram.com/_u/b_a_r_i_k_a_l_a_m_99/",
  },
  {
    name: "Archak Banerjee",
    dept: "2nd Yr, ECE",
    image: archak,
    instagram: "https://www.instagram.com/_u/banerjeearchak5/",
  },
  {
    name: "Diya Debnath",
    dept: "2nd Yr, EE",
    image: diya,
    instagram: "https://www.instagram.com/_u/d_i_y_a_103/",
  },
  {
    name: "Prasenjit Bose",
    dept: "2nd Yr, CSE",
    image: prasenjit,
    instagram: "https://www.instagram.com/_u/prosen_the_main_character/",
  },
  
  {
    name: "Anwesha Ghosh",
    dept: "2nd Yr, CSE",
    image: annwesha,
    instagram: "https://www.instagram.com/_u/anwesha_._ghosh/",
  },
  {
    name: "Eyashee Sarkar",
    dept: "2nd Yr, EE",
    image: yashee,
    instagram: "https://www.instagram.com/_u/august.shine",
  },
  {
    name: "Nilesh Paul",
    dept: "2nd Yr, EE",
    image: nilesh,
    instagram: "https://www.instagram.com/_u/_nilesh_official_2006",
  },
  {
    name: "Archisman Ghatak",
    dept: "2nd Yr, CE",
    image: archisman,
    instagram: "https://www.instagram.com/_u/archie__05",
  },
  {
    name: "Sayan Debnath",
    dept: "2nd Yr, CSE",
    image: sayan,
    instagram: "https://www.instagram.com/_u/sayandebnath482",
  },
];

const Member = () => {
  const borderRefs = useRef([]);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
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
    borderRefs.current.forEach((border) => {
      gsap.to(border, {
        rotate: 360,
        duration: 6,
        ease: "linear",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    });
  }, []);

   const splitWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-2">
        {word}
      </span>
    ));
  };

  return (
    <div className=" bg-black text-white py-24 px-6 font-mono " >
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 ref={headingRef} className="font-bold text-4xl md:text-5xl text-blue-200">
          {splitWords("CORE TEAM MEMBERS")}
        </h1>

        <p ref={paraRef} className="mt-6 text-gray-300 text-lg md:text-xl">
          Actively contributed to the successful planning and execution of the
          CROESO 7.0 party
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="relative w-full max-w-[180px] h-[280px] rounded-3xl overflow-hidden"
          >
            {/* Rotating Neon Border Layer */}
            <div
              ref={(el) => (borderRefs.current[index] = el)}
              className="absolute inset-0 rounded-3xl"
            >
              <div
                className="absolute inset-0 rounded-3xl 
                              bg-gradient-to-r 
                              from-transparent 
                              via-cyan-400 
                              to-transparent 
                              blur-md opacity-90"
              />
            </div>

            {/* Inner Card */}
            <div className="absolute inset-[3px] bg-black rounded-3xl p-8 text-center border border-gray-800">
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-700"
              />

              {/* Name */}
              <h3 className="mt-6 text-xs font-semibold text-yellow-300">
                {member.name}
              </h3>

              {/* Department */}
              <p className="text-white text-sm mt-1">{member.dept}</p>

              {/* Social Icons */}
              <div className="flex justify-center items-center gap-3 mt-6 text-green-400">
                <span className="text-sm text-gray-400">Connect</span>

                <a href={member.instagram} target="_blank"
  rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <FaInstagram className="text-lg hover:scale-125 transition duration-300 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;