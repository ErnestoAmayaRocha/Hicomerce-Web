import React from "react";

import banner1 from "../../src/assets/Nosotros/trabajamos-solo-con-empresas-de-alto-nivel.webp";

function NosotrosEmpresasAltoNivel() {
  return (
    <section id="nosotros-empresas-alto-nivel" aria-labelledby="nosotros-empresas-title">
      <article>
        <h2 id="nosotros-empresas-title">
          ¿Por qué trabajamos solo con empresas de alto nivel?
        </h2>
      </article>

      <article aria-labelledby="nosotros-empresas-title">
        <figure>
          <img
            src={banner1}
            alt="Prediagnóstico gratuito para empresas listas para escalar en digital"
            width="1920"
            height="600"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <p className="CBlanco">
              Porque los resultados reales requieren profundidad, experiencia y
              equipos especializados. En Hicomerce no trabajamos por volumen ni
              con soluciones genéricas. Cada proyecto es personalizado y
              orientado a resultados concretos.
            </p>
            <p className="CBlanco">
              Por eso comenzamos siempre con un prediagnóstico 100% gratuito,
              donde analizamos tu negocio y definimos qué estrategia e inversión
              tienen sentido para alcanzar tus objetivos.
            </p>
            <p className="CBlanco">
              Si tu empresa está lista para escalar en serio, estás en el lugar
              correcto.
            </p>
          </figcaption>
        </figure>
      </article>
    </section>
  );
}

export default NosotrosEmpresasAltoNivel;