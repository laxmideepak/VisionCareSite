import { useLanguage } from "@/contexts/LanguageContext";

export default function Community() {
  const { t } = useLanguage();
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-6 sm:mb-8">
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/2800ed371b80c5cffd740efd91d472cae63b0477-795x412.webp?fm=webp" 
              alt="Community commitment" 
              className="w-full max-w-2xl mx-auto rounded-xl shadow-lg mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('ourCommitmentToCommunity')}
            </h2>
            
            {/* Decorative underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto px-4 leading-relaxed">
              {t('communityDescription')}
            </p>
          </div>


        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `
      }} />
    </section>
  );
}
