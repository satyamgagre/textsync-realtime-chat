import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2 w-full px-2 sm:px-3 py-2'>
			<input 
				type='text' 
				placeholder='Search…' 
				className='input input-bordered rounded-full backdrop-blur-xl bg-white/10 border-slate-700/50 
				placeholder:text-slate-300 text-white flex-1 h-9 sm:h-10 md:h-12 
				text-sm sm:text-base px-3 sm:px-4 focus:outline-none focus:border-slate-500/70 
				transition-colors duration-200' 
			/>
			<button 
				type='submit' 
				className='btn btn-circle bg-transparent text-white backdrop-blur-xl 
				hover:bg-white/20 border-slate-700/50 min-h-0 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 
				flex items-center justify-center transition-all duration-200 hover:scale-105 
				active:scale-95'
			>
				<IoSearchSharp className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 outline-none' />
			</button>
		</form>
	);
};

export default SearchInput;