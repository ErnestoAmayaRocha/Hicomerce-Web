import React from "react";

import banner1 from "../../src/assets/Nosotros/somos-tu-equipo-de-crecimiento-digital.webp";

function NosotrosHeader() {
  return (
    <section id="nosotros-header" aria-labelledby="nosotros-header-title">
      <figure className="BGBlanco">
        <img
          src={banner1}
          alt="Equipo de crecimiento digital de Hicomerce trabajando en estrategia"
          width="1920"
          height="1008"
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        <figcaption className="BGBlanco">
          <h1 id="nosotros-header-title">
            No somos una agencia. Somos tu equipo de crecimiento digital.
          </h1>
          <p>
            En Hicomerce ayudamos a empresas que ya saben vender a dar el
            siguiente salto: escalar sus ventas con estrategias digitales
            personalizadas, rentables y sostenibles. Trabajamos con negocios que
            llevan años haciendo bien las cosas, que tienen visión de
            crecimiento y que entienden que los canales digitales no son una
            moda, sino la vía más rápida, eficaz y rentable para abrir nuevos
            mercados, estados o países.
          </p>
          <small>
            <strong>No venimos a “probar”. Venimos a construir resultados.</strong>
          </small>
        </figcaption>
      </figure>
    </section>
  );
}

export default NosotrosHeader;