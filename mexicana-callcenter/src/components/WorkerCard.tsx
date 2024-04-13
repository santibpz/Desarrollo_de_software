import react from react;
 
const WorkerCard = ({name, position, years, points, status}) => {
    const statusClass = status === 'Active' ? 'bg-green-500' : 'bg-red-500';
    return (
        <div className="max-w-sm p-4 overflow-hidden bg-white rounded shadow-lg">
          <div className="flex justify-center">
            <img className="w-24 h-24 rounded-full" src="/path-to-avatar.jpg" alt="User avatar" />
          </div>
          <div className="px-6 py-4 text-center">
            <div className="mb-2 text-xl font-bold">{name}</div>
            <p className="text-base text-gray-700">{position}</p>
            <p className="text-sm text-gray-600">{years} years</p>
            <p className="text-2xl text-gray-800">{points}</p>
            <button className={`${statusClass} text-white font-bold py-2 px-4 rounded-full`}>
              {status}
            </button>
          </div>
        </div>
      );
    };
    
    export default WorkerCard;