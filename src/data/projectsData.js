import imgAmatina from '../assets/SV_IA/adsMarket.webp';
import imgBobois from '../assets/Clients/ImageUNIQ.webp';
import imgMexikandela from '../assets/Partners/ShopIgartua 1.webp';
import imgIgartua from '../assets/Partners/ShopIgartua 1.webp';
import imgMorena from '../assets/Partners/ShopIgartua 1.webp';

export const allProjects = [
  { id: 1, 
    title: "Amatina", 
    description: "Desarrollo de e-commerce y estrategia de marketing digital para marca de joyería.", 
    image: imgAmatina, link: "https://amatina.com", 
    category: "website" },
  { id: 2, 
    title: "Bobois Collection", 
    description: "Campañas de publicidad pagada (Ads) en Google y Meta para aumentar visibilidad y ventas.", 
    image: imgBobois, 
    link: "https://boboiscollection.com", 
    category: "ads" },
  { id: 3, 
    title: "Mexikandela", 
    description: "Gestión completa de redes sociales, creación de contenido y community management.", 
    image: imgMexikandela, 
    link: "https://mexikandela.com", 
    category: "social" },
  { id: 4, 
    title: "Shop Igartua", 
    description: "Optimización y gestión de ventas en marketplaces como Amazon y Mercado Libre.", 
    image: imgIgartua, 
    link: "https://shopigartua.com", 
    category: "marketplace" },
  { id: 5, 
    title: "Morena Mia", 
    description: "Diseño web completo y estrategia SEO para tienda de moda online.", 
    image: imgMorena, 
    link: "https://morenamia.com", 
    category: "website" }
];

export const categories = [
    { key: "website", name: "Websites/E-commerce" },
    { key: "ads", name: "Ads Campaigns" },
    { key: "social", name: "Social Media" },
    { key: "marketplace", name: "Marketplace" },
    { key: "all", name: "Todos" }
];
