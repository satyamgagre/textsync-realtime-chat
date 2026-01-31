import { useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const = useConversation();
}

export default useGetMessages;