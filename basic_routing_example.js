var express=require("express");
var app=express();

// This respond with hello world on home page

app.get("/",function(req,res){
    console.log("got a get request for homepage");
    res.send("Hello Get");
})

// This responds a Post request for homepage

app.post("/",function(req,res){
    console.log("Got a Post request for homepage");
    res.send("Hello POST");
})
//This responds a delete request for  the /del_user
app.delete("/del_user",function(req,res){
    console.log("Got a delete request for /del_user");
    res.send("Hello Delete");
})

//This responds a get request for  the /list_user page
app.get("/list_user",function(re,res){
    console.log("Got a GET request for /list_user");
    res.send("Page listing");
})

//This responds a get request for abcd,abxcd,ab123cd, and so on
app.get("/ab*cd",function(req,res){
    console.log("Got a get request for /ab*cd");
    res.send("Page Pattern match");

})

var server=app.listen(8081,function(){
    var host=server.address().address
    var port=server.address().port

    console.log("Example app listing at :- "+host, port)
})
//we are adding public directory here for loading static contents
app.use(express.static("public"));