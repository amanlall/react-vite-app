import { useState } from 'react';

import Header from './components/customComponents/Header';
import { Hero } from './components/customComponents/Hero';
import { AiMan } from './components/customComponents/AiMan';

import './App.css';
function App() {
  const [currentTab, setCurrentTab] = useState(true);

  return (
    <>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === true ? <Hero /> : <AiMan />}

    </>
  );
}

export default App;
