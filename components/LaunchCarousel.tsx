import React, { useRef } from 'react';
import { LATEST_LAUNCHES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LaunchCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-4xl font-black italic text-black">{t('launch.latest')} <br/><span className="text-vonder-yellow">{t('launch.launches')}</span></h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
          </div>
          
          <div className="flex gap-4 items-center">
             <div className="flex gap-2">
                <button onClick={() => scroll('left')} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors text-gray-700">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={() => scroll('right')} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors text-gray-700">
                  <ChevronRight size={24} />
                </button>
             </div>
             <button className="hidden md:block bg-vonder-yellow hover:bg-yellow-400 text-black text-sm font-bold px-6 py-3 rounded-full transition-colors">
               {t('launch.view_all')}
             </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory"
        >
          {LATEST_LAUNCHES.map((product) => (
            <div key={product.id} className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center snap-start border border-gray-100 group">
              <div className="w-48 h-48 mb-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name[language]} 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-2 h-10 overflow-hidden">{product.name[language]}</h3>
              <p className="text-gray-400 text-xs font-mono">{product.code}</p>
            </div>
          ))}
        </div>
        
        <div className="md:hidden mt-6 text-center">
            <button className="bg-vonder-yellow hover:bg-yellow-400 text-black text-sm font-bold px-8 py-3 rounded-full w-full transition-colors">
               {t('launch.view_all')}
             </button>
        </div>
      </div>
    </section>
  );
};

export default LaunchCarousel;