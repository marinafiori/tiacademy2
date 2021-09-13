
window.onload = function (){
    var cxTexto1 = document.querySelector("#text01");
    var cxTexto2 = document.querySelector("#text02");
    var btn = document.querySelector("#btn");
    var somaBtn = document.querySelector("#somaFinal");

    btn.addEventListener("click", ()=>{
        let n1 = +cxTexto1.value;
        let n2 = +cxTexto2.value;   
        let resultado = Number(n1) + Number(n2);
        let provaR = somaBtn.value;

        if(resultado == provaR){
            alert("acertou!");            
            
        } else {
            alert("errou");
            
        }
    });
}




