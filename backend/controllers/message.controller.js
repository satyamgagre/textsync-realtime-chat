import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                messages: []
            });
        }

        // create message document
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

// socket io integration can be done here later

        conversation.messages.push(newMessage._id);
        // await conversation.save();
        // await newMessage.save();

        // this will run both the save operations in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.error("Error in Send Message Controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Error in Get Messages Controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    };
