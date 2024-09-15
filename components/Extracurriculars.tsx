"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Student Administrative Council",
    description: "As the president of Martingrove CI's Student Administrative Council, I’ve had the incredible opportunity to lead and collaborate with an amazing team dedicated to shaping memorable and impactful experiences for our student body. From planning major events like semi-formals and proms to organizing spirit days and charity initiatives, this role has not only allowed me to strengthen my leadership and communication skills but also helped me contribute to building a more connected, enthusiastic, and supportive school community. It’s been a rewarding experience that continues to prepare me for future leadership opportunities."
      ,
    content: (
      <div className="h-full w-full rounded-2xl  flex items-center justify-center text-white">
        <Image src={`/sacprez.png`} alt="sac" width={500} height={500}/>
      </div>
    ),
  },
  {
    title: "Sr. Ultimate Frisbee",
    description:
      "As the captain of the senior ultimate frisbee team at Martingrove CI, I get to lead an awesome group of athletes who push each other to be better every day. It’s all about teamwork, strategy, and giving it our all on the field. This role has helped me step up as a leader and build tight bonds with my teammates as we chase our goals together.",
    content: (
      <div className="h-full rounded-2xl w-full  flex items-center justify-center text-white">
        <Image
          src="/ultimate.png"
          width={300}
          height={300}
          className="h-full w-full -rotate-90 object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "DECA",
    description:
      "As the founder and co-president of Martingrove CI's DECA chapter in Toronto, I’ve been responsible for managing all chapter operations, from coordinating members to staying in touch with DECA officers. Leading this chapter has given me the chance to help students develop their business skills while building a strong, active community.",
    content: (
      <div className="h-full rounded-2xl w-full  flex items-center justify-center text-white">
      <Image
        src="/deca.png"
        width={300}
        height={300}
        className="h-full w-full -rotate-90 object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Concert Band",
    description:
      "As an alto saxophonist in Martingrove CI's concert band, I’ve had the opportunity to contribute to our ensemble's dynamic sound while developing my musical skills. Being part of the band has taught me the importance of collaboration and discipline, as we work together to create great performances.",
    content: (
      <div className="h-full rounded-2xl w-full  flex items-center justify-center text-white">
      <Image
        src="/band.png"
        width={300}
        height={300}
        className="h-full w-full  object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
];
const Extracurriculars = () => {
  return (
 
    <div className='mt-[100px]'><h1 className=" uppercase text-wider text-5xl text-white  font-black mb-[50px] text-center ">         
    <hr className='mt-[100px] mb-[100px]'/> 
    My <span className="text-[#315930] ">Extracurriculars</span>
    </h1>
    <div className="mt-[30px]">
    <StickyScroll content={content} />
    </div>
    </div>
  )
}

export default Extracurriculars