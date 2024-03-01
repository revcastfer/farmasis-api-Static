const path=require("path")
const fs=require("fs")


const deleteVideo=async(req,res)=>{	
	try{
		const {name}=req.params;
		console.log(name);
		const ubicationVideo=path.join(__dirname,`../videos/${name}`);
		await fs.unlink( ubicationVideo,( err =>{
			if (err) res.status(500).json(err ) 
				else {res.status(200).json(`video ${name} ha sido eliminado`)}
			} ) );
	}
	catch(err){res.status(500).json(err)}
}


const deleteImagen=async(req,res)=>{	
	try{
		const {name}=req.params;
		const ubicationVideo=path.join(__dirname,`../imagenes/${name}`);
		await fs.unlink( ubicationVideo,( err =>{
			if (err) res.status(500).json(err)
				else {res.status(200).json(`imagen ${name} ha sido eliminado`)}
		} ) );
	}
	catch(err){res.status(500).json(err)}
}

module.exports={deleteVideo,deleteImagen}