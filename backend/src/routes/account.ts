import express from "express"
import { usermiddleware } from "../middleware";
import { accountModel } from "../config/db";
const accountRouter=express.Router();

accountRouter.get("/balance",usermiddleware,async(req,res)=>{
    try{
    const account=await accountModel.findOne({
        userId:req.id
    })
    res.json({
        balance:account?.balance
    })
    }
    catch(e){
        res.status(500).json({ success: false, message: "cant fetch balance", e });
    }
})


export default accountRouter;
