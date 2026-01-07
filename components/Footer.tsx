import React from 'react';
import { User, Mail, Instagram, Facebook, Linkedin, Youtube, Pin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full">
      {/* Newsletter Bar */}
      <div className="bg-[#4d4d4d] py-8 px-4 md:px-8 lg:px-16 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-vonder-yellow text-lg">{t('footer.signup_1')}</h3>
            <p className="font-light text-xl">{t('footer.signup_2')}</p>
          </div>
          
          <div className="flex-1 w-full max-w-3xl flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-auto flex-1">
               <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
               <input type="text" placeholder={t('footer.name_placeholder')} className="w-full pl-10 pr-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-vonder-yellow" />
            </div>
            <div className="relative w-full md:w-auto flex-1">
               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
               <input type="email" placeholder={t('footer.email_placeholder')} className="w-full pl-10 pr-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-vonder-yellow" />
            </div>
            <button className="bg-vonder-yellow hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full w-full md:w-auto transition-colors">
              {t('footer.register')}
            </button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-4 text-center md:text-right">
           <label className="text-[10px] text-gray-300 flex items-center justify-center md:justify-end gap-2 cursor-pointer">
             <input type="checkbox" className="rounded text-vonder-yellow focus:ring-vonder-yellow" />
             {t('footer.terms')} <a href="#" className="underline">{t('footer.terms_link')}</a> e <a href="#" className="underline">{t('footer.privacy_link')}</a>
           </label>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-vonder-yellow py-12 px-4 md:px-8 lg:px-16 text-black text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-4 flex justify-center mb-8">
             <div className="text-4xl font-black italic tracking-tighter">vonder.</div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase">{t('footer.inst')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:underline">{t('blog.our_blog')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.policy')}</a></li>
              <li><a href="#" className="hover:underline">ESG - Ambiental Social e Governança</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              <li><a href="#" className="hover:underline">{t('header.work_with_us')}</a></li>
              <li><a href="#" className="hover:underline">Acesso Cliente</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase">{t('footer.support')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('footer.faq')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.policy')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.terms_link')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.manuals')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.where_to_buy')}</a></li>
              <li><a href="#" className="hover:underline">{t('header.tech_assistance')}</a></li>
              <li><a href="#" className="hover:underline">Cuidado com Sites Falsos</a></li>
              <li><a href="#" className="hover:underline">Download do Catálogo 2025</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase">{t('footer.contact')}</h4>
            <p className="mb-2">Assistência ao consumidor: 0800 723 4762</p>
            <p className="mb-6">Atendimento comercial: 41 2101-0550</p>
            
            <h4 className="font-bold mb-2 uppercase">{t('footer.hours')}</h4>
            <p>{t('footer.hours_text')}</p>
            <p>{t('footer.holidays')}</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
             <h4 className="font-bold mb-4 uppercase">{t('footer.social')}</h4>
             <div className="flex gap-4 mb-8">
               <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800"><Instagram size={16} /></a>
               <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800"><Facebook size={16} /></a>
               <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800"><Linkedin size={16} /></a>
               <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800"><Youtube size={16} /></a>
               <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800"><Pin size={16} /></a>
             </div>
             
             <div className="opacity-80">
               <div className="text-xl font-bold font-serif italic text-black border border-black rounded-full px-4 py-2 inline-block">Grupo OVD</div>
             </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-white text-[10px] text-center py-4">
        {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;