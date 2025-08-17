import { useState } from "react";

const Bet = () => {
  
  return (
    <div className="mt-[100px] ml-[70px]">
      <div className="bg-blue-900 h-[400px] w-[400px] rounded-2xl p-5 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">Place Your Bet</h2>
          <p className="text-sm opacity-80">Choose your amount</p>
        </div>        
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Bet Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full p-2 rounded-lg text-black bg-white"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Total Win</label>
            <input
              type="text"
              readOnly
              className="w-full p-2 rounded-lg text-black bg-gray-200 cursor-not-allowed"
            />
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg">
          Place Bet
        </button>
      </div>
    </div>
  );
};

export default Bet;
