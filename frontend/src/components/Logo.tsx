import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function Logo(){
     useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.to('#ball1', {
        x: -400,
        repeat: -1,
        duration: 2,
        rotation: 360,
        yoyo: true,
        ease: 'power1.inOut',
      });
      gsap.to('#ball2', {
        x: 400,
        repeat: -1,
        duration: 2,
        rotation: 360,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });

    mm.add("(max-width: 767px)", () => {
      // For small screens
      gsap.to('#ball1', {
        x: -120,
        repeat: -1,
        duration: 2,
        rotation: 360,
        yoyo: true,
        ease: 'power1.inOut',
      });
      gsap.to('#ball2', {
        x: 120,
        repeat: -1,
        duration: 2,
        rotation: 360,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });

    return () => mm.revert(); 
  }, []);

   useGSAP(() => {
    gsap.to('#ball3', {
      rotationY: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear',
      transformOrigin: 'center center',
      transformPerspective: 800,
    });
  }, []);
    return(
        <div className="flex items-center justify-center mt-[-30px]">
      <div id="ball1" className='flex justify-center items-center border-black border-1 w-[200px] h-[200px] rounded-full'>
        <img src="/coin.jpg" alt="coin" className="w-[200px] h-[200px]" />
      </div>
       <div id="ball3" className='flex justify-center items-center border-black border-1 w-[128px] h-[200px] rounded-full'>
        <img src="/coin.jpg" alt="coin" className="w-[200px] h-[200px]" />
      </div>
       <div id="ball2" className='flex justify-center items-center border-black border-1 w-[200px] h-[200px] rounded-full'>
        <img src="/coin.jpg" alt="coin" className="w-[200px] h-[200px]" />
      </div>
    </div>
    )
}