import React from "react";
import styles from "./NuestrosClientesGridLogos.module.css";

import bocablancaLogo from "../assets/Clients/logos_clientes_web_220_bocablanca.webp";
import CantabriaLogo from "../assets/Clients/logos_clientes_web_220_cantbaria.webp";
import DeyacLogo from "../assets/Clients/logos_clientes_web_220_deyac.webp";
import ERLogo from "../assets/Clients/logos_clientes_web_220_estilo rojo.webp";
import NMLogo from "../assets/Clients/logos_clientes_web_220_negromostaza.webp";
import OritaLogo from "../assets/Clients/logos_clientes_web_220_orita.webp";
import QuintalLogo from "../assets/Clients/logos_clientes_web_220_quintal.webp";
import RBLogo from "../assets/Clients/logos_clientes_web_220_roue bikes.webp";
import RMLogo from "../assets/Clients/logos_clientes_web_220_roue motos.webp";
import XILLogo from "../assets/Clients/logos_clientes_web_220_xilin.webp";
import cklassLogo from "../assets/Clients/cklass.png";










const clientes = [
  { name: "bocablanca", src: bocablancaLogo },
  { name: "Cantabria", src: CantabriaLogo },
  { name: "Deyac", src: DeyacLogo },
  { name: "ER", src: ERLogo },
  { name: "NM", src: NMLogo },
  { name: "Orita", src: OritaLogo },
  { name: "quintal", src: QuintalLogo },
  { name: "RB", src: RBLogo },
  { name: "RM", src: RMLogo },
  { name: "XIL", src: XILLogo },
  { name: "Cklass", src: cklassLogo },
  





  
  // agrega más logos aquí...
];

function NuestrosClientesGridLogos() {
  return (
    <section className={styles.clientesSection}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Nuestros clientes</h2>

        <ul className={styles.grid}>
          {clientes.map((cliente) => (
            <li key={cliente.name} className={styles.item}>
              <img
                src={cliente.src}
                alt={`Logo de ${cliente.name}`}
                loading="lazy"
                className={styles.logo}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default NuestrosClientesGridLogos;
