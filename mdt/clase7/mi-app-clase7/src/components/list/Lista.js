import React from 'react'
import { ListStyle, ElementStyle } from '../Styles'


const lista =["HOLA", "HOLA", "HOLA", "MUNDO"]

const Lista = () => {
    return (
        <ListStyle>
            {lista.map((elem, i) => (
                <ElementStyle key={i}> {elem}</ElementStyle>
            )
            )}
        </ListStyle>
    )
}

export default Lista;
