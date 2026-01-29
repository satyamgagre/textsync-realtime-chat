import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
    const { loading, logout } = useLogout();
    
    return (
        <div className="mt-auto p-3 sm:p-4 border-t border-gray-700/50">
            {!loading ? (
                <button
                    onClick={logout}
                    className="flex items-center justify-center gap-2 w-full 
                    px-3 py-2.5 sm:px-4 sm:py-3
                    rounded-lg backdrop-blur-xl bg-white/5 hover:bg-white/10 
                    border border-gray-600/50 hover:border-gray-500/70
                    text-gray-300 hover:text-white
                    transition-all duration-200 hover:scale-[1.02] active:scale-95
                    group"
                    aria-label="Logout"
                >
                    <BiLogOut className="w-5 h-5 sm:w-5 sm:h-5 transition-transform 
                    group-hover:translate-x-0.5" />
                    <span className="text-sm sm:text-base font-medium">
                        Logout
                    </span>
                </button>
            ) : (
                <div className="flex items-center justify-center gap-2 w-full 
                px-3 py-2.5 sm:px-4 sm:py-3
                rounded-lg backdrop-blur-xl bg-white/5 border border-gray-600/50">
                    <span className="loading loading-spinner loading-sm text-white"></span>
                    <span className="text-sm sm:text-base text-gray-300 font-medium">
                        Logging out...
                    </span>
                </div>
            )}
        </div>
    );
};

export default LogoutButton;