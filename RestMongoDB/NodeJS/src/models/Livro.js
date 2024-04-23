import mongoose, { version } from "mongoose";

const livroSchema = new mongoose.Schema(
    {   id: { type: mongoose.Schema.Types.ObjectId },
        titulo: { type: String, require: true },
        editora: { type: String },
        preco: { type: Number },
        paginas: { type: Number }
    }, 
    {versionKey: false});                                 //nao queremos versionar o schema


const livro = mongoose.model("livros", livroSchema)       //livros aqui é a colecao e o schema, as propriedades desse livro


export default livro;