import React from 'react';

// variables 
interface WorkerCardProps {
  name: string;
  position: string;
  years: number;
  points: number;
  status: string;
}


const WorkerCard: React.FC<WorkerCardProps> = ({ name, position, years, points, status }) => {
  const statusClass = status === 'Active' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="max-w-sm p-4 overflow-hidden bg-tertiary rounded shadow-lg border-black border-radious border-2 h-full">
      <div className="flex justify-center">
        <img className="w-[65%] h-[65%] rounded-full" src="/avatar.png" alt="User avatar" />
      </div>
      <div className="px-6 py-4 text-center items-center">
        <h2 className="mb-2 pb-5">{name}</h2>
        <p className="text-base text-gray-700 pb-1">{position}</p>
        <p className="text-sm text-gray-600 pb-5">{years} years</p>
        <div className="flex justify-center items-center pb-9 w-full">
        <div className="text-gray-800 text-[60px] font-roboto mr-4">{points}</div>
        <img src="/plane.png" alt="Plane" className="w-10 h-10 rotate(-45deg)" />
        </div>
        <button className={`${statusClass} text-white font-bold py-2 px-4 rounded-lg w-full h-10`}>
          {status}
        </button>
      </div>
    </div>
  );
  /* Vector */

};

export default WorkerCard;
