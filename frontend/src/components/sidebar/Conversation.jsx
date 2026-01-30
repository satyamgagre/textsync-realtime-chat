

const Conversation = ({ conversation, emoji, lastIdx }) => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-white/10 rounded-xl p-2 py-1 cursor-pointer transition-all backdrop-blur-sm">
                <div className="avatar online">
                    <div className="w-12 rounded-full ring-2 ring-slate-700/30">
                        <img
                            src={conversation.profilePic}   
                            alt="User Avatar"
                        />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">{conversation.fullName}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className="divider my-0 py-0 h-1 opacity-30"></div>}
        </>
    );
};

export default Conversation;