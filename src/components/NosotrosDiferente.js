import React from "react";

function NosotrosDiferente() {
  return (
    <section id="nosotros-diferente" aria-labelledby="nosotros-diferente-title">
      <article>
        <h2 id="nosotros-diferente-title">¿Qué nos hace diferentes?</h2>
        <p>
          Nuestra metodología se basa en cuatro pilares fundamentales, que
          trabajan de forma integrada
        </p>
      </article>

      <article aria-label="Pilares de la metodología">
        <div className="BGBlanco" role="group" aria-labelledby="pilar-1-title">
          <span className="BGAzul" aria-hidden="true">1</span>
          <h3 id="pilar-1-title">Consultoría estratégica</h3>
          <p>
            Antes de ejecutar, entendemos. Analizamos a fondo tu negocio, tus
            procesos internos, puntos de dolor, industria, competencia y
            objetivos comerciales. Realizamos un análisis de mercado profundo
            y, con base en datos reales, diseñamos una estrategia digital
            completamente personalizada.
          </p>
          <p>
            No buscamos vender por vender. Nos enfocamos en <strong>rentabilidad
            real y crecimiento sostenible.</strong>
          </p>
          <p>
            Contamos con una fase inicial de consultoría donde analizamos tu
            negocio y tu mercado para proponer una estrategia ganadora hecha a
            tu medida.
          </p>
        </div>

        <div className="BGBlanco" role="group" aria-labelledby="pilar-2-title">
          <span className="BGAzul" aria-hidden="true">2</span>
          <h3 id="pilar-2-title">Ejecución de soluciones digitales</h3>
          <p>
            Con la estrategia clara, pasamos a la acción. Nuestro equipo
            multinacional, conformado por más de <strong>35 expertos,</strong> se
            encarga de construir, optimizar y escalar todos tus canales
            digitales.
          </p>
          <p>
            Desarrollamos tiendas en línea, sitios web, landing pages,
            integraciones con marketplaces y soluciones con inteligencia
            artificial cuando el negocio lo requiere. Además, ejecutamos
            campañas de marketing digital multicanal con diseñadores,
            programadores, especialistas en SEO, publicidad y gestión de
            comunidades.
          </p>
          <p>
            En pocas palabras: <strong>hacemos lo que haga falta para que vendas
            más.</strong>
          </p>
        </div>

        <div className="BGBlanco" role="group" aria-labelledby="pilar-3-title">
          <span className="BGAzul" aria-hidden="true">3</span>
          <h3 id="pilar-3-title">Growth Hacking y crecimiento acelerado</h3>
          <p>
            No creemos en el crecimiento lento por inercia. Aplicamos
            metodologías de <strong>growth hacking,</strong> experimentación
            constante y optimización continua para acelerar resultados.
          </p>
          <p>
            Probamos, medimos y escalamos: tests A/B, nuevas ofertas, apertura
            de canales, mejoras de conversión y cualquier palanca que permita
            multiplicar ventas en el menor tiempo posible.
          </p>
          <p>
            Nuestro estándar es claro: <strong>resultados extraordinarios, no
            promedio.</strong>
          </p>
        </div>

        <div className="BGBlanco" role="group" aria-labelledby="pilar-4-title">
          <span className="BGAzul" aria-hidden="true">4</span>
          <h3 id="pilar-4-title">Inteligencia artificial y automatización</h3>
          <p>
            La eficiencia es clave para escalar. Por eso incorporamos un pilar
            especializado en <strong>inteligencia artificial y automatización,</strong>
            enfocado en optimizar procesos de venta, marketing y operación.
          </p>
          <p>
            Automatizamos tareas repetitivas, mejoramos el seguimiento de
            prospectos y ayudamos a que tu negocio venda incluso fuera del
            horario laboral, reduciendo costos y aumentando la rentabilidad.
          </p>
          <p>Tecnología aplicada a resultados reales.</p>
        </div>
      </article>
    </section>
  );
}

export default NosotrosDiferente;