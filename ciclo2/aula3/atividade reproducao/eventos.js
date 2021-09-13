/* 
click ao Clicar em algum elemento HTML
mousemove Ao mover o cursor do mouse acessa (entra) o elemento
mouseover Ao mover o cursos do mouse dentro do elemento
mouseout Ao mover o cursor para fora do elemento
dblclick Ao efetuar do duplo blick (rapido) sobre o elemento
blue Ao perde o foco do elemento, geralmente associado ao elemento HTML
*/


window.onload = function(){

    //alert("alerta")
    const btn1 = document.querySelector(".btn-click");
    const legP = document.querySelector(".legenda");
    const cxTexto = document.querySelector("#texto");

    btn1.addEventListener("click", ()=>{  
        //escrever no elemento
        legP.innerHTML += cxTexto.value; 

    } );

    legP.addEventListener("click", ()=>{          
        legP.innerHTML=" "; 

    });

    // mousemove Ao mover o cursor do mouse acessa (entra) o elemento
    /*legP.addEventListener("mouseout", ()=>{

            alert("teste")
    });*/

    
/* TROCAR TIPO DE ELEMENTO EX: PASSWORD PARA TEXT */

    const trocaSenha = document.querySelector("#verSenha");
    const cxSenha = document.querySelector("#senha");

    trocaSenha.addEventListener("click", ()=>{
// getAttribute( )  pega o tipo do elemento
// setAttribute( ) atribui um tipo ao elemento

    if(cxSenha.getAttribute("type") == "password"){
        cxSenha.setAttribute("type", "text")
    } else {
        cxSenha.setAttribute("type", "password")
    }    
    });

    // alterar background

    const cxTrocaBg = document.querySelector("#cxTbg");
   
    // blur quando desfocar desparar uma ação

        cxTrocaBg.addEventListener("blur", ()=>{
            cxTrocaBg.setAttribute("class", ".corBg");
    });

    //somar valores cx input text

    const valor1 = document.querySelector("#v1");
    const valor2 = document.querySelector("#v2");
    const btnSomar = document.querySelector("#soma");
    const spanResultado = document.querySelector("#resultado");

    btnSomar.addEventListener("click", ()=>{
        var cx1 = valor1.value;
        var cx2 = valor2.value;
        var r = Number(cx1) + Number(cx2);

        spanResultado.innerHTML = r;
    });

    // evento modal
    
    const btnModal = document.querySelector("#chamarModal");
    const janelaM = document.querySelector("#janModal");
    const closeMod = document.querySelector("#fechaModal");
    
    btnModal.addEventListener("click", ()=>{
    janelaM.setAttribute("class", "modal"); 
    });

    
   janelaM.addEventListener("click", ()=>{
        janelaM.classList.remove("modal");

    });

}

