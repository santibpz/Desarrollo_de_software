import React from 'react';

interface GradientButtonProps {
  mode: 'workspace' | 'calling';
}

const GradientButton: React.FC<GradientButtonProps> = ({ mode }) => {
  const buttonText = mode === 'workspace' ? "Workplace" : "Call incoming";
  const buttonSubtitle = mode === 'workspace' ? "See the real time metrics for all the agents" : "Answer";

  const backgroundClass = mode === 'workspace'
    ? "bg-gradient-to-r from-customGreen to-primary"
    : "bg-green-600";

  return (
    <button className={`relative flex items-center w-full px-10 py-10 mt-3 space-x-2 text-white transition ease-in-out duration-300 shadow-md rounded-xl ${backgroundClass} hover:opacity-75`}>
      {mode === 'workspace' && (
        <img src="/MetricsSymbol.svg" alt="Icon" className="w-6 h-6 mr-4" />
      )}
      <div className="flex-grow">
        <div className={`font-roboto text-3xl`}>{buttonText}</div> 
        {mode === 'workspace' && (
          <div className="text-sm text-white font-roboto">{buttonSubtitle}</div>
        )}
      </div>
    </button>
  );
};

export default GradientButton;
