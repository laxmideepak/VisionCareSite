import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "David Martin",
      title: "Professional Excellence",
      image: "https://cdn.sanity.io/images/k0mgimab/production/ff42a19f57ad9ccc0305b4ab89e4ae0932f21946-200x200.webp?w=96&fm=webp",
      text: "Dr. Joby and Sam at GoTo Optical are amazing professionals. They answered all my questions and are very knowledgeable, and thorough. They offer five star service to all their patients. I highly recommend them for your eye care needs."
    },
    {
      name: "Armann",
      title: "Great Time Visiting", 
      image: "https://cdn.sanity.io/images/k0mgimab/production/4113f9232ede6b54e6d97bdeb3cf62c7e4f14dbc-200x200.webp?w=96&fm=webp",
      text: "Had a great time visiting GoTo Optical. Great customer service, they help you get an appointment very quickly. Doctor takes his time to attend you and answers all the questions. They have all the premium brands like Gucci, Versace, YSL, Tom Ford and more. Highly recommended!!"
    },
    {
      name: "Cassie Jo",
      title: "Deepest Gratitude",
      image: "https://cdn.sanity.io/images/k0mgimab/production/ffa67cda82220a22b2a543c5a1859a5228b5f859-200x200.webp?w=96&fm=webp",
      text: "I had to take a moment to express my deepest gratitude for GOTO Optical and Eye Care off Cockrell Hill FOR SO MANY reasons. I am born and raised in the hood, and sometimes in certain areas have businesses that profit off the lower income... [This business provides] excellent service and genuine care for the community."
    }
  ];

  return (
    <section className="bg-primary-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-6xl font-bold text-gray-900 mr-4">800+</span>
            <img 
              src="/assets/animated-5-stars.gif" 
              alt="5 Star Rating Animation" 
              className="h-12 w-auto mr-4"
            />
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
                  <h5 className="text-sm font-medium text-primary-600 mb-1">"{testimonial.title}"</h5>
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
