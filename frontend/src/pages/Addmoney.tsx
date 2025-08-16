import  { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Addmoney = () => {
const navigate=useNavigate();
  const [amount, setAmount] = useState("");
  const [passKey, setPassKey] = useState("");
  const [message, setMessage] = useState("");

  const handleAddMoney = async (e:any) => {
    e.preventDefault(); 
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/account/balance/add",
        { amount:amount,
            key:passKey
         },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
        }
      );
      if(res.status==200 && res.data.success){
      setMessage(`✅ ${res.data.message || "Money added successfully!"}`);
      toast.success("Money added successfully!");
      setAmount("");
      setPassKey("");
      navigate("/home");
      }
      else{
        setMessage(` ${res.data.message || "incorrect credentials!"}`);
      }
    } catch (e) {
        if (axios.isAxiosError(e)){
      setMessage(
        `❌ ${e.response?.data?.message || "Failed to add money"}`
      );
    }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
        <Navbar/>
        <div
          className="absolute inset-0 bg-cover h-[400px] bg-center filter blur-lg scale-100 z-0"
          style={{
            backgroundImage: `url("https://i.ytimg.com/vi/LZAjXeALxLM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsrVqHp5JWvGZ0KRpuddN7dPWriw")`,
          }}
        ></div> 
      <div className="relative z-10 bg-gray-900 shadow-lg rounded-2xl p-8 w-[350px]">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Add Money</h2>

        <form onSubmit={handleAddMoney} className="space-y-4">
          
          <div>
            <label className="block text-white mb-1">Amount (₹)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter amount"
              required
            />
          </div>

        
          <div>
            <label className="block text-white mb-1">Pass Key</label>
            <input
              type="password"
              value={passKey}
              onChange={(e) => setPassKey(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-gray-300 text-balck focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter pass key"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 cursor-pointer hover:scale-102  text-black font-bold py-2 rounded-lg hover:bg-green-800 transition"
          >
            Add Money
          </button>
        </form>

        {/* message */}
        
          <p className="mt-4 text-center text-sm text-red-700">{message}</p>
        
      </div>
    </div>
  );
};

export default Addmoney;
