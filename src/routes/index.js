
const express = require('express');
const {Router} = express
const server =require( '../app.js' );


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const VideosRouter=require("./videosrouter.js")


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("",VideosRouter);


module.exports = router;
