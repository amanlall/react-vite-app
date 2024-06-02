import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import './Hero.css'
import { Reveal } from "./Reveal";
import { About } from "./About";
import { ThreeDCardDemo } from "./3d-cardComponent";
import { BackgroundBeams } from "../ui/background-beams";
import { Experience } from "./Experience";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

useEffect(() => {
console.log(scrollYProgress)
}, [scrollYProgress])

  return (
    <div
      className="hero-container absolute bg-[#0e101a]  overflow-hidden  antialiased relative flex flex-col  [perspective:1000px] [transform-style:preserve-3d]"
    >
          <BackgroundBeams/>

      <Reveal children={<div className="greeting">
        Hey, I'm <span className="brandshadow text-[#f9b17a]">Aman.</span>
      </div>}/>
      <Reveal children={<div className="aboutme">
        I'm a <span className="text-[#f9b17a] ">Full Stack Web Developer</span>
      </div>}/>
      <Reveal children={<div className="someinfosection">
      I've spent the last 5 years building and scaling software for some pretty cool companies. 
      I also love to discuss ideas (incase you've got an empty canvas layin' around 🎨). Let's connect!
      </div>}/>

            {/* <Reveal children={<About/>}/> */}
      <About/>
      <div className="px-10 text-white text-3xl font-bold">PROJECTS<span className="text-[#f9b17a] ">.</span></div>
<div className="flex">
<Reveal children={<ThreeDCardDemo />}/>
<Reveal children={<ThreeDCardDemo />}/>

</div>
<div className="flex">
<Reveal children={<ThreeDCardDemo />}/>
<Reveal children={<ThreeDCardDemo />}/>

</div>

<div className="flex">
<Experience/>
</div>

           
</div>

  );
};

