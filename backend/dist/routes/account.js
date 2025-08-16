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
const middleware_1 = require("../middleware");
const db_1 = require("../config/db");
const accountRouter = express_1.default.Router();
accountRouter.get("/balance", middleware_1.usermiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = yield db_1.accountModel.findOne({
            userId: req.id
        });
        res.json({
            balance: account === null || account === void 0 ? void 0 : account.balance
        });
    }
    catch (e) {
        res.status(500).json({ success: false, message: "cant fetch balance", e });
    }
}));
accountRouter.post("/balance/add", middleware_1.usermiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const amount = Number(req.body.amount);
    const key = req.body.key;
    if (amount <= 0) {
        res.json({
            success: false,
            message: "enter a valid amount"
        });
        return;
    }
    if (key != "3076") {
        res.json({
            success: false,
            message: "enter a valid paskey"
        });
        return;
    }
    try {
        yield db_1.accountModel.updateOne({ userId: req.id }, { $inc: { balance: amount } });
        res.status(200).json({
            success: true,
            message: "money added successfuly"
        });
    }
    catch (e) {
        res.status(500).json({ success: false, message: "cant add money", e });
    }
}));
exports.default = accountRouter;
