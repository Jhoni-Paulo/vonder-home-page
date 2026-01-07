import { Product, BlogPost } from './types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=3270&auto=format&fit=crop";

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: {
      pt: 'Lavadora de alta pressão a gasolina LGV 3600, VONDER',
      en: 'Gasoline High Pressure Washer LGV 3600, VONDER',
      es: 'Lavadora de Alta Presión a Gasolina LGV 3600, VONDER'
    },
    code: '68.64.360.000',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2969&auto=format&fit=crop',
    isVertical: true
  },
  {
    id: '2',
    name: {
      pt: 'Chave de fenda 1/4" x 10", aço cromo vanádio',
      en: 'Screwdriver 1/4" x 10", Chrome Vanadium Steel',
      es: 'Destornillador 1/4" x 10", Acero Cromo Vanadio'
    },
    code: '30.70.701.410',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2970&auto=format&fit=crop',
    isVertical: false
  },
  {
    id: '3',
    name: {
      pt: 'Lanterna led recarregável',
      en: 'Rechargeable LED Flashlight',
      es: 'Linterna LED Recargable'
    },
    code: '60.04.185.100',
    image: 'https://images.unsplash.com/photo-1542348572-8f6a91702c2d?q=80&w=2969&auto=format&fit=crop',
    isVertical: false
  }
];

export const LATEST_LAUNCHES: Product[] = [
  {
    id: '4',
    name: {
      pt: 'Removedor de grampos plásticos',
      en: 'Plastic Staple Remover',
      es: 'Removedor de Grapas Plásticas'
    },
    code: '35.99.000.240',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=200' 
  },
  {
    id: '5',
    name: {
      pt: 'Tesoura para Poda a Bateria 20V',
      en: '20V Battery Pruning Shears',
      es: 'Tijeras de Podar a Batería 20V'
    },
    code: '60.01.200.200',
    image: 'https://images.unsplash.com/photo-1622368940562-b91c01570773?q=80&w=200'
  },
  {
    id: '6',
    name: {
      pt: 'Escovas e Pincel para Detalhamento',
      en: 'Detailing Brushes and Brush',
      es: 'Cepillos y Pincel para Detallado'
    },
    code: '35.99.000.240',
    image: 'https://images.unsplash.com/photo-1635334336064-a7407a53c301?q=80&w=200'
  },
  {
    id: '7',
    name: {
      pt: 'Tesoura para Poda TPV 200',
      en: 'Pruning Shears TPV 200',
      es: 'Tijeras de Podar TPV 200'
    },
    code: '60.01.200.200',
    image: 'https://images.unsplash.com/photo-1590233140510-530932c0d296?q=80&w=200'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: {
      pt: 'Construção Civil',
      en: 'Civil Construction',
      es: 'Construcción Civil'
    },
    description: {
      pt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      en: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    date: '10 Dez',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    title: {
      pt: 'Inovação em Ferramentas',
      en: 'Tool Innovation',
      es: 'Innovación en Herramientas'
    },
    description: {
      pt: 'Novas tecnologias chegando ao mercado para facilitar o seu trabalho.',
      en: 'New technologies arriving on the market to make your work easier.',
      es: 'Nuevas tecnologías llegando al mercado para facilitar su trabajo.'
    },
    date: '12 Dez',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    title: {
      pt: 'Segurança no Trabalho',
      en: 'Workplace Safety',
      es: 'Seguridad en el Trabajo'
    },
    description: {
      pt: 'Dicas essenciais para manter a segurança no canteiro de obras.',
      en: 'Essential tips for maintaining safety at the construction site.',
      es: 'Consejos esenciales para mantener la seguridad en la obra.'
    },
    date: '15 Dez',
    image: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=1000&auto=format&fit=crop'
  }
];