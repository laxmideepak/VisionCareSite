import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-blue-600 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <div className="mb-4">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                <span className="text-green-400">GoTo</span>
                <span className="text-white"> Optical</span>
              </div>
              <div className="text-xs sm:text-sm text-green-400 font-semibold">
                {t('eyewearAndEyecare')}
              </div>
            </div>
            <p className="text-sm sm:text-base text-blue-100">{t('footerDescription')}</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">{t('contactInformation')}</h3>
            <div className="space-y-2 text-blue-100">
              <div className="flex items-center justify-center sm:justify-start">
                <MapPin className="w-4 h-4 mr-2 text-blue-200 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=4396+Dallas+Fort+Worth+Turnpike+Ste+107,+Dallas,+TX+75211" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  4396 Dallas Fort Worth Turnpike Ste 107, Dallas, TX 75211
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Phone className="w-4 h-4 mr-2 text-blue-200 flex-shrink-0" />
                <a 
                  href="tel:+12145505005" 
                  className="text-sm sm:text-base hover:text-white transition-colors duration-200"
                >
                  +1 (214) 550-5005
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Clock className="w-4 h-4 mr-2 text-blue-200 flex-shrink-0" />
                <span className="text-sm sm:text-base">{t('sameDayAppointments')}</span>
              </div>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">{t('services')}</h3>
            <ul className="space-y-1 sm:space-y-2 text-blue-100 text-sm sm:text-base">
              <li>• {t('comprehensiveEyeExams')}</li>
              <li>• {t('contactLenses')}</li>
              <li>• {t('designerEyewear')}</li>
              <li>• {t('sameDayService')}</li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">{t('storeTimings')}</h3>
            <div className="space-y-1 text-blue-100 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span>{t('monday')}</span>
                <span>9:00 am - 7:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>{t('tuesday')}</span>
                <span>9:00 am - 7:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>{t('wednesday')}</span>
                <span>9:00 am - 7:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>{t('thursday')}</span>
                <span>9:00 am - 7:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>{t('friday')}</span>
                <span>9:00 am - 7:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>{t('saturday')}</span>
                <span>9:00 am - 6:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>{t('sunday')}</span>
                <span className="text-red-300">{t('closed')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-500 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-blue-200">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
