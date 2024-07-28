// responsavel por gerenciar as rotas 
const produtos = require('./produtos');

const rotas = {
    '/produtos':{
        'GET': produtos.listar(),
        'POST': produtos.Add(),
        'PUT': produtos.Editar(),
        'DELETE': produtos.Excluir(0)
    }
};

module.exports = rotas;