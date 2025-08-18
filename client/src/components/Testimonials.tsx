import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
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
    <section className="bg-blue-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4 px-4">
            <span className="text-4xl sm:text-6xl font-bold text-gray-900 mr-2 sm:mr-4">{t('reviews')}</span>
            <img 
              src="/assets/animated-5-stars.gif" 
              alt="5 Star Rating Animation" 
              className="h-8 sm:h-12 w-auto mr-2 sm:mr-4"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">{t('starReviews')}</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-1 sm:mb-2">{t('ourPatientsLoveUs')}</p>
          <p className="text-base sm:text-lg text-gray-600">{t('butDontTakeOurWord')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-white p-4 sm:p-6 rounded-xl shadow-lg overflow-hidden">
              {/* Flowing Sparkle Border */}
              <div className="sparkle-border">
                <div className="sparkle-flow">✨</div>
                <div className="sparkle-flow">⭐</div>
                <div className="sparkle-flow">💫</div>
                <div className="sparkle-flow">🌟</div>
                <div className="sparkle-flow">✨</div>
                <div className="sparkle-flow">⭐</div>
                <div className="sparkle-flow">💫</div>
                <div className="sparkle-flow">🌟</div>
              </div>
              
              <div className="flex items-center mb-3 sm:mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <h5 className="text-xs sm:text-sm font-medium text-blue-600 mb-1">"{testimonial.title}"</h5>
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

      <style dangerouslySetInnerHTML={{
        __html: `
          .sparkle-border {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            border-radius: 0.75rem;
            overflow: hidden;
          }
          
          .sparkle-flow {
            position: absolute;
            font-size: 14px;
            animation: flowAround 4s linear infinite;
            opacity: 0.8;
          }
          
          .sparkle-flow:nth-child(1) { animation-delay: 0s; }
          .sparkle-flow:nth-child(2) { animation-delay: 0.5s; }
          .sparkle-flow:nth-child(3) { animation-delay: 1s; }
          .sparkle-flow:nth-child(4) { animation-delay: 1.5s; }
          .sparkle-flow:nth-child(5) { animation-delay: 2s; }
          .sparkle-flow:nth-child(6) { animation-delay: 2.5s; }
          .sparkle-flow:nth-child(7) { animation-delay: 3s; }
          .sparkle-flow:nth-child(8) { animation-delay: 3.5s; }
          
          @keyframes flowAround {
            0% {
              top: -10px;
              left: -10px;
              opacity: 0;
            }
            10% {
              top: -5px;
              left: 0%;
              opacity: 1;
            }
            25% {
              top: 0%;
              left: 100%;
              opacity: 1;
            }
            35% {
              top: 0%;
              left: 100%;
              opacity: 0;
            }
            40% {
              top: 0%;
              left: 100%;
              opacity: 0;
            }
            50% {
              top: 100%;
              left: 100%;
              opacity: 1;
            }
            65% {
              top: 100%;
              left: 0%;
              opacity: 1;
            }
            75% {
              top: 100%;
              left: -10px;
              opacity: 0;
            }
            80% {
              top: 100%;
              left: -10px;
              opacity: 0;
            }
            90% {
              top: 0%;
              left: -10px;
              opacity: 1;
            }
            100% {
              top: -10px;
              left: -10px;
              opacity: 0;
            }
          }
        `
      }} />
    </section>
  );
}
