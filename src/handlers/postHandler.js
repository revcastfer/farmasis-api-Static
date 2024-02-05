const path=require("path")

const postVideo=(req,res)=>{
	let nombre=req.file.filename

	res.status(200).send(path.join( __dirname,`../videos/${nombre}`) )
}


module.exports= postVideo