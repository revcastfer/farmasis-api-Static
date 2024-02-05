const express =require ("express");
const {Router} =express;
const multer  = require('multer');
const postVideo= require("../handlers/postHandler.js")
const getVideo=require("../handlers/getHandler.js")


const storage=multer.diskStorage({
	destination:"./src/videos",
	filename: (req,file,cb)=>{ cb(null,file.originalname) }
});

const upload = multer({ storage:storage,dest:'./src/videos' })


VideosRouter=Router();

VideosRouter.get("/:name",getVideo)
VideosRouter.post("/",upload.single('video'),postVideo);



module.exports=VideosRouter
