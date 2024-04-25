import livro from "../models/Livro.js";


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
    try{
      const novoLivro = await livro.create(req.body)
      res.status(201).json({message: "criado com sucesso!", livro: novoLivro})   //novoLivro e o retorno do método create acima
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
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
      res.status(500).json({message: `${message.erro} - falha na exclusão`})
    }
  }

}

export default LivroController;
