import React from "react";
import FormHC from "../components/form";
import ContactoComponent from "../components/Contacto";

function Contacto() {
    return (
        <>
        <main>
            <ContactoComponent />
            <FormHC />
            <iframe 
                title="Ubicación de HiComerce en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.431583901029!2d-103.38350142475254!3d20.692691980873864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af436231fa35%3A0x4644d26a4ea18348!2sHi%20Comerce!5e0!3m2!1ses!2smx!4v1761267381684!5m2!1ses!2smx" 
                width="100%" 
                height="750"  
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            />
        </main>
        </>
    );
}

export default Contacto;