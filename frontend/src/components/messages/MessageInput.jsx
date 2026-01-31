import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
    const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    sendMessage("");
    // TODO: Add send message logic here
    console.log("Sending message:", message);
    
    setMessage(""); // Clear input after sending
  };

  return (
    <form className="p-4 my-3" onSubmit={handleSubmit}> 
        <div className="w-full relative">
            <input 
                type="text"
                placeholder="Type your message..."
                className="border text-sm rounded-full block w-full p-2.5 pr-12 backdrop-blur-xl bg-white/10 border-slate-700/50 text-white placeholder:text-slate-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button 
                type="submit"
                className="absolute inset-y-0 end-0 flex items-center pe-4 text-slate-400 hover:text-white transition-colors"
                disabled={!message.trim()}
            >
                {loading ? <div className="loading loading-spinner"></div> : <BsSend/>}
            </button>
        </div>
    </form>
  );
};

export default MessageInput;