const express=require("express")
const studentResultRouter=express.Router()
studentResultRouter.get("",async(req,res)=>{
    res.render("student-result")
})
studentResultRouter.post("",async(req,res)=>{
    const Roll=req.body.Roll;
    const Name=req.body.Name;
    //Check Fields Are Not Empty Here

    //Fetch Required Data 
    //If Match Redirected To Student Result Page
    //Else No Match Found And Stand Out Same Page
    res.redirect("/studentResult")

})
module.exports=studentResultRouter;