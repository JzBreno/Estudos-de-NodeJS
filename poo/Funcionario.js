
//gerando classe mae PESSOA
class Pessoa{
    nome;
    cpf;
    data_nascimento;

    constructor(nome, cpf, data_nascimento){
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }

     autentica(){
        console.log(`${this.nome} - Autenticado`)
    }

}

//gerando classe herdeira de PESSOA com extends
class Gerente extends Pessoa{
    cargo;
    constructor(nome,cpf,data_nascimento, cargo){
        //func super pertence a pessoa e chama seu construtor
        super(nome,cpf, data_nascimento);
        this.cargo = cargo;

    }
}

//metodos de classe sem instanciar podem ser utilizados se usar a palavra static 
class Carro{
    //com static nao se precisa instanciar para usar metodos de funcao
    static frear(){
        console.log('freiou');
    }
}

Carro.frear();