const cardNovaLista = document.getElementById('cardNovaLista')
const btnNovaLista = document.getElementById('btnNovaLista')
const novaLista = document.getElementById('novaLista')
const divListas = document.getElementById('listas')

let listas = []

btnNovaLista.addEventListener('click', function(){
    cardNovaLista.style.display = 'block'
})

novaLista.addEventListener('submit', function(event) {
    event.preventDefault()
    const inputTitulo = document.querySelector('input[name="tituloLista"]')
    if(inputTitulo.value !== '') {
       const newLista = {
           id: listas.length + 1,
           titulo: inputTitulo.value
       }
       inputTitulo.value = ''
       listas.push(newLista)
       window.localStorage.listas = JSON.stringify(listas)
       renderList()
    }
})

novaLista.addEventListener('reset', function(event) {
    cardNovaLista.style.display = 'none'

})

// função para adicionar os itens na tela
function renderList () {
    // lendo as listas salvas no localStorage
    listas = JSON.parse(window.localStorage.listas)
    // limpando a div que recebe os cards das listas
    divListas.innerHTML = ""
    // para cada lista no array de listas, cria um novo card na tela
    listas.map(lista => {
        // criando um titulo pro card
       let h2Tag = document.createElement('H2')
       // add o título da lista salva no título do card
       h2tag.innerHTML = lista.titulo
       // cria btn
       let btnAddItem = document.createElement('BUTTON')
       // adiciona o texto ao btn
       btnAddItem.innerHTML = "novo item"
       // cria uma div para ser o card a da lista
       let divTag = document.createElement('DIV')
       // add a classe card-lista a div para o css
       divTag.setAttribute('class','card-lista')
       // add o h2 a div
       divTag.appendChild(h2Tag)
       // add a div.card-lista a div que contem todas as listas na tela
       divListas.appendChild(divTag)
       console.log(divTag)
    })
}

if (window.localStorage.listas?.length > 0) {
    renderList()
}