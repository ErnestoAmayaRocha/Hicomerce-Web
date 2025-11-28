import React from "react";
import styles from "./Contacto.module.css"; 

// --- Importa las imágenes 
import contactoIMG from "../../src/assets/Contacto/HABLEMOS.webp"; 

function ContactoComponent() { 
    const textoHablemos = "Déjanos tu consulta. Un asesor se pondrá en contacto contigo lo antes posible.";

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h2>Hablemos</h2>
            <p>{textoHablemos}</p>
          </div>
          <figure className={styles.heroImageWrapper}>
            <img src={contactoIMG} alt="Equipo HiComerce en una reunión" className={styles.heroImage} />
          </figure>
        </div>
      </section>
    </>
  );
}

export default ContactoComponent;
