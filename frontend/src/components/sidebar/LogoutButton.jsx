import {BiLogOut} from 'react-icons/bi';

const LogoutButton = () => {
    return (
        <div className="mt-auto">
            <BiLogOut className='w-6 h-6 cursor-pointer text-slate-400 hover:text-white transition-colors'/>
        </div>
    );
};

export default LogoutButton;