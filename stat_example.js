var fs=require("fs");

console.log("Going to get file info");

fs.stat("input.txt",function(err,states){
    if(err){
        return console.log(err);
    }
    console.log(states);
    console.log("Got file info successfuly!");
    //check filetype

    console.log("is file? "+states.isFile())
    console.log("is Directory? "+states.isDirectory());
});