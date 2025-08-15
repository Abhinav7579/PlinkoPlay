import { useState, useEffect } from "react";

const images = [
  "https://i.ytimg.com/vi/LZAjXeALxLM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsrVqHp5JWvGZ0KRpuddN7dPWriw",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGpzdw0x5ys5fLM8JA0cUTfLtlcRSdKiV5Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QzMUp-LW5Bj-kEtw3pwVom5Ab1C1k1w7xg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHW8yBDR6DcBAF_sV7-upyfX4Yfuj7paKCiw&s",
];

const GameTicket = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mt-[140px]">
    <div className="relative w-[600px] border-amber-100 border-2 h-[290px] sm:h-[400px] bg-black mt-[70px] flex justify-center items-center overflow-hidden rounded-2xl">
    
      

    
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative w-full max-w-[600px] h-full rounded-xl shadow-lg overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          src={images[currentIndex]}
          alt="plinko-img"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

        
        <div className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-semibold drop-shadow-md">
          🎮 Play & Win Big!
        </div>
      </div>
    </div>
    </div>
  );
};

export default GameTicket;
