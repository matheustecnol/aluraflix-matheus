import Entrada from 'components/Entrada';
import style from './NovoVideo.module.css';
import AreaTexto from 'components/AreaTexto';
import Selecionar from 'components/Selecionar';
import BotaoSubmit from 'components/BotaoSubmit';

import React, { useState } from 'react';

function App() {
    const [newData, setNewData] = useState({
        titulo: '',
        categoria: '',
        capa: '',
        link: '',
        descricao: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for empty fields
        const { titulo, categoria, capa, link, descricao } = newData;
        if (!titulo || !categoria || !capa || !link || !descricao) {
            window.alert("Por favor, preencha todos os campos.");
            return; // Prevent form submission
        }

        fetch('http://localhost:3000/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo, categoria, capa, link, descricao }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Data submitted successfully:', data);
                setNewData({ titulo: '', categoria: '', capa: '', link: '', descricao: '' });
                window.alert("Video cadastrado");
            })
            .catch((error) => {
                console.error('Error submitting data:', error);
            });
    };

    const handleReset = () => {
        setNewData({
            titulo: '',
            categoria: '',
            capa: '',
            link: '',
            descricao: '',
        });
    };

    return (
        <div className="App">
            <div className={style.formularioCont}>
                <h1>NOVO VIDEO</h1>
                <form onSubmit={handleSubmit} onReset={handleReset} className={style.formulario}>
                    <Entrada
                        valor='Título'
                        placeholder='Digite um título'
                        type='text'
                        name='titulo'
                        value={newData.titulo}
                        onChange={(e) => setNewData({ ...newData, titulo: e.target.value })}
                    />
                    <Selecionar
                        valor='Categoria'
                        opt1=''
                        opt2='Front End'
                        opt3='Back End'
                        opt4='Inovação'
                        opt5='Gestão'
                        name='categoria'
                        value={newData.categoria}
                        onChange={(e) => setNewData({ ...newData, categoria: e.target.value })}
                    />
                    <Entrada
                        valor='Capa'
                        placeholder='Insira uma capa'
                        type='text'
                        name='capa'
                        value={newData.capa}
                        onChange={(e) => setNewData({ ...newData, capa: e.target.value })}
                    />
                    <Entrada
                        valor='Vídeo'
                        placeholder='Insira um vídeo'
                        type='text'
                        name='link'
                        value={newData.link}
                        onChange={(e) => setNewData({ ...newData, link: e.target.value })}
                    />
                    <AreaTexto
                        valor='Descrição'
                        placeholder='Digite a descrição'
                        name='descricao'
                        value={newData.descricao}
                        onChange={(e) => setNewData({ ...newData, descricao: e.target.value })}
                    />
                    <div className={style.btnCont}>
                        <BotaoSubmit type='submit'>GUARDAR</BotaoSubmit>
                        <BotaoSubmit type='reset'>LIMPAR</BotaoSubmit>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
