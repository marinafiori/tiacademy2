/*  Objetos */

function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

var ps1 = new Pessoa("adam", "fiori", 41); //construtor
console.log("Pessoa1.Nome: " + ps1.nome + " " + ps1.sobrenome+ ", idade: "+ps1.idade);

var ps2 = new Pessoa("gabriel");
console.log("Pessoa2.Nome "+ ps2.nome + " " + ps2.sobrenome);

// outras formas de criar objetos

var objPessoa = { rg : "7156-8 ", cpf : " 030644" } 

//console.log(typeof(objPessoa));
console.log("RG: "+ objPessoa.rg );

function Pessoa2(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.doc = { 
        rg : "7157266", 
        cpf : " 03644279"
    }
}

var pessoa2 = new Pessoa2("marina");
//console.log("Nome: " + pessoa2.nome + ", RG: " + pessoa2.doc.rg);

console.log(`Nome ${pessoa2.nome} RG: ${pessoa2.doc.rg}`);
