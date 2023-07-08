const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const T_tusuarioSchema = new Schema({
       nom: String,
       cargo: String,
       id_user: ObjectId,
});

var T_tusuario = mongoose.model("t_tusuario", T_tusuarioSchema);
module.exports = T_tusuario;