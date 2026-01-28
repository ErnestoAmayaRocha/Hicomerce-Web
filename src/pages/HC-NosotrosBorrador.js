import React from "react";
import "../components/Nosotros.css";


import NosotrosHeader from "../components/NosotrosHeader";
import NosotrosAceleraImpulsa from "../components/NosotrosAceleraImpulsa";
import NosotrosEvolucion360 from "../components/NosotrosEvolucion360";
import NosotrosDiferente from "../components/NosotrosDiferente";
import NosotrosAliado360 from "../components/NosotrosAliado360";
import NosotrosEmpresasAltoNivel from "../components/NosotrosEmpresasAltoNivel";
import NosotrosCierre from "../components/NosotrosCierre";

function NosotrosBorradorHC() {
  return (
    <main>
      <NosotrosHeader />
      <NosotrosAceleraImpulsa />
      <NosotrosEvolucion360 />
      <NosotrosDiferente />
      <NosotrosAliado360 />
      <NosotrosEmpresasAltoNivel />
      <NosotrosCierre />
    </main>
  );
}

export default NosotrosBorradorHC;