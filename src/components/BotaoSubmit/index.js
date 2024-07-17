
import styles from './BotaoSubmit.module.css';

function BotaoSubmit({ children, type }) {
    return (
        <div className={styles.btn}>
            <button type={type}> {children} </button> 
        </div>       
    )
}

export default BotaoSubmit;