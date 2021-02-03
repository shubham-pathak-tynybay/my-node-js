function printHello(){
    console.log("Hello mr. Pathak");
}

//Now calling above function after 2 seconds

var t=setTimeout(printHello,2000);

//Now clear timeout
//clearTimeout(t);

var os=require("os")

os.tmpdir();