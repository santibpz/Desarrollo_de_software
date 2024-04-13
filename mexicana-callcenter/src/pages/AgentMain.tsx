import { useState, useEffect } from 'react';
import PageStructure from "../components/PageStructure";
import HomeButton from "../components/HomeButtons";
import GradientButton from "../components/CallingButton";

const MainContent = () => {
  const [buttonMode, setButtonMode] = useState('workspace'); 

  useEffect(() => {
    // Set up a timer to toggle the buttonMode every 5 seconds
    const timer = setInterval(() => {
      setButtonMode(prevMode => prevMode === 'workspace' ? 'calling' : 'workspace');
    }, 10000); 

    return () => clearInterval(timer);
  }, []);

  const buttonText = buttonMode === 'workspace' ? "Workplace" : "Calling";
  const buttonSubtitle = buttonMode === 'workspace' ? "See the real time metrics for all the agents" : "Call in progress";

  return (
    <div>
      <div className="flex flex-col items-center mt-4">
        <div className="p-8 bg-gray-200 home-button rounded-xl">
          <div className="grid max-w-2xl gap-8 mx-auto md:grid-cols-2">
            <HomeButton icon="/MetricsSymbol.svg" title="My Metrics" subtitle="See the real time metrics for all the agents" />
            <HomeButton icon="/MetricsSymbol.svg" title="My Badges" subtitle="See all the awards and badges earned" />
            <HomeButton icon="/MetricsSymbol.svg" title="Agent Spotlight" subtitle="Weekly best agents" />
            <HomeButton icon="/MetricsSymbol.svg" title="Take a break" subtitle="Go to take a break to clear the mind" />
          </div>
        </div>
        <div className="flex justify-center w-full mt-6"> 
            <button className="flex items-center w-full px-10 py-10 space-x-2 text-white transition-colors duration-300 ease-in-out shadow-md bg-gradient-to-r from-custom-green to-primary rounded-xl hover:bg-green-600">
                <div className="font-thin sm:text-sm lg:text-3xl font-roboto">{buttonText}</div> 
                <div className="text-sm text-white font-roboto">{buttonSubtitle}</div>
            </button>
        </div>
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
