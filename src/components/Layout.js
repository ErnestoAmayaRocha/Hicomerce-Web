import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderHC from './header'
import FooterHC from './footer';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.appContainer}>
      <HeaderHC />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <FooterHC />
    </div>
  );
}

export default Layout;
