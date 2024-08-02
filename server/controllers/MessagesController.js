import Message from "../models/MessagesModel.js";

export const getMessages = async (request, response) => {
  try {
        const user1 = request.userId;
        const user2 = request.body.id;


    if (!user1 || !user2 ) {
      return response.status(400).send("Both User ID's are required.");
    }

   
    const messages = await Message.find({
        $or:[
            {sender: user1, recipient: user2},{sender: user2, recipient: user1}
        ]
    }).sort({timestamp: 1})
    return response.status(200).json({ messages });

  } catch (error) {
    console.log({ error });
    return response.status(500).send("Inernal Server Error");
  }
};
