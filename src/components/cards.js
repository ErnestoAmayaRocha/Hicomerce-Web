import React from "react";
import { Link } from "react-router-dom";

function Cards() {
    return (
        <section className="proyectosde-clientes">
            <h2>Client Name</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eligendi
                eaque possimus odit obcaecati, cumque rerum. A aliquid, molestias aperiam
                fuga nam distinctio, qui dignissimos, eaque dolore beatae hic reiciendis.
            </p>
            <figure>
                <img src="" alt="" />
                <figcaption />
                <Link to="/proyectos">Ver Proyecto</Link>
            </figure>
        </section>
    );
}

export default Cards;