const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluacionSchema = new Schema({
        nota: Number,
        time: String,
        id_contenido: ObjectId,
        id_actividades: ObjectId,
});

var Evaluacion = mongoose.model("evaluacion", EvaluacionSchema);
module.exports = Evaluacion;