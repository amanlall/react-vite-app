import './Hero.css'
import { Reveal } from "./Reveal";
import { About } from "./About";
import { ThreeDCardDemo } from "./3d-cardComponent";
import { BackgroundBeams } from "../ui/background-beams";
import { Experience } from "./Experience";

export const Hero = () => {  return (
    <div
      className="hero-container absolute bg-[#0e101a]  overflow-hidden  antialiased relative flex flex-col  [perspective:1000px] [transform-style:preserve-3d]"
    >
      <BackgroundBeams/>
      <Reveal children={<div className="greeting">
        Hey, I'm <span className="brandshadow text-[#f9b17a]">Aman.</span>
      </div>}/>
      <Reveal children={<div className="aboutme">
        I'm a <span className="text-[#f9b17a] ">Full Stack Developer</span>
      </div>}/>
      <Reveal children={<div className="someinfosection">
      I've spent the last 5 years building and scaling software for some pretty cool companies. 
      I also love to discuss ideas and brainstome solutions!
      </div>}/>

            {/* <Reveal children={<About/>}/> */}
      <About/>

      <Reveal children={ <div className="ml-10 text-[#fdfdfd] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] xl:text-3xl font-bold pb-1">PROJECTS<span className='text-[#f9b17a]'>.</span></div>}/>

      <div className="flex">
      <ThreeDCardDemo />
      </div>

      <div className="flex">
      <Experience/>
      </div>

           
</div>

  );
};

