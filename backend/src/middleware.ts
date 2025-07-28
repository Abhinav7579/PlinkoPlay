import jwt from "jsonwebtoken";
const JWT_PASS = process.env.JWT_PASS!;
import express, { NextFunction } from "express"
import { Request,Response} from "express";

declare global {
  namespace Express {
    interface Request {
      id?: string; 
    }
  }
}
export const usermiddleware=(req:Request,res:Response,next:NextFunction):void=>{
    const authHeader=req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ success: false, message: "Token missing or malformed" });
    return;
  }
  const token = authHeader.split(" ")[1];
   try {
    const decoded = jwt.verify(token, process.env.JWT_PASS!);
    req.id = (decoded as any).id; 
    next();
  } catch (err) {
    res.status(403).json({ success: false, message: "Invalid or expired token" });
    return;
  }
}