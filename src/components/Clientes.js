import React, { useRef } from "react"; // Importa useRef
import { allProjects } from "../data/projectsData"; 
import ProjectCard from "../components/ProjectCard"; 
import pageStyles from "./ClientesPage.module.css"; 

const IconPrev = () => <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>;
const IconNext = () => <svg viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"></path></svg>;

function Clientes() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector(`.${pageStyles.carouselCardWrapper}`);
      if (!card) return;

      const cardStyle = window.getComputedStyle(card);
      const cardWidth = card.offsetWidth + parseFloat(cardStyle.marginRight) + parseFloat(cardStyle.marginLeft);
      
      const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
      
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className={pageStyles.successStoriesSection}>
        <h2 className={pageStyles.successTitle}>Historias Reales de Éxito</h2>
        
        <div className={pageStyles.carouselContainer}>
          <button onClick={() => handleScroll('prev')} className={`${pageStyles.navButton} ${pageStyles.prev}`} aria-label="Anterior proyecto">
            <IconPrev />
          </button>
          
          <div ref={scrollContainerRef} className={pageStyles.carouselWindow}>
            <div className={pageStyles.carouselTrack}>
              {allProjects.map(project => (
                <div key={project.id} className={pageStyles.carouselCardWrapper}>
                  <ProjectCard project={project} /> 
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={() => handleScroll('next')} className={`${pageStyles.navButton} ${pageStyles.next}`} aria-label="Siguiente proyecto">
            <IconNext />
          </button>
        </div>
      </section>
    </>
  );
}

export default Clientes;

