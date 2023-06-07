const express=require("express")
const teacherAddRouter=express.Router()
teacherAddRouter.get("",async(req,res)=>{
    res.render("teacher-result")
})
module.exports=teacherAddRouter;