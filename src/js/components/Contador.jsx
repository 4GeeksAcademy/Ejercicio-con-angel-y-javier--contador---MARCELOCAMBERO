import React from "react";
import "./Contador.css";

const Contador = (props) => {

    const contador = props.number.toString().padStart(6, "0");

    return (
        <div className="nuestroContador">
            <div className="segundos">
                <p className="numero">
                    {contador}
                </p>
            </div>
        </div>
    );

};

export default Contador;