import React, { useState } from "react";
import styles from './Form.module.css';

import googlePartnerLogo from '../../src/assets/Form/premier-partner25 1.png';
import metaPartnerLogo from '../../src/assets/Form/meta-business-partner-seeklogo 1.webp';
import robotImage from '../../src/assets/Hero/mascot 1.svg';

// 👇 Pega aquí la URL de tu Web App de Apps Script
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxVtBop2RIa2RJTUtIDtZxbdmwNkgGXV1EgLInVEvxbUXQvwdFcPdKwmIYNgBmOiXbG/exec';

function FormHC() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSending(true);
  setStatusMessage('');

  try {
    const body = new URLSearchParams(formData);

    await fetch(SCRIPT_URL, {
      method: 'POST',
      body,
      mode: 'no-cors',
    });

    setStatusMessage('✅ Gracias, hemos recibido tu información.');
    setFormData({ name: '', email: '', asunto: '', mensaje: '' });
  } catch (error) {
    console.error(error);
    setStatusMessage('❌ Error de conexión. Intenta más tarde.');
  } finally {
    setIsSending(false);
  }
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
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre*</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre Completo"
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
                placeholder="mail@mail.com"
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

            <button type="submit" className={styles.submitButton} disabled={isSending}>
              {isSending ? 'Enviando...' : 'Agenda tu Sesión Gratis'}
            </button>

            {statusMessage && (
              <p className={styles.statusMessage}>{statusMessage}</p>
            )}
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
