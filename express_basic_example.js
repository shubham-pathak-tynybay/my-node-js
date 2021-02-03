var express=require("express");
var app=express();

app.get("/",function(req,res){

    console.log("Request Object:- "+req);
    console.log("Response Object:- "+res);
    res.send("hello world");
});

var server=app.listen(8081,function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log("Exmple app is listing at :- "+host, port)
})