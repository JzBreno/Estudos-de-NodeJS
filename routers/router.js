// responsavel por gerenciar as rotas 
const produtos = require('./produtos');
const usuarios = require('./usuarios');

const rotas = {
    '/produtos':{
        'GET': produtos.listar(),
        'POST': produtos.Add(),
        'PUT': produtos.Editar(0),
        'DELETE': produtos.Excluir(0)
    },
    '/usuarios':{
        'GET': usuarios.listar(),
        'POST': usuarios.Add(),
        'PUT': usuarios.Editar(0),
        'DELETE': usuarios.Excluir(0)
    }

};

module.exports = rotas;