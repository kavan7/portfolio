"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Link from "next/link";
//@ts-ignore
import { LoopPingPong } from "three";
export function Education() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
 
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
 
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
 
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
 
  useOutsideClick(ref, () => setActive(null));
 
  return (
    <>
     <div id="education" className="bg-black">
      <AnimatePresence >
      <h1 className=" uppercase text-wider text-5xl text-white  font-black mb-[100px] mt-[250px] text-center " id="">          
        My <span className="text-[#315930]">Learning</span>
        </h1>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
 
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
 
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-900 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
      <div className="flex flex-col items-center">
      <motion.div
    animate={{
      y: [-40, -90, -40],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      //@ts-ignore
      repeatType: LoopPingPong,
    }}
    className="mt-[150px] "
  >
    <Link
      href="#projects"
      className="flex items-center gap-2"
  
    >
      {/* Remove the hidden class */}
      <svg
        data-accordion-icon
        className="sm:block w-16 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5 5 1 1 5"
        />
      </svg>
    </Link>
    <Link
      href="#projects"
      className="flex items-center gap-2"
   scroll
    >
      <svg
        data-accordion-icon
        className=" w-16 rotate-180 shrink-53"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5 5 1 1 5"
        />
      </svg>
    </Link>
  </motion.div>
  </div>
  </div>
    </>
  );
}
 
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
 
const cards = [
  {
    description: "AP Student",
    title: "Martingrove Collegiate Institute",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/60/MCILogo.jpg",
    ctaText: "Visit",
    ctaLink: "https://sites.google.com/tdsb.on.ca/martingroveci/mci-home",
    content: () => {
      return (
        <p>
        At <strong>Martingrove Collegiate Institute</strong>, I’m the President of the Student Council, 
        Co-President and founder of our DECA chapter, and serve as the Audio Technician for TEDx events. 
        As the Web Head of the school newspaper, I manage its online presence, and I also lead as the Captain 
        of the Ultimate Frisbee team while playing in the concert band. As an AP student, I thrive in an 
        accelerated learning environment that challenges me to grow both academically and in my extracurricular pursuits.
      </p>
      );
    },
  },
  {
    description: "HarvardX",
    title: "CS50L",
    src: "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/CS50L_pll.png?itok=ap9xcCNT",
    ctaText: "Visit",
    ctaLink: "https://vrealauth.com",
    content: () => {
      return (
        <p>
    <strong>CS50L: Introduction to Computer Science for Lawyers</strong> is a specialized course offered by 
    Harvard University, tailored to bridge the gap between law and technology. The course covers key computer 
    science concepts without requiring prior technical knowledge. One lecture that truly stood out for me was 
    on cryptography, where I gained a deep understanding of how encryption and digital security play a critical 
    role in protecting data and ensuring privacy—an essential aspect in both law and technology today. This 
    course has equipped me with valuable insights into how tech and legal frameworks intersect.
  </p>
      );
    },
  },
  {
    description: "OTU '24",
    title: "Shad Canada",
    src: "https://www.shad.ca/wp-content/uploads/2023/08/Logo-footer.png",
    ctaText: "Visit",
    ctaLink: "https://www.shad.ca/",
    content: () => {
      return (
        <p>
 Shad Canada is a prestigious enrichment program that brings together high-achieving high school students from across the country for a month-long immersive experience. Focused on STEAM (Science, Technology, Engineering, Arts, and Mathematics), entrepreneurship, and leadership, Shad provides students with hands-on workshops, inspiring lectures, and the opportunity to collaborate on innovative projects. It’s a life-changing program designed to foster creativity, critical thinking, and leadership skills.
  </p>
      );
    },
  },
 
];