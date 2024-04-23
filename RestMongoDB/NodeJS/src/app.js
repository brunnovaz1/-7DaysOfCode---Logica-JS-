import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase()

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro)              //se tiver algum erro, ele chegara como parametro e ira imprimir
})
conexao.once("open", () => {
    console.log("conexao com o banco feita com sucesso!")
})


const app = express();
app.use(express.json())      //middleware -> tem acesso as req/res converte em json(chegaram pelo body como string) e faz acoes com os objetos

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Aneis"
    },
    {
        id: 2,
        titulo: "Seven"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => {           //funcao que fará a busca
        return livro.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);                  //resposta tipo json
})

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)        //params -> prop do obj req; 
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!")
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros)
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros.splice(index, 1);                                  //index = o id que foi procuraro, 1 = deletar apenas 1 elemento
    res.status(200).send("Livro removido!")
})

export default app;





