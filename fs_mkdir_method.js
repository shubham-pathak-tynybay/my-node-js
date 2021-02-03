var fs=require("fs")

console.log("going to create a directory at :- S:\Larnings\Node js\code");

fs.mkdir("S:\Larnings\Node js\code",function(err){
    if(err){
        return console.log(err)
    }
})