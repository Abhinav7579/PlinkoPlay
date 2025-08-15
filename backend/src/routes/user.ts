import express from "express"
const userRouter=express.Router()
const nodemailer = require('nodemailer');
const crypto = require('crypto');
import { userRequiredBody,SigninRequiredbody,QueryRequiredbody } from "../zod";
import { userModel,accountModel,queryModel } from "../config/db";
import bcrypt from "bcrypt"
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
dotenv.config();
const pass=process.env.GMAIL_PASS
const JWT_PASS=process.env.JWT_PASS!
import { usermiddleware } from "../middleware";
//email send setup
const transporter=nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'plinkoplay03@gmail.com',
        pass: pass
    }
});
const generateOTP =()=>crypto.randomInt(100000, 999999).toString();

userRouter.post("/signup",async(req,res)=>{
    const parsed=userRequiredBody.safeParse(req.body);
    if(!parsed.success){
        res.json({
            success:false,
            message:"incorect credentials"
        })
        return;
    }

    const{name,email,password}=parsed.data;
    const findUser=await userModel.findOne({
        email:email
    })
    if(findUser){
        res.status(403).json({
            success:false,
            message:"user already exist"
        })
        return
    }

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
    const hashPassord=await bcrypt.hash(password,5);
    try{
    await userModel.create({
        name:name,
        email:email,
        password:hashPassord,
        otp:otp,
        otpExpiry:otpExpiry,

    })
     await transporter.sendMail({
            from: 'plinkoplay03@gmail.com',
            to: email,
            subject: 'OTP Verification',
            text: `Thank you for visiting PlinkoPlay. Your OTP is: ${otp}.It will be applicable for 10 minutes `
        });  
    res.status(200).json({
        success:true,
        message:`otp has send to ${email}. please verify the otp`
    })
}
catch(e){
    res.status(403).json({
        success:false,
        message:"error in creating a user "+e
    })
}
})

userRouter.post("/signup/otpVerify",async(req,res)=>{
     try {
        const {email,otp } = req.body;
        if (!email || !otp) {
  return res.status(400).json({ message: 'Email and OTP are required' });
}
        const user=await userModel.findOne({
            email:email
        })
        if (!user) return res.status(400).json({ message: 'User not found' });
        if (user.isVerified) return res.status(400).json({ message: 'User already verified' });
        if (user.otp !== otp ||!user.otpExpiry|| user.otpExpiry < new Date()) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }
        const userid=user._id;
        //initailly give random amount too all
        await accountModel.create({
         userId:userid,
         balance: 1 + Math.random() * 10000
        })
        user.isVerified = true;
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();

        res.status(200).json({
  success: true,
  message: 'Email verified successfully.'
});
    } catch (error) {
        res.status(500).json({ message: 'Error verifying OTP', error });
    }
})

userRouter.post("/signin",async(req,res)=>{
    const parsed=SigninRequiredbody.safeParse(req.body);
    if(!parsed.success){
        res.json({
            success:false,
            message:"incoorect credentials"
        })
        return;
    }
    const {email,password}=parsed.data;
      const user=await userModel.findOne({
        email:email
    })
    if(!user){
         res.status(403).json({
        success:false,
        message:"email does not exist"
    })
    return;
    }
     const passCompare=await bcrypt.compare(password,user.password);
    if(passCompare){
        const token = jwt.sign({ id: user._id }, JWT_PASS, { expiresIn: "7d" });
        res.status(200).json({
             success:true,
             token:token 
            });
    }
     else{
            res.status(403).json({ 
                success:false,
                message: "Incorrect credentials" });
        }
})

userRouter.post("/Userquery",async(req,res)=>{
const parsed=QueryRequiredbody.safeParse(req.body);
    if(!parsed.success){
        res.json({
            success:false,
            message:"incorect entries"
        })
        return;
    }

    const{name,email,message}=parsed.data;
    const user=await userModel.findOne({
        email:email
    })
    if(!user){
         res.json({
            success:false,
            message:"email not found"
        })
        return;
    }
    try{
    await queryModel.create({
        name:name,
        email:email,
        message:message
    })
     res.status(200).json({
        success:true,
        message:"query successfully send. we will soon look out out at it"
    })
}
catch(e){
     res.status(403).json({
        success:false,
        message:"error in sending the query "+e
    })

}



})
userRouter.get("/autoSignin", usermiddleware, async (req, res) => {
  try {
    const user = await userModel.findById(req.id).select("-password -otp -otpExpiry");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User auto-signed in",
      user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

userRouter.get("/me",usermiddleware,async(req,res)=>{
       try {
        const user = await userModel.findById(req.id).select('_id name email');

        if (!user) {
             res.status(404).json({ message: "User not found" });
             return;
        }

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ message: "Internal server error" });
    }
})



export default userRouter;