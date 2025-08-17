import express from "express";
import userRouter from "./user";
import accountRouter from "./account";
import gameRouter from "./game";
const router=express.Router();

router.use("/user",userRouter);
router.use("/user/account",accountRouter)
router.use("/game/bet",gameRouter)
export default router