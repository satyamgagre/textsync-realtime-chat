import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";

const NoChatSelected = () => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center sm:text-lg md:text-xl text-slate-300 font-semibold flex flex-col items-center gap-4">
				<div className="backdrop-blur-xl bg-white/5 border border-slate-700/50 rounded-2xl p-8">
					<TiMessages className="text-6xl md:text-8xl text-slate-400 mb-4 mx-auto" />
					<p className="text-white mb-2">Welcome John Doe</p>
					<p className="text-slate-400 text-base font-normal">
						Select a chat to start messaging
					</p>
				</div>
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
