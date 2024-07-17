import React, { useState, useEffect } from 'react';
import Entrada from 'components/Entrada';
import AreaTexto from 'components/AreaTexto';
import Selecionar from 'components/Selecionar';
import BotaoSubmit from 'components/BotaoSubmit';

import style from './ModalEditar.module.css';

// Importa a modal do react-modal
import Modal from 'react-modal';

// Código necessário para os recursos de acessibilidade
Modal.setAppElement('#root');

const ModalEditar = () => {
  // Hook que demonstra se a modal está aberta ou não
  const [modalIsOpen, setIsOpen] = useState(false);

  // Estado para dados do vídeo
  const [videoData, setVideoData] = useState({
    id: '',
    titulo: '',
    categoria: '',
    imagem: '',
    videoUrl: '',
    descricao: '',
  });

  // Função para abrir a modal
  const abrirModal = (video) => {
    // Verifica se o objeto 'video' é válido antes de usar
   
      setVideoData(video); // Preencha o estado com os dados do vídeo
      setIsOpen(true);
  
  };

  // Função para fechar a modal
  const fecharModal = () => {
    setIsOpen(false);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    const { id, titulo, categoria, imagem, videoUrl, descricao } = videoData;

    fetch(`http://localhost:3000/videos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ titulo, categoria, imagem, videoUrl, descricao }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Video updated successfully:', data);
        fecharModal(); // Feche a modal após a atualização
      })
      .catch((error) => console.error('Error updating video:', error));
  };

  return (
    <div className={style.modalCont}>
      <button className={style.btn} onClick={() => abrirModal()}>Editar</button>
      <Modal
        className={style.modal}
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de edição de vídeo"
      >
        {modalIsOpen && (
          <EditForm videoData={videoData} setVideoData={setVideoData} handleSubmit={handleSubmit} />
        )}
      </Modal>
    </div>
  );
};

const EditForm = ({ videoData, setVideoData, handleSubmit }) => {
  return (
    <div className={style.formularioCont}>
      <h1>EDITAR VIDEO</h1>
      <form className={style.formulario} onSubmit={handleSubmit}>
        <Entrada
          nome="Título"
          placeholder="Digite um titulo"
          value={videoData.titulo}
          onChange={(e) => setVideoData({ ...videoData, titulo: e.target.value })}
        />
        <Selecionar
          nome="Categoria"
          opt1=""
          opt2="Front End"
          opt3="Back End"
          opt4="Inovação"
          opt5="Gestão"
          value={videoData.categoria}
          onChange={(e) => setVideoData({ ...videoData, categoria: e.target.value })}
        />
        <Entrada
          nome="Imagem"
          placeholder="Insira uma imagem"
          value={videoData.imagem}
          onChange={(e) => setVideoData({ ...videoData, imagem: e.target.value })}
        />
        <Entrada
          nome="Video"
          placeholder="Insira um video"
          value={videoData.videoUrl}
          onChange={(e) => setVideoData({ ...videoData, videoUrl: e.target.value })}
        />
        <AreaTexto
          nome="Descrição"
          placeholder="Digite a descrição"
          value={videoData.descricao}
          onChange={(e) => setVideoData({ ...videoData, descricao: e.target.value })}
        />


        <div className={style.btnCont}>
          <BotaoSubmit>GUARDAR</BotaoSubmit>
          <BotaoSubmit>LIMPAR</BotaoSubmit>

        </div>

      </form>

    </div>

     
   
  );
}

export default ModalEditar;
