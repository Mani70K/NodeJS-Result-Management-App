const express=require("express")
const newsRouter=express.Router()
newsRouter.get("",async(req,res)=>{
    res.render("type") //it means that it sends to the type page or home page
})
module.exports=newsRouter;