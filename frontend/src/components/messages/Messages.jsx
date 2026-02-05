import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef(null);

	useEffect(() => {
		if (!Array.isArray(messages) || messages.length === 0) return;
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className="px-4 flex-1 overflow-auto">
			{!loading &&
				Array.isArray(messages) &&
				messages.length > 0 &&
				messages.map((message, idx) => {
					const isLast = idx === messages.length - 1;
					return (
						<div
							key={message._id}
							ref={isLast ? lastMessageRef : null}
						>
							<Message message={message} />
						</div>
					);
				})}

			{loading &&
				[...Array(3)].map((_, idx) => (
					<MessageSkeleton key={idx} />
				))}

			{!loading &&
				Array.isArray(messages) &&
				messages.length === 0 && (
					<p className="text-center">
						Send a message to start the conversation
					</p>
				)}
		</div>
	);
};

export default Messages;
