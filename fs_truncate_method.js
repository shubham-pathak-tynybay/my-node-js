var fs=require("fs");
var buf=new Buffer(1024);

console.log("going to open an existing file");

fs.open("input.txt","r+",function(err,fd){
    if(err){
        return console.log(err);
    }

 console.log("file opened successfully");
 console.log("going to truncate the file");

 //truncate the opened file
 fs.ftruncate(fd,5,function(err){
    if(err){
        console.log(err);
    }



 console.log("file truncated successfuly");
 console.log("going to read the same file");
 fs.read(fd,buf,0,buf.length,0,function(err,bytes){
if(err){
    console.log(err);
}
 //print only read bytes to void junk
 if(bytes>0){
     console.log(buf.slice(0,bytes).toString());
 }

 //close the opened file

 fs.close(fd,function(err){
    if(err){
        return console.log(err);
    }

 });
});
});
});

 console.log("File closed successfuly");