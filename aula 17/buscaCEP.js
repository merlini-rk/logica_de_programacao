// consumir o API do correio
// https://viacep.com.br/ws/Cep/json/

const cep = document.querySelector("#cep")

cep.addEventListener("change", (evento) => {
    let cepUsuario = evento.target
    console.log(cepUsuario.value);

    BuscarCep(cepUsuario.value);
    
})

async function BuscarCep(cep) {

    let erroCep = document.querySelector("#erro")
    erroCep.innerHTML =""

    try{
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        console.log(consultaCep);

        let consultaCepJson = await consultaCep.json()
        console.log(consultaCepJson);
        console.log(consultaCepJson.erro);

    

        if (consultaCepJson.erro) {
            throw ("Cep inexistente");
    
            
        
        }
       
    
        
        preencheCampos(consultaCepJson);

    
        

}
catch(erro){
    console.log("Erro");
    apagaCampos();
    erroCep.innerHTML = "<p> Cep invalido,Tente novamente <p/>"
}
}


function preencheCampos(resultadoCep) {

    let rua= document.querySelector("#rua")
    let bairro= document.querySelector("#bairro")
    let cidade= document.querySelector("#cidade")
    let estado= document.querySelector("#estado")

    rua.value = resultadoCep.logradouro
    bairro.value = resultadoCep.bairro
    cidade.value = resultadoCep.localidade
    estado.value = resultadoCep.uf

}

function apagaCampos() {

    let rua= document.querySelector("#rua")
    let bairro= document.querySelector("#bairro")
    let cidade= document.querySelector("#cidade")
    let estado= document.querySelector("#estado")

    rua.value = ""
    bairro.value = ""
    cidade.value = ""
    estado.value = ""

}

