//servidor HTTP Local
//import http from 'http';          //protocolo mais comum de comunicação(cliente/servidor) request - response
import app from "./src/app.js"         //assume após instalação do express

const PORT = 3000;

/* const rotas = {
    "/": "Curso de Express API",
    "/livros": "Entrei na rota livros!",
    "/autores": "Entrei na rota autores..."  //não e mais utilizado depois da criacao src/app
} */

/* const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" }); //src/app assume e servidor nao é mais criado aqui
    res.end(rotas[req.url]);
}) */

app.listen(PORT, () => {                  //após instalação do express nao é mais server.listen que esta acima
    console.log("servidor OK!");
})


