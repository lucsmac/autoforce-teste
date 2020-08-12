
// Criando o modal

const modalWrapper = document.createElement('div')
modalWrapper.classList.add('modal-palmeiras')

const modalContent = document.createElement('div')
modalContent.classList.add('modal-palmeiras__content')

const escudoPalmeiras = document.createElement('img')
escudoPalmeiras.setAttribute('src', 'https://i.pinimg.com/originals/01/da/17/01da178467b71f952918106908c69b33.png')

// Criando os botões de abrir e fechar o modal

const buttonOpenModal = document.createElement('button')
buttonOpenModal.innerText = 'Abrir modal do Palmeiras'
buttonOpenModal.addEventListener('click', () => {
  const modalPalmeirasRef = document.querySelector('.modal-palmeiras')
  modalPalmeirasRef.classList.add('open')
})

const buttonCloseModal = document.createElement('button')
buttonCloseModal.innerText = 'Fechar modal do Palmeiras'
buttonCloseModal.addEventListener('click', () => {
  const modalPalmeirasRef = document.querySelector('.modal-palmeiras')
  modalPalmeirasRef.classList.remove('open')
})

// Montando o modal

modalContent.appendChild(escudoPalmeiras)
modalContent.appendChild(buttonCloseModal)
modalWrapper.appendChild(modalContent)

// Adicionando o modal e o button na página

const bodyRef = document.querySelector('body')
const headerRef = document.querySelector('.header .container')
bodyRef.appendChild(modalWrapper)
headerRef.appendChild(buttonOpenModal)

// Adicionando estilos

const style = document.createElement('style');
style.innerHTML =
  `
    .modal-palmeiras {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.4);
      z-index: 10000;
      justify-content: center;
      align-items: center;
    }

    .modal-palmeiras__content img {
      max-width: 100%;
    }

    .modal-palmeiras.open {
      display: flex;
    }

    .modal-palmeiras__content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 50%;
      display: grid;
      justify-content: center;
      align-items: center;
      row-gap: 20px;
    }

    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
  `;

// Adicionando o estilo antes da primeira tag script

var scriptRef = document.querySelector('script');
scriptRef.parentNode.insertBefore(style, scriptRef);