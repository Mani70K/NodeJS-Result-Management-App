const db=require("../model")

const Students=db.student

// Add Student

const addStudent=async(req,res)=>{
    let info={
        name: req.body.Name,
        roll:req.body.Roll,
        dob:req.body.DOB,
        score:req.body.Score
    }
    console.log(info.name)
    console.log(info.roll)
    console.log(info.dob)
    const student = await db.student.create(info)
    res.status(200).send(student)
}

//2. get all student data

const getAllStudents = async(req, res) => {
    let students = await db.student.findAll()
   res.status(200).send(students)
}

// 3. get single student data

const getOneStudent = async (req, res) => {
    let roll = req.params.roll
    let name=req.params.name
    let student = await db.student.findOne({ where: {roll: roll,name:name}})
    res.status(200).send(student)
}

//4. update student

const updateStudent = async (req, res) => {
    let id  = req.params.id
    const student = await db.student.update(req.body, { where: {id: id}})
    res.status(200).send(student)
}

//5. delete student

const deleteStudent = async (req, res) => {
    let id  = req.params.id
    await db.student.destroy({ where: {id: id}})
    res.status(200).send('student deleted successfully !')
}

module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent
}