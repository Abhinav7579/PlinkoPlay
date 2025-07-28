
import { Play, TrendingUp, Shield, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate=useNavigate();
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-6">
            <span className="text-yellow-500 animate">
             Drop, Win, Repeat!
          </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto mt-[40px]">
            Experience the thrill of Plinko like never before. Drop your ball, watch it bounce, and win real money with every play!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary flex items-center space-x-2 text-lg animate-glow bg-white rounded-2xl p-4 hover:scale-105 hover:bg-yellow-500 cursor-pointer" onClick={()=>{navigate("/Signup")}}>
              <Play className="w-6 h-6 " />
              <span className='text-xl font-bold'>Play Now & Win</span>
            </button>
        
              <TrendingUp className="w-6 h-6" />
              
            
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className='text-white'>100% Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-white" />
              <span className='text-white'>Instant Payouts</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className='text-white'>Fair Play Guaranteed</span>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Hero