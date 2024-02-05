const path= require("path")


const getVideo=(req,res)=>{

	const {name}=req.params;
	const direcction=(path.join(__dirname,`../videos/${name}`));
		console.log(direcction);

	try {
			res.sendFile(direcction )
			}catch(err){throw new Error( err.message)}
}

module.exports=getVideo