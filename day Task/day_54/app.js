const exp=require("express");
const app=exp();
const port=4000;
app.get('/' ,(req,res)=>{
res.send('Homepage')
});
app.get('/homepage',(req,res)=>
{
    res.send('/hellworld.html')
});

app.listen(port,(error)=>
{
    if(error) throw error
    console.log("the port"+port);

});