const SearchInput = () => {
    return (
        <form className="flex items-center gap-2">
            <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
            <button type="submit" className="btn btn-primary rounded-full">
                Icon
            </button>
        </form>
    );
};

export default SearchInput; 