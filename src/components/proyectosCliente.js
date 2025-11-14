import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from './Proyectos.module.css';

import project1 from '../../src/assets/Clients/Image.webp';
import project2 from '../../src/assets/Clients/ImageUNIQ.webp';
import project3 from '../../src/assets/Clients/Image.webp';
import project4 from '../../src/assets/Clients/ImageUNIQ.webp';

const projectsData = [
  { id: 1, image: project1, client: "Client Name 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", link: "/portafolio/proyecto-1" },
  { id: 2, image: project2, client: "Client Name 2", description: "Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "/portafolio/proyecto-2" },
  { id: 3, image: project3, client: "Client Name 3", description: "Consectetur adipiscing elit. Lorem ipsum dolor sit amet, suspendisse varius enim in eros.", link: "/portafolio/proyecto-3" },
  { id: 4, image: project4, client: "Client Name 4", description: "Lorem ipsum dolor sit amet, suspendisse varius enim in eros, consectetur adipiscing elit.", link: "/portafolio/proyecto-4" },
];

function ProyectosClientesHC() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.querySelector(`.${styles.projectCard}`).offsetWidth;
      const scrollAmount = direction === 'next' ? slideWidth : -slideWidth;
      
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.resultsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Resultados en Acción</h2>
        <p className={styles.subtitle}>
          Conoce algunos proyectos donde combinamos creatividad, estrategia y tecnología. Desde sitios web hasta campañas virales, estos ejemplos muestran lo que HiComerce puede hacer por ti.
        </p>
        
        <div className={styles.carouselContainer}>
          <button onClick={() => handleScroll('prev')} className={`${styles.navButton} ${styles.prev}`}>&#8249;</button>
          
          <div ref={scrollContainerRef} className={styles.carouselWindow}>
            <div className={styles.carouselTrack}>
              {projectsData.map(project => (
                <article key={project.id} className={styles.projectCard}>
                  <figure className={styles.cardFigure}>
                    <div className={styles.imageWrapper}>
                      <img src={project.image} alt={`Proyecto para ${project.client}`} className={styles.projectImage}/>
                    </div>
                    <figcaption className={styles.cardCaption}>
                      <h3 className={styles.clientName}>{project.client}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                      <Link to={project.link} className={styles.viewProjectLink}>Ver proyecto</Link>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          </div>
          
          <button onClick={() => handleScroll('next')} className={`${styles.navButton} ${styles.next}`}>&#8250;</button>
        </div>
        
        <Link to="/portafolio" className={styles.viewMoreLink}>Ver Más Proyectos</Link>
      </div>
    </section>
  );
}

export default ProyectosClientesHC;