var fs=require("fs");
var buf=new Buffer(10);

console.log("Going to open an existing file");

fs.open("input.txt","r+",function(err,fd){
    if(err){
        return console.log(err);
    }


console.log("file opened successfuly");
console.log("Going to read the file");

fs.read(fd,buf,0,buf.length,0,function(err,bytes){
    if(err){
        return console.log(err);
    }

    //print only read bytes to avoid junks
    if(bytes>0){
        console.log(buf.slice(0,bytes).toString())
    }

    //close the opened file
    fs.close(fd,function(err){
        if(err){
            console.log(err);
        }
        console.log("file closed successfuly");
    });
});
});

