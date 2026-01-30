import Conversation from "./Conversation.jsx";
import useGetConversations from "../../hooks/useGetConversations.js";
import { getRandomEmoji } from "../../utils/emojis.js";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    console.log("conversations:", conversations);

    return (
        <div className="py-2 flex flex-col overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700/50 hover:scrollbar-thumb-slate-600/50">
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}

            {loading && (
                <span className="loading-spinner loading"></span>
            )}
        </div>
    );
};

export default Conversations;
