const express = require('express');
const app = express();
const port = '3002';

app.get('/', (req,res)=>{
    res.send({
        msg : "jancok World"
    })
})

app.listen(port, ()=>{
    console.log(`Running on localhost: ${port}`);
})