

class Produtos{
    static produtos =[
        {
            id:1,
            nome:'Mouse USb',
            valor: 13.99
        },
        {   
            id:2,
            nome:'Teclado USb',
            valor: 13.99},
        {
            id:3,
            nome:'fone USb',
            valor: 13.99
        },
        {
            id:4,
            nome:'PenDrive',
            valor: 13.99
        }
      
    ];

    //metodos de classe
    static listar(){
         return Produtos.produtos;
    }
    
    
    
    static Add(id,nome, valor) {
        Produtos.produtos.push({
            id:id,
            nome: nome,
            valor: valor
        })
    }   
    
    static Editar(id) {
        
    }
    
    static Excluir(index) {
        Produtos.produtos.splice(index, 1);
        console.log(Produtos.produtos)
    }
}

module.exports = Produtos;
//CRUD
//create
//read
//update
//delete
