
import { useState } from "react";
import Header from "./components/customComponents/Header"
import {Hero} from "./components/customComponents/Hero" 
import { AiMan } from "./components/customComponents/AiMan";
function App() {

  const [currentTab, setCurrentTab] =  useState(true);
  
  return (
  <>

<div className="h-screen" style={{ backgroundImage: `url("space.png")` }}>

<Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
{currentTab === true ? <Hero /> :<AiMan />}
</div>

  </>
  )
}



export default App
