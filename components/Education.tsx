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
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-y-scroll"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                unoptimized
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
                <div className="pt-4 relative px-4 ">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-800 text-xs md:text-sm  px-4 lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-hidden dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] overflow-y-scroll "
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
            <div className="flex gap-4 flex-col md:flex-row items-center rounded-2xl">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                unoptimized
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-2xl object-cover object-top"
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
                  className="text-neutral-600 dark:text-neutral-400 text-center overflow-y-scroll md:text-left"
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
    description: "Business Administration & Computer Science",
    title: "Wilfred Laurier University",
    src: "https://media.licdn.com/dms/image/v2/D560BAQFN_M3sxMrMFQ/company-logo_200_200/company-logo_200_200/0/1666188296925/wilfrid_laurier_university_logo?e=1755734400&v=beta&t=7Z1ivDOs4uLa0thC34Vlk0dOed3EDcfO_-qZ_G48Bi8",
    ctaText: "Visit",
    ctaLink: "https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/index.html",
    content: () => null,
  },
  {
    description: "OSSD",
    title: "Martingrove Collegiate Institute",
    src: "https://kavanabeyratne.com/MCILogo.jpg",
    ctaText: "Visit",
    ctaLink: "https://sites.google.com/tdsb.on.ca/martingroveci/mci-home",
    content: () => {
      return (
        <div>
          <p>
            <strong>Martingrove Collegiate Institute</strong> — Toronto, ON  
            <br />
            <em>Student Leader | Valedictorian | AP Scholar</em>
          </p>
          <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
            <li><strong>Student Council President</strong> – Led student government and organized school-wide initiatives.</li>
            <li><strong>Valedictorian</strong> – Delivered <a href="https://www.youtube.com/live/WS1tjSfj1JE?si=DaoGphPUu-0NXgob&t=8270" target="_blank" rel="noopener noreferrer">graduation speech</a> for the Class of 2025.</li>
            <li><strong>AP Scholar</strong> – Recognized for high performance in Advanced Placement coursework.</li>
            <li><strong>Founder & Co-President, DECA Chapter</strong> – Established and led the school's first DECA program.</li>
            <li><strong>Audio Technician, TEDxMartingrove</strong> – Managed technical audio for independently organized TEDx events.</li>
            <li><strong>Web Head, School Newspaper</strong> – Oversaw digital content and publishing operations.</li>
            <li><strong>Captain, Ultimate Frisbee Team</strong> – Led team development and tournament strategy.</li>
            <li><strong>Concert Band Musician</strong> – Regular performer at school and community events.</li>
            <li><strong>Disability Advocacy & Inclusion Committee</strong> – Received Honorable Mention for advancing accessibility and equity.</li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "HarvardX",
    title: "CS50L",
    src: "https://kavanabeyratne.com/cs50l.png",
    ctaText: "Visit",
    ctaLink: "https://courses.edx.org/certificates/439f9ff49d2e4d6eab0330cb06a441af",
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
    src: "https://kavanabeyratne.com/shad.png",
    ctaText: "Visit",
    ctaLink: "https://www.shad.ca/",
    content: () => {
      return (
        <p>
          Shad Canada is a prestigious enrichment program that brings together high-achieving high school students 
          from across the country for a month-long immersive experience. Focused on STEAM (Science, Technology, 
          Engineering, Arts, and Mathematics), entrepreneurship, and leadership, Shad provides students with hands-on 
          workshops, inspiring lectures, and the opportunity to collaborate on innovative projects. It’s a life-changing 
          program designed to foster creativity, critical thinking, and leadership skills.
        </p>
      );
    },
  },
];
