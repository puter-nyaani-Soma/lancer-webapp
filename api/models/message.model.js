import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema({
  conversationId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  buyerName:{
    type: String,
  },
  sellerName:{
    type: String,
  }
},{
  timestamps:true
});

export default mongoose.model("Message", MessageSchema)