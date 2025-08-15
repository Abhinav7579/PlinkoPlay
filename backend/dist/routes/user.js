"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const zod_1 = require("../zod");
const db_1 = require("../config/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const pass = process.env.GMAIL_PASS;
const JWT_PASS = process.env.JWT_PASS;
const middleware_1 = require("../middleware");
//email send setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'plinkoplay03@gmail.com',
        pass: pass
    }
});
const generateOTP = () => crypto.randomInt(100000, 999999).toString();
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsed = zod_1.userRequiredBody.safeParse(req.body);
    if (!parsed.success) {
        res.json({
            success: false,
            message: "incorect credentials"
        });
        return;
    }
    const { name, email, password } = parsed.data;
    const findUser = yield db_1.userModel.findOne({
        email: email
    });
    if (findUser) {
        res.status(403).json({
            success: false,
            message: "user already exist"
        });
        return;
    }
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
    const hashPassord = yield bcrypt_1.default.hash(password, 5);
    try {
        yield db_1.userModel.create({
            name: name,
            email: email,
            password: hashPassord,
            otp: otp,
            otpExpiry: otpExpiry,
        });
        yield transporter.sendMail({
            from: 'plinkoplay03@gmail.com',
            to: email,
            subject: 'OTP Verification',
            text: `Thank you for visiting PlinkoPlay. Your OTP is: ${otp}.It will be applicable for 10 minutes `
        });
        res.status(200).json({
            success: true,
            message: `otp has send to ${email}. please verify the otp`
        });
    }
    catch (e) {
        res.status(403).json({
            success: false,
            message: "error in creating a user " + e
        });
    }
}));
userRouter.post("/signup/otpVerify", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ message: 'Email and OTP are required' });
        }
        const user = yield db_1.userModel.findOne({
            email: email
        });
        if (!user)
            return res.status(400).json({ message: 'User not found' });
        if (user.isVerified)
            return res.status(400).json({ message: 'User already verified' });
        if (user.otp !== otp || !user.otpExpiry || user.otpExpiry < new Date()) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }
        const userid = user._id;
        //initailly give random amount too all
        yield db_1.accountModel.create({
            userId: userid,
            balance: 1 + Math.random() * 10000
        });
        user.isVerified = true;
        user.otp = undefined;
        user.otpExpiry = undefined;
        yield user.save();
        res.status(200).json({
            success: true,
            message: 'Email verified successfully.'
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error verifying OTP', error });
    }
}));
userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsed = zod_1.SigninRequiredbody.safeParse(req.body);
    if (!parsed.success) {
        res.json({
            success: false,
            message: "incoorect credentials"
        });
        return;
    }
    const { email, password } = parsed.data;
    const user = yield db_1.userModel.findOne({
        email: email
    });
    if (!user) {
        res.status(403).json({
            success: false,
            message: "email does not exist"
        });
        return;
    }
    const passCompare = yield bcrypt_1.default.compare(password, user.password);
    if (passCompare) {
        const token = jsonwebtoken_1.default.sign({ id: user._id }, JWT_PASS, { expiresIn: "7d" });
        res.status(200).json({
            success: true,
            token: token
        });
    }
    else {
        res.status(403).json({
            success: false,
            message: "Incorrect credentials"
        });
    }
}));
userRouter.post("/Userquery", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsed = zod_1.QueryRequiredbody.safeParse(req.body);
    if (!parsed.success) {
        res.json({
            success: false,
            message: "incorect entries"
        });
        return;
    }
    const { name, email, message } = parsed.data;
    const user = yield db_1.userModel.findOne({
        email: email
    });
    if (!user) {
        res.json({
            success: false,
            message: "email not found"
        });
        return;
    }
    try {
        yield db_1.queryModel.create({
            name: name,
            email: email,
            message: message
        });
        res.status(200).json({
            success: true,
            message: "query successfully send. we will soon look out out at it"
        });
    }
    catch (e) {
        res.status(403).json({
            success: false,
            message: "error in sending the query " + e
        });
    }
}));
userRouter.get("/autoSignin", middleware_1.usermiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield db_1.userModel.findById(req.id).select("-password -otp -otpExpiry");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({
            success: true,
            message: "User auto-signed in",
            user,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server error", error });
    }
}));
userRouter.get("/me", middleware_1.usermiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield db_1.userModel.findById(req.id).select('_id name email');
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    }
    catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}));
exports.default = userRouter;
