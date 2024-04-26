import mongoose from "mongoose";
import { autorSchema } from "./Autor.js"

const livroSchema = new mongoose.Schema(
    {   id: { type: mongoose.Schema.Types.ObjectId },
        titulo: { type: String, require: true },
        editora: { type: String },
        preco: { type: Number },
        paginas: { type: Number },
        autor: autorSchema                                //padrão para juntar 2 schemas
    }, 
    {versionKey: false});                                 //nao queremos versionar o schema


const livro = mongoose.model("livros", livroSchema)       //livros aqui é a colecao e o schema, as propriedades desse livro


export default livro;