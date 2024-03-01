const path= require("path")



const getVideo=(req,res)=>{	
	try {
		const {name}=req.params;
		const direcction=path.join(__dirname,`../videos/${name}`);
		res.sendFile(direcction)
		}catch(err){res.status(500).json(err)}
	}


const getImagen=(req,res)=>{	
	try {
		const {name}=req.params;
		const direcction=path.join(__dirname,`../imagenes/${name}`);
		res.sendFile(direcction)
		}catch(err){res.status(500).json(err)}
	}

module.exports={getVideo,getImagen}