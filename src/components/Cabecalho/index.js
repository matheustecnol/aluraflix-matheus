import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "../CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo aluraflix"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                inicio
                </CabecalhoLink>
                <CabecalhoLink className={styles.link} url="./NovoVideo">
                Novo Video
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;