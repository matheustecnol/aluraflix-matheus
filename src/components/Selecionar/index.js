import style from './Selecionar.module.css';

function Selecionar({valor, name, value, onChange, opt1, opt2, opt3, opt4, opt5}) {
    return(
        <div className={style.info}>
            <label>{valor}</label>
            <select name={name} value={value} onChange={onChange}>
                <option selected disabled='disabled' value={opt1}>{opt1}</option>
                <option value={opt2}>{opt2}</option>
                <option value={opt3}>{opt3}</option>
                <option value={opt4}>{opt4}</option>
                <option value={opt5}>{opt5}</option>
            </select>
            
        </div>
    )
}

export default Selecionar;