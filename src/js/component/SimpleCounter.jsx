import React from "react"

export const SimpleCounter = (props) => {

    

    return (
        <div className="counter-display">
            <div className="reloj-img"><i class="fa-regular fa-clock"></i></div>   
            <div className="mili-segundos">{props.thousandDigit}</div>
            <div className="segundos-cien">{props.hundredsDigit}</div>
            <div className="segundos-diez">{props.tensDigit}</div>
            <div className="segundos">{props.onesDigit}</div>
            
        </div>

    )
}