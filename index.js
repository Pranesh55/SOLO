const express=require('express');
const mysql=require('mysql2');

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'solo2',
});


db.connect((err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("MySql connected");
    }
});
const app=express();
app.get('/createdb',(req,res)=>{
    let sql='CREATE DATABASE solo2';
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send("Database Created");
            console.log("Database created");
        }
    })
})
app.get('/createTableUsers',(req,res)=>{
    let sql='CREATE TABLE Users(id int AUTO_INCREMENT,name VARCHAR(200),password VARCHAR(200),PRIMARY KEY(id))';
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send("Table Created");
            console.log("Table created");
        }
    })

})
app.get('/users',(req,res)=>{
    res.send("Hello World");
})
app.listen(8080,()=>{
    console.log("Listening On Port 3000");
})