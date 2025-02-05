import React from "react";
import "./Contador.css";

const Contador = (props) => {
    return (
        <div className="nuestroContador">
            <div className="segundos">
                <p className="numero">
                    {props.number}
                </p>
            </div>
        </div>
    );

};

export default Contador;