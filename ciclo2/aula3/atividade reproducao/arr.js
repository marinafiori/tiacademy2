/* 
        ARRAYS
*/

// começa de 0 a infinito
var frutas = ["Uva", "Banana", "Amora", "Mamao"]; // var frutas = Array(); 
console.log(`Quantidade do Array: ${frutas.length} frutas: ${frutas[0]}`);// length = tamanho do array

var frutas2 = ["Pera", "Maça", "Laranja"];

var todasAsFrutas = frutas.concat(frutas2);

console.log(frutas);
console.log(todasAsFrutas);

// indexOf() Procura por um elemento específico no array e retorna a sua posição;
var retornoIndexOf = todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf); // 0 - 1 - 2 

// join() Junta todso os elementos de um array em uma string

var stringDeArray = todasAsFrutas.join(); 
console.log(stringDeArray);

// push() Insere um novo elemento no final do array 

var outraLista = ["Bola", "Peteca"];
var novaLista = outraLista.push("Boneca", "Qualquer brinquedo");

console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);

// pop () Remover o último elemento do array

console.log(outraLista.pop()); 
console.log(outraLista);

// reverse() Inverte a ordem dos elementos do array

console.log(outraLista.reverse());

//shift() Remove o primeiro elemento do array

var removerPrimeiro = ["fusca", "variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);

// sort () Ordena os elementos do array em ordem crescente

var alfa = [4,6,9,2];  
alfa.sort(); 
console.log(alfa);

// toString() Converte um array em string e retorna esa string = "join"

// unshift () Insere um novo elemento no início do array

alfa.unshift(10);
console.log(alfa);
alfa.sort();
console.log(alfa);

// splice() Corta o array em determinado ponto - quebra de array
// elimina restante do array a partir de certo ponto

var f = ["Uva", "Banana", "Amora", "Mamao"];
var idx = f.indexOf("Banana"); // retorna o indice do array
console.log(idx);
console.log(f.splice(idx, 2)); // nº = quantidade a tirar
console.log(f);


// arrays de objetos

// observacao:[] criação de array / objeto {}, {} ....

var dados = [
    {nome: "Marcelo"},
    {nome: "Raphael"}
]

/* 
console.log(dados[0].nome); 
console.log(dados[1].nome); 
 */

function Pessoa2(nome, sobrenome, idade, doc=[]){ // doc "=" []
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.doc = { // colocando arrays ao invés de nºs fixos
        rg : doc[0],
        cpf : doc[1]
    }
}

var pessoa2 = new Pessoa2("Rafael" ,"", "", ["22", "555"]); 
//console.log("Nome: " + pessoa2.nome + ", CPF: " + pessoa2.doc.rg);
console.log("Nome: " + pessoa2.nome + ", CPF: " + pessoa2.doc.cpf);



