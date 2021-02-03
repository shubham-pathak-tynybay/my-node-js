var http = require("http");
var fs = require("fs");
var url = require("url");

//creating server

http.createServer(function (req, res) {
    // parse the request conatining file name
    var pathname = url.parse(req.url).pathname;

    //print  the name of the file for which request is made.
    console.log("request for " + pathname + " received");

    //read the requested file from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err)
            //HTTP status 404
            //content type:text/plain
            res.writeHead(404, { "content-type": "text/html" });
        } else {
            // page found
            res.writeHead(200, { "content-type": "text/html" });
            //write the content of the file to response body
            res.write(data.toString());
        }

        //send the response body
        res.end()

    });
}).listen(8081);

console.log("server running at http://127.0.0.1:8081");