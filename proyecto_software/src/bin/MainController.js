const { database } = require("./controller/database");
const Users = require("./models/Users");
const Contenido = require("./models/Contenido");
const Actividades = require("./models/Actividades");
const Evaluacion = require("./models/Evaluacion");
const Tema_eval = require("./models/Tema_eval");
const T_tusuario = require("./models/T_tusuario");

class MainController {
    constructor() {
        database.connect();
    }

    //Traer todos los usuarios
    getUsers(res) {
        Users.find({}, (err, users) => {
            res.send({ status: 200, users: users });
        });
    }
    //Agregar un usuario
    setUsers(users, res) {
        Users.create(users, function (err, newUsers) {
            if (err) throw err;
            res.send("Usuario creado con exito");
        });
    }
   //eliminar por id
     deleteUsers(id, res) {
    Users.deleteOne({ _id: id }, function (err) {
        if (err) throw err;
        res.send({ message: "Usuario ha sido Borrado" });
    });
}
    //traer todos los contenidos 
    getContenido(res) {
        Contenido.find({}, (err, Contenido) => {
            res.send({ status: 200, contenido: Contenido });
        });
    }
    //Agregar un usuario
    setContenido(contenido, res) {
        Contenido.create(contenido, function (err, newContenido) {
            if (err) throw err;
            res.send("Contenido creado con exito");
        });
    }
    deleteContenido(contenido, res) {
        Contenido.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "T usuario ha sido Borrado" });
        });
    }
    //traer todos los actividades 
    getActividades(res) {
        Actividades.find({}, (err, Actividades) => {
            res.send({ status: 200, actividades: Actividades });
        });
    }
    //Agregar un actividades
    setActividades(actividades, res) {
        Actividades.create(actividades, function (err, newActividades) {
            if (err) throw err;
            res.send("Actividad creado con exito");
        });
    }
     //traer todos las evaluaciones
     getEvaluacion(res) {
        Evaluacion.find({}, (err, Evaluacion) => {
            res.send({ status: 200, evaluacion: Evaluacion });
        });
       
    }
     //eliminar por id
     deleteEvaluacion(id, res) {
        Evaluacion.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Evaluacion ha sido Borrado" });
        });
    }
    //Agregar un evaluacion
    setEvaluacion(evaluacion, res) {
        Evaluacion.create(evaluacion, function (err, newEvaluacion) {
            if (err) throw err;
            res.send("evaluacion creado con exito");
        });
    }
    
     //traer todos los t_tusuarios
     getT_tusuario(res) {
        T_tusuario.find({}, (err, T_tusuario) => {
            res.send({ status: 200, t_tusuario: T_tusuario });
        });
    }
    //Agregar un t_tusuarios
    setT_tusuario(t_tusuario, res) {
        T_tusuario.create(t_tusuario, function (err, newT_tusuario) {
            if (err) throw err;
            res.send("Usuario creado con exito");
        });
    }
    setT_tusuario(t_tusuario, res) {
        T_tusuario.findByIdAndUpdate(t_tusuario.id, t_tusuario, function (err, updatedT_tusuario) {
            if (err) throw err;
            res.send("Usuario actualizado con éxito");
        });
    }
    deleteT_tusuario(id, res) {
        T_tusuario.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "T usuario ha sido Borrado" });
        });
    }
    //traer todos los tema_eval
    getTema_eval(res) {
        Tema_eval.find({}, (err, Tema_eval) => {
            res.send({ status: 200, tema_eval: Tema_eval });
        });
    }
    //Agregar un tema_eval
    setTema_eval(tema_eval, res) {
        Tema_eval.create(tema_eval, function (err, newTema_eval) {
            if (err) throw err;
            res.send("tema creado con exito");
        });
    }
    deleteTema_eval(id, res) {
        Tema_eval.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Tema ha sido Borrado" });
        });
    }

}

exports.MainController = new MainController();