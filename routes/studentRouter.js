const studentController=require("../controller/studentController")
const { student } = require("../model")

const router = require('express').Router()

router.post('/addStudent',(req,res)=>{
    studentController.addStudent(req,res)
    res.redirect("/teacherHome")
})

router.get('/allStudent',(req,res)=>{
    studentController.getAllStudents(req,res)
})

router.get('/:roll', studentController.getOneStudent)

router.put('/:id', studentController.updateStudent)

router.delete('/:id', studentController.deleteStudent)
module.exports = router
