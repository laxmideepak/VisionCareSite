import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ayerim Rios",
      image: "https://cdn.sanity.io/images/k0mgimab/production/ff42a19f57ad9ccc0305b4ab89e4ae0932f21946-200x200.webp?w=96&fm=webp",
      text: "I come here once a year to check my prescription and Elizabeth and Dr Cuba never disappoints. The style of frames are my fav and my prescription sunglasses 😎 and even though I'm not a big brands girl I fell in love with my Versace & Gucci 😍 thank you GoTo Optical"
    },
    {
      name: "Susana Williams",
      image: "https://cdn.sanity.io/images/k0mgimab/production/4113f9232ede6b54e6d97bdeb3cf62c7e4f14dbc-200x200.webp?w=96&fm=webp",
      text: "I easily booked an appointment for the same day over the phone & everyone was really nice. My son's glasses were ready in an hour & they even showed him how to clean them. I also loved the decorated entrance that was perfect for the pictures I took. Overall it was a pleasant experience."
    },
    {
      name: "Ronni Link",
      image: "https://cdn.sanity.io/images/k0mgimab/production/ffa67cda82220a22b2a543c5a1859a5228b5f859-200x200.webp?w=96&fm=webp",
      text: "The ABSOLUTELY BEST eyeglass place I've ever gone to. Dr. Joby and his staff are awesome! I've used eye glasses for 25 years and NEVER have I been to an optometrist that cares as much for their clients, treat them like family, and go out of their way to make sure you can afford what you need. Thank you. You guys are a blessing."
    }
  ];

  return (
    <section className="bg-primary-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-6xl font-bold text-gray-900 mr-4">800+</span>
            <div className="flex text-yellow-400 text-2xl mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">5 STAR REVIEWS ON GOOGLE</h2>
          <p className="text-xl text-gray-700 mb-2">Our patients love us!</p>
          <p className="text-lg text-gray-600">But don't take our word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            We don't utilize agencies to filter our reviews, that's why instead of 5 we have 4.9 real reviews because no one is perfect and we build on trial and error constantly improving with your comments to offer you a totally different experience in the eye care business.
          </p>
        </div>
      </div>
    </section>
  );
}
