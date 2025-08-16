import express from "express"
import { usermiddleware } from "../middleware";
import { accountModel } from "../config/db";
import { success } from "zod";
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

accountRouter.post("/balance/add",usermiddleware,async(req,res)=>{
    const amount=Number(req.body.amount);
    const key=req.body.key;
    if(amount<=0){
        res.json({
            success:false,
            message:"enter a valid amount"
        })
        return;
    }
    if(key!="3076"){
          res.json({
            success:false,
            message:"enter a valid paskey"
        })
        return;
    }
    try{
         await accountModel.updateOne(
            {userId:req.id},
            { $inc: { balance: amount } }
        )
        res.status(200).json({
            success:true,
            message:"money added successfuly"
        })

    }
    catch(e){
         res.status(500).json({ success: false, message: "cant add money", e });

    }
})


export default accountRouter;
