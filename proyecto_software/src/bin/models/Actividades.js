const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
        t_cont : String,
        tema : String,
        id_users: ObjectId,
});

var Actividades = mongoose.model("Actividades", ActividadesSchema);
module.exports = Actividades;