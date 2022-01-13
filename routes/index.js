const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();

//importar el controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = function () {
  //ruta para el home
  router.get('/', proyectosController.proyectosHome);
  router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
  return router;
};
