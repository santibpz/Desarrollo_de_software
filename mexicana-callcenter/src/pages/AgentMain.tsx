import PageStructure from "../components/PageStructure";

const MainContent = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Welcome to Mexicana Call Center</h1>
            <p className="text-lg text-center">This is the main page of the call center</p>
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

