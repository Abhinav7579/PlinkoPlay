import SubHeading from "../components/Subheading"
import  {Button}  from "../components/Button"
import Heading from "../components/Heading"
import BottomWarning from "../components/Bottomwarning"
import { useState } from "react"
import axios from "axios"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader"
export default function Otp(){    
    const navigate=useNavigate();
    const [otp,setotp]=useState("");
    const [loading, setLoading] = useState(false);
    const handleSignin = async () => {
      setLoading(true);
  };

   if (loading) return <Loader />;
    return (
        <>
        <Header/>
    <div className="bg-black h-screen flex justify-center">
    <div className="flex flex-col justify-center">
        <div className="text-white pb-[80px] text-7xl font-bold">
            PlinkoPlay
        </div>
      <div className="rounded-lg bg-yellow-500 w-80 text-center p-2 h-max px-4">
        <Heading label={"Otp"} />
        <SubHeading label={"Enter the 6 digit otp send at your gmail account"} />
        
         <div className="flex flex-col items-center gap-4">
      <input
        type="password"
        value={otp}
        onChange={(e) => {
          const value = e.target.value
          if (value.length <= 6) setotp(value);
        }}
        maxLength={6}
        minLength={6}
        className="w-[200px] text-center bg-white text-xl p text-black x-4 py-2 border rounded outline-none tracking-[0.5em]"
        placeholder="Enter OTP"
      />
    </div>
        <div className="pt-4">
          <Button children={"Verify"} onClick={handleSignin} className={"bg-black"}/>
        </div>
        <BottomWarning label={"Resend the otp?"} buttonText={"resend"} to={"/"} />
      </div>
    </div>
  </div>
  </>
    )
}