import React from 'react';

interface HomeButtonProps {
  icon: string; 
  title: string;
  subtitle: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ icon, title, subtitle }) => {
  return (
    <button className="flex items-center px-6 py-4 space-x-2 font-light text-white transition-colors duration-300 ease-in-out shadow-md bg-primary font-roboto rounded-3xs hover:bg-green-600">
      <img src={icon} alt="Icon" className="h-full" /> 
      <div>
        <div className="font-thin sm:text-sm font-roboto md:text-3xl">{title}</div> 
        <div className="text-sm text-white">{subtitle}</div>
      </div>
    </button>
  );
};

export default HomeButton;


