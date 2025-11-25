import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderHC from './header'
import FooterHC from './footer';
import styles from './Layout.module.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function Layout() {
  return (
    <div className={styles.appContainer}>
      <HeaderHC />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <FooterHC />
      <FloatingWhatsApp
        phoneNumber="523316913370"           // <- tu número con lada (52 + número)
        accountName="HiComerce"              // nombre que quieres mostrar
        chatMessage="¡Hola! 👋 ¿En qué te ayudamos?"
        statusMessage="Normalmente respondemos en pocos minutos"
        placeholder="Escribe tu mensaje..."
        notification
        notificationSound
        allowEsc
        allowClickAway
       avatar="/logo-hico.PNG"
      />
    </div>
  );
}

export default Layout;
