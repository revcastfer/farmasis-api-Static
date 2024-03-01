const express =require ("express");
const {Router} =express;
const multer  = require('multer');
const {postImagen}= require("../handlers/postHandler.js")
const {getImagen}=require("../handlers/getHandler.js")
const {deleteImagen}=require("../handlers/deleteHandler.js")


const storage=multer.diskStorage({
	destination:"./src/imagenes",
	filename: (req,file,cb)=>{ cb(null,file.originalname) }
});

const upload = multer({ storage:storage,dest:'./src/imagenes' });


ImagenesRouter=Router();

VideosRouter.get("/:name",getImagen);
VideosRouter.post("/",upload.single('video'),postImagen);
VideosRouter.delete("/:name",deleteImagen);



module.exports=ImagenesRouter
