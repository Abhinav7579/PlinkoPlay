
import { Coins, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-gold-500 rounded-lg flex items-center justify-center">
                <Coins className="w-6 h-6 text-yellow-500" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-gold-400 bg-clip-text text-transparent bg-white">
                PlinkoPlay
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The ultimate destination for Plinko gaming. Win real money, join tournaments, and experience the thrill of the drop!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Play Game</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Tournaments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">How to Play</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Promotions</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Responsible Gaming</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">plinkopaly03@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">+91 8476984588</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">24/7 Live Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 PlinkoPlay. All rights reserved. Play responsibly.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer