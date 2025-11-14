import React, { useState, useRef } from "react";
import styles from './Ourclients.module.css';

import cliente1 from '../../src/assets/Clients/Image.webp'; 
import cliente2 from '../../src/assets/Clients/ImageUNIQ.webp';
import cliente3 from '../../src/assets/Clients/ImageUNIQ.webp';

const testimonialsData = [
  {
    id: 1,
    text: "Gracias a Hicomerce nuestra demanda se disparó. En 3 meses triplicamos la generación de leads mientras reducíamos costes de ads. ¡Una verdadera revolución!",
    author: "María López",
    role: "Directora de Marketing, XYZ Corp.",
    image: cliente1
  },
  {
    id: 2,
    text: "Con la IA de Hicomerce, creamos 20 posts semanales sin ampliar nuestro equipo, manteniendo la calidad de marca. Los resultados hablan por sí solos: +80% engagement en redes.",
    author: "Martín García",
    role: "CEO, Startup Innovadora",
    image: cliente2
  },
  {
    id: 3,
    text: "El equipo de Hicomerce no solo entrega resultados, sino que se convierten en verdaderos socios estratégicos. Su enfoque 360 cambió nuestro negocio.",
    author: "Ana Jiménez",
    role: "Gerente de E-commerce, Tienda Líder",
    image: cliente3
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