import express from "express";
const app=express();
import cors from "cors"
import mainRouter from "./routes";
app.use(cors());
app.use(express.json());
app.use("/api/v1",mainRouter);
app.listen(8000,()=>{
    console.log("post is listening on 8000")
})