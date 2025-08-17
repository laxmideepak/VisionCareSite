import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "David Martin",
      title: "Professional Excellence",
      image: "https://cdn.sanity.io/images/k0mgimab/production/ff42a19f57ad9ccc0305b4ab89e4ae0932f21946-200x200.webp?w=96&fm=webp",
      text: "Dr. Joby and Sam at Go-To-Optical and Eye Care are amazing professionals. They answered all my questions and are very knowledgeable, and thorough. They offer five star service to all their patients. I highly recommend them for your eye care needs."
    },
    {
      name: "Armann",
      title: "Great Time Visiting", 
      image: "https://cdn.sanity.io/images/k0mgimab/production/4113f9232ede6b54e6d97bdeb3cf62c7e4f14dbc-200x200.webp?w=96&fm=webp",
      text: "Had a great time visiting Go-To-Optical and Eye Care. Great customer service, they help you get an appointment very quickly. Doctor takes his time to attend you and answers all the questions. They have all the premium brands like Gucci, Versace, YSL, Tom Ford and more. Highly recommended!!"
    },
    {
      name: "Cassie Jo",
      title: "Deepest Gratitude",
      image: "https://cdn.sanity.io/images/k0mgimab/production/ffa67cda82220a22b2a543c5a1859a5228b5f859-200x200.webp?w=96&fm=webp",
      text: "I had to take a moment to express my deepest gratitude for Go-To-Optical and Eye Care off Cockrell Hill FOR SO MANY reasons. I am born and raised in the hood, and sometimes in certain areas have businesses that profit off the lower income... [This business provides] excellent service and genuine care for the community."
    }
  ];

  return (
    <section className="bg-primary-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4 px-4">
            <span className="text-4xl sm:text-6xl font-bold text-gray-900 mr-2 sm:mr-4">800+</span>
            <img 
              src="/assets/animated-5-stars.gif" 
              alt="5 Star Rating Animation" 
              className="h-8 sm:h-12 w-auto mr-2 sm:mr-4"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">5 STAR REVIEWS ON GOOGLE</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-1 sm:mb-2">Our patients love us!</p>
          <p className="text-base sm:text-lg text-gray-600">But don't take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-3 sm:mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <h5 className="text-xs sm:text-sm font-medium text-primary-600 mb-1">"{testimonial.title}"</h5>
                  <div className="flex text-yellow-400 text-xs sm:text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto px-4">
            We don't utilize agencies to filter our reviews, that's why instead of 5 we have 4.9 real reviews because no one is perfect and we build on trial and error constantly improving with your comments to offer you a totally different experience in the eye care business.
          </p>
        </div>
      </div>
    </section>
  );
}
