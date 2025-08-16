import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const navigate=useNavigate();
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [query,setquery]=useState("");
   const [loading, setLoading] = useState(false);
  async function handleQuery(){
    setLoading(true);
    try{
       const response=await axios.post("http://localhost:8000/api/v1/user/Userquery",{
        name:name,
        email:email,
        message:query
       })
       if(response.status==200 && response.data.success){
        toast.success("query submitted successfully");
        navigate("/home");
       }
       else{
        toast.error(response.data.message);
       }
    }
    catch(e){
         if (axios.isAxiosError(e)) {
    toast.error(e.response?.data?.message || "query failed");
  } else {
    toast.error("failed");
  }
    }
     finally{
        setLoading(false);
      }
  }

   if (loading) return <Loader />;
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-4 py-10">
         <div
          className="absolute inset-0 bg-cover h-[300px] bg-center filter blur-lg scale-140 z-0"
          style={{
            backgroundImage: `url("https://i.ytimg.com/vi/LZAjXeALxLM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsrVqHp5JWvGZ0KRpuddN7dPWriw")`,
          }}
        ></div>
      <h1 className="relative z-10 text-5xl font-bold text-green-400 mb-4">Contact Us</h1>
      <p className=" relative z-10 text-lg text-white max-w-2xl text-center mb-10">
        Have questions, feedback, or need assistance? Our PlinkoPlay support team is here to help 24/7.
        Reach out and we’ll respond as soon as possible.
      </p>

      {/* Contact Info */}
      <div className="relative z-10 bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4">
        <div>
          <h2 className="relative z-10 text-xl font-semibold text-green-400">Email</h2>
          <p className=" relative z-10 text-gray-300">plinkoplay03@gmail.com</p>
        </div>
        <div>
          <h2 className="relative z-10 text-xl font-semibold text-green-400">Phone</h2>
          <p className="relative z-10 text-gray-300">+91 8476984588</p>
        </div>
        <div>
          <h2 className="relative z-10 text-xl font-semibold text-green-400">Live Chat</h2>
          <p className="relative z-10 text-gray-300">Available soon</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="relative z-10 mt-10 bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-black text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
          onChange={(e)=>{setname(e.target.value)}}
        />
        <input
          type="email"
          placeholder="Your Email(registered)"
          className="w-full p-3 rounded bg-black text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
          onChange={(e)=>{setemail(e.target.value)}}
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded bg-black text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
          onChange={(e)=>{setquery(e.target.value)}}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg transition duration-200"
          onClick={handleQuery}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
