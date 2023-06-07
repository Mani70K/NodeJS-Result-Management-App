// const mongoose=require("mongoose")
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
// module.exports=mongoose.model("Student",StudentSchema)

module.exports=(sequelize,DataTypes)=>{

    const Student=sequelize.define("student",{
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roll: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dob: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Student
}