import { useState, useEffect } from 'react';
import Header from './components/customComponents/Header';
import { AiMan } from './components/customComponents/AiMan';
import Home from './Hero';

function App() {
  const [currentTab, setCurrentTab] = useState(false);

  useEffect(() => {
    // Add the gtag script dynamically
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-R5BS8BT6YL';
    document.head.appendChild(script1);

    // Add the gtag initialization script
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-R5BS8BT6YL');
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup script tags if the component unmounts
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === true ? <AiMan /> : <Home />}
    </>
  );
}

export default App;
