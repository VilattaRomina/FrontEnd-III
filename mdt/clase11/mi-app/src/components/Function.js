import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card.js";

const FunctionalComponent = () => {
    const[data, setData] = useState({});
    const[id, setId] = useState(1);

    useEffect(() => {
        const request = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const result = await response.json();
            setData(result);
        };
        request();
    }, [id]);

     const changeId = arg => {
        if (arg === "Anterior"){
          setId( prevState => prevState - 1);
        } else if (arg === "Siguiente"){
          setId( prevState => prevState + 1);
        }
    }

    return(
        <div>
            <Card name={data.name} img={data.image} changeId={changeId} text="Componente funcional"/>
        </div>
    )
}

export default FunctionalComponent;