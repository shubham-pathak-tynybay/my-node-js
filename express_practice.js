const express=require("express");

const app=express();

app.get("/",function(req,res){
    res.send("Hello world");
})

app.get("/alien",function(req,res){
    const id=req.query.id;
    res.send("welcome back aliens "+id);

})

app.get("/alien/:id",function(req,res){
    const id=req.params.id;
    res.send("Hi alieent no. "+ id)

})

app.listen(9000,function(req,res){

        console.log("running..");

});