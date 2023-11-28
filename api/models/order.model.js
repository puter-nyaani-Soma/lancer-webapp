import mongoose from "mongoose";
import User from './user.model.js'
const { Schema } = mongoose;


const OrderSchema = new Schema(
  {
    gigId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
      type: String,
      required: true,
    },
    buyerName:{
      type: String,
    },
    sellerName:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);
OrderSchema.pre('save', async function (next) {
  try {
    const buyer = await User.findById(this.buyerId);
    const seller = await User.findById(this.sellerId);

    if (buyer) {
      this.buyerName = buyer.username; // Assuming 'name' is the property in your User model
    }

    if (seller) {
      this.sellerName = seller.username;
    }

    next();
  } catch (error) {
    return next(error);
  }
});

export default mongoose.model("Order", OrderSchema);
