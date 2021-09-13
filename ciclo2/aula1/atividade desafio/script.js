

var aula =" desafio 1 JavaScript";

alert(aula);//enviar caixa alerta
var teste = prompt ("digite seu nome");// caixa entrada
var n= prompt (teste+ " " +"digite um numero para comparar com n");// caixa entrada
var valor1=n;
var valor2=20;
var v=(valor1==valor2);
console.log(v);
var s=parseInt(valor1) + parseFloat(valor2);;
console.log(s);
var m=(valor1-valor2);
console.log(m);
var r=(valor1%valor2);
console.log(r);
var q=(valor1*valor1);
console.log(q);

document.write( "Seja bem vindo "+ teste +"<br>");//imprime tela /
document.write( "você digitou o numero:"+ "("+ n +")"+"<br>");//imprime tela
document.write( "O retorno da comparação booleana é: "+ v +"<br>");//imprime tela
document.write( "A soma dos valores é: "+ s +"<br>");//imprime tela
document.write( "A subtracão dos valores é: "+ m +"<br>");//imprime tela
document.write( "A resto da divisão é: "+ r+"<br>" );//imprime tela
document.write( "O quadrado da divisão é: "+ q +"<br>");//imprime tela



