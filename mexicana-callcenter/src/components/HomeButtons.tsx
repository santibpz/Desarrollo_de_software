import React from 'react';

interface HomeButtonProps {
  icon: string; 
  title: string;
  subtitle: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ icon, title, subtitle }) => {
  return (
    <button className="flex items-center space-x-2 bg-primary text-white font-paragraph py-4 px-6 rounded-3xs shadow-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
      <img src={icon} alt="Icon" className="h-full" /> 
      <div>
        <div className="sm:text-sm lg:text-xl">{title}</div> 
        <div className="text-sm text-slategray">{subtitle}</div>
      </div>
    </button>
  );
};

export default HomeButton;
