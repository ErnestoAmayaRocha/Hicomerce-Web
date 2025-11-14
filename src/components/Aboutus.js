import React from "react";
import styles from "./Aboutus.module.css";

/* Imagenes */
import valoresImg from "../../src/assets/Nosotros/GENTE.webp";
import misionImg from "../../src/assets/Nosotros/TRABAJANDO.webp";
import visionImg from "../../src/assets/Nosotros/VISION.webp";

function AboutUs() {
  const textoValores = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const textoMision = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const textoVision = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <>
      {/* --- Sección Valores --- */}
      <section className={styles.pageSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <h2>Valores</h2>
            <p>{textoValores}</p>
          </div>
          <figure className={styles.imageWrapper}>
            <img src={valoresImg} alt="Equipo HiComerce colaborando - Valores" className={styles.image} />
          </figure>
        </div>
      </section>

      {/* --- Sección Misión --- */}
      <section className={`${styles.pageSection} ${styles.missionSection}`}> 
        <div className={styles.container}>
          <figure className={styles.imageWrapper}>
            <img src={misionImg} alt="Persona trabajando en estrategia digital - Misión" className={styles.image} />
          </figure>
          <div className={styles.contentWrapper}>
            <h2>Misión</h2>
            <p>{textoMision}</p>
          </div>
        </div>
      </section>

      {/* --- Sección Visión --- */}
      <section className={styles.pageSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <h2>Visión</h2>
            <p>{textoVision}</p>
          </div>
          <figure className={styles.imageWrapper}>
            <img src={visionImg} alt="Visión futurista con conexiones digitales - Visión" className={styles.image} />
          </figure>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
