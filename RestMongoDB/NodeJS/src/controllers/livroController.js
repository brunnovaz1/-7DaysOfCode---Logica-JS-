import livro from "../models/Livro.js";


class LivroController {
  static async listarLivros (req, res) {           //static chama de forma estática sem ter que instanciar algo
    const listaLivros = await livro.find({})        //é chamada no routes
    res.status(200).json(listaLivros);

  }

  static async cadastrarLivro (req, res){
    try{
      const novoLivro = await livro.create(req.body)
      res.status(201).json({message: "criado com sucesso!", livro: novoLivro})
    }catch (erro){
      res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
    }
  }

}

export default LivroController;
