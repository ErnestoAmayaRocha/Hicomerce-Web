/* import React, { useState } from "react"; */
import styles from "./PortafolioPage.module.css";
import Banner1 from "../../src/assets/Portafolio/1-CKLASS.webp";
import Banner2 from "../../src/assets/Portafolio/2-ESTILO ROJO.webp";
import Banner3 from "../../src/assets/Portafolio/3-NM.webp";
import Banner4 from "../../src/assets/Portafolio/4-SHOP-NM.webp";
import Banner5 from "../../src/assets/Portafolio/5-UNIQ.webp";
import Banner6 from "../../src/assets/Portafolio/6-UNIQ-MELI.webp";

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



    const videos = [
    { id: "1153736080", title: "Caso 1" },
    { id: "1153736181", title: "Caso 2" },
    { id: "1153736191", title: "Caso 3" },
    { id: "1153736109", title: "Caso 4" },
    { id: "1153736150", title: "Caso 5" },
    { id: "1153736163", title: "Caso 6" },
  ];

  const banners = [
  { src: Banner1, alt: "Banner 1" },
  { src: Banner2, alt: "Banner 2" },
  { src: Banner3, alt: "Banner 3" },
  { src: Banner4, alt: "Banner 4" },
  { src: Banner5, alt: "Banner 5" },
  { src: Banner6, alt: "Banner 6" },
];
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



       {/* NUEVA SECCIÓN DE VIDEOS */}
      <section className={styles.videosSection}>
        <div className={styles.videosHeader}>
          <h2 className={styles.videosTitle}>Videos de resultados</h2>
          <p className={styles.videosSubtitle}>
            Una muestra rápida de ejecuciones y resultados en diferentes proyectos.
          </p>
        </div>

        <div className={styles.videosGrid}>
          {videos.map((v) => (
            <article key={v.id} className={styles.videoCard}>
              <div className={styles.videoFrame}>
                <iframe
                  src={`https://player.vimeo.com/video/${v.id}`}
                  title={v.title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className={styles.videoMeta}>
                <h3 className={styles.videoName}>{v.title}</h3>
               
              </div>
            </article>
          ))}
        </div>
      </section>

       {/* NUEVA SECCIÓN DE BANNERS */}
    <section className={styles.bannersSection}>
      <div className={styles.bannersHeader}>
        <h2 className={styles.bannersTitle}>Así se ve una estrategia bien ejecutada</h2>
        <p className={styles.bannersSubtitle}>
       Ejemplos visuales de cómo llevamos las ideas a producción.
        </p>
      </div>

      <div className={styles.bannersGrid}>
        {banners.map((b, idx) => (
          <figure key={idx} className={styles.bannerCard}>
            <div className={styles.bannerFrame}>
              <img src={b.src} alt={b.alt} loading="lazy" />
            </div>
          </figure>
        ))}
      </div>
    </section>
    </>
  );
}



export default PortafolioComponent;