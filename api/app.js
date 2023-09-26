// npm i mysql:mysql module
// npm i dotenv: env
//npm i express
//npm i multer
//npm i nodemon
// npm i cors
const express = require("express");
const cors = require("cors");
const multer = require("multer");

const mysql = require("mysql");
require("dotenv").config();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { SQL_HOST, SQL_USER, SQL_PASSWORD, SQL_DATABASE } = process.env;
let connection = mysql.createPool({
    host: SQL_HOST,
    user:SQL_USER,
    password:SQL_PASSWORD,
    database:SQL_DATABASE
})
const port = 7000
const app = express()
app.use(cors())
app.listen(port,()=>{
    console.log(`Run http://localhost:${port}`)
})

app.get('/db',function (req,res,next){
    const {query,test} = req.query
    console.log(req.query)
    // console.log(req.body)
    // console.log(test)
    if(query)
        connection.query(query,function(error,result){
            if(error)
            {
                console.log(error)
                res.status(400).send(error)
            }
            else{
                res.status(200).send(JSON.parse(JSON.stringify(result)))
            }
        })
})

app.post("/db", upload.array("files"), async (req, res, next) => {
    const {query} = req.body

    connection.query(query,function(error,result){
      if(error)
      {
        console.log(error)
        res.status(400).end('error')
      }
      else
        res.status(200).send('successful')
    })
  });

connection.query(`select * from goal`,function(error,result){
    if(error)
    console.log(error)
else
{
    let strResult = JSON.stringify(result)
    let realResult= JSON.parse(strResult)
}
    
})