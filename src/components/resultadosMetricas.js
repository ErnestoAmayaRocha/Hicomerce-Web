import React from "react";
import styles from './Resultados.module.css';

// --- DATOS CON ARRAY ---
const metricsData = [
  {
    id: 1,
    number: "+450%",
    description: "de crecimiento en ventas de nuestros clientes top"
  },
  {
    id: 2,
    number: "100+",
    description: "empresas transformadas en 10 años"
  },
  {
    id: 3,
    number: "30",
    description: "días de garantía"
  }
];

function ResultadosHC() {
  return (
    <article className={styles.resultsSection}>
      <div className={styles.metricsContainer}>
        {metricsData.map((metric) => (
          <div key={metric.id} className={styles.metricItem}>
            <p className={styles.metricNumber}>{metric.number}</p>
            <p className={styles.metricDescription}>{metric.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default ResultadosHC;