const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
const studentController=require("./controller/studentController")


var corOptions={
    origin:"https://localhost:5001",
}

//MiddleWare
app.use(cors(corOptions))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
const port=process.env.port || 5000;
mongoose.set("strictQuery", false);

try{
//mongoose.connect("mongodb+srv://mani7079:Mani'%+64'7079@cluster0.kv1qlvr.mongodb.net/ResultAppDB",{useNewUrlParser: true})
// const StudentSchema=new mongoose.Schema({
//     RollNo:{
//         type:Number,
//         required:true
//     },
//     Name:{
//         type:String,
//         required:true
//     },
//     DOB:{
//         type:String,
//         required:true
//     },
//     Score:{
//         type:Number,
//         required:true
//     }

// })
// const student =mongoose.model("Student",StudentSchema);
// const student1=new student({
//     RollNo:23,
//     Name:"Manish",
//     DOB:"06102014",
//     Score:55
// })
// const student2=new student({
//     RollNo:43
// })
// const student3=new student({
//     RollNo:22
// })
// const student4=new student({
//     RollNo:47
// })
// const studentArr=[student1,student2,student3,student4]

//Static Files
app.use(express.static("public"));
app.use('/css',express.static(__dirname+"public/css"));
app.use('/img',express.static(__dirname+"public/image"));
app.use('/js',express.static(__dirname+"public/js"));


//Views
app.set("views","./src/views")
app.set("view engine","ejs")

const typeRouter=require("./src/routes/type")// Home Page
const studentHomeRouter=require("./src/routes/student-home")
const studentResultRouter=require("./src/routes/student-result")
const teacherHomeRouter=require("./src/routes/teacher-home")
const teacherAddRouter=require("./src/routes/teacher-addPage")
const studentControllerRouter = require('./routes/studentRouter')

app.use("/",typeRouter) //Home Page
app.use("/studentHome",studentHomeRouter)
app.use("/studentResult",studentResultRouter)
app.use("/teacherHome",teacherHomeRouter)
app.use("/teacherAdd",teacherAddRouter)
app.use('/api/students', studentControllerRouter)

app.listen(port,()=>{
    console.log(`Port is Listening On ${port}`)
})
}
catch(error){
    console.log("Error Occured")
}
// const db=mongoose.connection
// db.on("error",(error)=>{console.log(error)})
// db.once("open",()=>{console.log("Connected To DB")})


