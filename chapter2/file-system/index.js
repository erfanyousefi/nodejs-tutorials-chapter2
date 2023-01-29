const fs = require("fs");
//Blocking code - nonBlocking code 

//non-blocking
// console.log("first Log");
// fs.readFile("package.json", function(err, data) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(data.toString());
//     }
// })

// console.log("SecondLog");
//blocking
console.log("First Log");
const data = fs.readFileSync('package.json', 'utf-8');
console.log(data);
console.log("Second Log");
