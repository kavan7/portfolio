
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconBrain,
  IconClipboardCopy,
  IconClockCancel,
  IconFileBroken,
  IconFileSmile,
  IconGuitarPick,
  IconMoodSmile,
  IconMusic,
  IconPlane,
  IconSignature,
  IconTableColumn,
  IconTimeDuration90,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import { link } from "fs";
import Link from "next/link";
const Personal = () => {
  return (
    <div className='mt-[100px]'><h1 className=" uppercase text-wider text-5xl text-white  font-black mb-3 text-center ">         
    <hr className='mt-[100px] mb-[100px]'/> 
    My <span className="text-[#315930] ">Life</span>
    </h1>
    <h1 className=" uppercase text-wider text-2xl tracking-widest  font-light mb-[50px] text-center ">         
   
    <span className="text-[#6e796e] ">COMING SOON</span>
    </h1>
    <BentoGrid className="max-w-5xl mx-auto mb-[100px]">
      {items.map((item, i) => (
          <Link href={`/${item.link}`}>
      
        <BentoGridItem
         
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
        
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
     </Link>  ))}
     
    </BentoGrid>
   
 
   </div>
  )
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    link: "guitar",
    title: "The Birth of a Guitarist",
    description: "How Childhood Choices Ignite Lifelong Passions",
    header: <Image unoptimized src={`https://kavanabeyratne.com/guitar.jpg`} alt="guitar" width={300} height={100} className=" flex h-[190px] rounded-2xl border border-neutral-800" />,
    icon: <IconMusic className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Exploring Diverse Religions in a Connected World",
    description: "Opportunities to learn about and appreciate diverse religious beliefs.",
    header: <Skeleton />,
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Dream Vacation",
    description: "Discovering the beauty of the world.",
    header: <Skeleton />,
    icon: <IconPlane className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of a Smile",
    description:
      "My favorite lesson from 'How to Win Friends and Influence People'.",
    header: <Skeleton />,
    icon: <IconMoodSmile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "'What I Have Lived For'",
    header: <Skeleton />,
    icon: <IconClockCancel className="h-4 w-4 text-neutral-500" />,
  },

];

export default Personal