const express=require('express');
const mogo=require('mongodb').mogo;
const port=4000;
const app=express();
const mogourl='mongodb://localhost:27017';
mogo.Con(mogourl,(error,client)=>
{
    if(error) throw error;
    app.listen(port,()=>
    {
        console.log('the listen port ${port}');
    });


});