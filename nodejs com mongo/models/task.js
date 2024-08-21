// Importa a biblioteca Mongoose, que fornece uma solução para modelar dados e interagir com o banco de dados MongoDB.
const mongoose = require('mongoose');

// Declara o esquema de Mongoose. Um esquema define a estrutura dos documentos que serão armazenados em uma coleção MongoDB.
// `Schema` é um construtor fornecido pelo Mongoose para criar novos esquemas.
const Schema = mongoose.Schema;


//Modelo do Schema
const ModelSchema = new Schema({
//delarando os tipos 
name: {type: String, required: true},
status: {type: Boolean, default: false}
});

//exportando modelo
// mongoose.model('Task', ModelSchema)  seguira as regras do modelo declarado acima 
//'Task' sera o nome do modelo que vai criar no banco de dados
//
module.exports = mongoose.model('Task', ModelSchema);

