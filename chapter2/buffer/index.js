
//TCP => RabbitMQ, WebSocket, Kafka, gRPC, FileSystem
// let buff = Buffer.from("NodeJS");
let buff = Buffer.alloc(256);
buff.write("Nodejs")
buff[1] = 111
console.log(buff);
console.log(buff[0]);
console.log('N'.codePointAt(0));
console.log('N'.charCodeAt(0));
console.log('N'.codePointAt(0).toString(16));
console.log(buff.toString());

const buffer = Buffer.from("Erfan");
console.log(buffer.toJSON());
console.log(typeof buffer);
const buff2 = Buffer.from([ 69, 114, 102, 97, 110 ], 'hex');
console.log(buff2.toString('utf-8'));