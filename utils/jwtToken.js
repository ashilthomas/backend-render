const jwt = require("jsonwebtoken")

exports.getToken = (req,res)=>{
 
    const option = {
        id: req.user._id,
        time:Date.now()
    }

       const token = jwt.sign(option,process.env.JWT_SECRET_KEY,{expiresIn:"5min"})
        if(!token){
          return   res.status(500).json({
                success:false,
                message:"Token generation failed",
                isAuthenticated:true

               })
        
        } 
                res.status(200).cookie("token",token).json({
                success:true,
                user:req.user,
                token,
                message:"logged in succesfully",
                isAuthenticated:true
       })

}