import React from "react";
import { Link } from "react-router-dom";
import styles from './Hero.module.css';

import heroRobotImg from '../../src/assets/Hero/mascot 1.svg';
import heroWorldImg from '../../src/assets/Hero/globe 1.svg';
import heroParticlesImg from '../../src/assets/Hero/points 2.svg';

import amatinaLogo from '../../src/assets/Partners/Amatina 1.webp';
import boboisLogo from '../../src/assets/Partners/Bobois 2.webp';
import mexikandelaLogo from '../../src/assets/Partners/Mexikandela 1.webp';
import igartuaLogo from '../../src/assets/Partners/MorennaMia 1.webp';
import morenaMiaLogo from '../../src/assets/Partners/ShopIgartua 1.webp';

const partnersLogos = [
  { id: 1, src: amatinaLogo, alt: "Logo de Amatina" },
  { id: 2, src: boboisLogo, alt: "Logo de Bobois Collection" },
  { id: 3, src: mexikandelaLogo, alt: "Logo de Mexikandela" },
  { id: 4, src: igartuaLogo, alt: "Logo de Shop Igartua" },
  { id: 5, src: morenaMiaLogo, alt: "Logo de Morena Mia" },
];

function Hero() {
  const extendedLogos = [...partnersLogos, ...partnersLogos];

  return (
    <>
      <section className={styles.heroSection}>
        {/* Imágenes de fondo que no afectan al layout principal */}
        <img src={heroParticlesImg} alt="" className={styles.heroParticles} />
        <img src={heroWorldImg} alt="" className={styles.heroWorld} />

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>
              <span>Marketing 360°</span><br></br>potenciado con<br></br>Inteligencia Artificial
            </h1>
            <p>
              Marketing + IA para llevar tu negocio al siguiente nivel. Estrategias personalizadas | Automatización inteligente | Resultados medibles
            </p>
            <Link to="/contacto" className={styles.ctaButton}>
              Solicita Diagnóstico Gratis
            </Link>
          </div>

          {/* Columna Derecha: Robot */}
          <div className={styles.heroRobotContainer}>
            <img src={heroRobotImg} alt="Asistente de Inteligencia Artificial" className={styles.heroRobot} />
          </div>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <div className={styles.logosContainer}>
          <div className={styles.logosTrack}>
            {extendedLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;