import logo from './logo.png';
import styles from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={styles.rodape}>
             <div>
                <img src={logo} alt="Logo aluraflix"></img>
            </div>
        </footer>
    )
}

export default Rodape;