import React from "react";
import FormHC from "../components/form";
import Satisfaccion from "../components/garantiaClientes";
import Ourclients from "../components/nuestrosClientes";
import Servicios360Component from "../components/Servicios-360";

function Servicios360() {
    return (
        <>
            <main>
                <Servicios360Component />
                <Ourclients />
                <Satisfaccion />
                <FormHC />
            </main>
        </>
    );
}

export default Servicios360;