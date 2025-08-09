import Navbar from "../components/Navbar"
import Balance from "../components/Balance"
import GameTicket from "../components/GameTicket"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className="bg-black h-screen">
    <div className='bg-black h-[110px]'>
    <Navbar/>
    <Balance/>
    </div>
    <GameTicket/>
    <div className="flex justify-center mt-[60px]">
     <button className="bg-green-600 text-2xl font-bold cursor-pointer hover:scale-105 rounded-2xl text-white p-2"
     onClick={()=>{navigate("/game")}}>Start Game</button>
    </div>
    </div>
    <Footer/>
    </>

  )
}
export default Home
