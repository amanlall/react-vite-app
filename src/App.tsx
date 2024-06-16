import { useState } from 'react';
import Header from './components/customComponents/Header';
import { AiMan } from './components/customComponents/AiMan';
import Home from './Hero';


function App() {
  const [currentTab, setCurrentTab] = useState(false);

  return (
    <>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === true ? <AiMan /> : <Home />}

    </>
  );
}

export default App;
