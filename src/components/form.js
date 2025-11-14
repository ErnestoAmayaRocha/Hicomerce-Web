import React, { useState } from "react";
import styles from './Form.module.css';

import googlePartnerLogo from '../../src/assets/Form/premier-partner25 1.png';
import metaPartnerLogo from '../../src/assets/Form/meta-business-partner-seeklogo 1.webp';
import robotImage from '../../src/assets/Hero/mascot 1.svg';

function FormHC() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.partners}>
        <img src={googlePartnerLogo} alt="Google Premier Partner 2025" />
        <img src={metaPartnerLogo} alt="Meta Business Partner" />
      </div>

      <div className={styles.container}>
        <article className={styles.formContent}>
          <h2>¿Listo para duplicar las ventas de tu empresa?</h2>
          <p>Da el siguiente paso y te daremos un plan gratuito para lograrlo.</p>
          
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            className={styles.form}
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre*</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Manuel Rubio"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo*</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="manuel@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="asunto">Asunto*</label>
              <input
                id="asunto"
                name="asunto"
                type="text"
                placeholder="Quiero asesoría"
                required
                value={formData.asunto}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="mensaje">Mensaje (opcional)</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                placeholder="Me gustaría mejorar las ventas de mi empresa"
                value={formData.mensaje}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Agenda tu Sesión Gratis
            </button>
          </form>
        </article>
        
        <aside className={styles.robotContainer}>
          <img src={robotImage} alt="Asistente robot de HiComerce" />
        </aside>
      </div>
    </section>
  );
}

export default FormHC;