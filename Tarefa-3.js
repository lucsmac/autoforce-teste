// Capturando o formulário

const form = document.querySelector('.form-conversion__body fieldset')

// Criando campo select

const select = document.createElement('select')
select.setAttribute('name', 'modelo')
select.classList.add('form-control')
select.classList.add('choices__input')
const options = ['SUV', 'Sedan', 'Hatch', 'Pickup']
const optionsDOM = options.map((option) => {
  const currentOption = document.createElement('option')
  currentOption.setAttribute('value', option)
  currentOption.innerText = option
  select.appendChild(currentOption)
})

// Criando o wrapper do campo select

const wrapperSelect = document.createElement('div')
wrapperSelect.classList.add('form-group')

wrapperSelect.appendChild(select)

// Adicionando o select ao formulário

form.appendChild(wrapperSelect)

// Criando o campo da mensagem

const mensagem = document.createElement('textarea')
mensagem.setAttribute('placeholder', 'Mensagem')
mensagem.classList.add('form-control')

// Criando o wrapper da mensagem

const wrapperMensagem = document.createElement('div')
wrapperMensagem.classList.add('form-group')
wrapperMensagem.appendChild(mensagem)

// Adicionando a mensagem ao formulário

form.appendChild(wrapperMensagem)