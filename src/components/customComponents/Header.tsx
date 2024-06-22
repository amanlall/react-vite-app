import React from 'react';

import './button.scss';

import ChatGPTTypewriterEffect from 'react-chatgpt-typewriter';
import { motion } from 'framer-motion';


const Header =  ( { setCurrentTab } :any)  => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `Aman_Lall_Deloitte_FullStack.pdf`;
    link.download = 'Aman_Lall_Deloitte_FullStack.pdf';
    document.body.appendChild(link); // Append to body to make it work in all browsers
    link.click();
    document.body.removeChild(link); // Clean up
  };

  return (
    
    <header className="header fixed top-0 left-0 w-full py-4 flex justify-between items-center z-50">

      <div className="flex items-left">
        <img src="signature.svg" alt="logo" onClick={() => setCurrentTab((prevState: boolean) => !prevState)}  className="px-2 m-2 mr-4 h-5 w-20 cursor-pointer"  />   
      
        <div className="text-xs sm:text-xs px-4 h-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text dark:text-transparent sm:text-sm cursor-pointer flex items-center justify-center" onClick={() => setCurrentTab((prevState: boolean) => !prevState)} >

              <ChatGPTTypewriterEffect
                        delay={50}
                        text="Chat with AI"
                        hideWhenFinished
                      />
       
       <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.8, type: "spring", stiffness: 200, duration: 0.5 }}
        >
          <img
            src="assistant.gif"
            alt="loading"
            className="w-10 h-15 md:w-10 md:h-10 lm-0 mr-0"
          />
        </motion.div>


        </div> 
       
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