import style from './AreaTexto.module.css';

function AreaTexto({valor, type, name, placeholder, value, onChange}) {
    return(
        <div className={style.info}>
            <label>{valor}</label>
            <textarea placeholder={placeholder} type={type} name={name} value={value} onChange={onChange}></textarea>
        </div>
    )
}

export default AreaTexto;