import React from "react";

import banner1 from "../../src/assets/Nosotros/evolucion-digital-360.webp";
import { Link } from "react-router-dom";


function NosotrosEvolucion360() {
  return (
    <section id="nosotros-evolucion-360">
      <article>
        <figure>
          <figcaption>
            <h2 id="nosotros-evolucion-title">Tu Evolución Digital 360°</h2>
            <p>
              Nuestro servicio se materializa en Tu <strong>Evolución Digital 360°</strong>,
              un plan exclusivo diseñado para empresas grandes que buscan crecer
              en el corto, mediano y largo plazo con objetivos ambiciosos.
            </p>
            <p>
              A diferencia de las agencias tradicionales, en Hicomerce <strong>nos
              hacemos cargo de todo el proceso digital de punta a punta.</strong>
              Desde la estrategia inicial hasta la ejecución diaria y la
              optimización constante, evitando que pierdas tiempo y dinero en
              pruebas innecesarias o enfoques ineficientes.
            </p>
            <Link className="BGAzul" to="/contacto">
              Solicita tu diagnóstico gratis
            </Link>
          </figcaption>

          <img
            src={banner1}
            alt="Modelo integral de evolución digital 360 grados de Hicomerce"
            width="827"
            height="515"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>
    </section>
  );
}

export default NosotrosEvolucion360;