const express=require("express")
const studentHomeRouter=express.Router()
studentHomeRouter.get("",async(req,res)=>{
    res.render("student-home")
})
module.exports=studentHomeRouter;