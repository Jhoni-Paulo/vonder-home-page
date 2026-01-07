import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProfessionalSection: React.FC = () => {
  const { t } = useLanguage();
  
  const categories = [
    { title: t('prof.cat.construction'), img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" },
    { title: t('prof.cat.transport'), img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" },
    { title: t('prof.cat.automotive'), img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <section className="bg-vonder-yellow py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl font-black mb-4 text-black">{t('prof.title')}</h2>
        <p className="text-gray-800 max-w-3xl mx-auto mb-12 text-lg">
          {t('prof.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                <h3 className="text-vonder-yellow font-bold text-xl mb-2">{cat.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                <span className="text-vonder-yellow text-xs font-bold uppercase tracking-wider underline decoration-vonder-yellow/50 underline-offset-4 group-hover:text-white transition-colors">
                  {t('prof.view_more')}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">
          {t('prof.access_area')}
        </button>
      </div>
    </section>
  );
};

export default ProfessionalSection;