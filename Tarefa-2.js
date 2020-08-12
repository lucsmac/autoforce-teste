// A minha estratégia para resolver esse problema foi recriar o elemento 'a', para isso eu limpei o elementos 'li' que envolviam as tags com os links e recriei o elemento

const wppLinksWrapper = document.querySelectorAll('.header__card-whatsapp-item')

wppLinksWrapper.forEach(wppLinkWrapper => {
  // capturando a antiga tag 'a' dentro do 'li'
  const oldTagA = wppLinkWrapper.firstChild

  // capturando o link do wpp e os elementos filhos da antiga tag 'a' que serão mantidos
  const link = childLink.dataset.link
  const oldHtml = childLink.innerHTML

  // removendo o elemento antigo
  wppLinkWrapper.removeChild(childLink)

  // criando uma nova tag 'a'
  const newLinkTag = document.createElement('a')
  newLinkTag.setAttribute('href', link)
  newLinkTag.setAttribute('target', '_blank')
  newLinkTag.innerHTML = oldHtml

  // passo necessário para adicionar a tag 'a' como primeiro elemento - capturar o atual primeiro elemento e adicionar a nova tag antes dele
  const oldFirstChild = wppLinkWrapper.firstChild

  // e finalmente, adicionando a nova tag 'a'
  wppLinkWrapper.insertBefore(newLinkTag, oldFirstChild)
})
