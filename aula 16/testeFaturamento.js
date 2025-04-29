let produtos = document.querySelectorAll(".produto")


for (let i =0; i < produtos.length;i++){
    
    let ValorUnitProduto = produtos [i].querySelector(".info-valor-unidade").textContent
    let QuantidadeProduto = produtos [i].querySelector(".info-quantidade").textContent
    let ValorTotalProduto = produtos [i].querySelector(".info-valor-total")
    let ValorUnitProdutoLimpo = ValorUnitProduto.replace(/R\$\ /,"")
    
    console.log(produtos);
    console.log(QuantidadeProduto);
console.log(ValorTotalProduto);
console.log(ValorTotalProduto);

//Excluir o R$ 
console.log(ValorUnitProdutoLimpo);
console.log(parseFloat(ValorUnitProdutoLimpo)* parseInt(QuantidadeProduto));

ValorTotalProduto.innerHTML= "R$" + (parseFloat(ValorUnitProdutoLimpo)* parseInt(QuantidadeProduto)).toFixed(2)




}
