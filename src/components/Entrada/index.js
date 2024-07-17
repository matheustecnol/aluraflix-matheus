import style from './Entrada.module.css';
import React, { useState } from 'react';
import App from 'pages/NovoVideo';

function Entrada({valor, type, name, placeholder, value, onChange}) {
    return(
        <div className={style.info}>
            <label>{valor}</label>
            <input minlength="5" placeholder={placeholder} type={type} name={name} value={value} onChange={onChange}></input>
        </div>
    )
 
}

export default Entrada;