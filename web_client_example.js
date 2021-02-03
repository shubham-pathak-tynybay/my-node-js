var http=require("http");
//options to be used for request
var options={
    host:"localhost",
    port:"8081",
    path:"/intdex.htm"
};

//callback fuction is used to deal with response
    var callback=function(response){
        //continousely update stream with data

        var body="";
        response.on("data",function(data){
            body+=data;
        });

        response.on("end",function(){
            //data received completely
            console.log("=============="+body);
        });
}
// make a request to the servber

var req=http.request(options,callback);
req.end();