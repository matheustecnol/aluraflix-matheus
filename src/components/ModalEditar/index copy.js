import Entrada from 'components/Entrada';
import AreaTexto from 'components/AreaTexto';
import Selecionar from 'components/Selecionar';
import BotaoSubmit from 'components/BotaoSubmit';


import style from './ModalEditar.module.css'
import React from 'react';
// Importa a modal do react-modal
import Modal from 'react-modal';

// Código necessário para os recursos de acessibilidade
Modal.setAppElement('#root');

function ModalEditar() {
  // Hook que demonstra se a modal está aberta ou não
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }

  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
  }

  // Código JSX necessário para criar uma modal simples que abre e fecha
  return (
    <div className={style.modalCont}>
      <button className={style.btn} onClick={abrirModal}>Editar</button>
      <Modal
        className={style.modal}
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
      >
        <div className={style.btnFecharModalCont}>
          <button className={style.btnFecharModal} onClick={fecharModal}>X</button>
        </div>
        <div className={style.formularioCont}> 
            <h1>EDITAR VIDEO</h1>      
            
                <form className={style.formulario}>
                    
                        <Entrada nome='Título' placeholder='Digite um titulo'></Entrada>
                        <Selecionar nome='Categoria' opt1='' opt2='Front End' opt3='Back End' opt4='Inovação' opt5='Gestão'>
                        </Selecionar>
                        <Entrada nome='Imagem' placeholder='Insira uma imagem'></Entrada>
                        <Entrada nome='Video' placeholder='Insira um video'></Entrada>
                        <AreaTexto nome='Descrição'placeholder='Digite a descrição'></AreaTexto>

                        <div className={style.btnCont}>
                            <BotaoSubmit>GUARDAR</BotaoSubmit>
                            <BotaoSubmit>LIMPAR</BotaoSubmit>                            
                        </div>
                    
                 </form>
           
             
        </div>
        
      </Modal>
    </div>
  );
}

export default ModalEditar;