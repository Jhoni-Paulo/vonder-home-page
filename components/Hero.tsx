import React from 'react';
import { HERO_IMAGE } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden bg-gray-900">
      <img 
        src={HERO_IMAGE} 
        alt="Ferramentas Vonder" 
        className="w-full h-full object-cover opacity-90"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center px-4 md:px-16">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-black italic mb-4">
            {t('hero.tools')} <span className="text-vonder-yellow">VONDER</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 max-w-lg">
            {t('hero.subtitle')} <span className="font-bold">{t('hero.subtitle_bold')}</span>!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;