import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!search.trim()) return;

		if (search.length < 3) {
			toast.error("Search must be at least 3 characters long.");
			return;
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else {
			toast.error(`No user found with name "${search}"`);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center gap-2 w-full px-2 sm:px-3 py-2"
		>
			<input
				type="text"
				placeholder="Search…"
				className="input input-bordered rounded-full backdrop-blur-xl bg-white/10 border-slate-700/50 
				placeholder:text-slate-300 text-white flex-1 h-9 sm:h-10 md:h-12 
				text-sm sm:text-base px-3 sm:px-4 focus:outline-none focus:border-slate-500/70 
				transition-colors duration-200"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<button
				type="submit"
				className="btn btn-circle bg-transparent text-white backdrop-blur-xl 
				hover:bg-white/20 border-slate-700/50 min-h-0 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 
				flex items-center justify-center transition-all duration-200 hover:scale-105 
				active:scale-95"
			>
				<IoSearchSharp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
			</button>
		</form>
	);
};

export default SearchInput;
