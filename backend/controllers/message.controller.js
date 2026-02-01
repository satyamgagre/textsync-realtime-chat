import User from "../models/user.model.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage = async (req, res) => {
	console.log("REQ BODY:", req.body);
	console.log("REQ PARAMS:", req.params);
	console.log("REQ USER:", req.user?._id);

	try {
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		if (!message || !message.trim() || !receiverId) {
			return res
				.status(400)
				.json({ error: "Message and receiverId are required" });
		}

		if (senderId.toString() === receiverId) {
			return res
				.status(400)
				.json({ error: "You cannot message yourself" });
		}

		let conversation = await Conversation.findOne({
			participantIds: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participantIds: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message: message.trim(), // ✅ FIXED
		});

		conversation.messages.push(newMessage._id);

		await Promise.all([newMessage.save(), conversation.save()]);

		return res.status(201).json(newMessage);
	} catch (error) {
		console.error("Error in Send Message Controller:", error.message);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};



export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participantIds: { $all: [senderId, userToChatId] },
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.error("Error in Get Messages Controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
