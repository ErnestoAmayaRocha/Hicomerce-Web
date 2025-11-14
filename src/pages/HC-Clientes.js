import React from "react";
import Ourclients from "../components/nuestrosClientes";
import Satisfaccion from "../components/garantiaClientes";
import FormHC from "../components/form";

import HeroClientsIMGDesk from "../../src/assets/ClientesPage/logos.svg";
import HeroClientsIMGMobil from "../../src/assets/ClientesPage/Frame 129.svg";
import styles from "../components/HeroClients.module.css"
import Clientes from "../components/Clientes";

function ClientesHC() {
    return (
        <>
        <main>
            <section className={styles.nuestrosClientesHero}>
                <img src={HeroClientsIMGDesk} alt="Logos clientes (desktop)" className={styles.desktopImage} />
                <img src={HeroClientsIMGMobil} alt="Logos clientes (móvil)" className={styles.mobileImage} />
            </section>
            <Ourclients />
            <Clientes />
            <Satisfaccion />
            <FormHC />
        </main>
        </>
    );
}

export default ClientesHC;