import React from "react";
import Ourclients from "../components/nuestrosClientes";
import Satisfaccion from "../components/garantiaClientes";
import FormHC from "../components/form";


/* import Clientes from "../components/Clientes"; */
import NuestrosClientesGridLogos from "../components/NuestrosClientesGridLogos";
function ClientesHC() {
    return (
        <>
        <main>
            <NuestrosClientesGridLogos/>
            <Ourclients />
          {/*   <Clientes /> */}
            <Satisfaccion />
            <FormHC />
        </main>
        </>
    );
}

export default ClientesHC;