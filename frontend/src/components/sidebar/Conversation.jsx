import { useSocketContext } from "../../context/socketContext.jsx";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, emoji, lastIdx }) => {
const { selectedConversation, setSelectedConversation } = useConversation();

const isSelected = selectedConversation?._id === conversation._id;

const { onlineUsers } = useSocketContext();
const isOnline = onlineUsers?.includes(conversation._id);

return (
<>
<div
className={`flex gap-2 items-center hover:bg-white/10 rounded-xl p-2 py-1 cursor-pointer transition-all ${
          isSelected ? "bg-sky-500/20 ring-1 ring-sky-500/40" : ""
        }`}
onClick={() => setSelectedConversation(conversation)}
>
<div className={`avatar ${isOnline ? "online" : ""}`}> <div className="w-12 rounded-full"> <img src={conversation.profilePic} alt="avatar" /> </div> </div>

    <div className="flex flex-col flex-1">
      <div className="flex gap-3 justify-between items-center">
        <p className="font-bold text-gray-200">
          {conversation.fullName}
        </p>
        <span>{emoji}</span>
      </div>
    </div>
  </div>

  {!lastIdx && <div className="divider my-0 py-0 h-1 opacity-30"></div>}
</>


);
};

export default Conversation;
