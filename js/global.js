const cardNovaLista = document.getElementById('cardNovaLista')
const btnNovaLista = document.getElementById('btnNovaLista')
const novaLista = document.getElementById('novaLista')

const listas = []

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
    }
    console.log(listas)
})

novaLista.addEventListener('reset', function(event) {
    cardNovaLista.style.display = 'none'

})