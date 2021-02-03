var fs=require("fs");

console.log("Going to delete a an existing file");

fs.unlink("input.txt",function(err){
    if(err){
        return console.log(err);
    }
})

console.log("File deleted successfuly");