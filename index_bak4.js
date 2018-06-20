const express = require('express');
const morgan = require('morgan');
const app = express();


function logger(req, res, next){
    console.log('I am logger!');
    next();
}

function logger2(req, res, next){
    console.log('I am logger2!');
    next();
}

app.use(commonmw);
app.use(errormw);
// app.use(morgan('dev'));


function commonmw(req,res,next){
    console.log('commonmw');
    next(new Error('error ouccered'));
}

function errormw(err, req, res, next){
    console.log(err.message);
    next();
}



app.listen(3000, function(){
  console.log(`Server is running `);
})