import SubHeading from "../components/Subheading"
import  {Button}  from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import BottomWarning from "../components/Bottomwarning"
import { useState } from "react"
import axios from "axios"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader"
export default function Signin() {    
    const navigate=useNavigate();
     const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [loading, setLoading] = useState(false);
    const handleSignin = async () => {
      setLoading(true);
    try {
      
      const response = await axios.post("http://localhost:8000/api/v1/user/signin", {
        email:username,
        password:password,
      });
        
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("signin successful")
        navigate("/home");
      } else {
        alert("response.data.message");
      }
    } catch (error) {
        if (axios.isAxiosError(error)) {
    alert(error.response?.data?.message || "Signin failed");
  } else {
    alert("Signin failed");
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
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        
        <Inputbox label={"Email"} placeholder="abhi@gmail.com"  onChange={(e)=>{setusername(e.target.value)}} />
        <Inputbox label={"Password"}  placeholder="123456"  onChange={(e)=>{setpassword(e.target.value)}} />
        <div className="pt-4">
          <Button children={"Sign in"} onClick={handleSignin} className={"bg-black"}/>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/Signup"} />
      </div>
    </div>
  </div>
  </>
    )
}