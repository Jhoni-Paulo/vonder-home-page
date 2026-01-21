import React from 'react';
import { Search, Menu, User, Briefcase, Globe, Headphones, HelpCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  const cycleLanguage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (language === 'pt') setLanguage('en');
    else if (language === 'en') setLanguage('es');
    else setLanguage('pt');
  };

  return (
    <header className="w-full flex flex-col">
      {/* Top Black Bar */}
      <div className="bg-[#000] text-white text-[10px] md:text-xs lg:px-16 py-1 px-4 flex justify-between items-center border-b border-[#555a57]">
        <div className="font-bold tracking-wide hidden md:block">{t('header.good_to_work')}</div>
        <div className="flex gap-4 md:gap-6 ml-auto">
          <a href="#" className="hover:text-vonder-yellow flex items-center gap-1">
             <Headphones size={12} /> {t('header.tech_assistance')}
          </a>
          <a href="#" className="hover:text-vonder-yellow flex items-center gap-1">
            <ShieldCheck size={12} /> {t('header.warranties')}
          </a>
          <a href="#" className="hover:text-vonder-yellow flex items-center gap-1">
            <HelpCircle size={12} /> {t('header.support')}
          </a>
          <button onClick={cycleLanguage} className="hover:text-vonder-yellow flex items-center gap-1 font-bold uppercase cursor-pointer">
            <Globe size={12} /> {language}
          </button>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="bg-[#000] py-4 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-4 relative z-50">
        {/* Logo */}
        <div className="w-full md:w-auto flex justify-between items-center mb-2 md:mb-0">
          <div className="text-white font-black text-3xl tracking-tighter italic mr-8">
            vonder<span className="text-vonder-yellow">.</span>
          </div>
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>

        {/* Search Section */}
        <div className="flex-1 w-full max-w-4xl flex gap-0 relative">
          <button className="bg-vonder-yellow hover:bg-yellow-400 text-black font-bold text-sm px-6 py-3 rounded-l-full flex items-center gap-2 transition-colors whitespace-nowrap">
            <Menu size={18} />
            {t('header.categories')}
          </button>
          
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder={t('header.search_placeholder')}
              className="w-full h-full py-3 px-4 text-gray-700 focus:outline-none border-y border-r border-transparent focus:border-vonder-yellow"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-vonder-yellow">
              <Search size={20} />
            </button>
          </div>

          <div className="bg-white rounded-r-full pr-1"></div>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex gap-3 ml-4">
          <button className="bg-vonder-yellow hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors">
            <User size={18} />
            {t('header.for_you')}
          </button>
          <button className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors">
            <Briefcase size={18} />
            {t('header.for_pros')}
          </button>
        </div>
      </div>

      {/* Sub Nav Yellow */}
      <div className="bg-vonder-yellow text-black py-2 px-4 md:px-8 lg:px-16 flex overflow-x-auto no-scrollbar gap-8 text-sm font-bold shadow-md">
        <a href="#" className="whitespace-nowrap hover:underline">{t('header.segments')}</a>
        <a href="#" className="whitespace-nowrap hover:underline">{t('header.special_lines')}</a>
        <a href="#" className="whitespace-nowrap hover:underline ml-auto hidden md:block">{t('header.work_with_us')}</a>
      </div>
    </header>
  );
};

export default Header;