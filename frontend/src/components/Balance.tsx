import axios from "axios";
import { useEffect, useState } from "react"

const Balance= () => {
  const [balance,setbalance]=useState("");
   useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/user/account/balance", {
          headers: {
            Authorization:`Bearer ${localStorage.getItem("token")}`,
          },
        });
        setbalance(res.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []); 

  return (
    
    <div className="fixed top-[74px] left-1/2 transform -translate-x-1/2 z-50">
  <div className="flex space-x-0">
    <div className="bg-blue-800 w-[100px] h-[40px] flex items-center justify-center">
      <p className="text-white text-xl">Wallet</p>
    </div>
    <div className="bg-gray-900 w-[120px] h-[40px] flex items-center justify-center">
      <p className="text-white text-xl">₹ {Number(balance).toFixed(2)}</p>
    </div>
  </div>
</div>
   
    
  )
}

export default Balance
