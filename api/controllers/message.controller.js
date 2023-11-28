import createError from "../utils/createError.js";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";


export const createMessage = async (req, res, next) => {
  
  const seller=await User.findById(req.isSeller?req.userId:req.body.to).exec()
  const buyer= await User.findById(req.isSeller?req.body.to:req.userId).exec()
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    userId: req.userId,
    desc: req.body.desc,
    // buyerName:buyer.username,
    // sellerName:seller.username
    
  });
  try {
    const savedMessage = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );

    res.status(201).send(savedMessage);
  } catch (err) {
    next(err);
  }
};
export const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).send(messages);
  } catch (err) {
    next(err);
  }
};
