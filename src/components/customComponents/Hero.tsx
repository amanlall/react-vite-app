import './Hero.css'
import { Reveal } from "./Reveal";
import { About } from "./About";
import { ThreeDCardDemo } from "./3d-cardComponent";
// import { BackgroundBeams } from "../ui/background-beams";
import { Experience } from "./Experience";
// import { ChatInterface } from "./ChatWithMe";

export const Hero = () => { 
   return (
    
    <div className="background absolute overflow-hidden  antialiased relative flex flex-col  [perspective:1000px] [transform-style:preserve-3d]">
      <Reveal children={<div className="greeting"><h2 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Hey, I'm Aman</h2></div>}/>
      <Reveal children={<div className="aboutme font-sans font-bold">I'm a <span className="text-curtainColor">Full Stack Developer</span></div>}/>
      <Reveal children={<div className="someinfosection font-sans font-bold">I've spent the last 5 years building and scaling software for some pretty cool companies. I also love to discuss ideas and brainstome solutions!</div>}/>
      <About/>
      <Reveal children={ <div className="ml-10 text-[#fdfdfd] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] xl:text-3xl font-bold pb-1 font-sans font-bold">PROJECTS<span className='text-curtainColor'>.</span></div>}/>
      <div className="flex"><ThreeDCardDemo /></div>
      <div className="flex"><Experience/></div>  
,
    </div>

  );
};

