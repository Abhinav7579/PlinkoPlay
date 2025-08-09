import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import axios from "axios";
import { Button } from "../components/Button";
import { baseURL } from "../utils";
import Navbar from "../components/Navbar"
import Balance from "../components/Balance"
import Footer from "../components/Footer"
import Bet from "../components/Bet";
export function Game() {
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const manager = new BallManager(canvasRef.current);
      setBallManager(manager);
    }
  }, []);

  return (
    <>
    <div className="bg-black">
    <div className='bg-black h-[110px]'>
    <Navbar/>
    <Balance/>
    </div>
    <div className="bg-black">
      <div className=" flex">
        <div>
    <Bet/>
        </div>
        <div className="">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      </div>
      <div>
      <Button
        className=" bg-green-500 w-[100px] mt-[300px]"
        onClick={async () => {
          const response = await axios.post(`${baseURL}/game`, {
            data: 1,
          });
          if (ballManager) {
            ballManager.addBall(response.data.point);
          }
        }}
      >
        Add ball
      </Button>
      </div>
      </div>
    </div>
      <Footer/>
      </div>
    </>
  );
}
