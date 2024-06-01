import React from 'react';
import { Button } from "../ui/moving-border";
import './button.scss';
import { BackgroundBeams } from '../ui/background-beams';

const Header =  () => {
  return (
    <header className="header fixed top-0 left-0 w-full  py-4 flex justify-between items-center z-50">
{/* <BackgroundBeams/> */}

      <div className="flex items-center">
        <img src="signature.svg" alt="logo" className="px-2 m-2 mr-4 h-5 w-22 " />
        {/* <h1 className="text-white text-xl font-bold">Asasa</h1> */}
      </div>
        <div>
        <button className="learn-more ">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">Resume</span>
        </button>
        </div>
    </header>

  );
};

export default Header;