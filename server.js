

//Criando servidor com o modulo http do node
const {createServer} = require('node:http');
const listarProdutos = require('./routers/produtos');
//a const server recebe o servidor node passando uma request e uma response e retorna
const host = 'localhost';
const port = 3000;



const app = createServer((request, response) =>{
    //puxanando url e method da request do navegador
    const {url, method} = request;
    //dando um log
    console.log("URL", url);
    console.log("Metodo.verbo", method)

    //aplicando rotas as urls que irao entrar
    if(url === '/'){
        //a resposta 200 por padrao conexao "OK";tipo de entrada do response end sera text mas pode ser html, basta fazer a troca 
        response.writeHead(200, {'Content-Type':'text/html'});
        //sera exibido na dela
        return response.end('<h1>Esta na Barra</h1>');
    }

    


    if(url === '/produtos'){
        const dados = listarProdutos();
        //a resposta 200 por padrao conexao "OK";tipo de entrada do response end sera text mas pode ser html, basta fazer a troca 
        response.writeHead(200, {'Content-Type':'application/json'});
        //sera exibido na dela
        return response.end(JSON.stringify(dados));
    }

    if(url === '/produtos/adicionar'){
        //acessando a lista de produtos
        produtos.push({
            id:5,
            nome:'pc',
            valor: 900.99
        })

        response.writeHead(200, {'Content-Type':'text/plain'});
        //sera exibido na dela
        return response.end("Produto Adicionado com Sucesso");
    }

    //a resposta 200 por padrao conexao "OK";tipo de entrada do response end sera text mas pode ser html, basta fazer a troca 
    response.writeHead(404, {'Content-Type':'text/html'});
    //sera exibido na dela
    return response.end('<h1>Pagina nao encontrada</h1><br><h1>Not Found</h1>');
   
});

//server escuta na porta 3000 e no ip abaixo
app.listen(port,host, () => {
    //sera efetuado um log com o texto
    console.log(`Servidor executando http://${host}:${port}`)
});