import React from 'react';
// import { Button } from "../ui/moving-border";
import './button.scss';

const Header =  () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `Aman_Lall_Deloitte_FullStack.pdf`;
    link.download = 'Aman_Lall_Deloitte_FullStack.pdf';
    document.body.appendChild(link); // Append to body to make it work in all browsers
    link.click();
    document.body.removeChild(link); // Clean up
  };
  return (
    <header className="header fixed top-0 left-0 w-full  py-4 flex justify-between items-center z-50">
      <div className="flex items-center">

        <img src="signature.svg" alt="logo" className="px-2 m-2 mr-4 h-5 w-22 " />        
      </div>
        <div>
        <button className="learn-more"  onClick={handleDownload}>
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