import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import 'dotenv/config'
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
const app = express();
// app.use(morgan('combined'))
mongoose.set('strictQuery', true);
const result = dotenv.config()
app.listen(process.env.PORT,()=>{
    console.log("listening on " + process.env.PORT);
})
try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB!");
    } catch (error) {
      console.log(error);
}
const allowedOrigins = [
  "http://localhost:5173",
  "http://192.168.56.1:5173",
  "http://192.168.1.11:5173/"
];

app.use(cors({ origin: allowedOrigins, credentials: true }));


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});



  