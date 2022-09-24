import bodyParser from "body-parser";
import mongoose, { Mongoose } from "mongoose";
import route from "./routes/routes.js";
import express from "express";
const app=express();
import cors from "cors"
const url="mongodb://localhost:27017/mytestingdb";
const PORT=process.env.PORT || 3000;
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/",route);
mongoose.connect(url,{useNewurlParser:true})

.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));



