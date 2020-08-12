// Selecionar a área onde será colocado o botão de link

const headerNetworkList = document.querySelector('.header__networks-list')

// Criando o botão de link

const youtubeLink = document.createElement('a')
youtubeLink.setAttribute('href', 'https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ')
youtubeLink.setAttribute('target', '_blank')

const youtubeIcon = document.createElement('i')
const classesIcon = 'icon icon-youtube-header icon--small icon--hover-youtube'.split(' ')
classesIcon.forEach((classeIcon) => youtubeIcon.classList.add(classeIcon))

youtubeLink.appendChild(youtubeIcon)

// Adicionando o botão na área de icones

headerNetworkList.appendChild(youtubeLink)