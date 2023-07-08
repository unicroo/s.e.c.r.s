const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContenidoSchema = new Schema({
        t_cont : String,
        tema : String,
        id_users: ObjectId,
});

var Contenido = mongoose.model("Contenido", ContenidoSchema);
module.exports = Contenido;