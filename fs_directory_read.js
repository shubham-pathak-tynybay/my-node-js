var fs=require("fs");

fs.readdir("S:\Larnings\Node js\code",function(err,files){
    if(err){
        return console.log(err)
    }
        files.forEach(function(file){
            console.log(file);
        });

});

console.log("================"+__filename)

console.log("================"+__dirname)