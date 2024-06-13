import './Hero.css'
// import { Reveal } from "./Reveal";
// import { About } from "./About";
// import { ThreeDCardDemo } from "./3d-cardComponent";
// import { BackgroundBeams } from "../ui/background-beams";
// import { Experience } from "./Experience";
// import { ChatInterface } from "./ChatWithMe";
// import { SparklesPreview } from './SparklesBackdrop';
// import { PlaceholdersAndVanishInputDemo } from './SearchBoxAI';
import { TypewriterEffectSmoothDemo } from './Typewriter';
// import { motion } from 'framer-motion';
// import { SparklesCore } from '../ui/Sparkles';
import { WavyBackground } from "../ui/vortex";


export const AiMan = () => { 
   return (

      <div className="hero-container absolute bg-[#0e101a]  overflow-hidden  antialiased relative flex flex-col  [perspective:1000px] [transform-style:preserve-3d]">


        <WavyBackground className="max-w-4xl mx-auto pb-40">
        <TypewriterEffectSmoothDemo/>
      {/* <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p> */}
    </WavyBackground>


      </div>           
  );
};

