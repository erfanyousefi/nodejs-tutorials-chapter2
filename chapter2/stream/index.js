const fs = require("fs");
const readStreamData = fs.createReadStream("./read.txt");
const writeStreamData = fs.createWriteStream("./write.txt");
let counter = 0;
let buff = []
readStreamData.on('ready', () => {
    console.log("Data ready to read stream");
})
readStreamData.on('data', (chunk) => {
    counter++;
    console.log("#"+counter+"th Chunk of the data received : ");
    writeStreamData.write(chunk)
})
readStreamData.on("error", (err) => {
    console.log("Get Error When read data : ");
    console.log(err);
})
readStreamData.on("end", () => {
    console.log("action of read stream ended");
    console.log(buff.toString());
})