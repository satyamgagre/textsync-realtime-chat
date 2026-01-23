const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full ring-2 ring-slate-700/30">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" alt="User Avatar" />
                </div>
            </div>
            <div>
                <div className={`chat-bubble backdrop-blur-xl bg-white/20 text-white border border-slate-700/50`}>Hello! How are you today?</div>
                <div className="text-xs text-slate-400 mt-1">10:30 AM</div>
            </div>
        </div>
    );
};

export default Message;