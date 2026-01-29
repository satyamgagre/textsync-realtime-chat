import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import { useState } from "react";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-2 sm:p-4">
      <div className="flex relative w-full max-w-7xl h-[calc(100vh-1rem)] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]
      rounded-lg overflow-hidden bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 shadow-2xl">
        
        {/* Mobile sidebar overlay */}
        <div className={`
          fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300
          ${showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `} 
        onClick={() => setShowSidebar(false)} 
        />
        
        {/* Sidebar - Hidden on mobile by default, slides in when toggled */}
        <div className={`
          absolute lg:relative z-50 lg:z-auto
          w-64 sm:w-72 lg:w-80 xl:w-96
          h-full transform transition-transform duration-300 ease-in-out
          ${showSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <Sidebar onClose={() => setShowSidebar(false)} />
        </div>
        
        {/* Message Container - Full width on mobile */}
        <div className="flex-1 w-full">
          <MessageContainer onMenuClick={() => setShowSidebar(true)} />
        </div>
      </div>
    </div>
  );
};

export default Home;