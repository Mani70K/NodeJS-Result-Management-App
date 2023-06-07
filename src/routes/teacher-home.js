const express=require("express")
const studentRouter=require("../../routes/studentRouter")
const studentController=require("../../controller/studentController")

const teacherHomeRouter=express.Router()


teacherHomeRouter.get("",async(req,res)=>{
    res.render("teacher-home")
})
teacherHomeRouter.post("",(req,res)=>{
    // const Roll=req.body.Roll
    // const Name=req.body.Name
    // const DOB=req.body.DOB
    // const Score=req.body.Score
    //Validation Here

    //Added To DB
    res.redirect("/teacherHome")
})
module.exports=teacherHomeRouter;