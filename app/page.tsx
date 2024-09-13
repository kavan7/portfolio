

import { Education } from "@/components/Education";
import Experience from "@/components/Experience";
import Extracurriculars from "@/components/Extracurriculars";
import { AuroraBackgroundDemo } from "@/components/Hero";
import Personal from "@/components/Personal";
import {AppleCardsCarouselDemo} from "@/components/Projects";


export default function Home() {
  return (
    <main className="">
    
     <AuroraBackgroundDemo/>

      <Education/>
      <div id="education"/>
      <div  className="mb-[300px]"/>
     <AppleCardsCarouselDemo/>
     <Experience/>
     <Extracurriculars/>
     <Personal/>
    </main>
  );
}
