import React from "react";
import banner1 from "../../src/assets/Nosotros/aliado-360-para-empresas-que-quieren-liderar.webp";
import { Link } from "react-router-dom";


function NosotrosAliado360() {
  return (
    <section id="nosotros-aliado360">
      <article>
        <figure>
          <img
            src={banner1}
            alt="Acompañamiento 360 para empresas que buscan liderar en digital"
            width="709"
            height="596"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <h2 id="nosotros-aliado-title">Un aliado 360° para empresas que quieren liderar</h2>
            <p>
              Gracias a estos cuatro pilares, ofrecemos uno de los servicios más
              completos del mercado. Nos convertimos en un aliado estratégico
              360°, capaz de analizar, ejecutar, escalar y optimizar todo tu
              ecosistema digital.
            </p>
            <p>
              Nuestro enfoque es resolverle todo al empresario ocupado, para
              que pueda confiar en un equipo experto que se encarga del canal
              digital de principio a fin.
            </p>
            <p>
              En resumen:
              <br />
              <strong>
                Analizamos tu negocio. Ejecutamos la estrategia. Aceleramos tus
                ventas. Automatizamos procesos.
              </strong>
            </p>
            <p>
              Todo para que conquistes el mercado digital sin perder tiempo ni
              foco.
            </p>
            <Link className="BGAzul" to="/contacto">
              Solicita tu diagnóstico gratis
            </Link>
          </figcaption>
        </figure>
      </article>
    </section>
  );
}

export default NosotrosAliado360;