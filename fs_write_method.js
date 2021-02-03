var fs=require("fs")

console.log("Goining to write into existing file");

fs.writeFile("input.txt","simply easy learning",function(err){
    if(err){
        return console.log(err)
    }

console.log("data written sucessfuly in file");
console.log("Going to read data from newly created file");

fs.readFile("input.txt",function(err,data){
    if(err){
        return console.log(err);
    }
    console.log("Asynchronous read:- "+data.toString());

});
});