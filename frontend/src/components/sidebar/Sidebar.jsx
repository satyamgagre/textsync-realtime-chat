import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInputt";

const Sidebar = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col border-r border-gray-700/50 
    backdrop-blur-xl bg-gray-800/30 lg:bg-transparent">
      
      {/* Mobile Header with Close Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700/50 lg:hidden">
        <h2 className="text-xl font-bold text-white">Chats</h2>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          aria-label="Close sidebar"
        >
          <svg 
            className="w-6 h-6 text-gray-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>

      {/* Search */}
      <div className="px-2 py-3 sm:px-3 sm:py-4">
        <SearchInput />
      </div>

      <div className="divider px-3 my-0 h-px bg-gray-700/50"></div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 
      scrollbar-track-transparent">
        <Conversations />
      </div>

      {/* Logout Button */}
      <LogoutButton />
    </div>
  );
};

export default Sidebar;