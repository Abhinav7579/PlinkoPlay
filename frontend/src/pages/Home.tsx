import Navbar from "../components/Navbar";
import Balance from "../components/Balance";
import GameTicket from "../components/GameTicket";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative h-screen bg-black overflow-hidden">
        
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-lg scale-110 z-0"
          style={{
            backgroundImage: `url("https://i.ytimg.com/vi/LZAjXeALxLM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsrVqHp5JWvGZ0KRpuddN7dPWriw")`,
          }}
        ></div>

         <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="bg-black/40">
            <Navbar />
            <Balance />
          </div>

          <GameTicket />
          <div className="flex justify-center mt-[60px]">
            <button
              className="bg-green-600 text-2xl font-bold cursor-pointer hover:scale-105 rounded-2xl text-white p-2"
              onClick={() => {
                navigate("/game");
              }}
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
