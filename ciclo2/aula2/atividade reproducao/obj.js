/*var /let const
*/
/*var nome="marina";// var global
let sobreNome= "fiori";
if(true){
	console.log("Var nome="+ nome);
	var nm=nome
	console.log("chamando o sobreNome"+sobreNome)
	let sn="mate durek"
	console.log(sobreNome);
}
console.log("meu nome é"+ nm+""+sobreNome+""+sn);

console.log("Var nome="+ nm);
*/

var Pessoa = {
	nome:"marina",
	rua:"Rua lá",
	ncasa: "4523",
	dados: function(){
		document.write(
			"nome:"+ this.nome+"<br>"+
			"rua:"+ this.rua+"<br>"+
			"n da casa:"+ this.ncasa+"<br>"
			)}}

Pessoa.dados()
/*console.log("nome "+Pessoa.nome+
	" endereço "+Pessoa.rua+
	" n "+Pessoa.ncasa)
*/