/*var nome="marina"
console.log(nome.length);
console.log(nome[0]);*/



//var palavras="maca doce"
/*console.log(palavras.match(/D/gi));*/


/*console.log(palavras.search(/d/));*/
/*var str="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, molestias, cumque."+
" Dolore veritatis "
var mudarStr=str.replace(/veritatis/gi,'Xxxxxx');
console.log(mudarStr)*/

/*var comp2="comparar"
var c1=comp1.toLowerCase();
var c2=comp2.toLowerCase()
console.log('este é o c1: ${c1} este é o c2 ${c2}')

var comparacao=comp1.localeCompare(/comp2/);
console.log(comparacao)*/

var p ='  fpalavra+ ';
var r=p.trim();
console.log(r)
var s=r.replace(/'f'/gi,'');
console.log(s)

var sub_a = s.replace('+','');
console.log('Removido: ${sub_a}' );

var valor=1.35
var formatarmoeda=valor.toLocaleString('pt-br',{
	style:'currency',
	currency:'BRL'
})
console.log(formatarmoeda)