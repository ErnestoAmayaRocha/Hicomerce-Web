import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiciosIA.module.css"; 

import heroBg from '../../src/assets/SV_IA/automatizaMarketing.webp';
import imgProspeccion from '../../src/assets/SV_IA/prospeccionVentas.webp';
import imgSocialSelling from '../../src/assets/SV_IA/socialSelling.webp';
import imgContenido from '../../src/assets/SV_IA/contenidoSEO.webp';
import imgAds from '../../src/assets/SV_IA/adsMarket.webp';
import imgAnalitica from '../../src/assets/SV_IA/iaAnalitica.webp';
import solutionImage from '../../src/assets/SV_IA/solucion.webp';

const IconCheck = () => (
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.2196 10.3698L26.8618 11.1931C26.8059 11.3272 26.7115 11.4417 26.5907 11.5223C26.4698 11.6028 26.3278 11.6458 26.1825 11.6458C26.0372 11.6458 25.8952 11.6028 25.7744 11.5223C25.6535 11.4417 25.5591 11.3272 25.5032 11.1931L25.1454 10.3698C24.5162 8.9134 23.3641 7.74566 21.9162 7.09703L20.8122 6.60393C20.6782 6.54231 20.5648 6.44359 20.4852 6.31945C20.4057 6.19531 20.3634 6.05098 20.3634 5.90354C20.3634 5.75611 20.4057 5.61177 20.4852 5.48764C20.5648 5.3635 20.6782 5.26477 20.8122 5.20316L21.8551 4.73915C23.3394 4.07205 24.5113 2.86111 25.1294 1.35579L25.4974 0.467039C25.5514 0.329369 25.6457 0.211175 25.7679 0.127867C25.8901 0.0445585 26.0346 0 26.1825 0C26.3304 0 26.4749 0.0445585 26.5971 0.127867C26.7193 0.211175 26.8136 0.329369 26.8676 0.467039L27.2356 1.35433C27.8531 2.85994 29.0245 4.0714 30.5084 4.73915L31.5528 5.20462C31.6864 5.26641 31.7994 5.36512 31.8787 5.4891C31.9579 5.61307 32 5.75714 32 5.90427C32 6.05141 31.9579 6.19547 31.8787 6.31945C31.7994 6.44342 31.6864 6.54214 31.5528 6.60393L30.4473 7.09557C28.9998 7.74485 27.8481 8.91311 27.2196 10.3698ZM14.5458 4.36532C12.1851 4.36568 9.88024 5.08406 7.93735 6.42511C5.99445 7.76615 4.50539 9.66641 3.66786 11.8736C2.83032 14.0808 2.68392 16.4906 3.2481 18.7829C3.81228 21.0753 5.06035 23.1418 6.82661 24.7082C8.59288 26.2746 10.7938 27.2667 13.1371 27.5529C15.4805 27.839 17.8555 27.4056 19.9468 26.3103C22.038 25.2149 23.7467 23.5094 24.8459 21.4202C25.9451 19.3309 26.3829 16.9568 26.101 14.6129L28.9898 14.2696C29.0577 14.8388 29.0917 15.4163 29.0917 16.002C29.0917 24.0357 22.5795 30.5478 14.5458 30.5478C6.51217 30.5478 0 24.0357 0 16.002C0 7.96833 6.51217 1.45616 14.5458 1.45616C15.7982 1.45616 17.0172 1.61616 18.1794 1.91435L17.455 4.73188C16.5046 4.48752 15.5271 4.36436 14.5458 4.36532ZM16.0004 14.5474H20.3642L13.0913 24.7295V17.4566H8.7275L16.0004 7.27449V14.5474Z" fill="#02ABE7"/>
    </svg>
);

