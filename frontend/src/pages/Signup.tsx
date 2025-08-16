import SubHeading from "../components/Subheading"
import  {Button}  from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import BottomWarning from "../components/Bottomwarning"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader"
export default function Signup() {    
    const navigate=useNavigate();
     const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [name,setname]=useState("");
    const [loading, setLoading] = useState(false);
    const handleSignin = async () => {
      setLoading(true);
    try {
      
      const response = await axios.post("http://localhost:8000/api/v1/user/signup", {
        name:name,
        email:username,
        password:password,
      });
        
      if (response.status==200 && response.data.success) {
        toast.success(response.data.message)
        navigate(`/otp?email=${encodeURIComponent(username)}`);
      } else {
        toast.error("wrong credentials");
      }
    }catch (error) {
  if (axios.isAxiosError(error)) {
    toast.success(error.response?.data?.message || "Signup failed");
  } else {
    toast.error("Signup failed");
  }
}
    finally{
      setLoading(false);
    }
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
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter correct credentials to signup"} />
         <Inputbox label={"Name"} placeholder="abhinav"  onChange={(e)=>{setname(e.target.value)}} />
        <Inputbox label={"Email"} placeholder="abhi@gmail.com"  onChange={(e)=>{setusername(e.target.value)}} />
        <Inputbox label={"Password"}  placeholder="123456"  onChange={(e)=>{setpassword(e.target.value)}} />
        <div className="pt-4">
          <Button children={"Sign up"} onClick={handleSignin} className={"bg-black"}/>
        </div>
        <BottomWarning label={"Alredy have an account?"} buttonText={"Sign in"} to={"/Signin"} />
      </div>
    </div>
  </div>
  </>
    )
}