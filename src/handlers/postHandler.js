const path=require("path");
const axios=require("axios");
require('dotenv').config();
const {DB_API1} = process.env;

const postVideo=async(req,res)=>{
	try{
		const {nombre,descripcion,categoria}=req.body;		
		const bearerHeader = req.headers.authorization;


		let nombreVideo=req.file.originalname;
		console.log(typeof categoria);

		const rutaVideo=`/videos/${nombreVideo}`;
		let rpta= await axios.post(`${DB_API1}/farmasistutorials`,
								    {nombre:nombre,descripcion:descripcion,categoria:categoria,urlVideo:rutaVideo},
									{headers: { Authorization:`${bearerHeader}` } }) ;

		res.status(200).send(rpta.data);

	}catch(err){res.status(500).json(err.message)}
	
}


const postImagen=async(req,res)=>{
	try{
		const {nombre,descripcion,categoria}=req.body;		
		const bearerHeader = req.headers.authorization;

		let nombreImagen=req.file.originalname;

		const rutaImage=`/imagenes/${nombreImagen}`;

		res.status(200).send(rutaImagen);

	}catch(err){res.status(500).json(err.message)}
	
}


module.exports= {postVideo,postImagen}