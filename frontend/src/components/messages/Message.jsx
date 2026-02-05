import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();

	const fromMe = message?.senderId === authUser?._id;
    const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe
		? authUser?.profilePic
		: selectedConversation?.profilePic;

	const bubbleBgColour = fromMe ? "bg-white/20" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full ring-2 ring-slate-700/30">
					<img src={profilePic} alt="User Avatar" />
				</div>
			</div>

			<div>
				<div
					className={`chat-bubble backdrop-blur-xl text-white border border-slate-700/50 ${bubbleBgColour} ${shakeClass}`}
				>{message.message}</div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 items-center" >{formattedTime}</div>
			</div>
		</div>
	);
};

export default Message;
