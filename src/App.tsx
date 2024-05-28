// import { useState } from 'react'
import './App.css'
import
{  Divider }
from
"antd"

import {ThreeDCardDemo} from "./components/customComponents/3d-cardComponent"
// import { HeroParallax } from './components/ui/hero-parallax'
// import { LampDemo } from './components/ui/lamp'
// import { TracingBeamDemo } from './components/customComponents/TracingBeam'
// import { TextGenerateEffect} from './components/ui/text-generate-effect'
import {BackgroundGradientAnimation}  from './components/ui/background-gradient-animation'
import { NavbarDemo } from './components/customComponents/NavBar'
// import { BackgroundGradientAnimationDemo } from './components/customComponents/GradientBackground'
// import {MovingBorderDemo} from './components/customComponents/MovingBorder'
import { PlaceholdersAndVanishInputDemo } from './components/customComponents/SearchBoxAI'
// import { BackgroundBeams } from './components/ui/background-beams'
import SkillCard from './components/customComponents/SkillCard'

function App() {

  return (

    <BackgroundGradientAnimation>
      {/* <BackgroundBeams/> */}

    <div className="absolute z-50 inset-0  items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl overflow-y-auto">

    <div className="text-base"> 
          <NavbarDemo ></NavbarDemo> 
        </div>
        <div className='py-32'>

        <PlaceholdersAndVanishInputDemo />

        </div>

        <div className="flex  space-x-8 space-y-1">
          <Divider type='vertical'></Divider>
          <ThreeDCardDemo></ThreeDCardDemo>
        

        </div>
        <SkillCard/>

     
        <p className='text-md'> Loremmmmm ipshum</p>
    </div>
    
    </BackgroundGradientAnimation>

    

  )
}



export default App
