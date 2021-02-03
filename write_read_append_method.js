var fs=require("fs")

fs.readFile("cal.js","utf8",function(err,data){
    console.log(data);

})

fs.writeFile("cal1.js","console.log('done')",function(err){

    console.log("data saved");
})

fs.appendFile("cal1.js","console.log('data appended')",function(err){

    console.log("adding data in the end");
})

fs.unlink("cal1.js",function(er){
    console.log("file deleted");
})