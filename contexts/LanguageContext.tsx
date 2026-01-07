import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    'header.good_to_work': 'É bom trabalhar com',
    'header.tech_assistance': 'Assistência Técnica',
    'header.warranties': 'Garantias',
    'header.support': 'Atendimento',
    'header.search_placeholder': 'Olá, o que você procura hoje?',
    'header.categories': 'Categorias',
    'header.for_you': 'Para você',
    'header.for_pros': 'Para Profissionais',
    'header.segments': 'Segmentos',
    'header.special_lines': 'Linhas Especiais',
    'header.work_with_us': 'Trabalhe Conosco',

    // Hero
    'hero.tools': 'Ferramentas',
    'hero.subtitle': 'O melhor e mais completo mix de',
    'hero.subtitle_bold': 'ferramentas para você',

    // Featured
    'featured.subtitle': 'O melhor e mais completo mix de',
    'featured.view_product': 'Ver Produto',

    // Professional
    'prof.title': 'Para Profissionais',
    'prof.description': 'Soluções completas para o seu negócio em um só lugar. Produtos para múltiplas áreas, projetados para entregar mais resistência, confiança e segurança no uso diário.',
    'prof.cat.construction': 'Construção Civil',
    'prof.cat.transport': 'Transporte e Armazenagem',
    'prof.cat.automotive': 'Manutenção Automotiva',
    'prof.view_more': 'Veja Mais',
    'prof.access_area': 'Acessar Área Profissional',

    // History
    'history.evolution': 'A Evolução',
    'history.continues': 'Continua!',
    'history.p1': 'Desde o seu primeiro produto, a VONDER LUB, lançado em 1997, a VONDER não parou de crescer. Hoje, a marca é referência no desenvolvimento de ferramentas robustas e modernas para uso profissional e industrial.',
    'history.p2': 'Conquistando a preferência de profissionais e lojistas em inúmeras categorias e apontada pelos meios especializados como uma das marcas mais premiadas e respeitadas no segmento.',
    'history.inst': 'Institucional',
    
    // Anniversary
    'anniversary.years': 'Anos',
    'anniversary.trust': 'confiança no mercado de ferramentas',
    'anniversary.p1_start': 'Hoje, a VONDER é sinônimo de',
    'anniversary.p1_end': '. Referência para profissionais e consumidores, a marca é reconhecida pela qualidade e eficiência de seus produtos.',
    'anniversary.commitment': 'compromisso constante com desempenho, durabilidade e respeito',
    'anniversary.p2_start': 'Esse reconhecimento é fruto de um',
    'anniversary.p2_end': ' a quem usa VONDER todos os dias.',
    'anniversary.slogan': 'VONDER. Há 28 anos,',
    'anniversary.slogan_2': 'trabalho profissional levado a sério.',

    // Launch
    'launch.latest': 'Últimos',
    'launch.launches': 'Lançamentos',
    'launch.view_all': 'Ver Todos Lançamentos',
    
    // Blog
    'blog.check': 'Confira',
    'blog.our_blog': 'nosso Blog',
    'blog.read_more': 'Ler Mais',
    'blog.access': 'Acessar Blog',

    // Footer
    'footer.signup_1': 'Cadastre-se e receba as',
    'footer.signup_2': 'novidades em primeira mão!',
    'footer.name_placeholder': 'Seu nome',
    'footer.email_placeholder': 'Seu e-mail',
    'footer.register': 'Cadastrar',
    'footer.terms': 'Ao se cadastrar, você concorda com nossos',
    'footer.terms_link': 'termos de uso',
    'footer.privacy_link': 'políticas de privacidade',
    'footer.inst': 'Institucional',
    'footer.support': 'Suporte e Segurança',
    'footer.contact': 'Contato',
    'footer.social': 'Redes Sociais',
    'footer.about': 'Sobre a Vonder',
    'footer.policy': 'Política de Privacidade',
    'footer.faq': 'Dúvidas Frequentes',
    'footer.manuals': 'Manuais e Garantias',
    'footer.where_to_buy': 'Onde Comprar',
    'footer.hours': 'Horário de atendimento',
    'footer.hours_text': 'Segunda a sexta das 08:00 às 18:00',
    'footer.holidays': '(Exceto Feriados)',
    'footer.rights': '© Grupo OVD. Todos os direitos reservados.'
  },
  en: {
    // Header
    'header.good_to_work': 'It\'s good to work with',
    'header.tech_assistance': 'Technical Support',
    'header.warranties': 'Warranties',
    'header.support': 'Customer Service',
    'header.search_placeholder': 'Hello, what are you looking for today?',
    'header.categories': 'Categories',
    'header.for_you': 'For You',
    'header.for_pros': 'For Pros',
    'header.segments': 'Segments',
    'header.special_lines': 'Special Lines',
    'header.work_with_us': 'Work with Us',

    // Hero
    'hero.tools': 'Tools',
    'hero.subtitle': 'The best and most complete mix of',
    'hero.subtitle_bold': 'tools for you',

    // Featured
    'featured.subtitle': 'The best and most complete mix of',
    'featured.view_product': 'View Product',

    // Professional
    'prof.title': 'For Professionals',
    'prof.description': 'Complete solutions for your business in one place. Products for multiple areas, designed to deliver more resistance, reliability, and safety in daily use.',
    'prof.cat.construction': 'Civil Construction',
    'prof.cat.transport': 'Transport & Storage',
    'prof.cat.automotive': 'Automotive Maintenance',
    'prof.view_more': 'View More',
    'prof.access_area': 'Access Pro Area',

    // History
    'history.evolution': 'The Evolution',
    'history.continues': 'Continues!',
    'history.p1': 'Since its first product, VONDER LUB, launched in 1997, VONDER hasn\'t stopped growing. Today, the brand is a reference in the development of robust and modern tools for professional and industrial use.',
    'history.p2': 'Winning the preference of professionals and retailers in countless categories and pointed out by specialized media as one of the most awarded and respected brands in the segment.',
    'history.inst': 'Institutional',

    // Anniversary
    'anniversary.years': 'Years',
    'anniversary.trust': 'trust in the tools market',
    'anniversary.p1_start': 'Today, VONDER is synonymous with',
    'anniversary.p1_end': '. A reference for professionals and consumers, the brand is recognized for the quality and efficiency of its products.',
    'anniversary.commitment': 'constant commitment to performance, durability, and respect',
    'anniversary.p2_start': 'This recognition is the result of a',
    'anniversary.p2_end': ' for those who use VONDER every day.',
    'anniversary.slogan': 'VONDER. For 28 years,',
    'anniversary.slogan_2': 'professional work taken seriously.',

    // Launch
    'launch.latest': 'Latest',
    'launch.launches': 'Launches',
    'launch.view_all': 'View All Launches',

    // Blog
    'blog.check': 'Check out',
    'blog.our_blog': 'our Blog',
    'blog.read_more': 'Read More',
    'blog.access': 'Access Blog',

    // Footer
    'footer.signup_1': 'Sign up and get',
    'footer.signup_2': 'the news firsthand!',
    'footer.name_placeholder': 'Your name',
    'footer.email_placeholder': 'Your email',
    'footer.register': 'Register',
    'footer.terms': 'By registering, you agree to our',
    'footer.terms_link': 'terms of use',
    'footer.privacy_link': 'privacy policies',
    'footer.inst': 'Institutional',
    'footer.support': 'Support & Security',
    'footer.contact': 'Contact',
    'footer.social': 'Social Media',
    'footer.about': 'About Vonder',
    'footer.policy': 'Privacy Policy',
    'footer.faq': 'FAQ',
    'footer.manuals': 'Manuals & Warranties',
    'footer.where_to_buy': 'Where to Buy',
    'footer.hours': 'Opening Hours',
    'footer.hours_text': 'Mon to Fri from 08:00 to 18:00',
    'footer.holidays': '(Except Holidays)',
    'footer.rights': '© OVD Group. All rights reserved.'
  },
  es: {
    // Header
    'header.good_to_work': 'Es bueno trabajar con',
    'header.tech_assistance': 'Asistencia Técnica',
    'header.warranties': 'Garantías',
    'header.support': 'Atención',
    'header.search_placeholder': 'Hola, ¿qué buscas hoy?',
    'header.categories': 'Categorías',
    'header.for_you': 'Para Ti',
    'header.for_pros': 'Para Profesionales',
    'header.segments': 'Segmentos',
    'header.special_lines': 'Líneas Especiales',
    'header.work_with_us': 'Trabaja con Nosotros',

    // Hero
    'hero.tools': 'Herramientas',
    'hero.subtitle': '¡La mejor y más completa mezcla de',
    'hero.subtitle_bold': 'herramientas para ti',

    // Featured
    'featured.subtitle': '¡La mejor y más completa mezcla de',
    'featured.view_product': 'Ver Producto',

    // Professional
    'prof.title': 'Para Profesionales',
    'prof.description': 'Soluciones completas para su negocio en un solo lugar. Productos para múltiples áreas, diseñados para entregar más resistencia, confianza y seguridad en el uso diario.',
    'prof.cat.construction': 'Construcción Civil',
    'prof.cat.transport': 'Transporte y Almacenamiento',
    'prof.cat.automotive': 'Mantenimiento Automotriz',
    'prof.view_more': 'Ver Más',
    'prof.access_area': 'Acceder Área Profesional',

    // History
    'history.evolution': 'La Evolución',
    'history.continues': '¡Continúa!',
    'history.p1': 'Desde su primer producto, VONDER LUB, lanzado en 1997, VONDER no ha parado de crecer. Hoy, la marca es referencia en el desarrollo de herramientas robustas y modernas para uso profesional e industrial.',
    'history.p2': 'Conquistando la preferencia de profesionales y comerciantes en innumerables categorías y señalada por los medios especializados como una de las marcas más premiadas y respetadas en el segmento.',
    'history.inst': 'Institucional',

    // Anniversary
    'anniversary.years': 'Años',
    'anniversary.trust': 'confianza en el mercado de herramientas',
    'anniversary.p1_start': 'Hoy, VONDER es sinónimo de',
    'anniversary.p1_end': '. Referencia para profesionales y consumidores, la marca es reconocida por la calidad y eficiencia de sus productos.',
    'anniversary.commitment': 'compromiso constante con desempeño, durabilidad y respeto',
    'anniversary.p2_start': 'Este reconocimiento es fruto de un',
    'anniversary.p2_end': ' a quien usa VONDER todos los días.',
    'anniversary.slogan': 'VONDER. Hace 28 años,',
    'anniversary.slogan_2': 'trabajo profesional tomado en serio.',

    // Launch
    'launch.latest': 'Últimos',
    'launch.launches': 'Lanzamientos',
    'launch.view_all': 'Ver Todos los Lanzamientos',

    // Blog
    'blog.check': 'Mira',
    'blog.our_blog': 'nuestro Blog',
    'blog.read_more': 'Leer Más',
    'blog.access': 'Acceder al Blog',

    // Footer
    'footer.signup_1': 'Regístrese y reciba las',
    'footer.signup_2': 'novedades de primera mano!',
    'footer.name_placeholder': 'Su nombre',
    'footer.email_placeholder': 'Su e-mail',
    'footer.register': 'Registrar',
    'footer.terms': 'Al registrarse, acepta nuestros',
    'footer.terms_link': 'términos de uso',
    'footer.privacy_link': 'políticas de privacidad',
    'footer.inst': 'Institucional',
    'footer.support': 'Soporte y Seguridad',
    'footer.contact': 'Contacto',
    'footer.social': 'Redes Sociales',
    'footer.about': 'Sobre Vonder',
    'footer.policy': 'Política de Privacidad',
    'footer.faq': 'Preguntas Frecuentes',
    'footer.manuals': 'Manuales y Garantías',
    'footer.where_to_buy': 'Dónde Comprar',
    'footer.hours': 'Horario de atención',
    'footer.hours_text': 'Lunes a viernes de 08:00 a 18:00',
    'footer.holidays': '(Excepto Feriados)',
    'footer.rights': '© Grupo OVD. Todos los derechos reservados.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};