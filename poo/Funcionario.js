
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

    auentica(){
        console.log(`${this.nome} - Autenticado`)
    }

}

//gerando classe herdeira de PESSOA com extends
class Gerente extends Pessoa{
    constructor(nome,cpf,data_nascimento, cargo){
        //func super pertence a pessoa e chama seu construtor
        super(nome,cpf, data_nascimento);
        this.cargo = cargo;

    }
}

const pessoa1 = new Pessoa('joao', '00000000', '13/10/1999');

const gerente = new Gerente('Teste', '00000000', '20-03-2017', 'Gerente');

gerente.auentica();