
const mongoose = require('mongoose');

//declarando esquema de mongoose
const Schema = mongoose.Schema;

//Modelo do Schema
const ModelSchema = new Schema({
//delarando o tipo 
name: {type: String, required: true},
status: {type: Boolean, default: false}
});

//exportando modelo
// mongoose.model('Task', ModelSchema)  seguira as regras do modelo declarado acima 
//'Task' sera o nome do modelo que vai criar no banco de dados
//
module.exports = mongoose.model('Task', ModelSchema);

