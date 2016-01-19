/**
 * Created by kesarwat on 13/01/16.
 */

var connect = require("connect");
var http = require("http");

var app = connect();

function doFirst(request, response, next){
    console.log(" Do First");
    next();
}

function doSecond(request, response, next){
    console.log(" Do Second");
    next();
}

function doHome(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Welcome to home page.");
    response.end();
    console.log("Do Home");
}

function doAccount(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Welcome to account page.");
    response.end();
    console.log("Do Account");
}

app.use(doFirst);
app.use(doSecond);
//routing
app.use("/index",doHome);
app.use("/account",doAccount);

http.createServer(app).listen(8090);

// Console will print the message
console.log('Server running at http://127.0.0.1:8090/');