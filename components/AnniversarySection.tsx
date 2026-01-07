import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AnniversarySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
        
        {/* 28 Years Graphic */}
        <div className="flex-1 text-center lg:text-left relative">
          <div className="inline-block relative">
            <h2 className="text-[120px] md:text-[180px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-[#b8860b] to-[#facd0f] drop-shadow-2xl">
              28
            </h2>
            <span className="absolute bottom-4 md:bottom-8 right-0 text-2xl md:text-4xl font-serif italic text-[#facd0f]">{t('anniversary.years')}</span>
          </div>
          {/* Product Lineup Image Substitute */}
          <div className="mt-4 flex justify-center lg:justify-start gap-2 opacity-80">
             <div className="w-12 h-24 bg-yellow-500/20 rounded"></div>
             <div className="w-16 h-28 bg-yellow-500/20 rounded"></div>
             <div className="w-10 h-20 bg-yellow-500/20 rounded"></div>
             <div className="w-14 h-26 bg-yellow-500/20 rounded"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-right lg:pl-12">
          <p className="text-lg md:text-xl font-light mb-6">
            {t('anniversary.p1_start')} <span className="font-bold text-[#facd0f]">{t('anniversary.trust')}</span>{t('anniversary.p1_end')}
          </p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent my-6"></div>
          <p className="text-lg md:text-xl font-bold">
            {t('anniversary.p2_start')} <span className="text-[#facd0f]">{t('anniversary.commitment')}</span>{t('anniversary.p2_end')}
          </p>
          <p className="mt-6 text-2xl font-black italic tracking-wide">
            {t('anniversary.slogan')} <br/>{t('anniversary.slogan_2')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default AnniversarySection;