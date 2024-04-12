import PageStructure from "../components/PageStructure";
import HomeButton from "../components/HomeButtons";


const MainContent = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Welcome to Mexicana Call Center</h1>
            <p className="text-lg text-center">This is the main page of the call center</p>
            <div className="flex flex-row justify-center space-x-4 mt-4">
                <div className="bg-gray-200 p-8">
                    <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
                        <HomeButton icon="/MetricsSymbol.svg" title="My Metrics" subtitle="See the real time metrics for all the agents" />
                        <HomeButton icon="/MetricsSymbol.svg" title="My Badges" subtitle="See all the awards and badges earned" />
                        <HomeButton icon="/MetricsSymbol.svg" title="Agent Spotlight" subtitle="Weekly best agents" />
                        <HomeButton icon="/MetricsSymbol.svg" title="Take a break" subtitle="Go to take a break to clear the mind" />
                    </div>
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

