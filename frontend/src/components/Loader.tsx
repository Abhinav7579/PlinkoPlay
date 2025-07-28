import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader: React.FC = () => {
  useGSAP(() => {
    gsap.to("#ball3", {
      rotationY: 360,
      duration: 1.2,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-white text-4xl">
            Please Wait..
        </div>
      <div
        id="ball3"
        className="flex justify-center items-center  w-[200px] h-[200px] rounded-full shadow-xl"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <img
          src="/coin.jpg"
          alt="coin"
          className="w-[180px] h-[180px] rounded-full object-cover"
          
        />
      </div>
    </div>
  );
};

export default Loader;
