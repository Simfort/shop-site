import mysql from 'mysql2'

const conn=mysql.createConnection({
    user:'root',
    password:'',
    host:'localhost',
    connectionLimit:5
})

try{
    const res=await conn.query('CREATE DATABASE IF NOT EXISTS shopBase')
    console.log('database is created')
}catch(e){
    console.log(e)
}