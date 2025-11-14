import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/PageNotFound.module.css";

function PageNotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Error 404</h1>
            <h2 className={styles.subtitle}>Página no encontrada</h2>
            <p className={styles.goHomeText}>Parece que te has perdido. Verifica que la URL esté bien escrita o regresa al inicio:</p>
            <Link to="/" className={styles.homeLink}>Inicio</Link>
        </div>
    );
}

export default PageNotFound;