const servicesData = [
  { 
    id: 1, 
    title: "IA de Prospección y Ventas", 
    text: "IA contacta nuevos leads, califica con preguntas y agenda citas automáticamente. Scraping de prospectos ideales + secuencia automatizada de outreach por email/WhatsApp.",
    benefit: "Llena el pipeline de ventas sin esfuerzo humano inicial.",
    image: imgProspeccion,
    link: "/contacto"
  },
  { 
    id: 2, 
    title: "IA de Social Selling", 
    text: "Analiza seguidores de la competencia, contacta clientes potenciales con ofertas, cierra ventas vía chat y gestiona el proceso hasta reseña.",
    benefit: "Convierte audiencia de la competencia en propios clientes de forma automática.",
    image: imgSocialSelling,
    link: "/contacto" 
  },
  { 
    id: 3, 
    title: "IA de Contenido & SEO", 
    text: "Creación automatizada de contenido para redes, videos e incluso avatares del fundador para contenido informativo SEO: auditoría, optimización on-page y creación masiva de blogs optimizados - 80-100 mensuales - con imágenes.",
    benefit: "Presencia online constante y posicionamiento orgánico sin sobrecargar al equipo.",
    image: imgContenido,
    link: "/contacto" 
  },
   { 
    id: 4, 
    title: "IA para Ads & Marketplaces", 
    text: "Analítica de campañas ads y recomendaciones para mejorar ROAS, creación de nuevas campañas inteligencia para e-commerce: análisis de productos en Amazon/ML, keywords, proyecciones de ventas, recomendaciones de nuevos productos, optimización de listings y precios, alertas de inventario.",
    benefit: "Maximiza el rendimiento de la inversión publicitaria y ventas en marketplaces con automatizaciones.",
    image: imgAds,
    link: "/contacto" 
  },
   { 
    id: 5, 
    title: "IA de Analítica & BI", 
    text: "tableros estadísticos integrando múltiples plataformas, con recomendaciones concretas para mejorar conversiones, ROAS, ventas.",
    benefit: "Toma decisiones basadas en datos con toda tu data unificada y accionable.",
    image: imgAnalitica,
    link: "/contacto" 
  },
];


function ServiciosIAComponent() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <img src={heroBg} alt="" className={styles.heroBackground} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Automatiza y escala tus ventas y marketing con nuestra IA 360°</h1>
          <p>
            Automatiza la generación de prospectos, la atención al cliente y la
            optimización de campañas con nuestra suite de IA. Nuestros agentes
            inteligentes trabajan 24/7 por tu negocio, convirtiendo oportunidades en
            ingresos mientras tú duermes.
          </p>
          <Link to="/contacto" className={styles.ctaButton}>
            Solicita Diagnóstico
          </Link>
        </div>
      </section>

      {/* --- SERVICIOS SECTION --- */}
      <section className={styles.servicesSection}>
        {servicesData.map((service) => (
          <article key={service.id} className={styles.serviceItem}>
            <div className={styles.imageWrapper}>
              <img src={service.image} alt={service.title} className={styles.serviceImage} />
            </div>
            <div className={styles.contentWrapper}>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <p><strong>Beneficio:</strong> {service.benefit}</p>
              <Link to={service.link} className={styles.learnMoreLink}>
                Solicita una Demostración de IA
              </Link>
            </div>
          </article>
        ))}
      </section>
        <section className={styles.uniqueNeedsSection}>
            <div className={styles.containerExtra}>
                {/* Columna Izquierda: Contenido */}
                <div className={styles.contentWrapperExtra}>
                    <h2 className={styles.title}>
                        ¿Tu empresa tiene necesidades únicas?<br />
                        <span>Nosotros tenemos la solución.</span>
                    </h2>
                    <p className={styles.paragraph}>
                        En HiComerce, sabemos que cada negocio es diferente. Por eso, más allá de nuestras soluciones estándar, desarrollamos herramientas de Inteligencia Artificial a la medida de tus objetivos. Ya sea que necesites:
                    </p>
                    {/* Lista escrita manualmente */}
                    <ul className={styles.needsList}>
                        <li className={styles.needsItem}>
                            <IconCheck />
                            Un asistente virtual que responda automáticamente a clientes.
                        </li>
                        <li className={styles.needsItem}>
                            <IconCheck />
                            Un sistema de recomendación para aumentar ventas cruzadas.
                        </li>
                        <li className={styles.needsItem}>
                            <IconCheck />
                            Un motor de análisis predictivo que te anticipe tendencias.
                        </li>
                        <li className={styles.needsItem}>
                            <IconCheck />
                            Integraciones personalizadas con tu CRM o plataforma de ventas.
                        </li>
                    </ul>
                    <h3 className={styles.tagline}>
                        Si puedes imaginarlo, <span>podemos crearlo.</span>
                    </h3>
                </div>

                {/* Columna Derecha: Imagen */}
                <div className={styles.imageWrapper}>
                    <img src={solutionImage} alt="Mano robótica ofreciendo una solución de IA" className={styles.image} />
                </div>
            </div>
        </section>
    </>
  );
}

export default ServiciosIAComponent;
