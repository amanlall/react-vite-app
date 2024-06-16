import './Hero.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Reveal } from './Reveal';
import { About } from './About';
import { Experience } from './Experience';
import { brandColours } from '../../utils/cn';

export const Hero = () => {
  return (
    <>
      <div className="App">


        <Parallax
          pages={3}
          style={{ top: '0', left: '0' }}
          className="animation"
        >
          
          {/* <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.8}>
            <div className="animation_layer parallax" id="manonmountain"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="jungle1"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-0.35}>
            <div className="animation_layer parallax"  id="scape"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <div className="animation_layer parallax" id="jungle3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.45}>
            <div className="animation_layer parallax" id="jungle4"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8}>
            <div className="animation_layer parallax" id="footer"></div>
          </ParallaxLayer> */}
          {/* <ParallaxLayer offset={1} speed={0.5}>
            <div className="animation_layer parallax" id="jungle1"></div>
          </ParallaxLayer> */}

          {/* <ParallaxLayer offset={1} speed={0.45}>
            <div className="animation_layer parallax" id="jungle2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <div className="animation_layer parallax" id="manonmountain"></div>
          </ParallaxLayer> */}
          {/* <ParallaxLayer offset={1} speed={0.45}>
            <div className="animation_layer parallax" id="artback"></div>
          </ParallaxLayer> */}

          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.8}>
            <div className="animation_layer parallax" id="manonmountain"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="jungle1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <div className="animation_layer parallax_demo" id="scape"></div>
          </ParallaxLayer>
          <div>
            <div className={`bg-[${brandColours['brown']}]`}>
              <Reveal
                children={
                  <div className="greeting">
                    <h2 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                      Hey, I'm Aman
                    </h2>
                  </div>
                }
              />
              <Reveal
                children={
                  <div className="aboutme text-[#848484] font-sans font-bold">
                    I'm a{' '}
                    <span className="text-curtainColor">
                      Full Stack Developer
                    </span>
                  </div>
                }
              />
              <Reveal
                children={
                  <div className="someinfosection font-sans font-bold">
                    I've spent the last 5 years building and scaling software
                    for some pretty cool companies. I also love to discuss ideas
                    and brainstome solutions!
                  </div>
                }
              />
              <About />
              <Reveal
                children={
                  <div className="ml-10 text-[#fdfdfd] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] xl:text-3xl font-bold pb-1 font-sans font-bold">
                    PROJECTS<span className="text-curtainColor">.</span>
                  </div>
                }
              />
              {/* <div className="flex"><ThreeDCardDemo /></div> */}
              <div className="flex">
                <Experience />
              </div>
            </div>
          </div>
        </Parallax>

        <div id="textblock">
          <p>Lorem</p>
        </div>

      </div>
    </>
  );
};
