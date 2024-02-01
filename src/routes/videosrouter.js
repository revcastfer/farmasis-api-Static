const express =require ("express");
const {Router} =express;


VideosRouter=Router();

VideosRouter.get("/",(req,res)=>{res.status(200).send("ok")})



module.exports=VideosRouter
