import React from "react";
import styles from "./Aboutus.module.css";

/* Imagenes */
import valoresImg from "../../src/assets/Nosotros/GENTE.webp";
import misionImg from "../../src/assets/Nosotros/TRABAJANDO.webp";
import visionImg from "../../src/assets/Nosotros/VISION.webp";

function AboutUs() {
  const textoValores = "Hicomerce es una agencia de crecimiento digital especializada en ventas en línea, automatización e inteligencia artificial. Con más de 10 años de experiencia y un equipo multinacional de más de 35 especialistas, acompañamos a empresas grandes que buscan dar su siguiente salto en el mundo digital.";
  const textoMision = "Impulsar el crecimiento de empresas de alto desempeño a través de estrategias digitales integrales, combinando consultoría, ejecución, automatización e inteligencia artificial para que cada cliente conquiste el mercado en línea sin complicarse con lo técnico. En Hicomerce nos convertimos en el departamento digital de ventas de nuestros clientes, ayudándolos a vender más, automatizar procesos y lograr resultados medibles y sostenibles.";
  const textoVision = "Ser la empresa líder en transformación digital y automatización comercial en Latinoamérica, reconocida por convertir negocios tradicionales en potencias digitales que venden de forma rentable, ágil y automatizada. Aspiramos a construir un ecosistema donde la tecnología, la estrategia y la creatividad trabajen en conjunto para que las empresas crezcan incluso mientras duermen.";

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
