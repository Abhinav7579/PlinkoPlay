import mongoose, { model,Schema } from "mongoose"
import dotenv from "dotenv";
dotenv.config();
const Mongo_connection=process.env.MONGO_STRING!;
mongoose.connect(Mongo_connection)

const userSchema=new Schema({
    name:String,
    email:{type:String, required: true, unique:true},
    password:{type:String, required: true},
    otp: { type: String }, 
    otpExpiry: { type: Date },
    isVerified: { type: Boolean, default: false } 
})
const accountSchema=new Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
    balance:{type:Number,required:true}
})

const querySchema=new Schema({
    name:String,
    email:{type:String, required: true, unique:true},
    message:{type:String, required: true}
})

export const userModel=model("user",userSchema);
export const accountModel=model("account",accountSchema);
export const queryModel=model("query",querySchema);
