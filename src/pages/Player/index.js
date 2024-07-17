import styles from './Player.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';

import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';


function Player() {

    const [video, setVideo] = useState();

    const parametros = useParams();

   // const video = videos.find((video) => {
   //     return video.id === Number(parametros.id);
   // })

   useEffect(() => {
    fetch(`http://localhost:3000/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
        }, [])

    if (!video) {
        return <NaoEncontrada />
    }

    return (        
        <>
            
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
            <iframe width="100%" 
                height="100%" 
                src={video.link} 
                title={video.Titulo} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>                    
            </iframe>
            </section>
        </>
    )
}

export default Player;