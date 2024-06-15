import './Hero.css';
import { TypewriterEffectSmoothDemo } from './Typewriter';
import { WavyBackground } from '../ui/vortex';

export const AiMan = () => {
  return (
    <div className="hero-container absolute bg-[#0e101a]  overflow-hidden  antialiased relative flex flex-col  [perspective:1000px] [transform-style:preserve-3d]">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <TypewriterEffectSmoothDemo />
      </WavyBackground>
    </div>
  );
};
