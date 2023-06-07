const dbConfig=require("../configuration/dbConfiguration")
const {Sequelize,DataTypes}=require("sequelize")

const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle,
        }
    }
)
sequelize.authenticate()
.then(()=>{
    console.log("Connected...")
})
.catch((err)=>{
    console.log("Error->"+err)
})

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.student = require('./students')(sequelize, DataTypes)
// db.teacher = require('./teacherModel.js')(sequelize, DataTypes)

db.sequelize.sync({force: false}) //true mean you will lose alldata in running (Create new fresh data)
.then(()=>{
    console.log('yes re-sync done!')
})

module.exports = db