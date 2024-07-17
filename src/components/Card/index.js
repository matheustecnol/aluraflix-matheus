import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Entrada from 'components/Entrada';
import AreaTexto from 'components/AreaTexto';
import Selecionar from 'components/Selecionar';
import BotaoSubmit from 'components/BotaoSubmit';

// Modal accessibility setting
Modal.setAppElement('#root');

function Card({ id, titulo, capa }) {
    const [videos, setVideos] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newData, setNewData] = useState({
        id: '',
        titulo: '',
        categoria: '',
        capa: '',
        link: '',
        descricao: '',
    });

    // Fetch initial video data on component mount
    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/videos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(() => {
                setVideos(videos.filter((video) => video.id !== id));
            })
            .catch((error) => console.error('Error deleting video:', error));
        window.location.reload();
    };

    const handleEdit = (video) => {
        setNewData(video);
        setIsOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { id, titulo, categoria, capa, link, descricao } = newData;

        fetch(`http://localhost:3000/videos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo, categoria, capa, link, descricao }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Video updated successfully:', data);
                setVideos(videos.map(video => (video.id === id ? data : video)));
                setIsOpen(false);
            })
            .catch((error) => console.error('Error updating video:', error));

        window.location.reload();
    };

    const fecharModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} />
            </Link>
            <div className={styles.btnCont}>
                <button type='button' onClick={() => handleDelete(id)} className={styles.btn}>Apagar</button>
                <button type='button' onClick={() => handleEdit({ ...videos.find(video => video.id === id) })} className={styles.btn}>
                    Editar
                </button>
            </div>

            <Modal
                className={styles.modal}
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                contentLabel="Editar Vídeo"
            >
                <div className={styles.btnFecharModalCont}>
                    <button className={styles.btnFecharModal} onClick={fecharModal}>X</button>
                </div>
                <div className={styles.formularioCont}>
                    <h1>Editar Vídeo</h1>
                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <Entrada
                            nome="Título"
                            placeholder="Digite um título"
                            value={newData.titulo}
                            onChange={(e) => setNewData({ ...newData, titulo: e.target.value })}
                        />
                        <Selecionar
                            nome="Categoria"
                            opt1=""
                            opt2="Front End"
                            opt3="Back End"
                            opt4="Inovação"
                            opt5="Gestão"
                            value={newData.categoria}
                            onChange={(e) => setNewData({ ...newData, categoria: e.target.value })}
                        />
                        <Entrada
                            nome="Capa"
                            placeholder="Insira uma capa"
                            value={newData.capa}
                            onChange={(e) => setNewData({ ...newData, capa: e.target.value })}
                        />
                        <Entrada
                            nome="Vídeo"
                            placeholder="Insira um vídeo"
                            value={newData.link}
                            onChange={(e) => setNewData({ ...newData, link: e.target.value })}
                        />
                        <AreaTexto
                            nome="Descrição"
                            placeholder="Digite a descrição"
                            value={newData.descricao}
                            onChange={(e) => setNewData({ ...newData, descricao: e.target.value })}
                        />

                        <BotaoSubmit type="submit">Atualizar</BotaoSubmit>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default Card;
