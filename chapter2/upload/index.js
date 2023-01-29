const { createWriteStream } = require("fs");
const http = require("http");
const multiparty = require("multiparty");
const { extname } = require("path");
const PORT = 3000;
const server = http.createServer((req, res) => {
    const {url, method} = req;
    if(url == "/" && method == "POST") {
        let form = new multiparty.Form();
        form.parse(req)
        form.on('part', (part) => {
            const ext = extname(part.filename);
            part.pipe(createWriteStream(`./stream/${Date.now() + ext}`))
            .on('close', () => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(`
                    <h1>File Uploaded: ${part.filename} </h1>
                `);
            })
        })
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <form enctype="multipart/form-data" method="POST" action="/">
                <input type="file" name="upload-file">
                <button>Upload File</button>
            </form>
        `);
    }
})
server.listen(PORT);
console.log(`run server on port ${PORT} http://localhost:${PORT}`);