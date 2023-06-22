import express from "express";
import User from "./routes/Users.js"
import cookieParser from "cookie-parser";
import Dish from "./routes/Dishes.js";
import Feedback from "./routes/Feedbacks.js";
import Orders from "./routes/Orders.js";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.use('/public',express.static('public'))


app.use("/api/v1/", User)
app.use("/api/v1/", Dish)
app.use("/api/v1/", Feedback)
app.use("/api/v1/", Orders)
app.use(cors({origin: true, credentials: true}));

// app.options("*", cors({ origin: 'exp://192.168.198.173:19000', optionsSuccessStatus: 200 }));
// app.use(cors({ origin: "exp://192.168.198.173:19000", optionsSuccessStatus: 200 }));


app.get("/", (req,res)=>{
    res.send("Server is working")
})