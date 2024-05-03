import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";


class LivroController {
  static async listarLivros (req, res) {             //static chama de forma estática sem ter que instanciar algo
    try{
      const listaLivros = await livro.find({})        //é chamada no routes
      res.status(200).json(listaLivros);
    } catch(erro){
      res.status(500).json({message: `${erro.message} - falha na requisção`});
    }         
  }

  static async listarLivroPorId (req, res) {
    try{
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado)
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha na requisição do livro`})
    }
  }

  static async cadastrarLivro (req, res){
    const novoLivro = req.body;                                //após a integração do autor 
    try{
      //const novoLivro = await livro.create(req.body);
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ... autorEncontrado._doc }};     //... copia todas propriedades e _doc limpa esses dados tirando prop add pelo mongoose
      const livroCriado = await livro.create(livroCompleto)
      res.status(201).json({message: "criado com sucesso!", livro: livroCriado});   //novoLivro e o retorno do método create acima
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
    }
  }

  static async atualizarLivro (req, res) {
    try{
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "livro atualizado"})
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha na atualização`})
    }
  }

  static async excluirLivro (req, res) {
    try{
      const id = req.params.id;
      await livro.findByIdAndDelete(id)
      res.status(200).json({message: "livro deletado"})
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha na exclusão`})
    }
  }

  static async listarLivrosPorEditora (req, res) {
    const editora = req.query.editora;
    try{
      const livrosPorEditora = await livro.find({editora: editora});   // 1º editora = propriedade, 2º editora = valor passado via parametro
      res.status(200).json({livrosPorEditora});                    //GET:   http://localhost:3000/livros/busca?editora="" 
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha na busca`})
    }
  }

}

export default LivroController;
