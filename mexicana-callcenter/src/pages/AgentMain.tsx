import { useState, useEffect } from 'react';
import PageStructure from "../components/PageStructure";
import HomeButton from "../components/HomeButtons";
import GradientButton from "../components/CallingButton";  // Ensure this is imported correctly

const MainContent = () => {
  const [buttonMode, setButtonMode] = useState('workspace');

  useEffect(() => {
    const timer = setInterval(() => {
      setButtonMode(prevMode => prevMode === 'workspace' ? 'calling' : 'workspace');
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center mt-4">
        <div className="p-8 bg-gray-200 border-black border-10 home-button rounded-xl">
          <div className="grid max-w-2xl gap-8 mx-auto md:grid-cols-2">
            <HomeButton icon="/MetricsSymbol.svg" title="My Metrics" subtitle="See the real time metrics for all the agents" />
            <HomeButton icon="/MetricsSymbol.svg" title="My Badges" subtitle="See all the awards and badges earned" />
            <HomeButton icon="/MetricsSymbol.svg" title="Agent Spotlight" subtitle="Weekly best agents" />
            <HomeButton icon="/MetricsSymbol.svg" title="Take a break" subtitle="Go to take a break to clear the mind" />
          </div>
        </div>
        <GradientButton mode={buttonMode} />  
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <PageStructure title="Home">
      <MainContent />
    </PageStructure>
  );
};

export default HomePage;
