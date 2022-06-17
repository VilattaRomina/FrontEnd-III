import React from 'react';


const Card = ({img, changeId, text, name}) => {
    return (
        <div>
            <h1>{text}</h1>
            <div >
                <div >
                    <img src={img} alt="" />
                </div>
                <div >
                    <h3>{name}</h3>
                    <button onClick={() => changeId("Anterior")} >Anterior</button> 
                    <button  onClick={() => changeId("Siguiente")} >Siguiente</button> 
                </div>
            </div>
        </div>
    );
}

export default Card;