

import { Education } from "@/components/Education";
import Experience from "@/components/Experience";
import Extracurriculars from "@/components/Extracurriculars";
import { AuroraBackgroundDemo } from "@/components/Hero";
import Personal from "@/components/Personal";
import {AppleCardsCarouselDemo} from "@/components/Projects";
import { AuroraBackground } from "@/components/ui/aurora-background";


export default function Home() {
  return (
    <main className="">

     <AuroraBackgroundDemo/>

      <Education/>
    
      <div  className="mb-[300px]"/>
     <AppleCardsCarouselDemo/>
     <Experience/>
     <Extracurriculars/>
     <Personal/>

    </main>
  );
}
