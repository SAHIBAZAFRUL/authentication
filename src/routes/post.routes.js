const express = require("express");
const router = express.Router();

router.post("/create",(req,res)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"unauthorized"
        })
    }

    res.send("post created successfully")
})

   module.exports=router;