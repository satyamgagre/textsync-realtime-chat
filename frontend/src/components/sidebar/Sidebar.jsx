import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInputt";
import logo from "../../assets/logooo.png";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col backdrop-blur-xl bg-gray-800/30 lg:bg-transparent">

      <div className="flex justify-start mb-2 sm:mb-3">
        <img 
          src={logo}
          alt="ChatSync" 
          className="h-10 sm:h-8 md:h-10"
        />
      </div>

      {/* Search */}
      <div className="px-2 py-3 sm:px-3 sm:py-4">
        <SearchInput />
      </div>

      <div className="divider px-3 my-0 h-px bg-gray-700/50"></div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 
      scrollbar-track-transparent px-2 sm:px-3">
        <Conversations />
      </div>

      {/* Logout Button */}
      <LogoutButton />
    </div>
  );
};

export default Sidebar;