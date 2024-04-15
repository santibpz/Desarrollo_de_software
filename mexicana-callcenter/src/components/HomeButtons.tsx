import React from 'react';

interface HomeButtonProps {
  icon: string; 
  title: string;
  subtitle: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ icon, title, subtitle }) => {
  return (
    <button className="flex items-center px-6 py-4 space-x-2 font-light text-white transition-colors duration-300 ease-in-out shadow-md bg-primary font-roboto rounded-3xs hover:bg-green-600 ">
      <img src={icon} alt="Icon" className="h-12 w-12 md:w-10 md:h-10 lg:w-20 lg:h-20 xl:w-24 xl:h-36" />
      <div>
        <div className='text-3xl font-[50] text-left'>{title}</div> 
        <div className='text-white text-left font-[50] text-[15px]'>{subtitle}</div>
      </div>
    </button>
  );
};

export default HomeButton;


