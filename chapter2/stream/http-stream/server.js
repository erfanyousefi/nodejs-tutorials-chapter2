const { createReadStream, statSync } = require("fs");

const http = require("http");
const fileName = "./dance.mp4";

http.createServer(async (req, res) => {
    const readStream = createReadStream(fileName);
    const {size} = statSync(fileName);
    const range = req.headers.range;
    if(range) {
        let [start, end ] = range.replace(/bytes=/, '').split("-");
        start = parseInt(start, 10);
        end = end? parseInt(end, 10) : size - 1;
        res.writeHead(206, {
            'Content-Range' : `bytes ${start}-${end}/${size}`,
            'Accept-Range' : 'bytes',
            'Content-Length' : (start-end)+1,
            'Content-Type' : 'video/mp4',
        }) 
        createReadStream(fileName, {start, end}).pipe(res)
    }else{
        res.writeHead(200, {
            'Content-Length' : size,
            'Content-Type' : 'video/mp4'
        })
        readStream.pipe(res)
    }
}).listen(3000);
console.log("listen to port 3000 : http://localhost:3000");