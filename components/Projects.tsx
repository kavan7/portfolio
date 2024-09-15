"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
 
    <div className='mt-[100px]' ><h1 className=" uppercase text-wider text-5xl  text-white font-black mb-[50px] text-center ">         
    <hr className='mt-[100px] mb-[100px]'/> 
    My <span className="text-[#315930] " id="projects">Projects</span>
    </h1>

      <Carousel items={cards} />
    </div>
  );
}

const DummyContentVreal = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
                
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto"><br/><Link href={`https://vrealauth.com/about`} className="mb-10 text-zinc-300">CLICK TO VISIT</Link><br/>
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Verifiying the media you are exposed to.<br/><br/> 
              </span>{" "}
              
              Vreal is used to authenticate different kinds of media. It ensures the media you are seeing is authorized. It uses digital signature technology to authenticate any type of file.
<br/><br/>
You can sign a file, and distribute to anybody, where users can verify that the signed file has not been tampered with.

Vreal also has the potential to eliminate any false media you will see. With the uprising use of AI , Vreal can prevent the malicious exploitations of the technology.
            </p>
            <Image
              src="/vrealauth.png"
              alt="Macbook mockup from Aceternity UI"
              height="1000"
              width="1000"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto rounded-2xl mt-10 object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContentRaj = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
                
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200"><br/><Link href={`https://rajgilllaw.com/`} className="mb-10 text-zinc-300">CLICK TO VISIT</Link><br/>
                Raj Gill Law's official website.
              </span>{" "}
              <br/><br/>
              During my internship at Raj Gill Law, I gained invaluable experience in the legal field, learning a wide array of professional skills. Recognizing the firm's need for a modern digital presence, I leveraged my software development expertise to pitch and create a custom website. The firm was impressed with the final product and ultimately decided to purchase it, allowing me to directly contribute to their operations while combining my passion for technology with legal work. This experience ultimately led to a remote permanent role at the firm.   </p>
            <Image
              src="/rajgilllaw.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full rounded-2xl mx-auto mt-3 object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContentCodeling = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
                
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200"><br/><Link href={`https://codeling.ca`} className="mb-10 text-zinc-300">CLICK TO VISIT</Link><br/>
                Codeling Academy - Providing the next generation with essential programming skills
              </span>{" "}
              <br/><br/>
              Codeling thrives to create an environment where young minds are molded into learning programming concepts. It is essential we empower the next generation with the essential knowledge and skills they need for the future. 

Codeling's mission is to inspire and educate children through free, interactive, and engaging programming experiences through our platform. 

Codeling consists of a dedicated team of students who are technologists and enthusiasts passionate about teaching kids the wonders of coding. We understand that the digital world is rapidly evolving, and we aim to equip children with the tools they need to thrive in this dynamic environment.

The program is a year-round virtual class which takes place every weekend. Students will join and learn a new concept each week. They will also be able to apply their knowledge with an end-of-year project!</p>     <Image
              src="/codelingacademy.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full rounded-2xl mx-auto mt-10 object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContentBraindle = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
                
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200"><br/><Link href={`https://braindle.vercel.app`} className="mb-10 text-zinc-300">CLICK TO VISIT</Link><br/>
          
              </span>{" "}
              <br/><br/>
          </p>     <Image
              src="/braindleread.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full rounded-2xl mx-auto mt-10 object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContentBeacon = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
                
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200"><br/><Link href={`https://martingrovebeacon.com`} className="mb-10 text-zinc-300">CLICK TO VISIT</Link><br/>
          
              </span>{" "}
              <br/><br/>
          </p>     <Image
              src="/thebeacon.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full rounded-2xl mx-auto mt-10 object-contain"
            />
          </div>
        );
      })}
    </>
  );
};


const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
                
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Verify your media.",
    title: "Vreal ",
    src: "/vreal.png",
    content: <DummyContentVreal />,
  },
  {
    category: "Raj Gill Law ",
    title: "Raj Gill Law",
    src: "/rajgill.png",
    content: <DummyContentRaj />,
  },
  {
    category: "Product",
    title: "Codeling",
    src: "/codeling.png",
    content: <DummyContentCodeling />,
  },

  {
    category: "Product",
    title: "Braindle",
    src: "/braindle.png",
    content: <DummyContentBraindle />,
  },
  {
    category: "iOS",
    title: "The Beacon - School Newspaper",
    src: "/beacon.png",
        content: <DummyContentBeacon />,
  },
 
];
