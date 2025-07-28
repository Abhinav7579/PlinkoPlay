
import Header from '../components/Header'
import Hero from '../components/Hero'
import Logo from '../components/Logo'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export function Welcome() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Logo/>
      
      <Testimonials />
      <Footer />
    </div>
  )
}

