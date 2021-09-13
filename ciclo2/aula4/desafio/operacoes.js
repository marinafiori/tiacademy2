// inner pega também a instrução HTML o textContent pega o texto limpo, sem tags!
//Array retorna 0 quando o iten esta na lista!

window.onload=function(){    
//                      PRODUTOS
   (()=>{
    let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

    for(let idx in produtos){
        mostrarProdutosCliente.innerHTML += `<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}`        
    }
   })(produtos) // (produtos) no final = auto executável - chama var = produtos do código produtos.js
//                      COMPRA

// percorre o elemento produtos e faz uma li.itemProduto item atributo
const itemProduto = document.querySelectorAll("ul#produtos > li.itemProduto");
// criado dinamicamente no inner.HTML acima -  /\
//armazenar itens da compra / inserir no carrinho
const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
//mostraTotalCompra = recebe total da compra e mostra pro cliente
const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
//criação de array para escolher apenas 1 produto
const armazenaItem=[]; // verifica se ja esta no array

var totalPedido =0;

itemProduto.forEach((item)=>{
    item.addEventListener("click",()=>{
        
        li = document.createElement("li");//  createElement = criou a lista!
        li.setAttribute("data-preco", item.dataset.preco); // pega valor do item
        console.log(li);
        //referencia para saber se tem um produto ja lançado = método indexOf()
        if(armazenaItem.indexOf(item.textContent) == -1){
            //se não encontrar no armazem, então ele é "-1" - /\

            // entao vamos pedir para armazenar na lista e verifica se ja esta no array- \/
            armazenaItem.push(item.textContent); // push inserir um elemento no final do Array!
            // mostra pro cliente que foi inserido na lista - \/
            //itemProduto.textContent(item.textContent); nao deixa ir para cesta
            // criar e add
            cestaDoCliente.appendChild(li).textContent = item.textContent = item.textContent;

            totalPedido += Number(item.dataset.preco); // dataset preço do iten

            //mostra valor do total Pedido na moeda corrente e o valor no input
            mostraTotalCompra.value = totalPedido.toLocaleString("pt-BR",
            {style:"currency", currency: "BRL"})
        }else{
            alert(`Este item ${item.textContent} já está na sua cesta!`);
        }
    });
});

const cestaCliente = document.querySelectorAll("#cestaDoCliente"); // puxa o pai

cestaCliente.forEach((item) => {
    item.addEventListener("click", (itemCesta) => {
        var idx = armazenaItem.indexOf(itemCesta.target.textContent);
        if(idx > -1) {
            totalPedido -= Number(itemCesta.target.dataset.preco);
            cestaDoCliente.removeChild(cestaDoCliente.childNodes[idx]);
            armazenaItem.splice(idx, 1);
            mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
        }    
    })
})

}// fim