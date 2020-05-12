import React from 'react'

export const Saludo = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Saludando A {props.persona}</h2>
            <p>Tiene {props.edad}</p>
        </div>
    )
}
