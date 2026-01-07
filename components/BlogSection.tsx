import React from 'react';
import { BLOG_POSTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const BlogSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black italic">
            {t('blog.check')} <br/>
            <span className="text-vonder-yellow">{t('blog.our_blog')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-black rounded-2xl overflow-hidden group shadow-2xl relative h-80">
              <img 
                src={post.image} 
                alt={post.title[language]} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 w-full p-6 text-white">
                <div className="flex justify-between items-end mb-2">
                   <h3 className="text-vonder-yellow font-bold text-xl">{post.title[language]}</h3>
                </div>
                <p className="text-gray-300 text-xs mb-4 line-clamp-2">{post.description[language]}</p>
                <div className="flex justify-between items-center text-xs font-bold border-t border-gray-700 pt-4">
                  <a href="#" className="uppercase hover:text-vonder-yellow transition-colors">{t('blog.read_more')}</a>
                  <span className="text-vonder-yellow">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-black text-white hover:bg-gray-800 font-bold py-3 px-10 rounded-full transition-colors shadow-lg">
            {t('blog.access')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;