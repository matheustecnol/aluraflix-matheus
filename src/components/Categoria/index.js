import Card from '../Card';
import styles from './Categoria.module.css';
//import videos from "../../json/db.json";
import { useEffect, useState } from 'react';




function Categoria({ children, tipo, cor }) {  

    const [videos, setVideos] = useState([]);

    // GET: Exibir dados

    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    //=>

    return (
        
        <div className={styles.categoria}>
            <div className={styles.tituloCont}>
                <div className={styles.titulo}>
                    {children}
                </div> 
            </div>
            <section className={styles.cardCont}>    

            {videos.filter((video) => video.categoria == tipo).map((video) => {
            return <Card {...video} key={video.id} />;

           
})}
            </section>               
        </div>
       
    )

   
}

export default Categoria;