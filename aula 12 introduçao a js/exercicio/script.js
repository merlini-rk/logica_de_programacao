//GetElementsByTagName - Seleciona todas as tags que eu desejar
let paragrafos = document.getElementsByTagName( "p" )
paragrafos[0].innerHTML = "Corinthians 2 X 0 Palmeiras"

let input = document.getElementsByTagName("input").value

//getElementById - Seleciona um elemento do tipo ID
var titulo = document.getElementById("titulo")
titulo.innerHTML = "Alterando Usando JS"

//getElementsByClassName - Seleciona todos elementos do tipo class
const caixas = document.getElementsByClassName("caixa")
caixas[0].style.backgroundColor = "red"
caixas[1].style.backgroundColor = "green"

//QuerySelectos seleciona um elemento do tipo Class ou Id
const paragrafoQuery = document.querySelector('#paragrafoQuery')
paragrafoQuery.style.backgroundColor = "blue"
paragrafoQuery.style.padding = '10px'

//QuerySelectorAll seleciona todos elementos do Tipo ou Id
const caixaQuerry = document.querySelectorAll(".caixaQuery")
caixaQuerry[0].style.backgroundColor ="black" 
caixaQuerry[1].style.backgroundColor ="purple" 
caixaQuerry[0].style.color ="white" 
caixaQuerry[1].style.color ="white" 



function AlteraTexto(){
    let input = document.getElementsByTagName('input')[0].value
    titulo.textContent = input
}

function AlterarTexto(){
    let input = document.getElementsByTagName('input')[1].value
    paragrafoQuery.textContent = input
}
