import Conversation from './Conversation.jsx';

const Conversations = () => { 
    return (
        <div className="py-2 flex flex-col overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700/50 hover:scrollbar-thumb-slate-600/50">
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    )
};

export default Conversations;