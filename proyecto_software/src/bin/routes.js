
const express = require("express");
const app = express();
const { MainController } = require("./MainController")
const bodyParser = require("body-parser");

// Configuraciones y rutas de tu aplicación

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
 });

app.get("/users", function (req, res) {
  MainController.getUsers(res);
   });


app.post("/users", function (req, res) {
  let { users } = req.body;
  console.log(req.body);
  MainController.setUsers(users, res);
});

  //Eliminar un Usuario por su id
  app.delete("/users/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteUsers(id, res);
  });

  //Contenido 

app.get("/contenido", function (req, res) {
  MainController.getContenido(res);
   });

app.post("/contenido", function (req, res) {
  let { contenido } = req.body;
  console.log(req.body);
  MainController.setContenido(contenido, res);
});
app.put("/contenido/:id", function (req, res) {
  let { id } = req.body;
  console.log(req.body);
  MainController.setContenido(id, res);
});
app.delete("/contenido/:id", function (req, res) {
  let { id } = req.params;
  req.params.id;
  MainController.deleteContenido(id, res);
});
app.delete("/contenido", function (req, res) {
  let { contenido } = req.params;
  req.params.id;
  MainController.deleteContenido(contenido, res);
});
  //Actividades

app.get("/actividades", function (req, res) {
  MainController.getActividades(res);
   });

app.post("/actividades", function (req, res) {
  let { actividades } = req.body;
  console.log(req.body);
  MainController.setActividades(actividades, res);
});
app.put("/actividades/:id", function (req, res) {
  let { id } = req.body;
  console.log(req.body);
  MainController.setActividades(id, res);
});
app.delete("/actividades/:id", function (req, res) {
  let { id } = req.params;
  req.params.id;
  MainController.deleteContenido(id, res);
});
app.delete("/actividades", function (req, res) {
  let { actividades} = req.params;
  req.params.id;
  MainController.deleteActividades(actividades, res);
});
 //t_tusuario

app.get("/t_tusuario", function (req, res) {
  MainController.getT_tusuario(res);
   });

app.post("/T_tusuario", function (req, res) {
  let { t_tusuario} = req.body;
  console.log(req.body);
  MainController.setT_tusuario(t_tusuario, res);
});
app.put("/t_tusuario/:pos", (req, res) =>{
  pos=parseInt(req.params.pos);
  t_tusuario[pos].age=req.body.age;
  console.log(t_tusuario);
  res.send('Usuario actualizado correctamente');
});
app.delete("/t_tusuario/:id", function (req, res) {
  let { id } = req.params;
  req.params.id;
  MainController.deleteT_tusuario(id, res);
});
app.delete("/t_tusuario", function (req, res) {
  let { t_tusuario} = req.params;
  req.params.id;
  MainController.deleteT_tusuario(t_tusuario, res);
});


 //tr_tema eva

app.get("/tema_eval", function (req, res) {
  MainController.getTema_eval(res);
   });

app.post("/tema_eval", function (req, res) {
  let { tema_eval} = req.body;
  console.log(req.body);
  MainController.setTema_eval(tema_eval, res);
});
app.put("/tema_eval/:id", function (req, res) {
  let { id} = req.body;
  console.log(req.body);
  MainController.setTema_eval(id, res);
});
app.delete("/tema_eval/:id", function (req, res) {
  let { id } = req.params;
  req.params.id;
  MainController.deleteTema_eval(id, res);
});
app.delete("/tema_eval", function (req, res) {
  let { tema_eval} = req.params;
  req.params.id;
  MainController.deleteTema_eval(tema_eval, res);
});
//evaluacion
app.get("/evaluacion", function (req, res) {
  MainController.getEvaluacion(res);
   });

app.post("/evaluacion", function (req, res) {
  let { evaluacion } = req.body;
  console.log(req.body);
  MainController.setEvaluacion(evaluacion, res);
});
app.put("/evaluacion/:id", function (req, res) {
  let { id } = req.body;
  console.log(req.body);
  MainController.setEvaluacion(id, res);
});
app.delete("/evaluacion/:id", function (req, res) {
  let { id } = req.params;
  req.params.id;
  MainController.deleteEvaluacion(id, res);
});
app.delete("/evaluacion", function (req, res) {
  let { evaluacion} = req.params;
  req.params.id;
  MainController.deleteEvaluacion(evaluacion, res);
});
    
exports.app = app;
