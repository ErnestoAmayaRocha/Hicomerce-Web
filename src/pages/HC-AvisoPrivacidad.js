import React from "react";

function AvisoPr() {
    return (
        <>
          <style>{`
        .aviso-privacidad {
          max-width: 960px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          line-height: 1.7;
          color: #1f2933;
          background: black;
        }

        .aviso-privacidad__header {
          text-align: left;
          margin-bottom: 2.5rem;
        }

        .aviso-privacidad__kicker {
          font-size: 0.875rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: white;
          margin-bottom: 0.5rem;
        }

        .aviso-privacidad__title {
          font-size: clamp(1.9rem, 3vw, 2.3rem);
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .aviso-privacidad__subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.75rem;
        }

        .aviso-privacidad__section {
          background: #ffffff;
          border-radius: 12px;
          padding: 1.75rem 1.5rem;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
          margin-bottom: 1.5rem;
          border: 1px solid #e2e8f0;
        }

        .aviso-privacidad__section p {
          margin: 0 0 0.9rem;
          font-size: 0.98rem;
          color: #334155;
        }

        .aviso-privacidad__section p:last-child {
          margin-bottom: 0;
        }

        .aviso-privacidad__list {
          margin: 0 0 1rem 1.25rem;
          padding: 0;
        }

        .aviso-privacidad__list li {
          margin-bottom: 0.25rem;
          font-size: 0.97rem;
        }

        .aviso-privacidad__section--acceptance {
          border-left: 4px solid #FF3B00;
          background: #eff6ff;
        }

        .aviso-privacidad__acceptance-text {
          text-align: center;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
        }

        @media (min-width: 768px) {
          .aviso-privacidad {
            padding: 5rem 2rem 4rem;
          }

          .aviso-privacidad__section {
            padding: 2rem 2rem;
          }
        }
          .Layout_mainContent__2aD-i{
          background: black;}
      `}</style>

      <main className="aviso-privacidad">
        <header className="aviso-privacidad__header">
          <p className="aviso-privacidad__kicker">Aviso de Privacidad</p>
          <h1 className="aviso-privacidad__title">Políticas de Privacidad</h1>
        </header>

        <section className="aviso-privacidad__section">
          <p>
            Bienvenidos a Hicomerce. Hemos diseñado nuestro sitio para ser una
            fuente principal de información sobre nuestros productos. El brindarle
            una experiencia eficiente y privada mientras usa nuestro sitio es algo
            muy importante para nosotros. Esta política de privacidad describe el
            tipo de información que recopilamos de usted y nuestras prácticas para
            recolectar, mantener, usar y proteger esa información.
          </p>
          <p>
            Esta política de privacidad se aplica solo a la información que
            recopilamos en nuestro sitio, entre usted y Hicomerce, y también en
            nuestras páginas de redes sociales como Facebook, Instagram y otras
            redes.
          </p>
          <p>
            No damos ningún tipo de información de identificación personal sobre
            usted.
          </p>
        </section>

        <section className="aviso-privacidad__section">
          <h2 className="aviso-privacidad__subtitle">Información que recopilamos</h2>
          <p>
            Cuando las personas visitan nuestro sitio o nuestras redes sociales,
            recopilamos su información de identificación personal cuando se
            registra en nuestro sitio. Esto incluye los siguientes datos:
          </p>
          <ul className="aviso-privacidad__list">
            <li>Nombre</li>
            <li>Fecha de nacimiento</li>
            <li>Domicilio</li>
            <li>Dirección de email</li>
            <li>Número de teléfono fijo o móvil</li>
            <li>Identificación de usuario o contraseña</li>
          </ul>
          <p>
            Esta información de identificación personal nos permite contactarlo y
            diferenciarlo de cualquiera de nuestros usuarios. La información se
            utiliza para completar nuestro proceso de registro.
          </p>
          <p>
            Podríamos recibir más información personal adicional de usted a través
            de la comunicación en nuestro sitio. Si envía un email a nuestro
            sitio para solicitar más información sobre nuestros productos, usaremos
            su información para responder a su consulta y para mejorar
            significativamente nuestros servicios.
          </p>
          <p>
            Con el fin de mejorar nuestro sitio, también podríamos recopilar datos
            estadísticos, como la fecha y hora de un acceso a nuestro sitio y las
            redes sociales visitadas. No asociamos este tipo de información
            estadística con su información personal.
          </p>
        </section>

        <section className="aviso-privacidad__section">
          <h2 className="aviso-privacidad__subtitle">
            Uso de cookies del navegador web
          </h2>
          <p>
            Cuando visite nuestro sitio, podríamos enviarle una o más cookies a su
            dispositivo móvil o a su computadora. Las cookies solo pueden almacenar
            identificadores únicos, las preferencias de usuario e información que
            pueda mejorar su experiencia.
          </p>
          <p>
            Puede configurar su navegador para rechazar todas las cookies o para
            alertarle cuando se envían cookies; sin embargo, algunas características
            del sitio podrían no funcionar correctamente sin la utilización de
            cookies.
          </p>
        </section>

        <section className="aviso-privacidad__section">
          <h2 className="aviso-privacidad__subtitle">Uso de la información</h2>
          <p>
            La información personal que usted nos ha proporcionado podríamos
            utilizarla para:
          </p>
          <ul className="aviso-privacidad__list">
            <li>Brindarle más información sobre productos nuevos</li>
            <li>Informarle sobre ofertas especiales</li>
            <li>Notificarle sobre descuentos de temporada</li>
          </ul>
          <p>
            A menos que se indique lo contrario en esta política de privacidad, no
            transferimos, no alquilamos, no divulgamos y no vendemos su información
            de identificación personal a ningún tercero.
          </p>
          <p>
            Solo proporcionaremos información pertinente a otras empresas para
            entregar paquetes, completar pedidos, enviar correos y proporcionar
            servicios al cliente.
          </p>
          <p>
            Solo se compartirá la información suficiente para que realicen sus
            servicios y funciones. Siempre requerimos que nuestros socios se
            abstengan de difundir su información a otros sin su consentimiento.
          </p>
        </section>

        <section className="aviso-privacidad__section">
          <h2 className="aviso-privacidad__subtitle">
            Protección de su información
          </h2>
          <p>
            Su información está protegida. Siempre mantenemos prácticas apropiadas
            para la recolección, procesamiento y almacenamiento de datos, así como
            medidas de seguridad para proteger su información personal almacenada en
            nuestro sitio contra acceso no autorizado.
          </p>
        </section>

        <section className="aviso-privacidad__section aviso-privacidad__section--acceptance">
          <p className="aviso-privacidad__acceptance-text">
            <strong>
              HE LEÍDO Y ACEPTO LOS TÉRMINOS DEL PRESENTE AVISO DE PRIVACIDAD.
            </strong>
          </p>
        </section>
      </main>
        </>
    );
}

export default AvisoPr;