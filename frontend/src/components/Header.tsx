import  { useState } from 'react'
import { Menu, X, Coins} from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-yellow-600 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-gold-500 rounded-lg flex items-center justify-center">
              <Coins className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-red from-primary-400 to-gold-400 bg-clip-text bg-white text-transparent">
              PlinkoPlay
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="signup" className="text-black hover:text-primary-400 transition-colors">Play Game</a>
            <a href="features" className="text-black hover:text-primary-400 transition-colors">Features</a>
            <a href="about" className="text-black hover:text-primary-400 transition-colors">About</a>
            <a href="contact" className="text-black hover:text-primary-400 transition-colors">Contact</a>
          </nav>

         

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              
              <a href="#game" className="text-black hover:text-primary-400 transition-colors">Play Game</a>
              <a href="#features" className="text-black hover:text-primary-400 transition-colors">Features</a>
              <a href="#about" className="text-black hover:text-primary-400 transition-colors">About</a>
              <a href="#contact" className="text-black hover:text-primary-400 transition-colors">Contact</a>
              
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header