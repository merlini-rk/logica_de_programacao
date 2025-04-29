function Adicionar(){
    let form = document.querySelector('#form-adiciona')

    let Produtonome= form.produto.value('#produto')
    console.log(produto);
    
    let Valor = form.valor.value('#valor')
    console.log(valor);
    
    let Quantidade = form.Quantidade.value('quantidade')
    
    console.log(Quantidade);
    

    if (!Produto|| !Valor|| !Quantidade){
        window.alert("Favor preencher todos campos")
    }

    else{
        let produto= document.createElement('tr')
        let codigoTD= document.createElement('td')
        let NomeTD= document.createElement('td')
        let ValorUnitTD= document.createElement('td')
        let quantidadeTD= document.createElement('td')
        let ValorTotalTD= document.createElement('td')
       
        //Atribuir os valores aos elementos
        codigoTD.textContent =document.querySelectorAll('tr').length
        NomeTD.textContent = "bolo de " + produto
        ValorUnitTD.textContent = Valor
        quantidadeTD.textContent = Quantidade
        ValorTotalTD.textContent = "R$" + (parseInt(Quantidade)*parseFloat(Valor)).toFixed(2)

    }

}    