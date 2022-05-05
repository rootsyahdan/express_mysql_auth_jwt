const express = require('express');
const app = express();
const port = '3002';
const bodyParser = require('body-parser');
const userRoute = require('./routes/users');

//parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//route
app.use('/user', userRoute);

app.listen(port, ()=>{
    console.log(`Running on localhost: ${port}`);
})