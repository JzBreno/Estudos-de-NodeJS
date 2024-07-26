//CLASSES
class Pessoa{
    //ATRIBUTOS
    nome = '';
    cpf = '';
    idade = '';
    //construindo classe
    constructor(nomec, cpfc, idadec){
        //this se refere as variaveis da classe
        this.nome = nomec;
        this.cpf = cpfc;
        this.idade = idadec;
    }
    //eventos / metodos de classe js
    correr(){
        console.log("correndo...");
    }
    dormir(){
        console.log("dormindo");
    }
}

const pessoa1 = {
    nome: 'max',
    idade:23,
    cpf:'61678788210',
    correr: () => {},
    dormir:() =>{}
}

//instanciando obj apartir de classe
const pessoaClasse = new Pessoa('jose', '88888888', 24)
//mostrando dados
console.log(pessoa1);
console.log(pessoaClasse);