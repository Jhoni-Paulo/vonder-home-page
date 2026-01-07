import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HistorySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Text */}
        <div className="lg:col-span-4">
          <h2 className="text-4xl md:text-5xl font-black italic mb-2 leading-none">
            {t('history.evolution')} <br/>
            <span className="text-vonder-yellow">{t('history.continues')}</span>
          </h2>
          <div className="h-1 w-20 bg-black mb-8 mt-4"></div>
          
          <div className="text-gray-600 space-y-4 text-sm md:text-base leading-relaxed text-justify">
            <p>{t('history.p1')}</p>
            <p>{t('history.p2')}</p>
          </div>
        </div>

        {/* Right Timeline Visualization (Abstracted Layout) */}
        <div className="lg:col-span-8 relative">
           {/* Big Year Numbers Background */}
           <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 select-none">
             <span className="text-[120px] font-black text-yellow-500 absolute -top-10 left-0">1997</span>
             <span className="text-[120px] font-black text-yellow-500 absolute top-20 right-0">2000</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Card 1 */}
              <div className="flex gap-4 items-start">
                 <img src="https://via.placeholder.com/60x150/333/fff?text=Spray" alt="Vonder Lub" className="h-32 object-contain" />
                 <div>
                   <h4 className="font-bold text-lg mb-1">{t('history.inst')}</h4>
                   <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                 </div>
              </div>

              {/* Card 2 - Offset */}
              <div className="flex gap-4 items-start md:mt-12">
                 <img src="https://via.placeholder.com/60x150/333/fff?text=Spray" alt="Vonder Lub 2" className="h-32 object-contain" />
                 <div>
                   <h4 className="font-bold text-lg mb-1">{t('history.inst')}</h4>
                   <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                 </div>
              </div>
           </div>
           
           {/* Center Graphic Element imitation */}
           <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent -skew-y-3 -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default HistorySection;