import React from 'react';

interface GradientButtonProps {
  mode: 'workspace' | 'calling'; // Parameter to determine the button state
}

const GradientButton: React.FC<GradientButtonProps> = ({ mode }) => {
  const buttonText = mode === 'workspace' ? "Workplace" : "Calling";
  const buttonSubtitle = mode === 'workspace' ? "See the real time metrics for all the agents" : "Call in progress";

  return (
    <div className="flex justify-center w-full mt-6">
      <button className="relative flex items-center w-full px-10 py-10 space-x-2 overflow-hidden text-white shadow-md font-roboto rounded-xl bg-primary">
        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 bg-gradient-to-r from-customGreen to-primary"></div>
        <div className="z-10">
          <div className="font-thin sm:text-sm lg:text-3xl">{buttonText}</div>
          <div className="text-sm text-white">{buttonSubtitle}</div>
        </div>
        <div className="absolute inset-0 transition-opacity duration-300 bg-green-600 opacity-0 hover:opacity-100"></div>
      </button>
    </div>
  );
};

export default GradientButton;
