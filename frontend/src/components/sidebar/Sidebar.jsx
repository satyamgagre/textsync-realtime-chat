import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInputt";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-700/50 p-4 flex flex-col backdrop-blur-xl bg-white/5'>
			<SearchInput />
			<div className='divider px-3 opacity-50'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;