import React, { useState, useRef } from "react";
import styles from './Ourclients.module.css';

import cliente1 from '../../src/assets/Clients/logos_clientes_web_220_bocablanca.webp'; 
import cliente2 from '../../src/assets/Clients/cklass.png';
import cliente3 from '../../src/assets/Clients/logos_clientes_web_220_negromostaza.webp';
import cliente4 from '../../src/assets/Clients/logos_clientes_web_220_deyac.webp';
import cliente5 from '../../src/assets/Clients/logos_clientes_web_220_roue bikes.webp';
import cliente6 from '../../src/assets/Clients/logos_clientes_web_220_xilin.webp';

 
const testimonialsData = [
  {
    id: 1,
    text: "La atención que se tiene, además de la resolución que se brinda ante los problemas de la cuenta y sus recomendaciones",
    author: "Guillermo E",
    role: "Boca Blanca",
    image: cliente1
  },
  {
    id: 2,
    text: "La respuesta de atención es inmediata, el nivel de profesionalismo de todo el equipo igual, me da mucho gusto y paz trabajar con una agencia como Hicommerce",
    author: "Monserrat Palomera",
    role: "Cklass",
    image: cliente2
  },
  {
    id: 3,
    text: "Es una buena empresa, sus propósitos son claros y se ven reflejados en los resultados.",
    author: "Tania Cervantes",
    role: "Cliente",
    image: cliente3
  },
  {
    id: 4,
    text: "Profesionalidad y seguimiento a los proyectos.",
    author: "Roberto Lozano",
    role: "Cliente",
    image: cliente4
  },
  {
    id: 5,
    text: "Trabajar con Hicommerce es tener un equipo de especialistas en cada área, existe acompañamiento y mejora continua, resultados tangibles.",
    author: "Rocio Estrada",
    role: "Cliente",
    image: cliente5
  },
  {
    id: 6,
    text: "Todo excelente, solo siento que falta un poco más de creatividad en la parte de diseño gráfico. A veces las propuestas de cambios gráficos les falta un extra de creatividad para MKT. El resto de los servicios son excelentes.",
    author: "Mónica Mendoza",
    role: "Cliente",
    image: cliente6
  }
];

function Ourclients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50; 

  const onTouchStart = (e) => {
    touchEndX.current = null; 
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // --- Funciones de Navegación ---
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestros Clientes, Nuestros Aliados</h2>
        
        <div className={styles.carouselContainer}>
          <button onClick={handlePrev} className={`${styles.navButton} ${styles.prev}`} aria-label="Anterior testimonio">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
          </button>
          
          <div 
            className={styles.carouselWindow}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
            >
              {testimonialsData.map((testimonial) => (
                <article key={testimonial.id} className={styles.testimonialCard}>
                  <figure>
                    <blockquote>
                      <p>“{testimonial.text}”</p>
                    </blockquote>
                    <figcaption>
                      <img className={styles.clientPhoto} src={testimonial.image} alt={`Foto de ${testimonial.author}`} />
                      <p className={styles.clientName}>{testimonial.author}</p>
                      <p className={styles.clientRole}>{testimonial.role}</p>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          </div>
          
          <button onClick={handleNext} className={`${styles.navButton} ${styles.next}`} aria-label="Siguiente testimonio">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Ourclients;