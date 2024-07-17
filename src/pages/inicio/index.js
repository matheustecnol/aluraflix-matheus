import styles from './inicio.module.css';
import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Categoria from "../../components/Categoria";
import Rodape from "../../components/Rodape";
import Titulo from "../../components/Titulo";


function Inicio() {
    return (
        <>
        <div className={styles.all}>
           
            <Banner imagem="01"></Banner>
            <Categoria tipo="Front End"><h2>FRONT END</h2></Categoria>
            <Categoria tipo="Back End"><h2>BACK END</h2></Categoria>
            <Categoria tipo="Inovação"><h2>INOVAÇÃO</h2></Categoria> 
            <Categoria tipo="Gestão"><h2>GESTÃO</h2></Categoria>           
            <Rodape/>
         </div>
        </>
       
    )
}

export default Inicio;