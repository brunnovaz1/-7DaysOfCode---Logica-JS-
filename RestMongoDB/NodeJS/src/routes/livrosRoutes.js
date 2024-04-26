import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();                                        //no express as rotas são chamadas em sequencia conforme declaradas aqui
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);    //tem que ser antes do id, do mais complexo pro mais simples
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);




export default routes;