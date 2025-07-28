
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "I've been playing for 3 months and already won over $5,000! The game is fair, payouts are instant, and the community is amazing.",
      rating: 5,
      winAmount: "$5,247"
    },
    {
      name: "Mike Chen",
      location: "Toronto, Canada",
      text: "Best Plinko site I've ever used. The mobile app is smooth, customer support is excellent, and I love the tournaments!",
      rating: 5,
      winAmount: "$3,891"
    },
    {
      name: "Emma Rodriguez",
      location: "London, UK",
      text: "Started with just $10 and turned it into $2,000 in my first week. The different difficulty levels keep it exciting!",
      rating: 5,
      winAmount: "$2,156"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 mt-[-50px] ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className=" text-black">
              What Our Winners Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real players are saying about their PlinkoPlay experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-glow group hover:scale-105 transition-transform duration-300 bg-white rounded-2xl p-2">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary-400 mr-3 bg-white" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-black mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-black">{testimonial.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-bold">Won {testimonial.winAmount}</div>
                  <div className="text-xs text-gray-400">Total Winnings</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card-glow inline-block">
            <p className="text-lg text-gray-300 mb-4">Ready to write your own success story?</p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials