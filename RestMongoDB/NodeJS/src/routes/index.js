import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js"

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.JS"));

  app.use(express.json(), livros, autores)         //pega middleware json e todas rotas(livrosRoutes)e passando para dentro de routes
                                          //'livros': para que o Express gerencie tudo de uma vez
                                          //'use'  é usado para incluir middlewares
};

export default routes;






//esse arquivo faz com que tudo seja interpretado em json e indica o caminho para todas requisições seguirem