import mongoose from "mongoose";

async function conectaNaDatabase() {

//mongoose.connect("mongodb+srv://admin:XXXXXXXX@cluster0.m0vgwwh.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0") 
mongoose.connect(process.env.DB_CONNECTION_STRING);  //copiado para .env

return mongoose.connection

};

export default conectaNaDatabase
