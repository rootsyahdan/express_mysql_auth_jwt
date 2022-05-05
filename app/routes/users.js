const express = require('express');
const connection = require('../config/database');
const user = express.Router();
const con = require('../config/database');

user.get('/all' ,async (req,res)=>{
    try {
       let con = await connection
       let[rows,fields] = await con.execute('SELECT * FROM users_tbl');
       row = Array.from(rows);

       res.send({
        err : false,
        msg : rows.length ? "data ditemukan":"data tidak ditemukan",
        data : rows
       })
    } catch (err) {
        res.send({
            err : true,
            msg : err
        })
    }
})

user.get('/one/:username' ,async(req,res)=>{
    const {username} = req.params
    try {
        let con = await connection
        let [rows,field] = await con.execute(`SELECT * FROM users_tbl WHERE username ='${username}'`);

        res.send({
         err : false,
         msg : rows.length ? "data ditemukan":"data tidak ditemukan",
         data : rows
        })
     } catch (err) {
         res.send({
             err : true,
             msg : err
         })
     }
})
user.post('/' ,async (req,res)=>{
    try {
        const {username,nama,password,level} = req.body;
        let con = await connection
        await con.execute(`INSERT INTO users_tbl(username,nama,password,level) values ('${username}','${nama}','${password}','${level}')`);
 
        res.send({
         err : false,
         msg : "data user berhasil disimpan",
         data : rows
        })
     } catch (err) {
         res.send({
             err : true,
             msg : err
         })
     }
})

user.put('/' ,(req,res)=>{
    res.send('ini route get update')
})

user.delete('/del/:username' ,(req,res)=>{
    res.send('ini route get delete')
})

module.exports = user;
