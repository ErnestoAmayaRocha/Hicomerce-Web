import React from "react";

function TerminosServicio() {
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
          color: white;
          background: black;
        }
          .Layout_mainContent__2aD-i{
            background: black;}

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

        @media (min-width: 768px) {
          .aviso-privacidad {
            padding: 5rem 2rem 4rem;
          }

          .aviso-privacidad__section {
            padding: 2rem 2rem;
          }
        }
      `}</style>

      <main className="aviso-privacidad">
        <header className="aviso-privacidad__header">
          <p className="aviso-privacidad__kicker">Términos del Servicio</p>
          <h1 className="aviso-privacidad__title">Términos del Servicio</h1>
        </header>

        {/* Introducción y aceptación */}
        <section className="aviso-privacidad__section">
          <p>
            Este documento establece las condiciones que rigen el uso de este
            sitio web{" "}
            <strong>
              https://www.hicomerce.com/servicios-de-inteligencia-artificial-por-hicomerce
            </strong>{" "}
            y la contratación de productos o servicios a través del mismo
            (en adelante, las &quot;Condiciones&quot;).
          </p>
          <p>
            Le pedimos que lea atentamente estas Condiciones antes de utilizar
            este sitio web. Al utilizar este sitio web o realizar un pedido a
            través de él, usted acepta quedar vinculado por estas Condiciones y
            por nuestras Políticas de Protección de Datos. Si no está de acuerdo
            con todas las Condiciones y con las Políticas de Protección de
            Datos, no debe utilizar este sitio web.
          </p>
          <p>
            Estas Condiciones podrán ser modificadas. Es su responsabilidad
            revisarlas periódicamente, ya que las Condiciones vigentes en el
            momento de la celebración de cada contrato o, en su caso, en el
            momento de utilización del sitio web serán las que resulten
            aplicables.
          </p>
          <p>
            Si tiene alguna pregunta relacionada con las Condiciones o con las
            Políticas de Protección de Datos, puede contactarnos a través de los
            canales de contacto indicados en este sitio web. El contrato podrá
            formalizarse, a su elección, en cualquiera de los idiomas en los que
            las Condiciones estén disponibles en este sitio.
          </p>
        </section>

        {/* Datos personales y visitas */}
        <section className="aviso-privacidad__section">
          <h2 className="aviso-privacidad__subtitle">
            Datos proporcionados y visitas al sitio web
          </h2>
          <p>
            La información o datos personales que nos proporcione serán tratados
            de acuerdo con lo establecido en nuestras Políticas de Protección de
            Datos. Al utilizar este sitio web, usted consiente el tratamiento de
            dicha información y declara que todos los datos que nos facilita son
            veraces, exactos y corresponden a la realidad.
          </p>
        </section>

        {/* Uso del sitio web */}
        <section className="aviso-privacidad__section">
          <h2 className="aviso-privacidad__subtitle">Uso de nuestro sitio web</h2>
          <p>
            Al utilizar este sitio web{" "}
            <strong>
              (https://www.hicomerce.com/Servicios-de-inteligencia-artificial-por-Hicomerce)
            </strong>{" "}
            y realizar pedidos a través de él, usted se compromete a:
          </p>
          <p>
            • Utilizar este sitio web únicamente para realizar consultas o
            pedidos legalmente válidos.  
            • No realizar pedidos falsos o fraudulentos. Si se pudiera considerar
            razonablemente que se ha realizado un pedido de esta naturaleza,
            estaremos autorizados a cancelarlo e informar a las autoridades
            competentes.  
            • Proporcionarnos su dirección de correo electrónico, dirección
            postal y/o otros datos de contacto de manera veraz y precisa.  
            • Aceptar que podamos utilizar dicha información para comunicarnos
            con usted cuando sea necesario.
          </p>
          <p>
            Si no nos proporciona toda la información requerida, es posible que
            no podamos tramitar su pedido. Al realizar un pedido a través de
            este sitio web, usted declara ser mayor de 18 años y tener capacidad
            legal para celebrar contratos.
          </p>
        </section>

        {/* Servicio disponible */}
        <section className="aviso-privacidad__section">
          <h2 className="aviso-privacidad__subtitle">Servicio disponible</h2>
          <p>
            Los productos y servicios ofrecidos a través de este sitio web
            únicamente están disponibles para envío dentro de la República
            Mexicana, salvo en aquellas áreas o zonas que, por dificultad de
            acceso, comunicaciones u otras consideraciones similares, justifiquen
            que dicha oferta no se encuentre disponible.
          </p>
        </section>

        {/* Propiedad intelectual */}
        <section className="aviso-privacidad__section">
          <h2 className="aviso-privacidad__subtitle">Propiedad intelectual</h2>
          <p>
            Usted reconoce y acepta que todos los derechos de autor, marcas y
            demás derechos de propiedad intelectual sobre los materiales y
            contenidos incluidos en este sitio web corresponden, en todo momento,
            a nosotros o a quienes nos hayan otorgado licencia para su uso.
          </p>
          <p>
            Podrá hacer uso de dichos materiales únicamente en la forma en que
            nosotros o los licenciantes lo autoricemos de manera expresa. Lo
            anterior no le impedirá utilizar este sitio web en la medida en que
            sea necesario para copiar información relativa a su pedido o a sus
            datos de contacto.
          </p>
        </section>

        {/* Cómo se formaliza el contrato */}
        <section className="aviso-privacidad__section">
          <h2 className="aviso-privacidad__subtitle">
            Cómo se formaliza el contrato
          </h2>
          <p>
            No existirá ningún contrato entre usted y nosotros en relación con
            ningún producto o servicio hasta que su pedido haya sido
            expresamente aceptado por nosotros.
          </p>
          <p>
            Para realizar un pedido debe seguir el procedimiento de compra en
            línea y hacer clic en <strong>&quot;Autorizar pago&quot;</strong>.
            Una vez realizado este paso, recibirá un correo electrónico
            acusando recibo de su pedido y la correspondiente confirmación.
          </p>
          <p>
            El contrato de compra de un producto o servicio entre usted y
            nosotros se considerará formalizado únicamente cuando le enviemos la
            confirmación de su pedido.
          </p>
        </section>

        {/* Disponibilidad de productos */}
        <section className="aviso-privacidad__section">
          <h2 className="aviso-privacidad__subtitle">
            Disponibilidad de productos
          </h2>
          <p>
            Todos los pedidos de productos están sujetos a disponibilidad. En
            caso de que un producto no esté disponible tras haberse realizado el
            pedido, nos reservamos el derecho de ofrecerle información acerca de
            productos sustitutivos de calidad y valor igual o superior, o bien
            proceder al reembolso de cualquier cantidad que usted hubiese
            abonado.
          </p>
        </section>
      </main>
    </>
  );
}

export default TerminosServicio;
