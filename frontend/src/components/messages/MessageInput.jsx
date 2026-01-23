import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="p-4 my-3"> 
        <div className="w-full relative">
            <input 
                type="text"
                placeholder="Type your message..."
                className="border text-sm rounded-full block w-full p-2.5 pr-12 backdrop-blur-xl bg-white/10 border-slate-700/50 text-white placeholder:text-slate-300"/>
            <button 
                type="submit"
                className="absolute inset-y-0 end-0 flex items-center pe-4 text-slate-400 hover:text-white transition-colors">
                <BsSend/>
            </button>
        </div>
    </form>
  );
};

export default MessageInput;