import { FunctionComponent, useState, useEffect, ReactNode } from "react";
import "../css/PageStructure.css";

// Define a type for the props for better TypeScript support
interface PageStructureProps {
    title: string; // title of the page
    children?: ReactNode; // main div content
  }
  const PageStructure: FunctionComponent<PageStructureProps> = ({ title, children }) => {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      const currentTimestamp = `${date} ${time}`;
      setTimestamp(currentTimestamp);
    };

    updateTimestamp(); // Actualizar el timestamp inicialmente

    const intervalId = setInterval(updateTimestamp, 1000); // Actualizar el timestamp cada segundo

    return () => {
      clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
    };
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Top bar */}
      <div className="flex h-20 bg-tertiary shadow-lg justify-between items-center p-4">
        <div>
          <img 
            src="/logo_callCenter_color.png"  
            alt="" 
            className="w-[230px] ml-3"
          />
        </div>
        <div className="flex items-center">
          <img 
            src="/notifications_iconn.png" 
            alt="" 
            className="w-[45px] mr-2"
          />
          <div className="flex items-center">
            <h1 className="font">{title}</h1>
            <div className="mx-2 h-6 border-l-2"></div> {/* Divisory line */}
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="flex h-[90%]">
        {children}
      </div>
      {/* Bottom bar */}
      <div className="h-20 bg-tertiary shadow-lg flex justify-center items-center p-4">
          <p className = "font2" > {timestamp} </p>
      </div>
    </div>
  );
};

export default PageStructure;