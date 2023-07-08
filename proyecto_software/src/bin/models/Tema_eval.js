const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tema_evalSchema = new Schema({
        cod_contenido: String,
        cod_evaluacion: String,
        cod_actividades: String,
});

var Tema_eval = mongoose.model("tema_eval", Tema_evalSchema);
module.exports = Tema_eval;