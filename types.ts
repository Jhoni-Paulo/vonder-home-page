export interface LocalizedText {
  pt: string;
  en: string;
  es: string;
}

export interface Product {
  id: string;
  name: LocalizedText;
  code: string;
  image: string;
  isVertical?: boolean;
}

export interface BlogPost {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  date: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}