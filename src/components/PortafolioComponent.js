/* import React, { useState } from "react"; */
import styles from "./PortafolioPage.module.css";

import HeroIMG from "../../src/assets/Portafolio/resultados.webp"
/* import imgAmatina from '../../src/assets/SV_IA/adsMarket.webp';
import imgBobois from '../../src/assets/Clients/ImageUNIQ.webp';
import imgMexikandela from '../../src/assets/Partners/ShopIgartua 1.webp';
import imgIgartua from '../../src/assets/Partners/ShopIgartua 1.webp';
import imgMorena from '../../src/assets/Partners/ShopIgartua 1.webp';
 */
/* const allProjects = [
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
    category: "website" },
]; */

/* const categories = [
    { key: "website", name: "Websites/E-commerce" },
    { key: "ads", name: "Ads Campaigns" },
    { key: "social", name: "Social Media" },
    { key: "marketplace", name: "Marketplace" },
    { key: "all", name: "Todos" }
];
 */
function PortafolioComponent() {
  /* const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);
 */
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={HeroIMG} alt="Imagen del Hero Portafolio" className={styles.heroBackground}/>
          <h1>Resultados en Acción</h1>
          <p>
            Conoce algunos proyectos donde combinamos creatividad, estrategia y
            tecnología. Desde sitios web hasta campañas virales, estos ejemplos
            muestran lo que HiComerce puede hacer por ti.
          </p>
        </div>
      </section>
    {/*   <section className={styles.headerSection}>
        <nav className={styles.filterNav}>
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`${styles.filterButton} ${activeFilter === category.key ? styles.filterButtonActive : ''}`}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </section>

      <section className={styles.projectsGridSection}>
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <article key={project.id} className={styles.projectCard}>
              <figure className={styles.cardFigure}>
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={`Proyecto para ${project.title}`} className={styles.projectImage}/>
                </div>
                <figcaption className={styles.cardCaption}>
                  <h3 className={styles.clientName}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewProjectLink}>
                    Ver Proyecto
                  </a>
                </figcaption>
              </figure>
            </article>
          ))}
          {filteredProjects.length === 0 && (
              <p>No hay proyectos en esta categoría por el momento.</p>
          )}
        </div>
      </section> */}
    </>
  );
}



export default PortafolioComponent;