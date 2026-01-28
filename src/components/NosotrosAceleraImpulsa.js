import React from "react";

import banner1 from "../../src/assets/Nosotros/aceleramos-ventas-sin-que-tengas-que-volverte-experto-en-lo-digital.webp";
import banner2 from "../../src/assets/Nosotros/impulsando-empress-de-alto-desempeño.webp";

function NosotrosAceleraImpulsa() {
  return (
    <section id="nosotros-acelera-impulsa" aria-labelledby="nosotros-acelera-title">
      <article aria-labelledby="nosotros-acelera-title">
        <figure>
          <img
            src={banner1}
            alt="Estrategia digital para acelerar ventas y captar prospectos"
            width="714"
            height="494"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <h2 id="nosotros-acelera-title">
              Aceleramos ventas sin que tengas que volverte experto en lo digital
            </h2>
            <p>
              Nuestro enfoque es simple: <strong>tú sigues enfocado en tu
              negocio, nosotros nos encargamos de todo el ecosistema digital.</strong>
            </p>
            <p>
              En Hicomerce no solo hacemos campañas, páginas web o redes
              sociales. Nos integramos como parte de tu empresa y operamos como
              tu departamento externo de ventas en línea. Capacitamos a tu
              equipo, ordenamos procesos, automatizamos el seguimiento de
              prospectos y resolvemos cualquier implementación técnica o
              estratégica necesaria para que el canal digital funcione de
              verdad.
            </p>
            <p>
              Todo con un objetivo claro:<strong> vender más y perder menos
              oportunidades, sin que tengas que complicarte con lo técnico.</strong>
            </p>
          </figcaption>
        </figure>
      </article>

      <article aria-labelledby="nosotros-experiencia-title">
        <figure>
          <img
            src={banner2}
            alt="Más de 10 años de experiencia impulsando ventas en línea"
            width="714"
            height="494"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <h2 id="nosotros-experiencia-title">
              Más de 10 años impulsando empresas de alto desempeño
            </h2>
            <p>
              Somos una agencia especializada en <strong>ventas en línea y
              transformación digital para empresas de alto rendimiento.</strong>
              Contamos con más de 10 años de experiencia creando e implementando
              modelos de negocio digitales, acompañando a cientos de empresas en
              su evolución online y logrando incrementos de ventas de hasta
              <strong> 450%</strong> en algunos casos.
            </p>
            <p>
              Nuestra experiencia nos enseñó algo clave: los resultados reales
              no se logran con servicios aislados ni con fórmulas genéricas. Por
              eso desarrollamos un modelo integral que se adapta a cada empresa,
              industria y objetivo.
            </p>
          </figcaption>
        </figure>
      </article>
    </section>
  );
}

export default NosotrosAceleraImpulsa;