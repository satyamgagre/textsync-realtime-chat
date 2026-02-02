import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";
import { useAuthContext } from "../../context/AuthContext";


const NoChatSelected = () => {
	const { authUser } = useAuthContext();

	return (
		<div className="relative flex items-center justify-center w-full h-full overflow-hidden">
			<div className="relative z-10 rounded-3xl px-10 py-12 max-w-sm w-full mx-4 flex flex-col items-center gap-3 text-center backdrop-blur-xl bg-white/10 border border-slate-700/50">
				<span className="text-slate-400 text-sm">Welcome back</span>

				<p className="text-white text-xl font-medium">
					{authUser?.fullName}
				</p>

				<p className="text-slate-400 text-sm">
					Select a conversation to start chatting
				</p>
			</div>
		</div>
	);
};



const MessageContainer = () => {
	const { selectedConversation } = useConversation();

	return (
		<div className="md:min-w-[450px] flex flex-col">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="backdrop-blur-xl bg-white/10 border-b border-slate-700/50 px-4 py-3 mb-2">
						<span className="label-text text-slate-400">To:</span>{" "}
						<span className="text-white font-medium">
							{selectedConversation?.fullName}
						</span>
					</div>

					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;
