import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Me = () => {
  // Example static data (replace with backend data later)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    balance: 2540.75,
    totalWinning: 12000.5,
    totalLoss: 7600.25,
  };

  const navigate=useNavigate();

  return (
    <div className=" bg-black h-screen  flex items-center justify-center">
      <Navbar/>
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg scale-110 z-0"
        style={{
          backgroundImage: `url("https://i.ytimg.com/vi/LZAjXeALxLM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsrVqHp5JWvGZ0KRpuddN7dPWriw")`,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

      
      <div className="relative z-10 bg-gray-900/80 p-8 rounded-xl shadow-2xl max-w-lg w-full backdrop-blur-md">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">
          My Profile
        </h1>

        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-semibold text-white">Name:</span>
            <span className="text-white">{user.name}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-semibold text-white">Email:</span>
            <span className="text-white">{user.email}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-semibold text-white">Balance:</span>
            <span className="text-green-400">
              ${user.balance.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-semibold text-white">Total Winnings:</span>
            <span className="text-green-400">
              ${user.totalWinning.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-semibold text-white">Total Loss:</span>
            <span className="text-red-500">
              ${user.totalLoss.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <button className="bg-red-600 p-2 rounded-2xl font-extrabold text-white hover:bg-red-700 cursor-pointer hover:scale-105  "
            onClick={()=>{
                localStorage.removeItem("token");
                toast.success("succcessfully logout");
                navigate("/")
            }} >logout</button>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Me;
