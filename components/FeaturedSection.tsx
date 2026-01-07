import React from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FeaturedSection: React.FC = () => {
  const [washer, screwdriver, flashlight] = FEATURED_PRODUCTS;
  const { t, language } = useLanguage();

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black italic mb-2">
          {t('hero.tools')} <span className="text-vonder-yellow">VONDER</span>
        </h2>
        <p className="text-gray-600">{t('featured.subtitle')} <strong>{t('hero.subtitle_bold')}</strong>!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Large Item (Washer) */}
        <div className="relative bg-gray-100 rounded-3xl overflow-hidden group h-[400px] lg:h-[600px] shadow-lg">
          <img 
            src={washer.image} 
            alt={washer.name[language]} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-8 max-w-xs bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-vonder-yellow">
            <h3 className="font-bold text-gray-900 mb-2 leading-tight">{washer.name[language]}</h3>
            <p className="text-xs text-gray-500 font-mono mb-4">{washer.code}</p>
            <button className="bg-vonder-yellow hover:bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-full transition-colors">
              {t('featured.view_product')}
            </button>
          </div>
        </div>

        {/* Right Column - Split Items */}
        <div className="flex flex-col gap-6 h-[600px]">
          {/* Top Right (Screwdriver) */}
          <div className="relative flex-1 bg-gray-100 rounded-3xl overflow-hidden group shadow-lg">
             <img 
              src={screwdriver.image} 
              alt={screwdriver.name[language]} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-8 right-8 max-w-[200px] bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border-r-4 border-vonder-yellow text-right">
              <h3 className="font-bold text-gray-900 text-sm mb-1">{screwdriver.name[language]}</h3>
              <p className="text-xs text-gray-500 font-mono mb-3">{screwdriver.code}</p>
              <button className="bg-vonder-yellow hover:bg-yellow-400 text-black text-[10px] font-bold px-3 py-1.5 rounded-full inline-block">
                {t('featured.view_product')}
              </button>
            </div>
          </div>

          {/* Bottom Right (Flashlight) */}
          <div className="relative flex-1 bg-black rounded-3xl overflow-hidden group shadow-lg">
             <img 
              src={flashlight.image} 
              alt={flashlight.name[language]} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Flashlight beam effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rotate-45 transform translate-x-full group-hover:-translate-x-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;