const http = require("http");
http.createServer(function(request, response) {
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.writeHead(200, {'Content-Type': 'application/json'});
    response.writeHead(200, {'Content-Type': 'text/xml'});
    // response.end("<h1>Hello NodeJS</h1>")
    // response.write(JSON.stringify({name: "NodeJS", course: "NodeJs And ExpressJS"}))
    response.write("<XML><Key>iam a key</Key></XML>")
    response.end()
}).listen(3000, () => {
    console.log("server run on port 3000 : http://localhost:3000");
})